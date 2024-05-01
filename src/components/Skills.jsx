import React from "react";

function Skills() {
  return (
    <div name="SKILLS" className="bg-[#0E1011]  text-gray-300 w-full pt-20 pb-10">
      <div className="max-w-[1100px] mx-auto p-4 flex flex-col justify-center  w-full h-full">
        <div>
          <p className=" text-4xl py-2 font-bold border-red-500 inline border-b-4">
            Skills
          </p>
          <p className="py-10">// Technologies I know</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-2 gap-9 md:grid md:grid-cols-4 justify-center items-center">
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="96"
                height="96"
                src="https://img.icons8.com/fluency/96/c-programming.png"
                alt="c-programming"
              />
              <p className="my-2 font-medium">C programming</p>
            </div>
            <div
              div
              className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200"
            >
              <img
                className="my-2"
                width="96"
                height="96"
                src="https://img.icons8.com/fluency/96/c-plus-plus-logo.png"
                alt="c-plus-plus-logo"
              />
              <p className="my-2 font-medium">CPP programming</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/100/html-5.png"
                alt="html-5"
              />
              <p className="my-2 font-medium">HTML</p>
            </div>
            <div
              div
              className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200"
            >
              <img
                className="my-2"
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/200/css3.png"
                alt="css3"
              />
              <p className="my-2 font-medium">CSS</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="90"
                src="https://img.icons8.com/dusk/64/javascript-logo.png"
                alt="javascript-logo"
              />
              <p className="my-2 font-medium">JavaScript</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="100"
                height="100"
                src="https://img.icons8.com/clouds/100/react.png"
                alt="react"
              />
              <p className="my-2 font-medium">React</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="100"
                height="100"
                src="https://img.icons8.com/plasticine/100/tailwind_css.png"
                alt="tailwind_css"
              />
              <p className="my-2 font-medium">Tailwind</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="96"
                height="96"
                src="https://img.icons8.com/fluency/96/mysql-logo.png"
                alt="mysql-logo"
              />
              <p className="my-2 font-medium">MySQL</p>
            </div>
            <div className=" flex flex-col justify-center items-center shadow-md shadow-[#0f0f0f] hover:scale-110 duration-200">
              <img
                className="my-2"
                width="96"
                height="96"
                src="https://img.icons8.com/color/96/git.png"
                alt="git"
              />
              <p className="my-2 font-medium">Git</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
