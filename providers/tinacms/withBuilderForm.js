import { getAppInfo } from "@lib/app";
import { useLocal } from "@providers/local";
import AppConfig from "meraki/AppConfig";
import LoadingDots from "meraki/components/LoadingDots";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useCMS, useForm, usePlugin } from "tinacms";
import BuilderProvider from ".";

export const withBuilderForm = (
  { displayName,
    template,
    label,
    getPageInfo,
    onSubmit, }
) => (Component) => {
  function Form({ id, pageData = {}, children, ...rest }) {
    const cms = useCMS();
    const { local } = useLocal();
    const formConfig = {
      id,
      label: `Page ${label} (${local})`,
      initialValues: pageData.data || template.defaultItem,
      onSubmit: async (values) => {
        try {
          const response = await onSubmit(
            {
              data: (values),
              locale: local,
            }, pageData?.pageInfo
          );
          if (response) {
            cms.alerts.success("Changes Saved");
          } else {
            cms.alerts.error("Error saving changes");
          }
        } catch (error) {
          cms.alerts.error("Error saving changes");
        }

      },
      ...template
    };
    const [data, form] = useForm(formConfig);
    usePlugin(form);
    return <Component
      {...{
        source: {
          ...rest,
          ...pageData,
          data,
        },
        form
      }} />;
  }
  function Loader({ ...props }) {
    const router = useRouter()
    const [mouted, setMouted] = useState()
    const [update, setUpdate] = useState();
    const [data, setSetData] = useState({});
    const [isloading, setLoading] = useState();
    const { local } = useLocal();
    useEffect(() => {
      if (!mouted) {
        return setMouted(true)
      }
      let visible = true;
      const getData = async () => {
        const { app, galleries } = await getAppInfo(
          {
            locale: local
          }
        );
        let data = {};
        let pageInfo = {}
        if (getPageInfo) {
          pageInfo = await getPageInfo({
            locale: local,
            router
          });
          data = pageInfo?.data;
          if (typeof data === 'string') {
            data = JSON.parse(data);
          }
        }

        return {
          galleries, app, data, pageInfo
        };
      };
      setLoading(true);
      getData().then(data => {
        if (visible) {
          setSetData(data);
          setUpdate(Date.now());
        }
      }).catch(error => {
        console.error(error);
      }).finally(() => {
        setLoading(false);
      });
      return () => {
        visible = false;
      };
    }, [local, router]);
    return <>
      {update &&
        !isloading && <>
          <Form {...props} pageData={data} id={label + '.' + local} />
          <AppConfig data={data?.app?.data} />
        </>}
      {update && isloading && <div className="fixed inset-0 opacity-50 z-50 flex bg-element-5 bg-opacity-30 justify-center items-center">
        <LoadingDots />
      </div>}
    </>;
  }
  return function WithBuilderForm(props) {
    return <BuilderProvider>
      <Loader {...props} />
    </BuilderProvider>;
  };
};
