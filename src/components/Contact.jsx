function Contact() {
  return (
    <div name="CONTACT" className="bg-[#0E1011]  text-gray-300 w-full pt-20">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl py-2 font-bold border-red-500 inline border-b-4">
            Contact
          </p>
          <p className="py-10">// Please fill out this form to get in touch with me  </p>
        </div>
        <div className="w-full">
          <form action="https://getform.io/f/f47f16ed-2eee-460f-8f68-910edb7236e5" method="post" className="flex flex-col gap-4 w-full md:w-1/22">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Name"
              className=" rounded-md p-2 bg-transparent border-gray-600 border-2 text-gray-400 focus:outline-none"
            />
            <input
              type="text"
              name="name"
              placeholder="Enter Your Email"
              className=" rounded-md p-2 bg-transparent border-gray-600 border-2 text-gray-400 focus:outline-none"
            />
            <textarea
              name="message"
              rows={10}
              className=" rounded-md p-2 bg-transparent border-gray-600 border-2 text-gray-400 focus:outline-none"
            />
            <div className="flex justify-center items-center">
            <button className=' my-10 font-medium p-3 bg-red-500 hover:bg-red-800 rounded-md hover:scale-105 duration-150 w-32'>Submit</button>
            </div>
          </form>
        </div>
      </div>
      <div className=" lg:pb-12"></div>
    </div>
  );
}

export default Contact;
