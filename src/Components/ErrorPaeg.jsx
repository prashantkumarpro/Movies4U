import { useRouteError } from 'react-router-dom'

function ErrorPaeg() {

    const error = useRouteError()
    console.log(error)
    return (
        <div 
        className='w-full h-[100vh] flex items-center justify-center flex-col'
        id='error-page'>
            <h1 className='mb-10 text-4xl'>Oops!</h1>
            <p className='mb-10'>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}

export default ErrorPaeg