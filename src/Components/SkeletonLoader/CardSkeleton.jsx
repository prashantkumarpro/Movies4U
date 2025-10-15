import Header from "../Header/Header";


const CardSkeleton = () => {
    return (
        <>
            <Header />
            <main>
<<<<<<< HEAD
                <div className='card_container flex items-center justify-start flex-wrap gap-5 m-[0 auto] py-5'>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className='card w-[260px] bg-slate-50 text-gray-700 overflow-hidden p-3 cursor-pointer mb-5'>
                            <div className='w-full h-[280px] relative '>
=======
                <div className='w-full  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 py-0 md:py-6 bg-white'>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className='group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl border border-gray-200 transition-all duration-300 cursor-pointer hover:-translate-y-2'>
                            <div className='w-full aspect-video relative overflow-hidden'>
>>>>>>> 1ef287a (refector video card)
                                <div className='size-full skeleton-img'></div>
                            </div>
                            <div className='py-2 mt-1 border-solid border-[1.2px] border-slate-300 text-center'>
                                <p className='skeleton-line'></p>
                                <p className='skeleton-line'></p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default CardSkeleton;
