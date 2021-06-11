import Container from '@components/container'
import cn from 'classnames'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react'
import React, { Children, forwardRef, useRef, useState } from 'react'
import s from './Slider.module.css'


const SliderInner = forwardRef(({ children }, ref) => {
  return (
    <div ref={ref} className="keen-slider">
      {Children.map(children, (child) => {
        // Add the keen-slider__slide className to children
        return <div className={cn('keen-slider__slide')}>{child}</div>
      })}
    </div>
  )
})
const Slider = ({ children, breakpoints, disableIndicator = true, loop = true }) => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const sliderContainerRef = useRef(null)
  const [sliderRef, slider] = useKeenSlider({
    spacing: 0,
    slidesPerView: 1,
    duration: 1500,
    centered: false,
    loop,
    mounted: () => setIsMounted(true),
    slideChanged(s) {
      setCurrentSlide(s.details().relativeSlide)
    },
    breakpoints: breakpoints
      ? breakpoints
      : {
        '(min-width: 600px)': {
          slidesPerView: 2,
          mode: 'free-snap',
        },
        '(min-width: 1240px)': {
          slidesPerView: 3,
          mode: 'free-snap',
        },

      },

  })
  return (
    <div ref={sliderContainerRef} className={s.root} data-testid="Slider">
      <div className="pointer-events-none absolute inset-0  flex items-center">
        <Container>
          <div className="flex items-center justify-between">
            <button
              className={cn(s.leftControl, s.control, "transform transition-transform", loop || (slider && currentSlide !== 0) ? "scale-100" : "scale-0")}
              onClick={slider?.prev}
              aria-label="Previous Product Image"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9.224 1.553a.5.5 0 01.223.67L6.56 8l2.888 5.776a.5.5 0 11-.894.448l-3-6a.5.5 0 010-.448l3-6a.5.5 0 01.67-.223z" clipRule="evenodd" /></svg>
            </button>
            <div className="flex-1" />
            <button
              className={cn(s.rightControl, s.control, "transform transition-transform", loop || (slider && currentSlide < slider.details().size - 1) ? "scale-100" : "scale-0")}
              onClick={slider?.next}
              aria-label="Next Product Image"
            >
              <svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 16 16" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6.776 1.553a.5.5 0 01.671.223l3 6a.5.5 0 010 .448l-3 6a.5.5 0 11-.894-.448L9.44 8 6.553 2.224a.5.5 0 01.223-.671z" clipRule="evenodd" /></svg>
            </button>
          </div>

        </Container>
      </div>

      <SliderInner ref={sliderRef}>{children}</SliderInner>
      {!disableIndicator && slider && (
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
export default Slider
