import { useContext } from 'react'
import { dataContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { RiPlayLargeFill } from '@remixicon/react'
import { getDurations } from '../../utils/time'

function Card () {
  const { data } = useContext(dataContext)
  const navigate = useNavigate()

  const handelVideoPlayer = e => {
    const videoId = e.currentTarget.getAttribute('data-video-id')
    console.log(videoId)
    navigate(`/Video/${videoId}`)
  }

  return (
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-0 md:py-6 bg-white'>
      {data.list.length > 0 &&
        data.list.map(({ id, thumbnail_url, title, duration }) => (
          <div
            key={id}
            onClick={handelVideoPlayer}
            data-video-id={id}
            className=' group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-2'
          >
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
          </div>
        ))}
    </div>
  )
}

export default Card
