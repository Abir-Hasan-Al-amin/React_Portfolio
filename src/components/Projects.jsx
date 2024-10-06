function Projects() {
  const projectInfo = [
    {
      git: "https://github.com/Abir-Hasan-Al-amin/ChatApp-Reactjs",
      live: "https://chatapp-abir.netlify.app/",
      title: "ChatApp with FireBase -React.js",
      id:"chata"
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/recipe-next",
      live: "https://recipe-next.netlify.app/",
      title: "Recipe app -React.js",
      id:"recipe"
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Todo-List-App",
      live: "https://abir-todo-list-app.netlify.app/",
      title: "Todo List App using Local Storage",
      id:"todo"
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Netflix_Front-end",
      live: "https://nffclone.netlify.app/",
      title: "Netflix Frontend -React.js",
      id:"net"
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Usabilityhub.com---Clone",
      live: "https://abir-hasan-al-amin.github.io/Usabilityhub.com---Clone/",
      title: "Usabilityhub",
      id:"usability1"
    },
    {
      git: "https://github.com/Abir-Hasan-Al-amin/Weather-App",
      live: "https://weatherapp-abir.netlify.app/",
      title: "WeatherApp - React.js",
      id:"weather"
    },
  ];
  return (
    <div
      name="PROJECTS"
      className="bg-[#0E1011]  text-gray-300 w-full  pt-20 pb-10"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl py-2 font-bold border-red-500 inline border-b-4">
            Projects
          </p>
          <p className="py-10">// Check out some of my work right here</p>
        </div>
        <div className="w-full">
          <div className="grid grid-cols-1 gap-9  md:grid-cols-2 justify-center items-center">
            {projectInfo.map((project, idx) => (
              <div
                key={idx}
                className="flex flex-col justify-center items-center shadow-md rounded-md shadow-[#0f0f0f] hover:scale-105 duration-200"
              >
                <video
                  className="mb-2 rounded-md"
                  src={`https://res.cloudinary.com/dmgocv7hh/video/upload/${project?.id}.mp4`} 
                  autoPlay
                  loop
                  muted
                  controls={false}
                />
                <p className="text-center mt-3">{project.title}</p>
                <div className="flex gap-10 py-4">
                  <a href={project.git} target="_blank">
                    <button className="font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-20">
                      Demo
                    </button>
                  </a>
                  <a href={project.live} target="_blank">
                    <button className="font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-20">
                      Live
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center items-center">
          <a
            href="https://github.com/Abir-Hasan-Al-amin?tab=repositories"
            target="_blank"
          >
            <button className=" my-10 font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-40">
              More
            </button>
          </a>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Projects;
