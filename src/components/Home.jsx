import React from "react";
import { FaFacebook,FaTwitter,FaLinkedinIn,FaGithub  } from "react-icons/fa";
import resume from '../assets/Abir Hasan Al-amin.pdf'
import { motion } from "framer-motion";
import FramerMegnet from "./FramerMegnet";
function Home() {
  const textScroll={
    initial:{
      x:0,
    },
    animate:{
      x:"-50%",
      transition:{
        repeat:Infinity,
        repeatType:"mirror",
        duration:60,
      }
    }
  }
  return (
    <div  name="HOME"  className="text-white bg-[#0E1011] w-full h-screen overflow-hidden relative">
      <div className= "max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="text-2xl text-[#DEDEDE]">
          Hello, <span className=" text-red-500">I'm</span>
        </p>
        <h1 className="text-3xl md:text-7xl font-bold text-[#DEDEDE]">
          Abir Hasan Al-amin
        </h1>
        <p className="py-4 max-w-[700px] text-slate-400">
          I'm a passionate Computer Science student at Daffodil International
          University. Skilled in C, C++, and JavaScript, I thrive in web
          development using HTML, CSS, and React. I also have hands-on
          experience managing databases with MySQL and Firebase.Currently I'm learning Node.js,Express.js and MongoDB
        </p>
        <p className=" text-red-400 text-xl font-bold">FIND ME ON</p>
        <div className="max-w-[600px] flex justify-between items-center">
        <FramerMegnet>
            <a href="https://www.facebook.com/AbirHasanAlaminBD/" target="_blank"><button  className=" cursor-pointer p-3 hover:bg-red-500  duration-200 rounded-lg my-7 text-gray-300"><FramerMegnet> <FaFacebook size={30} />  </FramerMegnet></button></a>
            </FramerMegnet>
        <FramerMegnet>
          <a  href="https://www.linkedin.com/in/abirhasanal-amin/" target="_blank"> <button className="  cursor-pointer p-3 hover:bg-red-500  duration-200 rounded-lg my-7 text-gray-300"><FaLinkedinIn size={30}/></button></a>
        </FramerMegnet>
        <FramerMegnet>
          <a href="https://twitter.com/Alamin_A_blvr" target="_blank"><button  className=" cursor-pointer p-3 hover:bg-red-500  duration-200 rounded-lg my-7 text-gray-300"><FaTwitter size={30} /></button></a>
          </FramerMegnet>
          <FramerMegnet>
          <a  href="https://github.com/Abir-Hasan-Al-amin" target="_blank"><button  className=" cursor-pointer p-3 hover:bg-red-500  duration-200 rounded-lg my-7 text-gray-300"><FaGithub size={30} /></button></a>
          </FramerMegnet>
        </div>
        <div className=" mt-4">
        <a href={resume} download="Abir_Hasan_Alamins_Resume.pdf"><button className=" hover:bg-red-900 hover:scale-105 duration-200 cursor-pointer p-3 bg-red-500 rounded-lg shadow-lg">DOWNLOAD CV</button></a>
        </div>
      </div>
        <motion.div variants={textScroll} initial="initial" animate="animate" className="font-bold absolute text-[40vh]  lg:text-[50vh] text-[#ffffff09] whitespace-nowrap bottom-[-100px]  lg:bottom-[-120px] pointer-events-none">
          Software Engineer
        </motion.div>
    </div>
  );
}

export default Home;
