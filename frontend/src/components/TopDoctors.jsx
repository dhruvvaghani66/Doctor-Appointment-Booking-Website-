// import React, { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { AppContext } from '../context/AppContext';

// const TopDoctors = () => {

//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   return (
//     <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
//       <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
//       <p className='text-sm text-center sm:w-1/3'>Simply browse through our extensive list of trusted doctors.</p>

//       <div className='grid w-full gap-4 px-3 pt-5 grid-cols-auto gap-y-6 sm:px-0'>
//         {doctors.slice(0,10).map((item, index) => (
//           <div onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0,0) }} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//             <img className='bg-blue-50' src={item.image} alt="" />
//             <div className='p-4'>
//               <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                 <p className='w-2 h-2 bg-green-500 rounded-full'></p>
//                 <p className=''>Available</p>
//               </div>
//               <p className='text-lg font-medium text-gray-900'>{item.name}</p>
//               <p className='text-sm text-gray-600'>{item.speciality}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <button onClick={() => { navigate('/doctors'); scrollTo(0,0) }} className='px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50'>more</button>
//     </div>
//   )
// }

// export default TopDoctors

// import React, { useContext } from "react";
// import { useNavigate } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { FaArrowRight, FaUserMd } from "react-icons/fa";
// import { MdOutlineMedicalServices } from "react-icons/md";

// const TopDoctors = () => {
//   const navigate = useNavigate();
//   const { doctors } = useContext(AppContext);

//   return (
//     <section className="relative py-20 px-4 sm:px-6 md:px12 lg:px20 bg-gradient-to-br from-[#f0faff] via-white to-[#e0f2fe] text-gray-900">
//       <div className="mx-auto text-center max-w-7xl">
//         <h2 className="mb-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl md:text-6xl">
//           Meet Our{" "}
//           <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">
//             Expert Doctors
//           </span>
//         </h2>
//         <p className="max-w-xl mx-auto mb-16 text-lg text-gray-600">
//           Browse from a curated list of experienced, certified and top-rated
//           doctors near you.
//         </p>

//         <div className="grid gap-8 lg:gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
//           {doctors.slice(0, 8).map((item, index) => (
//             <div
//               key={index}
//               onClick={() => {
//                 navigate(`/appointment/${item._id}`);
//                 scrollTo(0, 0);
//               }}
//               className="relative overflow-hidden transition-all border border-blue-100 shadow-lg cursor-pointer rounded-xl bg-white/60 backdrop-blur-sm hover:shadow-xl group"
//             >
//               {/* Card Top Image */}
//               <div className="relative">
//                 <img
//                   src={item.image}
//                   alt={item.name}
//                   className="object-cover w-full transition-transform duration-300 h-60 rounded-t3xl group-hover:scale-105"
//                 />
//                 {/* Specialty Badge */}
//                 <div className="absolute px-3 py-1 text-xs font-semibold text-white rounded-full shadow-md top-3 left-3 bg-gradient-to-r from-cyan-600 to-blue-500">
//                   {item.speciality}
//                 </div>
//               </div>

//               {/* Card Body */}
//               <div className="p-5 space-y-3">
//                 {/* Availability */}
//                 <div className="flex items-center gap-2 text-sm font-medium text-green-600">
//                   <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
//                   Available
//                 </div>

//                 {/* Name + Icon */}
//                 <div className="flex items-center gap-2 text-2xl text-black font-semibol">
//                   <FaUserMd className="text-blue-500" />
//                   {item.name}
//                 </div>

//                 {/* Degree */}
//                 {/* <p className="text-sm text-gray-500">{item.degree}</p> */}

//                 {/* Experience Row */}
//                 <div className="flex items-center justify-between pt-3 border-t border-gray-200">
//                   <span className="text-sm font-medium text-gray-700">
//                     Experience: {item.experience}
//                   </span>
//                   <div className="flex items-center justify-center text-blue-600 transition-all bg-blue-100 rounded-full w-9 h-9 hover:bg-blue-600 hover:text-white">
//                     <FaArrowRight size={14} />
//                   </div>
//                 </div>
//               </div>

