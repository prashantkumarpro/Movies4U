import { RiSearchLine } from '@remixicon/react'
import { useEffect, useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'


const Search = () => {

    const [searchInput, setSearchInput] = useState('')
    const [suggestion, setSuggestion] = useState(JSON.parse(localStorage.getItem('texts')) || [])
    const [isSearchActive, isSetSearchActive] = useState(false);

    const navigate = useNavigate()

    const handleQuery = (e) => {
        const userInput = e.target.value.toLowerCase()
        setSearchInput(userInput)

    }

    const handelSearchIcon = () => {
        searchInput != "" ? navigate(`/Result/${searchInput}`) : `${alert('enter the value')}`
        setSuggestion(suggestion.push(searchInput))
        localStorage.setItem('texts', JSON.stringify(suggestion))
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            setSearchInput('')
            navigate(`/Result/${searchInput}`)
            setSuggestion(suggestion.push(searchInput))
            localStorage.setItem('texts', JSON.stringify(suggestion))
        }
    }

    const handelSuggestion = (e) => {
        navigate(`/Result/${e.target.textContent}`)
    }

    useEffect(() => {
        document.querySelector('.search_page')
            .addEventListener('click', (e) => {
                if (e.target.classList.contains('search_input') && suggestion.length > 0) {
                    isSetSearchActive(true)
                } else {
                    isSetSearchActive(false)
                }
            })
    }, [isSearchActive])

    return (
        <>
            <div className='search_page w-full h-[100vh] overflow-hidden'>
                <div className='w-full h-80px p-5 flex items-center justify-between gap-3'>
                    <div className='w-full flex-1 items-center relative'>
                        <RiSearchLine
                            size={20} // set custom `width` and `height`
                            color="rgb(75 85 99)" // set `fill` color
                            className="absolute left-4 top-2 cursor-pointer" // add custom class name
                            onClick={handelSearchIcon}
                        />
                        <input type="text"
                            className={`${isSearchActive ? 'search_active' : "round"} search_input  max-w-lg w-full  px-10 py-2  bg-[#E5E7EB] indent-2 focus:outline-none`}
                            placeholder='Search for movies or web series'
                            value={searchInput}
                            onChange={handleQuery}
                            onKeyDown={handleKeyDown}

                        />
                    </div>
                    <NavLink to="/"
                        className={`${isSearchActive ? 'hidden' : "block"} cnacel_btn text-[#00A6ED]`}
                    >Cancel</NavLink>
                </div>
                {suggestion.length > 0 && (
                    suggestion.map(sug => (
                        <div
                            onClick={handelSuggestion}
                            key={sug}
                            className={`${isSearchActive ? 'block' : 'hidden'} suggestion_div  ml-5 mt-[-21px] p-5 bg-[#E5E7EB] max-w-lg  w-full  px-10 py-2`}>
                            <h1 className=' mb-1'>{sug}</h1>
                        </div>
                    ))
                )}


            </div>

        </>
    )
}

export default Search