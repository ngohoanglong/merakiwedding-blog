import React, { useCallback, useEffect, useRef, useState } from 'react'
import GalleryView from './components/GalleryLightBox'

export const GalleryContext = React.createContext({
  addImage: (url) => {
    console.log('addImage', url)
  },
  openLightBox: (url) => {
    console.log('openLightBox', url)
  },
})
export const GalleryProvider = ({ children, props }) => {
  const [ready, setReady] = useState()
  const [open, setOpen] = useState()
  const [index, setindex] = useState(0)
  const imagesRef = useRef([])
  const addImage = useCallback((url) => {
    if (imagesRef.current.includes(url)) {
      return
    }
    imagesRef.current.push(url)
  }, [])
  const openLightBox = useCallback((url) => {
    setOpen(true)
    setindex(imagesRef.current.findIndex((item) => item === url))
  }, [])
  useEffect(() => {
    setReady(true)
  }, [])
  return (
    <GalleryContext.Provider
      {...props}
      value={{
        imagesRef,
        addImage,
        openLightBox,
      }}>
      {children}
      {open && (
        <GalleryView
          {...{
            index,
            onClose: () => setOpen(false),
            images: imagesRef.current.map(
              (src) =>
                `https://res.cloudinary.com/dfgbpib38/image/upload/${src.replace(
                  'https://strapi.merakiweddingplanner.com/',
                  ''
                )}`
            ),
          }}
        />
      )}
    </GalleryContext.Provider>
  )
}
