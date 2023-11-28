import React from 'react'
import chat from '../assets/chat.png'
import  weather from '../assets/2.png'
import  todo from '../assets/todo.png'
import  pass from '../assets/pass.png'
function Projects() {
  const projectInfo = [
    {
      git: "https://github.com/Abir-Hasan-Al-amin/ChatApp-Reactjs",
      live: "https://chatapp-abir.netlify.app/",
      title: "ChatApp with FireBase -React.js",
      img: chat,
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/ToDo_App_FireBase",
      live: "https://abirtodoapp.netlify.app/",
      title: "TodoApp with FireBase",
      img: todo,
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Weather-App",
      live: "https://weatherapp-abir.netlify.app/",
      title: "WeatherApp - React.js",
      img: weather,
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Password-Generator-And-Manager",
      live: "https://passwordmanagerandgenerator.netlify.app/",
      title: "Password Generator And Manager using Local Storage",
      img: pass,
    },
  ];
  return (
    <div name="PROJECTS" className="bg-[#262A33]  text-gray-300 w-full  pt-20">
    <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
      <div>
        <p className=" text-4xl py-2 font-bold border-red-500 inline border-b-4">
          Projects
        </p>
        <p className="py-10">// Check out some of my work right here</p>
      </div>
      <div className="w-full">
        <div className="grid grid-cols-1 gap-9  md:grid-cols-2 justify-center items-center">
        {
          projectInfo.map((project,idx)=>(
            <div key={idx} className=" flex flex-col justify-center items-center shadow-md rounded-md shadow-[#0f0f0f] hover:scale-110 duration-200">
            <img
              className="my-2"
              src={project.img}
            />
            <p className=' text-center'>{project.title}</p>
            <div className='flex gap-10 py-8'>
              <a href={project.git}  target="_blank"><button className="my-2 font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-20">Demo</button></a>
              <a href={project.live}  target="_blank"><button className="my-2 font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-20">Live</button></a>
            </div>
          </div>
          ))
        }
        </div>
      </div>
      <div className='flex justify-center items-center'>
      <a href='https://github.com/Abir-Hasan-Al-amin?tab=repositories' target='_blank'><button className=' my-10 font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-40'>More</button></a>
      </div>
    </div>
    <div>
    </div>
  </div>
  )
}

export default Projects