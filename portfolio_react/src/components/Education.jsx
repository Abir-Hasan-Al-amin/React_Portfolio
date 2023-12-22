import React from "react";

function Education() {
  return (
    <div
      name="EDUCATION"
      className="bg-[#262A33]  text-gray-300 w-full pt-20"
    >
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className=" text-4xl py-2 font-bold border-red-500 inline border-b-4">
            Education
          </p>
          <p className="py-10">// My Education History </p>
        </div>
        <div className="w-full">
          <div className="flex flex-col sm:flex-row items-center justify-evenly">
            <div className="shadow-xl border-b-slate-800 p-4 hover:scale-105 duration-200">
              <p className="text-2xl p-4  text-red-500"> BSC in CSE</p>
              <p className="p-4">Daffodil International University</p>
              <p className="p-4">2019 - 2023</p>
            </div>
            <div className="shadow-xl border-b-slate-800 p-4 hover:scale-105 duration-200">
              <p className="text-2xl p-4  text-red-500">HSC</p>
              <p className="p-4">Uttara High School And College</p>
              <p className="p-4">2016 - 2018</p>
            </div>
            <div className="shadow-xl border-b-slate-800 p-4 hover:scale-105 duration-200">
              <p className="text-2xl p-4  text-red-500">SSC</p>
              <p className="p-4">Uttara High School And College</p>
              <p className="p-4">2014 - 2016</p>
            </div>
          </div>
        </div>
        <div className="pt-10">
          // Final Year Thesis
          <div className=" shadow-xl border-b-slate-800 p-10 hover:scale-105 duration-200">
            <p className="text-2xl p-4  text-red-500">
              Machine Learning Approaches for Intrusion Detection Systems: A
              Comparative Analysis
            </p>
            <p className="p-4">Currently Working...</p>
            <p className="p-4  text-red-500">Supervised By</p>
            <p className="p-4"> Dr. S M Aminul Haque</p>
            <p className="p-4">
              Associate Head | Department of Computer Science and Engineering
            </p>
            <p className="p-4 pb-0">Daffodil International University</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
