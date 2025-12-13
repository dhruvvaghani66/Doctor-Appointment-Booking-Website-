// import React from 'react'
// import { specialityData } from '../assets/assets_frontend/assets'
// import { Link } from 'react-router-dom'

// const SpecialityMenu = () => {
//   return (
//     <div className='flex flex-col items-center gap-4 py-16 text-gray-800' id='speciality'>
//       <h1 className='text-3xl font-medium'>Find by Speciality</h1>
//       <p className='text-sm text-center sm:w-1/3'>Simply browse through our extensive list of trusted doctors, <br /> schedule your appointment hassle-free.</p>

//       <div className='flex w-full gap-4 pt-5 overflow-scroll sm:justify-center'>
//         {specialityData.map((item, index) => (
//           <Link onClick={() => scrollTo(0,0)} className='flex flex-col items-center text-xs cursor-pointer flex-shrink-0 hover:translate-y-[-10px] transition-all duration-500' key={index} to={`/doctors/${item.speciality}`}>
//             <img className='w-16 mb-2 sm:w-24' src={item.image} alt="" />
//             <p>{item.speciality}</p>
//           </Link>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default SpecialityMenu

// import React from "react";
// import { specialityData } from "../assets/assets_frontend/assets";
// import { Link } from "react-router-dom";

// const SpecialityMenu = () => {
//   return (
//     <div className="">
//       {/* Our medical services */}
//       <section
//         id="speciality"
//         className="relative z-10 py-20 px-4 sm:px-6 md:px-10 lg:px-32 bg-gradient-to-br from-[#eef5ff] via-white to-[#e0f2fe]"
//       >
//         {/* Decorative Blob SVG */}
//         <svg
//           className="absolute top-0 left-0 w-[300px] md:w-[400px] opacity-10 -z-10"
//           viewBox="0 0 200 200"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             fill="#3b82f6"
//             d="M42.3,-63.4C55.5,-52.1,67.3,-41.5,72.3,-28.1C77.4,-14.7,75.7,1.6,69.1,17.5C62.5,33.4,51,49,36.1,59.4C21.1,69.8,2.7,75,-14.4,73.3C-31.6,71.7,-47.5,63.2,-58.9,50.4C-70.2,37.6,-77.1,20.5,-75.3,4.4C-73.6,-11.7,-63.3,-26.9,-52.5,-39.5C-41.7,-52.1,-30.4,-62.1,-16.6,-69.6C-2.9,-77.1,13.3,-82.3,27.8,-76.5C42.3,-70.7,55,-54.7,42.3,-63.4Z"
//             transform="translate(100 100)"
//           />
//         </svg>

//         <div className="mx-auto text-center max-w[1260px]">
//           <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 sm:text-4xl md:text-5xl">
//             Our medical{" "}
//             <span className="text-blue-600 underline decoration-blue-300 underline-offset-4">
//               services
//             </span>
//           </h2>
//           <p className="max-w-xl mx-auto mb-10 text-base text-gray-600 sm:text-lg sm:mb-14">
//             World-class care for everyone. Our health System offers unmatched,
//             expert health care.
//           </p>

//           {/* Cards container: flexible & responsive */}
//           <div className="flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-10">
//             {specialityData.map((item, index) => (
//               <Link
//                 key={index}
//                 onClick={() => scrollTo(0, 0)}
//                 to={`/doctors/${item.speciality}`}
//                 className="group w-[44%] sm:w-[30%] md:w[23%] lg:w-[22%] xl:w-[18%] 2xl:w-[12%] min-w[120px] max-w[180px] transition-all duration-300 transform hover-translate-y-2 hover:scale-105 bgwhite shadowmd hover:shadow-blue200 rounded2xl px4 py6 borde border-gray100 hoverborder-blue-300"
//               >
//                 <div className="flex flex-col items-center">
//                   <img
//                     src={item.image}
//                     alt={item.speciality}
//                     className="object-cover w-24 h-24 mb-3 transition-transform duration-300 rounded-full shadow-md sm:w-40 sm:h-40 group-hover:scale-110"
//                   />
//                   <p className="text-base font-semibold text-center text-gray-700 group-hover:text-blue-600">
//                     {item.speciality}
//                   </p>
//                 </div>
//               </Link>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ======= feature section ========*/}
//       <section>
//         <div className="container px-4 py-10 mx-auto">
//           <div className="flex justify-between gap-[50px] lg:gap-16 2xl:gap-0 flex-col lg:flex-row">
//             {/* ======= about content ====== */}
//             <div className="flex flex-col justify-center order-2 w-full h-full lg:w-1/2 lg:order-1">
//               <div className="max-w-xl mx-auto px4 text-start lg:text-left">
//                 <h2 className="mb-6 text-4xl font-semibold leadingsnug md:text-5xl textheadingColor">
//                   Get virtual treatment <br /> anytime.
//                 </h2>

//                 <ul className="pl-4 space-y-4 text-xl text-[#4e545f]">
//                   <li>1. Schedule the appointment directly.</li>
//                   <li>
//                     2. Search for your physician here, and contact their office.
//                   </li>
//                   <li>
//                     3. View our physicians who are accepting new patients, use
//                     the online scheduling tool to select an appointment time.
//                   </li>
//                 </ul>

//                 <div className="mt-8">
//                   <Link to="/">
//                     <button className="px-8 py-3 text-lg text-white transition-all bg-blue-600 rounded-3xl hover:bg-blue-700">
//                       Learn More
//                     </button>
//                   </Link>
//                 </div>
//               </div>
//             </div>

//             {/* </div> */}

