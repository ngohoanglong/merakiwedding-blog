import LocalProvider from "@providers/local";
import { useRouter } from "next/router";
import { useMemo } from "react";
import {
  StrapiClient, StrapiMediaStore,
  StrapiProvider
} from 'react-tinacms-strapi';
import { TinaCMS, TinaProvider } from 'tinacms';

function BuilderProvider({ children }) {
  const { locale } = useRouter()
  const cms = useMemo(
    () =>
      new TinaCMS({
        sidebar: true,
        enabled: true,
        apis: {
          strapi: new StrapiClient(process.env.STRAPI_URL),
        },
        media: new StrapiMediaStore(process.env.STRAPI_URL),
      }),
    []
  )

  return <TinaProvider cms={cms}>
    <LocalProvider initialLocale={locale}>
      <StrapiProvider>
        {children}
      </StrapiProvider>
    </LocalProvider>

  </TinaProvider>
}

export default BuilderProvider
