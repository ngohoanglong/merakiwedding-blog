// templates/default/index.js

import LoadingDots from 'meraki/components/LoadingDots'
import React from 'react'
const GalleryLightBox = React.lazy(() => import('./GalleryLightBox'))
export default function GalleryView(props: any) {
  return (
    <React.Suspense fallback={LoadingDots}>
      <GalleryLightBox {...(props as any)} />
    </React.Suspense>
  )
}
