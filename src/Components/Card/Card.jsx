import { useContext } from 'react'
import { dataContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { RiPlayLargeFill } from '@remixicon/react'
<<<<<<< HEAD
=======
import { getDurations } from '../../utils/time'
>>>>>>> 1ef287a (refector video card)

function Card () {
  const { data } = useContext(dataContext)
  const navigate = useNavigate()

  const handelVideoPlayer = e => {
    const videoId = e.currentTarget.getAttribute('data-video-id')
    console.log(videoId)
    navigate(`/Video/${videoId}`)
  }

  return (
<<<<<<< HEAD
    <div className='card_container flex items-center justify-start flex-wrap gap-5 m-auto'>
      {data?.list?.length > 0 &&
        data.list.map(({ id, thumbnail_url, title }) => (
=======
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-0 md:py-6 bg-white'>
      {data.list.length > 0 &&
        data.list.map(({ id, thumbnail_url, title, duration }) => (
>>>>>>> 1ef287a (refector video card)
          <div
            key={id}
            onClick={handelVideoPlayer}
            data-video-id={id}
<<<<<<< HEAD
            className='card w-[260px]  bg-slate-50 text-gray-700  overflow-hidden p-3 cursor-pointer '
          >
            <div className=' w-full h-[320px] relative'>
              <img
                className='size-full object-fit'
=======
            className=' group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-2'
          >
            {/* Thumbnail */}
            <div className='w-full aspect-video relative overflow-hidden'>
              <img
                className='w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500'
>>>>>>> 1ef287a (refector video card)
                src={thumbnail_url}
                alt={title}
                loading='lazy'
              />
<<<<<<< HEAD

              <RiPlayLargeFill className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#fff]' />
            </div>
            <div className='p-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
              <p>{`${
                title.length > 10 ? title.substring(0, 18) + '...' : title
              }`}</p>
=======
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
>>>>>>> 1ef287a (refector video card)
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
