import { useMemo } from "react";
import {
  StrapiClient, StrapiMediaStore,
  StrapiProvider
} from 'react-tinacms-strapi';
import { TinaCMS, TinaProvider } from 'tinacms';

function BuilderProvider({ children }) {
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
    <StrapiProvider>
      {children}
    </StrapiProvider>
  </TinaProvider>
}

export default BuilderProvider
