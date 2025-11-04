export default function Login () {
  const handleLogin = () => {
    window.location.href = 'http://localhost:5000/auth/login'
  }

  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <h1 className='text-3xl font-bold mb-6'>Login with Dailymotion</h1>
      <button
        onClick={handleLogin}
        className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700'
      >
        Login
      </button>
    </div>
  )
}
