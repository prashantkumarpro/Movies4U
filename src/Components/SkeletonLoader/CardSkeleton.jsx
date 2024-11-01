import { NavLink, useNavigate } from "react-router-dom";
import { RiCloseLargeLine, RiMenu3Line, RiMoonLine, RiSearchLine, RiSunFill } from "@remixicon/react";
import { useEffect, useState } from "react";

const CardSkeleton = () => {

    const [isDark, setIsDark] = useState(false)
    const [query, setQuery] = useState('')
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const navigate = useNavigate()

    const handleTheme = () => {
        setIsDark(!isDark)
        document.body.classList.toggle('dark')
    }

    const handleQuery = (e) => {
        const userInput = e.target.value.toLowerCase()
        setQuery(userInput)
    }

    const handelSearch = () => {
        if (query.trim() !== "") {
            setQuery('')
            navigate(`/Result/${query}`)
        } else {
            alert("Please enter a search value")
        }
    }

    const handleKeyDown = (e) => {
        if (e.key === "Enter") {
            handelSearch()
        }
    }

    const handelMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }

    useEffect(() => {
        const navLinks = document.querySelectorAll('.nav_link li')
        navLinks.forEach(link => link.addEventListener('click', handelMenu))
    }, [isMenuOpen])










    return (
        <>
            <header className={`${isDark ? 'header_dark' : ''} w-full h-20 bg-white  text-gray-600 flex items-center justify-between gap-10 fixed top-0 left-0 z-50`}>
                <div className="left_part flex items-center gap-3  ">
                    <div
                        className={`menu_btn ${isMenuOpen ? 'hidden' : 'block'}`}
                        onClick={handelMenu}
                    >
                        <RiMenu3Line />
                    </div>
                    <NavLink to="/" className="text-xl font-semibold" >🎦Movies4U
                    </NavLink>
                </div>
                <div className='search_box w-full flex-1 items-center relative'>
                    <RiSearchLine
                        size={20} // set custom `width` and `height`
                        color="rgb(75 85 99)" // set `fill` color
                        className="my-icon absolute left-4 top-2 cursor-pointer" // add custom class name
                        onClick={handelSearch}
                    />
                    <input type="text"
                        className='search_input max-w-lg w-full  px-10 py-2 rounded-full bg-[#E5E7EB] indent-2 focus:outline-none'
                        placeholder='Search for movies or web series'
                        value={query}
                        onChange={handleQuery}
                        onKeyDown={handleKeyDown}
                    />
                </div>
                <nav id="navbar" className='flex items-center gap-8'>
                    <NavLink to={`/search/$`}>
                        <RiSearchLine
                            size={20} // set custom `width` and `height`
                            color="rgb(75 85 99)" // set `fill` color
                            className="search_icon cursor-pointer hidden" // add custom class name

                        />
                    </NavLink>
                    <div className="theme cursor-pointer"
                        onClick={handleTheme}
                    >
                        <RiSunFill
                            size={24}
                            className={isDark ? 'block' : 'hidden'}
                        />

                        <RiMoonLine
                            size={20}
                            className={isDark ? 'hidden' : 'block'}

                        />
                    </div>
                    <ul className={`nav_link ${isMenuOpen ? 'open' : ''} flex items-center justify-between gap-8 font-semibold`}>
                        <li> <NavLink to="/">HOME</NavLink></li>
                        <li> <NavLink to="/tech"  >TECH</NavLink></li>
                        <li className="browseall"><NavLink to="/browseall" >BROWSE ALL</NavLink></li>
                        <li className="hidden "> <NavLink>CLOSE</NavLink> </li>
                        <div
                            className={`nav_close hidden absolute top-6 z-10 left-64`}
                            onClick={handelMenu}
                        ><RiCloseLargeLine /></div>
                    </ul>

                </nav>

            </header >
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
