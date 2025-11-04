import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import axios from 'axios'

export default function Profile () {
  const [searchParams] = useSearchParams()
  const [user, setUser] = useState(null)

  useEffect(() => {
    const token = searchParams.get('token')
    if (token) {
      axios
        .get(`http://localhost:5000/me?token=${token}`)
        .then(res => setUser(res.data))
    }
  }, [])

  return (
    <div className='p-4 text-center'>
      <h1 className='text-2xl font-bold'>👤 User Profile</h1>
      {user ? (
        <div className='mt-4 space-y-2'>
          <p>
            <strong>Name:</strong> {user.screenname}
          </p>
          <p>
            <strong>ID:</strong> {user.id}
          </p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}
