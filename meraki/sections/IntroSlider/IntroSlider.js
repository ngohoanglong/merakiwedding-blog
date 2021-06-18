import cn from 'classnames'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import { useRouter } from 'next/router'
import React, { Children, forwardRef, useRef, useState } from 'react'
import s from './IntroSlider.module.css'


const Slider = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="keen-slider">
      {Children.map(children, (child) => {
        // Add the keen-slider__slide className to children
        return <div className={cn('keen-slider__slide')}>{child}</div>
      })}
    </div>
  )
})
const IntroSlider = ({ children, loop = true }) => {
  const { isReady } = useRouter()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef(null)
  const [sliderRef, slider] = useKeenSlider({

    spacing: 0,
    slidesPerView: 1,
    centered: false,
    loop,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
  })

  return (
    <div ref={sliderContainerRef} className={s.root} data-testid="IntroSlider">
      <div className="pointer-events-none absolute inset-0  flex items-center">
        <div className="px-3 lg:px-12 w-full mx-auto">
          <div className="flex items-center justify-between">
            <button
              className={cn(s.leftControl, s.control, "transform transition-transform", loop || (slider && currentSlide !== 0) ? "scale-100" : "scale-0")}
              onClick={slider?.prev}
              aria-label="Previous Product Image"
            >
              <svg fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.0002 18L15.4102 16.59L10.8302 12L15.4102 7.41L14.0002 6L8.00016 12L14.0002 18Z"
                />
              </svg>
            </button>
            <div className="flex-1" />
            <button
              className={cn(s.rightControl, s.control, "transform transition-transform", loop || (slider && currentSlide < slider.details().size - 1) ? "scale-100" : "scale-0")}
              onClick={slider?.next}
              aria-label="Next Product Image"
            >
              <svg fill="currentColor"
                width="32"
                height="32"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99984 6L8.58984 7.41L13.1698 12L8.58984 16.59L9.99984 18L15.9998 12L9.99984 6Z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isReady && <Slider ref={sliderRef}>{children}</Slider>}
      {slider && (
        <div className={cn(s.positionIndicatorsContainer)}>
          {[...Array(slider.details().size).keys()].map((idx) => {
            return (
              <button
                aria-label="Position indicator"
                key={idx}
                className={cn(s.positionIndicator, {
                  [s.positionIndicatorActive]: currentSlide === idx,
                })}
                onClick={() => {
                  slider.moveToSlideRelative(idx)
                }}
              >
                <div className={s.dot} />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}
export default IntroSlider
