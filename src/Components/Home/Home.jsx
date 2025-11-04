import { useNavigate } from 'react-router-dom'
import Card from '../Card/Card'
import { useContext } from 'react'
import { dataContext } from '../../context'

const Home = () => {
  const { data } = useContext(dataContext)
  const navigate = useNavigate()

  const handelVideoPlayer = e => {
    const videoId = e.currentTarget.getAttribute('data-video-id')
    navigate(`/Video/${videoId}`)
  }
  return (
    <>
      <div id='home' className='py-5 text-xl'>
        <h1 className='mb-10 px-1 md:px-0'>Latest movies lists</h1>
        <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-0 md:py-6 bg-white'>
          {data.list.length > 0 &&
            data.list.map(d => (
              <div
                key={d.id}
                onClick={handelVideoPlayer}
                data-video-id={d.id}
                className='group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-2'
              >
                <Card {...d} />
              </div>
            ))}
        </div>
      </div>
    </>
  )
}

export default Home