//             {/* ========= about img ======== */}
//             <div className="relative w-full lg:w-1/2 xl:w-[570px] justify-start items-start z-10 order-1 lg:order-2">
//               <img
//                 src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329013.jpg?t=st=1744441843~exp=1744445443~hmac=f748bec8deefc75c0c6a1a1efd99ed2d0c7e26660159ab7b4188638fd87da1ca&w=996"
//                 className="h-[260px] md:h-[430px] w-full lg:w-[660px]"
//               />
//               {/* <div className="absolute z-20 bottom-4 w-[200px] md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
//                 <img
//                   src="http://localhost:5175/src/assets/images/about-card.png"
//                   alt=""
//                 /> */}
//               {/* </div> */}
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default SpecialityMenu;




import React from "react";
import { specialityData } from "../assets/assets_frontend/assets";
import { Link } from "react-router-dom";

const SpecialityMenu = () => {
  return (
    <div className="">
      {/* Our medical services */}
      <section
        id="speciality"
        className="relative z-10 py-20 px-4 sm:px-6 md:px-10 lg:px-32 bg-gradient-to-br from-[#eef5ff] via-white to-[#e0f2fe]"
      >
        {/* Decorative Blob SVG */}
        <svg
          className="absolute top-0 left-0 w-[300px] md:w-[400px] opacity-10 -z-10"
          viewBox="0 0 200 200"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#3b82f6"
            d="M42.3,-63.4C55.5,-52.1,67.3,-41.5,72.3,-28.1C77.4,-14.7,75.7,1.6,69.1,17.5C62.5,33.4,51,49,36.1,59.4C21.1,69.8,2.7,75,-14.4,73.3C-31.6,71.7,-47.5,63.2,-58.9,50.4C-70.2,37.6,-77.1,20.5,-75.3,4.4C-73.6,-11.7,-63.3,-26.9,-52.5,-39.5C-41.7,-52.1,-30.4,-62.1,-16.6,-69.6C-2.9,-77.1,13.3,-82.3,27.8,-76.5C42.3,-70.7,55,-54.7,42.3,-63.4Z"
            transform="translate(100 100)"
          />
        </svg>

        <div className="mx-auto text-center max-w[1260px]">
          <h2 className="mb-4 text-3xl font-extrabold leading-tight text-gray-800 font-poppins sm:text-4xl md:text-5xl">
            Our medical{" "}
            <span className="text-blue-600 underline decoration-blue-300 underline-offset-4 ">
              services
            </span>
          </h2>
          <p className="max-w-xl mx-auto mb-10 text-base text-gray-600 font-inter sm:text-lg sm:mb-14">
            World-class care for everyone. Our health System offers unmatched,
            expert health care.
          </p>

          {/* Cards container: flexible & responsive */}
          <div className="flex flex-wrap justify-center gap-4 lg:gap-6 xl:gap-10">
            {specialityData.map((item, index) => (
              <Link
                key={index}
                onClick={() => scrollTo(0, 0)}
                to={`/doctors/${item.speciality}`}
                className="group w-[44%] sm:w-[30%] md:w[23%] lg:w-[22%] xl:w-[18%] 2xl:w-[12%] min-w[120px] max-w[180px] transition-all duration-300 transform hover-translate-y-2 hover:scale-105 bgwhite shadowmd hover:shadow-blue200 rounded2xl px4 py6 borde border-gray100 hoverborder-blue-300"
              >
                <div className="flex flex-col items-center">
                  <img
                    src={item.image}
                    alt={item.speciality}
                    className="object-cover w-24 h-24 mb-3 transition-transform duration-300 rounded-full shadow-md sm:w-40 sm:h-40 group-hover:scale-110"
                  />
                  <p className="text-base font-semibold text-center text-gray-700 font-inter group-hover:text-blue-600">
                    {item.speciality}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ======= feature section ========*/}
      <section>
        <div className="container px-4 py-10 mx-auto">
          <div className="flex justify-between gap-[50px] lg:gap-16 2xl:gap-0 flex-col lg:flex-row">
            {/* ======= about content ====== */}
            <div className="flex flex-col justify-center order-2 w-full h-full lg:w-1/2 lg:order-1">
              <div className="max-w-xl mx-auto px4 text-start lg:text-left">
                <h2 className="mb-6 text-4xl font-semibold font-roboto leadingsnug md:text-5xl textheadingColor font-poppins">
                  Get virtual treatment <br /> anytime.
                </h2>

                <ul className="pl-4 space-y-4 text-xl font-inter text-[#4e545f]">
                  <li>1. Schedule the appointment directly.</li>
                  <li>
                    2. Search for your physician here, and contact their office.
                  </li>
                  <li>
                    3. View our physicians who are accepting new patients, use
                    the online scheduling tool to select an appointment time.
                  </li>
                </ul>

                <div className="mt-8">
                  <Link to="/">
                    <button className="px-8 py-3 text-lg text-white transition-all bg-blue-600 rounded-3xl hover:bg-blue-700 font-inter">
                      Learn More
                    </button>
                  </Link>
                </div>
              </div>
            </div>

            {/* </div> */}

            {/* ========= about img ======== */}
            <div className="relative w-full lg:w-1/2 xl:w-[570px] justify-start items-start z-10 order-1 lg:order-2">
              <img
                src="https://img.freepik.com/free-photo/doctor-offering-medical-teleconsultation_23-2149329013.jpg?t=st=1744441843~exp=1744445443~hmac=f748bec8deefc75c0c6a1a1efd99ed2d0c7e26660159ab7b4188638fd87da1ca&w=996"
                className="h-[260px] md:h-[430px] w-full lg:w-[660px]"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpecialityMenu;
