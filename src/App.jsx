import { Suspense, useEffect, useState } from 'react'
import Header from './Components/Header/Header'
import { fetchData } from './Components/data'
import { Outlet } from 'react-router-dom'
import { dataContext } from './context'
import Spiner from './Components/Spinar'


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

  if (loading) return < Spiner />
  if (error) return <p className='center text-1'>Error: {error.message}</p>;

  return (
    <dataContext.Provider value={{ data }}>
      <Header />
      <Suspense fallback={<Spiner />}>
        <main>
          <Outlet />
        </main>
      </Suspense>
    </dataContext.Provider>
  )
}

export default App
