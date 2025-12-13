// import React from "react";
// import { BiRightArrowAlt } from "react-icons/bi";
// import { Link } from "react-router-dom";
// import icon1 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon01.png'
// import icon2 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon02.png'
// import icon3 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon03.png'

// const services = [
//   {
//     title: "Find a Doctor",
//     desc: "World class care for everyone. Our health System offers, expert health care. From the lab to the clinic.",
//     link: "/doctors",
//     img: icon1,
//   },
//   {
//     title: "Book Appointment",
//     desc: "Schedule your visit at your convenience. Choose time slots, consult doctors, and skip the waiting line.",
//     link: "/appointments",
//     img: icon2,
//   },
//   {
//     title: "Health Records",
//     desc: "Access your medical records securely from anywhere. View history, prescriptions, reports and more.",
//     link: "/records",
//     img: icon3,
//   },
// ];

// const ServiceCard = () => {
//   return (
//     <div className="px-4 py-16 mx-auto lg:py-24 max-w[1260px]">
//       {/* Header */}
//       <div className="mb-12 text-center">
//         <h2 className="text-3xl font-bold text- md:text-5xl">
//           Providing the Best <br />
//           <span className="text-indigo-600"> Medical Services</span>
//         </h2>
//         <p className="max-w-lg mx-auto mt-4 text-lg text-gray-600">
//           World class care for everyone. Our health system offers unmatched,
//           expert health care.
//         </p>
//       </div>

//       {/* Cards */}
//       <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
//         {services.map((item, index) => (
//           <div
//             key={index}
//             className="flex flex-col items-center justify-center px-4 text-center "
//           >
//             <img src={item.img} alt={item.title} className="w-48 mb-4 h-36" />
//             <h3 className="mb-2 text-2xl font-semibold text-gray-800">
//               {item.title}
//             </h3>
//             <p className="mb-4 text-lg text-[#4e545f]">{item.desc}</p>
//             <Link
//               to={item.link}
//               className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all"
//             >
//               <BiRightArrowAlt className="w-8 h-8 transition-all group-hover:text-white" />
//             </Link>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ServiceCard;


import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";
import { Link } from "react-router-dom";
import icon1 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon01.png'
import icon2 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon02.png'
import icon3 from '/Users/dhruv/Documents/intership-project/mern/Doctor-Appointment-Website/frontend/src/assets/assets_frontend/icon03.png'

const services = [
  {
    title: "Find a Doctor",
    desc: "World class care for everyone. Our health System offers, expert health care. From the lab to the clinic.",
    link: "/doctors",
    img: icon1,
  },
  {
    title: "Book Appointment",
    desc: "Schedule your visit at your convenience. Choose time slots, consult doctors, and skip the waiting line.",
    link: "/appointments",
    img: icon2,
  },
  {
    title: "Health Records",
    desc: "Access your medical records securely from anywhere. View history, prescriptions, reports and more.",
    link: "/records",
    img: icon3,
  },
];

const ServiceCard = () => {
  return (
    <div className="px-4 py-16 mx-auto lg:py-24 max-w[1260px]">
      {/* Header */}
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold md:text-4xl font-poppins">
          Providing the Best <br />
          <span className="text-indigo-600"> Medical Services</span>
        </h2>
        <p className="max-w-lg mx-auto mt-4 text-lg text-gray-600 font-inter">
          World class care for everyone. Our health system offers unmatched,
          expert health care.
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-8 lg:gap-12 md:grid-cols-2 lg:grid-cols-3 ">
        {services.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center px-4 text-center "
          >
            <img 
              src={item.img} 
              alt={item.title} 
              className="object-cover w-48 mb-4 h-36" // Ensuring image maintains its aspect ratio
            />
            <h3 className="mb-2 text-2xl font-semibold text-gray-800 font-poppins">
              {item.title}
            </h3>
            <p className="mb-4 text-lg text-[#4e545f] font-inter">{item.desc}</p>
            <Link
              to={item.link}
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] flex items-center justify-center group hover:bg-blue-600 hover:border-none transition-all"
            >
              <BiRightArrowAlt className="w-8 h-8 transition-all group-hover:text-white" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
