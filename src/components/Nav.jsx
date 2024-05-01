import React, { useEffect, useState } from "react";
import {FaBars,FaTimes} from 'react-icons/fa'
import {Link} from 'react-scroll'
import { AnimatePresence, motion } from "framer-motion"
export default function Nav() {
  const [nav,setNav]=useState(false);
  const [navC, setNavC] = useState(false);
    useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavC(true);
      } else {
        setNavC(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavC(true);
      } else {
        setNavC(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const menuBar={
    initial:{
      scaleY:0,
    },
    animate:{
      scaleY:1,
      transition:{
        duration: 0.5,
        ease: [0.12,0,0.39,0]
      }
    },
    exit:{
      scaleY:0,
      transition:{
        duration: 0.5,
        ease: [0.22,1,0.36,1]
      }
    }
  }
  
  return (
    <div className="flex justify-center">
    <div className={`${nav ? 'w-[100%]' : 'w-[95%]'} ${nav ? 'lg:w-[100%]' : 'lg:w-[70%]'}  pl-10 rounded-3xl  flex justify-between items-center h-16 fixed ${nav?'':'mt-10'} z-50 ${navC && !nav ? 'border border-solid border-slate-600  border-opacity-25  backdrop-blur-20  bg-[#0F0F0F] bg-opacity-90  shadow-lg' : ' bg-[#0E1011]'}  `}>
    <span className={`${nav?"hidden":""} text-[#DEDEDE] font-logo ml-2 text-3xl`}>Al-amin</span>
      <ul className=" hidden md:flex">
      <li className="px-4 font-medium cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b] hover:scale-105 duration-200"><Link to="HOME" smooth duration={500}>HOME</Link></li>
        <li className="px-4 font-medium cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="EDUCATION" smooth duration={500}>EDUCATION</Link></li>
        <li className="px-4 font-medium cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="SKILLS" smooth duration={500}>SKILLS</Link></li>
        <li className="px-4 font-medium cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="PROJECTS" smooth duration={500}>PROJECTS</Link></li>
        <li className="px-4 font-medium cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="CONTACT" smooth duration={500}>CONTACT</Link></li>
      </ul>
      <div onClick={()=>setNav(!nav)} className=" cursor-pointer pr-12 text-gray-400 md:hidden z-10">
      {nav ?<FaTimes className=" text-red-500 cursor-pointer z-50 fixed right-14 top-14"   size={30} /> : <FaBars  size={25}/>}
      </div>
      <AnimatePresence>
      {nav && (
      <motion.div variants={menuBar} initial="initial" animate="animate" exit="exit" className="text-3xl py-6 flex flex-col absolute top-0 left-0 w-[100%] h-screen justify-center items-center origin-top bg-[#0E1011]">
        <div  className="text-3xl py-6 cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="HOME" smooth duration={500} onClick={()=>setNav(!nav)} >HOME</Link></div>
        <div   className="text-3xl py-6 cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b] 0 hover:scale-105 duration-200"><Link to="EDUCATION" smooth duration={500} onClick={()=>setNav(!nav)} >EDUCATION</Link></div>
        <div   className="text-3xl py-6 cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="SKILLS" smooth duration={500} onClick={()=>setNav(!nav)} >SKILLS</Link></div>
        <div   className="text-3xl py-6 cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="PROJECTS" smooth duration={500} onClick={()=>setNav(!nav)} >PROJECTS</Link></div>
        <div   className="text-3xl py-6 cursor-pointer text-[#DEDEDE] hover:text-[#8b8b8b]  hover:scale-105 duration-200"><Link to="CONTACT" smooth duration={500} onClick={()=>setNav(!nav)} >CONTACT</Link></div>
      </motion.div>
      )}          
      </AnimatePresence>
      </div>
    </div>
  );
}
