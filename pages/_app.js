import '../styles/index.css'
import {
    StrapiMediaStore,
    StrapiProvider,
    StrapiClient, STRAPI_JWT,
} from 'react-tinacms-strapi'
import {TinaCMS, TinaProvider} from 'tinacms'
import {useMemo} from "react";

function MyApp({Component, pageProps}) {
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
            <Component {...pageProps} />
        </StrapiProvider>
    </TinaProvider>
}

export default MyApp
