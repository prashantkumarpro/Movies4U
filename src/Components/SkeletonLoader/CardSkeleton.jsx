import Header from "../Header/Header";


const CardSkeleton = () => {
    return (
        <>
            <Header />
            <main>
                <div className='card_container flex items-center justify-start flex-wrap gap-5 m-[0 auto] py-5'>
                    {Array.from({ length: 12 }).map((_, index) => (
                        <div key={index} className='card w-[260px] bg-slate-50 text-gray-700 overflow-hidden p-3 cursor-pointer mb-5'>
                            <div className='w-full h-[280px] relative '>
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