//               {/* Decorative SVG or background effect */}
//               <svg
//                 className="absolute w-20 h-20 text-blue-300 -bottom-6 -right-6 opacity-10"
//                 fill="currentColor"
//                 viewBox="0 0 100 100"
//               >
//                 <circle cx="50" cy="50" r="50" />
//               </svg>
//             </div>
//           ))}
//         </div>

//         <div className="mt-16">
//           <button
//             onClick={() => {
//               navigate("/doctors");
//               scrollTo(0, 0);
//             }}
//             className="px-10 py-3 font-semibold text-white transition-all rounded-full shadow-md bg-gradient-to-r from-blue-600 to-cyan-500 hover:shadow-lg"
//           >
//             View All Doctors
//           </button>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default TopDoctors;

import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { FaArrowRight, FaUserMd } from "react-icons/fa";
import { MdOutlineMedicalServices } from "react-icons/md";

const TopDoctors = () => {
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  return (
    <section className="relative py-8 px-6 md:px-0 sm:px6 md:px12 lg:px20 bg-gradient-to-br from-[#ecf9ff] via-white to-[#dff4ff] text-gray-900">
      <div className="mx-auto text-center max-w7xl 2xl:max-w[1500px] max-w[1260px]">
        <h2 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl font-poppins">
          Our{" "}
          <span className="text-blue-600 texttransparent bgclip-text bg-gradientto-r fromsky-500">
            Expert Doctors
          </span>
        </h2>
        <p className="max-w-2xl mx-auto mb-16 text-lg text-gray-600 font-inter">
          Consult from the top-rated and verified doctors with years of trusted
          service.
        </p>

        <div className="grid gap-10 md:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 ">
          {doctors.slice(0, 8).map((item, index) => (
            <div
              key={index}
              onClick={() => {
                navigate(`/appointment/${item._id}`);
                scrollTo(0, 0);
              }}
              className="relative transition-all border border-blue-100 shadow-xl cursor-pointer rounded-2xl bg-white/60 backdrop-blur-sm hover:shadow-xl hover:border-blue-300 duration-400 group"
            >
              {/* Top Image */}
              <div className="relative overflow-hidden rounded-t-2xl bg-[#EAEFFF]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="object-cover w-full duration-500 ease-in-out h-80 trasition-transform group-hover:scale-110"
                />
                {/* Speciality Tag */}
                <div className="absolute px-3 py-1 text-xs text-white rounded-full shadow-md top-3 left-3 bg-gradient-to-r from-blue-800 to-cyan-600 font-inter">
                  {item.speciality}
                </div>
              </div>

              {/* Card Body */}
              <div className="relative z-10 p-5 space-y-2">
                {/* Availability */}
                <div className="flex items-center gap-2 text-sm font-medium text-green-600">
                  <span className="w-2 h-2 bg-green-500 rounded-full font-inter"></span>{" "}
                  Available
                </div>

                {/* Name */}
                <div className="flex items-center gap-2 text-xl font-semibold textgray-800 font-poppins">
                  <FaUserMd className="text-blue-500" />
                  {item.name}
                </div>

                {/* Degree */}
                {/* <p className="text-sm text-gray-500">{item.degree}</p> */}

                {/* Experience + Arrow */}
                <div className="flex items-center justify-between pt-2 mt-4 border-t border-gray-200 font-inter">
                  <span className="text-sm font-medium text-gray-700">
                    Experience: {item.experience}
                  </span>
                  <div className="flex items-center justify-center text-blue-600 transition-all duration-300 ease-in-out bg-blue-100 rounded-full w-9 h-9 group-hover:bg-blue-600 group-hover:text-white">
                    <FaArrowRight size={14} />
                  </div>
                </div>
              </div>

              {/* Decorative Circle SVG */}
              <svg
                className="absolute w-24 h-24 text-blue-200 -bottom-8 -right-8 opacity-10"
                fill="currentColor"
                viewBox="0 0 100 100"
              >
                <circle cx="50" cy="50" r="50" />
              </svg>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <button
            onClick={() => {
              navigate("/doctors");
              scrollTo(0, 0);
            }}
            className="px-10 py-3 font-semibold text-white transition-all rounded-full shadow-lg font-inter bg-gradient-to-r from-blue-500 to-cyan-600 hover:shadow-2xl hover:brightness-110"
          >
            View All Doctors
          </button>
        </div>
      </div>
    </section>
  );
};

export default TopDoctors;
