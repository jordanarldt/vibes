'use client'

import Image from 'next/image'
import React, { useCallback, useEffect, useState } from 'react'

import clsx from 'clsx'
import { EmblaCarouselType, EmblaOptionsType } from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'

import Button from '@/vibes/eclipse/components/button'

type UseDotButtonType = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

const useDotButton = (
  emblaApi: EmblaCarouselType | undefined,
  onButtonClick?: (emblaApi: EmblaCarouselType) => void
): UseDotButtonType => {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
      if (onButtonClick) onButtonClick(emblaApi)
    },
    [emblaApi, onButtonClick]
  )

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)

    emblaApi.on('reInit', onInit).on('select', onSelect)
  }, [emblaApi, onInit, onSelect])

  return {
    selectedIndex,
    scrollSnaps,
    onDotButtonClick,
  }
}

type Slide = {
  title?: string
  text?: string
  buttonText?: string
  buttonLink?: string
  image?: string
  imageAlt: string
}

type EmblaCarouselPropType = {
  className?: string
  slides: Slide[]
  options?: EmblaOptionsType
}

const Carousel: React.FC<EmblaCarouselPropType> = props => {
  const { slides, options } = props
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi)

  return (
    <div
      tabIndex={-1}
      className="w-full outline-none @container"
      onKeyDown={event => {
        if (event.key === 'ArrowLeft') {
          emblaApi?.scrollPrev()
        } else if (event.key === 'ArrowRight') {
          emblaApi?.scrollNext()
        }
      }}
    >
      <div ref={emblaRef} className="relative">
        <div className="touch-[pan-y_pinch-zoom] flex">
          {slides.map((slide, index) => (
            <div
              className={clsx(
                'relative shrink-0 grow-0 basis-4/5 [transform:translate3d(0,0,0)] selection:bg-transparent before:absolute before:-inset-3 before:-z-20 before:rounded-full before:bg-primary/25 before:blur-3xl before:transition-opacity before:delay-100 before:duration-1000 @3xl:basis-4/6 @7xl:basis-3/5',
                selectedIndex === index ? 'before:opacity-100' : 'before:opacity-0'
              )}
              key={index}
            >
              <div
                className={clsx(
                  'relative z-0 h-full w-full rounded-[32px] bg-gradient-to-b from-primary/15 to-background/50 p-2 ring-1 ring-primary/20 transition-all duration-500 after:absolute after:inset-5 after:top-0 after:z-10 after:h-px after:bg-gradient-to-r after:from-transparent after:via-primary after:to-transparent after:transition-opacity after:delay-200 after:duration-700 @lg:basis-3/4 @2xl:basis-4/6 lg:before:-inset-4',
                  selectedIndex === index
                    ? 'scale-100 opacity-100 blur-0 after:opacity-100'
                    : 'scale-90 opacity-50 blur-[4px] after:opacity-0'
                )}
              >
                <div className="relative aspect-square w-full place-content-end overflow-hidden rounded-3xl bg-gradient-to-b from-transparent from-30% to-background/80 p-4 ring-1 ring-primary/10 @lg:aspect-[5/3] @2xl:aspect-video @2xl:p-5 @3xl:from-50%">
                  {slide.image && (
                    <Image
                      src={slide.image}
                      alt={slide.imageAlt}
                      fill
                      className="absolute inset-0 -z-10 w-full rounded-3xl object-cover"
                    />
                  )}
                  <div
                    className={clsx(
                      'flex flex-col items-start justify-end gap-x-8 gap-y-3 transition-all delay-150 duration-500 @2xl:flex-row @2xl:items-end',
                      selectedIndex === index
                        ? 'translate-y-0 opacity-100'
                        : 'translate-y-6 opacity-0'
                    )}
                  >
                    <div className="@2xl:flex-1">
                      <h2 className="text-balance font-medium text-foreground">{slide.title}</h2>
                      <p className="text-balance text-sm text-foreground/60">{slide.text}</p>
                    </div>

                    <Button
                      link={{ href: slide.buttonLink || '#' }}
                      borderGlow={false}
                      variant="primary"
                      size="small"
                    >
                      {slide.buttonText}
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={() => emblaApi?.scrollPrev()}
          className="group absolute inset-y-0 left-0 hidden w-1/6 px-3 text-foreground outline-none @3xl:block @7xl:w-1/5 @7xl:px-7"
        >
          <ChevronLeft
            size={36}
            absoluteStrokeWidth
            className="-translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </button>

        <button
          onClick={() => emblaApi?.scrollNext()}
          className="group absolute inset-y-0 right-0 hidden w-1/6 items-center justify-end px-3 text-foreground outline-none @3xl:flex @7xl:w-1/5 @7xl:px-7"
        >
          <ChevronRight
            size={40}
            absoluteStrokeWidth
            className="translate-x-10 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
          />
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-x-3 @2xl:mt-6">
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={clsx(
              'relative inline-flex h-6 w-6 cursor-pointer touch-manipulation items-center justify-center before:absolute before:left-0 before:top-1/2 before:h-0.5 before:-translate-y-1/2 before:bg-primary before:transition-all before:duration-300 before:ease-out after:h-0.5 after:w-full after:items-center after:justify-center after:bg-foreground/20',
              index === selectedIndex ? 'before:w-full' : 'before:w-0'
            )}
          />
        ))}
      </div>
    </div>
  )
}

export default Carousel
