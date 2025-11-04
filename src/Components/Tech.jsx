import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { getDurations } from '../utils/time'
import Card from './Card/Card'
const Tech = () => {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const handelVideoPlayer = e => {
    const videoId = e.currentTarget.getAttribute('data-video-id')
    navigate(`/Video/${videoId}`)
  }

  useEffect(() => {
    const API = `https://api.dailymotion.com/videos?fields=id,title,thumbnail_url,language,duration&channel=tech&limit=100`
    const getData = async () => {
      try {
        const response = await fetch(API)
        if (!response.ok) {
          throw new Error('Network response was not ok')
        }
        const data = await response.json()
        setData(data.list)
      } catch (error) {
        console.log(error)
      }
    }
    getData()
  }, [])

  console.log(getDurations(550))
  return (
    <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-4 md:py-6 bg-white'>
      {data.length > 0 &&
        data.map(d => (
          <div
            key={d.id}
            onClick={handelVideoPlayer}
            data-video-id={d.id}
            className=' group bg-white rounded-lg md:rounded-xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-2'
          >
            <Card {...d} />
          </div>
        ))}
    </div>
  )
}

export default Tech
