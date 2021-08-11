import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import 'react-image-lightbox/style.css'

const GalleryLightBox = ({ onClose, index = 0, images }) => {
  const [photoIndex, setIndex] = useState(index)
  if (!document) {
    return null
  }
  return (
    <>
      <Lightbox
        mainSrc={images[photoIndex]}
        nextSrc={images[(photoIndex + 1) % images.length]}
        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
        onCloseRequest={onClose}
        onMovePrevRequest={() =>
          setIndex((photoIndex + images.length - 1) % images.length)
        }
        onMoveNextRequest={() => setIndex((photoIndex + 1) % images.length)}
      />
    </>
  )
}
export default GalleryLightBox
