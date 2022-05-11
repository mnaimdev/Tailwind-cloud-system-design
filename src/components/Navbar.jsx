import { MenuIcon, XIcon} from '@heroicons/react/outline';
import React, {useState} from 'react';
const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
  }
  return (
    <div className="w-screen h-[88px] z-10 bg-zinc-200 fixed drop-shadow-lg">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="flex items-center lg:ml-16 md:ml-8">
          <h1 className="text-3xl font-bold mr-4 sm:text-4xl">BRAND.</h1>
          <ul className="hidden md:flex font-semibold lg:ml-32">
            <li>Home</li>
            <li>About</li>
            <li>Support</li>
            <li>Platforms</li>
            <li>Pricing</li>
          </ul>
        </div>
        <div className="hidden md:flex pr-4 lg:mr-16 md:mr-8">
        <button className="border-none bg-transparent text-black md:mr-6">Sign In</button>
        <button className="px-8 py-3 md:py-1 md:px-2">Sign Up</button>
        </div>
        <div className="md:hidden" onClick={handleClick}>
       {!nav ? <MenuIcon className="w-10" /> : <XIcon className="w-10" />}
        </div>
      </div>

   <ul className={!nav ? "hidden" : "md:hidden absolute bg-zinc-200 w-full px-8"}>
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
            <li className="border-b-2 border-zinc-300 w-full">Platforms</li>
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
            <div className="flex flex-col my-4">
              <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
              <button className="px-8 py-3">Sign Up</button>
            </div>
   </ul>
    </div>
  )
}

export default Navbar;