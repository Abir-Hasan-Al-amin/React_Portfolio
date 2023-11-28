import React, { useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
export default function Nav() {
  const [nav,setNav]=useState(false)
  return (
    <div className="px-10 lg:px-48 text-white flex justify-between items-center w-full h-20 fixed z-50 bg-[#131418]">
    <span className=" text-red-500 font-logo ml-2 text-4xl">Al-amin</span>
      <ul className=" hidden md:flex">
      <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="HOME" smooth duration={500}>HOME</Link></li>
        <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="ABOUT" smooth duration={500}>ABOUT</Link></li>
        <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="EDUCATION" smooth duration={500}>EDUCATION</Link></li>
        <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="SKILLS" smooth duration={500}>SKILLS</Link></li>
        <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="PROJECTS" smooth duration={500}>PROJECTS</Link></li>
        <li className="px-4 font-medium cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="CONTACT" smooth duration={500}>CONTACT</Link></li>
      </ul>
      <div onClick={()=>setNav(!nav)} className=" cursor-pointer pr-4 text-gray-400 md:hidden z-10">
      {nav ?<FaTimes className=" text-red-500" size={25} /> : <FaBars  size={25}/>}
      </div>
      {nav && (
      <ul className="text-4xl py-6 flex flex-col absolute top-0 left-0 w-full h-screen justify-center items-center bg-[#262A33]">
      <li className="text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="HOME" smooth duration={500}>HOME</Link></li>
        <li className="text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="ABOUT" smooth duration={500}>ABOUT</Link></li>
        <li className="text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="EDUCATION" smooth duration={500}>EDUCATION</Link></li>
        <li className="text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="SKILLS" smooth duration={500}>SKILLS</Link></li>
        <li className="text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="PROJECTS" smooth duration={500}>PROJECTS</Link></li>
        <li className=" text-4xl py-6 cursor-pointer text-gray-400 hover:text-red-500 hover:scale-105 duration-200"><Link to="CONTACT" smooth duration={500}>CONTACT</Link></li>
      </ul>
      )}

    </div>
  );
}
