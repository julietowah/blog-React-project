import logo from '../assets/logo.png';
import { useState } from 'react';
import { IoIosSearch, IoIosMenu, IoIosClose } from 'react-icons/io'; // For hamburger menu icons


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    
      <div className="bg-white container mx-auto flex justify-between items-center sticky top-0 px-2 rounded-lg">
        <img src={logo} alt="logo" className="w-[50px] h-[50px] z-20" />

        {/* Hamburger Menu Icon for Mobile */}
        <button
          className="block md:hidden text-primary focus:outline-none font-semibold"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoIosClose size={30} /> : <IoIosMenu size={30} />}
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'flex' : 'hidden'
          } flex-col md:flex md:flex-row md:gap-14 gap-4 items-right absolute md:static top-14 left-0 w-full md:w-auto bg-gray-300 md:bg-transparent p-4 md:p-0`}
        >
          <li className="hover:font-bold text-primary cursor-pointer ">Home</li>
          <li className="hover:font-bold text-primary cursor-pointer">About us</li>
          <li className="hover:font-bold text-primary cursor-pointer">Contact</li>
        </ul>

        {/* Search Form */}
        <form className="hidden md:block">
          <div className="flex items-center bg-white p-1 rounded-lg">
            <input
              type="text"
              className="bg-gray-50 w-[200px] p-1 outline-none"
              placeholder="Search.."
              name="search"
            />
            <button type="submit" className="border-none p-1">
              <IoIosSearch />
            </button>
          </div>
        </form>
      </div>
   
  );
}



export default Header