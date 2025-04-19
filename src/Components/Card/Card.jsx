import { useContext } from 'react'
import { dataContext } from '../../context'
import { useNavigate } from 'react-router-dom'
import { RiPlayLargeFill } from '@remixicon/react'

function Card () {
  const { data } = useContext(dataContext)
  const navigate = useNavigate()

  const handelVideoPlayer = e => {
    const videoId = e.currentTarget.getAttribute('data-video-id')
    console.log(videoId)
    navigate(`/Video/${videoId}`)
  }

  return (
    <div className='card_container flex items-center justify-start flex-wrap gap-5 m-auto'>
      {data?.list?.length > 0 &&
        data.list.map(({ id, thumbnail_url, title }) => (
          <div
            key={id}
            onClick={handelVideoPlayer}
            data-video-id={id}
            className='card w-[260px]  bg-slate-50 text-gray-700  overflow-hidden p-3 cursor-pointer '
          >
            <div className=' w-full h-[320px] relative'>
              <img
                className='size-full object-fit'
                src={thumbnail_url}
                alt={title}
                loading='lazy'
              />

              <RiPlayLargeFill className='absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[#fff]' />
            </div>
            <div className='p-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
              <p>{`${
                title.length > 10 ? title.substring(0, 18) + '...' : title
              }`}</p>
            </div>
          </div>
        ))}
    </div>
  )
}

export default Card
