import React, { useRef } from 'react'
import { GalleryImage } from '../atom/BenefitIconContainer'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function CarouselGallery({ images = [] }) {
  const ref = useRef(null)

  const scroll = (dir = 1) => {
    const el = ref.current
    if (!el) return
    const cardWidth = el.querySelector('div')?.offsetWidth || 240
    el.scrollBy({ left: dir * (cardWidth + 16), behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div
          ref={ref}
          className="flex gap-4 overflow-x-auto no-scrollbar scroll-smooth px-1 py-2 snap-x snap-mandatory touch-pan-x"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          {images.map((src, idx) => (
            <div key={idx} className="flex-shrink-0 w-44 sm:w-56 md:w-60 lg:w-64 snap-center">
              <GalleryImage src={src} alt={`img-${idx}`} className="h-36 sm:h-44 md:h-48 lg:h-56" />
            </div>
          ))}
        </div>
      </div>

      <button
        aria-label="previous"
        onClick={() => scroll(-1)}
        className="hidden md:flex items-center justify-center absolute left-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
      >
        <FaChevronLeft className="text-gray-600" />
      </button>

      <button
        aria-label="next"
        onClick={() => scroll(1)}
        className="hidden md:flex items-center justify-center absolute right-0 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
      >
        <FaChevronRight className="text-gray-600" />
      </button>
    </div>
  )
}
