import { useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import { fetchData } from './Components/data'
import { Outlet } from 'react-router-dom'
import { dataContext } from './context'
import Spiner from './Components/Spinar'
import CardSkeleton from './Components/SkeletonLoader/CardSkeleton'
// import CardSkeleton from './Components/SkeletonLoader/CardSkeleton'


function App() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchData()
        setData(result)
        setLoading(false)
      } catch (error) {
        setError(error)
        setLoading(false)
      }
    }
    getData()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 3 seconds
    }, 3000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);

  }, [])

  if (loading) return < CardSkeleton />
  if (error) return < CardSkeleton />

  return (
    <dataContext.Provider value={{ data }}>
      <Header />
      <main>
        <Outlet />
      </main>
    </dataContext.Provider>
  )
}

export default App







