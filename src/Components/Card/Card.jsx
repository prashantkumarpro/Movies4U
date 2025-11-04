import { RiPlayLargeFill } from '@remixicon/react'
import { getDurations } from '../../utils/time'

function Card ({thumbnail_url, title, duration }) {
  return (
    <>
      {/* Thumbnail */}
      <div className='w-full aspect-video relative overflow-hidden'>
        <img
          className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
          src={thumbnail_url}
          alt={title}
          loading='lazy'
        />
        {/* Play Button */}
        <div className='absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
          <RiPlayLargeFill className='text-white text-5xl drop-shadow-lg' />
        </div>
        {/* Duration Badge */}
        <strong className='z-40 text-white text-xs absolute font-bold bottom-1 bg-black/40 px-1 rounded-sm right-1 -translate-x-1 -translate-y-1'>
          {getDurations(duration)}
        </strong>
      </div>

      {/* Title */}
      <div className='p-4  h-fit text-center'>
        <p className='text-gray-800 font-semibold text-sm sm:text-base group-hover:text-blue-600 transition-colors duration-300'>
          {title.length > 20 ? title.substring(0, 20) + '...' : title}
        </p>
      </div>
    </>
  )
}

export default Card
