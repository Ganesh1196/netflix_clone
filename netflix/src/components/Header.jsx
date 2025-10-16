import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom'
import Hero from '../components/Hero'
import HeaderSearch from './HeaderSearch'
const Header = ({ searchValue, setSearchValue, isSearching, setIsSearching }) => {
  const [isDropDownOpen, setIsDropDownOpen] = useState(false)

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
     const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/shows", label: "Shows" },
    { to: "/movies", label: "Movies" },
    { to: "/my-list", label: "MyList" },
  ]



  const toggleDropDown = () => setIsDropDownOpen(!isDropDownOpen)
  const navItemStyle = ({ isActive }) => {
    return `${isActive ? "text-white transition-colors duration-500 pl-4 m-1 cursor-pointer text-[1.1rem]"
      : "text-gray-300 hover:text-gray-300 transition-colors duration-500 pl-4 m-1 cursor-pointer text-[1.1rem]"}`
  }
  return (
    <>
      <div className={`flex pl-11 pr-11 justify-between fixed z-50 w-full transition-colors duration-500 ${
  isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black/80 to-transparent'
}`}>
        <div >
          <Link to={"/"}>
          <img className="w-32 align-middle m-6 cursor-pointer" src="./src/assets/netflix-logo.png" alt="Netflix" />
          </Link>
        </div>
        <div className='flex items-center justify-start w-[50%]'>
          {links.map(link => (
            <NavLink className={navItemStyle} key={link.label} to={link.to}  >
              <p   >{link.label}</p>
            </NavLink>
          ))}
        </div>
        <div className='flex items-center justify-end w-[50%]'>
          <HeaderSearch searchValue={searchValue} setSearchValue={setSearchValue} isSearching={isSearching} setIsSearching={setIsSearching} />
          <p className='text-white text-[1.1rem] p-4 cursor-pointer'>Children</p>
          <div className='group flex items-center p-4 cursor-pointer' onMouseEnter={toggleDropDown}>
            <img src="./src/assets/blue-profile-icon.jpg" alt="profile-icon" className='w-10 h-10-3 rounded-md mr-1' />
            <svg xmlns="http://www.w3.org/2000/svg" height="14" width="14" viewBox="0 0 640 640" className='w-6 h-6 cursor-pointer transition-transform duration-300 group-hover:rotate-180'>
              <path fill="#ffffff" d="M297.4 438.6C309.9 451.1 330.2 451.1 342.7 438.6L502.7 278.6C515.2 266.1 515.2 245.8 502.7 233.3C490.2 220.8 469.9 220.8 457.4 233.3L320 370.7L182.6 233.4C170.1 220.9 149.8 220.9 137.3 233.4C124.8 245.9 124.8 266.2 137.3 278.7L297.3 438.7z" /></svg>

          </div>

          {/*Drop Down Menu*/}

          {isDropDownOpen && (<div onMouseLeave={toggleDropDown} className="dropdown-menu absolute bg-black opacity-90 w-60 right-20 top-20 transition-all duration-500 ease-in-out shadow-lg" >
            <ul>
              <li className='flex items-center m-2 pt-2 pb-2 pl-1'>
                <img src="./src/assets/blue-profile-icon.jpg" alt="profile-icon" className='w-10 h-10-3 rounded-md mr-1' />
                <span className='text-white pl-2'>John Snow</span></li>
              <li className='flex items-center m-2 pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-8 h-8'>
                  <path fill="#666666" d="M320 312C386.3 312 440 258.3 440 192C440 125.7 386.3 72 320 72C253.7 72 200 125.7 200 192C200 258.3 253.7 312 320 312zM290.3 368C191.8 368 112 447.8 112 546.3C112 562.7 125.3 576 141.7 576L498.3 576C514.7 576 528 562.7 528 546.3C528 447.8 448.2 368 349.7 368L290.3 368z" /></svg>
                <span className='text-white pl-2'>Account</span>
              </li>
              <li className='flex items-center m-2 pl-2'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className='w-8 h-8'>
                  <path fill="#666666" d="M320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320C64 461.4 178.6 576 320 576zM320 240C302.3 240 288 254.3 288 272C288 285.3 277.3 296 264 296C250.7 296 240 285.3 240 272C240 227.8 275.8 192 320 192C364.2 192 400 227.8 400 272C400 319.2 364 339.2 344 346.5L344 350.3C344 363.6 333.3 374.3 320 374.3C306.7 374.3 296 363.6 296 350.3L296 342.2C296 321.7 310.8 307 326.1 302C332.5 299.9 339.3 296.5 344.3 291.7C348.6 287.5 352 281.7 352 272.1C352 254.4 337.7 240.1 320 240.1zM288 432C288 414.3 302.3 400 320 400C337.7 400 352 414.3 352 432C352 449.7 337.7 464 320 464C302.3 464 288 449.7 288 432z" /></svg>
                <span className='text-white pl-2'>Help Center</span>
              </li>
              <hr className='border-gray-400' />
              <li className='text-white text-center p-4'>Sign out of Netflix</li>
            </ul>
          </div>
          )}
        </div>

      </div>

    </>
  )
}

export default Header
