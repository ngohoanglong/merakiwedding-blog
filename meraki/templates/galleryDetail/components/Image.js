import { Image } from 'meraki/components/Image'
import { useContext, useEffect } from 'react'
import { GalleryContext } from '../GalleryContext'
const GalleryImage = ({ ...props }) => {
  const { addImage, openLightBox } = useContext(GalleryContext)
  useEffect(() => {
    addImage(props.src)
  }, [addImage, props.src])
  return (
    <Image
      className="cursor-pointer"
      {...props}
      onClick={() => {
        openLightBox(props.src)
      }}
    />
  )
}
export default GalleryImage
