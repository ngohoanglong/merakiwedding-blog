import { getAppInfo } from "@lib/app";
import { useLocal } from "@providers/local";
import LoadingDots from "meraki/components/LoadingDots";
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
      label: `${label} (${local})`,
      initialValues: pageData.data || template.defaultItem,
      onSubmit: async (values) => {
        const response = await onSubmit(
          {
            data: JSON.stringify(values),
            locale: local
          }
        );
        if (response) {
          cms.alerts.success("Changes Saved");
        } else {
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
    const [update, setUpdate] = useState();
    const [data, setSetData] = useState({});
    const [isloading, setLoading] = useState();
    const { local } = useLocal();
    useEffect(() => {
      let visible = true;
      const getData = async () => {
        const { app, galleries } = await getAppInfo(
          {
            locale: local
          }
        );
        let data = {};
        if (getPageInfo) {
          const result = await getPageInfo({
            locale: local
          });
          data = result?.data;
          if (typeof data === 'string') {
            data = JSON.parse(data);
          }
        }

        return {
          galleries, app, data
        };
      };
      setLoading(true);
      getData().then(data => {
        if (visible) {
          setSetData(data);
          setUpdate(Date.now());
        }
      }).finally(() => {
        setLoading(false);
      });
      return () => {
        visible = false;
      };
    }, [local]);
    return <>
      {update &&
        !isloading && <Form {...props} pageData={data} id={label + '.' + local} />}
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
