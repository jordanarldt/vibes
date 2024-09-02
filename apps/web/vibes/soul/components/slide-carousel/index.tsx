'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

interface Props {
  title: string
  images: string[]
}

const SlideCarousel = ({ title, images }: Props) => {
  const [expandedImageIndex, setExpandedImageIndex] = useState(3)
  const intervalRef = useRef<NodeJS.Timeout | null>(null)

  const startAnimation = () => {
    intervalRef.current = setInterval(() => {
      setExpandedImageIndex(prevIndex =>
        prevIndex === images.concat(images).length - 3 ? 3 : prevIndex + 1
      )
    }, 3500)
  }

  useEffect(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    const timeout = setTimeout(() => {
      startAnimation()
    }, 500)
    return () => clearTimeout(timeout)
  }, [expandedImageIndex])

  return (
    <section className="flex flex-col bg-background text-foreground @container">
      {title && (
        <h2 className="mx-auto max-w-screen-2xl px-5 pt-20 text-center text-5xl font-medium leading-[1] -tracking-[4%] @4xl:py-40 @4xl:text-[90px]">
          {title}
        </h2>
      )}

      <div
        className="relative mr-[50%] flex min-h-[300px] items-end gap-2.5 transition-transform duration-700 ease-out @4xl:mr-0 @4xl:min-h-[700px]"
        style={{
          transform: `translateX(calc(-${(expandedImageIndex * 100) / images.length}% - ${expandedImageIndex * 56}px + 72%))`,
        }}
      >
        {images.concat(images).map((src, index) => (
          <Image
            key={index}
            src={src}
            alt={`Image ${(index % images.length) + 1}`}
            height={1000}
            width={1000}
            className={clsx(
              'pointer-events-none relative aspect-[3/4] h-full max-h-[300px] flex-none origin-bottom select-none object-cover transition-all duration-700 ease-out @4xl:max-h-[700px]',
              index % images.length === expandedImageIndex % images.length
                ? 'w-[56%] @4xl:w-[28%]'
                : 'w-[36%] @4xl:w-[18%]'
            )}
          />
        ))}
      </div>
    </section>
  )
}

export default SlideCarousel
