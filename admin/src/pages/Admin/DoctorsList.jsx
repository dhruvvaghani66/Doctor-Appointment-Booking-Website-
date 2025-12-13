// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { FaArrowRight, FaUserMd } from "react-icons/fa";

// const DoctorsList = () => {
//   const { aToken, doctors, getAllDoctors, changeAvailability } =
//     useContext(AdminContext);

//   useEffect(() => {
//     if (aToken) {
//       getAllDoctors();
//     }
//   }, [aToken]);

//   return (
//     <div className="px-4 xl:px-10">
//       <h1 className="text-lg font-medium">All Doctors</h1>
//       <div className="grid gap-10 md:gap-4 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
//         {doctors.map((item, index) => (
//           <div
//             className="overflow-hidden border border-indigo-200 cursor-pointer rounded-xl group"
//             key={index}
//           >
//             {/* <img className='transition-all duration-500 bg-indigo-50 group-hover:bg-primary' src={item.image} alt="" /> */}
//             <div className="relative overflow-hidden rounded-t-2xl bg-[#EAEFFF]">
//               <img
//                 src={item.image}
//                 alt={item.name}
//                 className="object-cover w-full duration-500 ease-in-out h-80 trasition-transform group-hover:scale-110"
//               />
//               {/* Speciality Tag */}
//               <div className="absolute px-3 py-1 text-xs text-white rounded-full shadow-md top-3 left-3 bg-gradient-to-r from-blue-800 to-cyan-600">
//                 {item.speciality}
//               </div>
//             </div>
//             {/*  */}
//             <div className="relative z-10 p-5 space-y-2">
//               {/* Availability */}
//               <div className="flex items-center gap-2 text-sm font-medium text-green-600">
//                 <span className="w-2 h-2 bg-green-500 rounded-full"></span>{" "}
//                 Available
//               </div>

//               {/* Name */}
//               <div className="flex items-center gap-2 text-2xl font-semibold textgray-800">
//                 <FaUserMd className="text-blue-500" />
//                 {item.name}
//               </div>

//               {/* Degree */}

//               {/* Experience + Arrow */}
//               <div className="items-center justify-between pt-2 mt-4 border-t border-gray-200 fle">
//                 <span className="text-sm font-medium text-gray-700">
//                   Experience: {item.experience}
//                 </span>

//                 <div className="flex items-center gap-1 mt-2 text-sm">
//                   <input
//                     onChange={() => changeAvailability(item._id)}
//                     type="checkbox"
//                     checked={item.available}
//                   />
//                   <p>Available</p>
//                 </div>
//               </div>
//             </div>
//             {/*  */}

//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default DoctorsList;

// make these is a DoctorsList page of admin side my doctor booking app and you can  a refine these full code or rewrite new code as "Design a sleek, modern, and visually stunning UI for a web application using responsive layouts. The UI should be user-friendly, advanced, and award-winning in look. Use soft shadows, gradients, neumorphism or glassmorphism effects (as suitable), and smooth animations (Framer Motion-style or CSS transitions). Include clearly defined sections, beautiful cards, buttons with hover effects, stylish modals, and clean typography.

// Color palette should be soft yet vibrant (e.g., pastel blue, soft blues, gentle oranges, or minimal dark theme). Add visual highlights and call-to-actions (CTAs) using subtle animations. Keep the layout responsive and mobile-friendly with smooth transitions and smart use of whitespace.

// Overall vibe: Professional, clean, next-gen startup-level interface. Use modern CSS (Tailwind), or custom styled-components with Framer Motion for interactive transitions.

// Do not change any backend logic. Focus only on the frontend. The UI must be plug-and-play with existing backend APIs and logic.

// Add necessary UI enhancements, transitions, highlights, hover effects, and layout improvements for maximum visual impact."
// and here for available text and check box make as I say bevause is very important for admin for like when it ticks then its shown in user parts that doctor is there for booking appointment and when I uncheck then in user side its shows data but it also shows that doctor is not available for now so user cannot bookapointment and make these proper

// import React, { useContext, useEffect, useState } from 'react';
// import { AdminContext } from '../../context/AdminContext';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   UserRound,
//   Calendar,
//   Medal,
//   Stethoscope,
//   CheckCircle,
//   XCircle,
//   Search,
//   Filter,
//   RefreshCw,
// } from 'lucide-react';

// const DoctorsList = () => {
//   const { aToken, doctors, getAllDoctors, changeAvailability } = useContext(AdminContext);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isRefreshing, setIsRefreshing] = useState(false);

//   useEffect(() => {
//     if (aToken) {
//       getAllDoctors();
//     }
//   }, [aToken]);

//   const handleRefresh = async () => {
//     setIsRefreshing(true);
//     await getAllDoctors();
//     setTimeout(() => setIsRefreshing(false), 1000);
//   };

//   const filteredDoctors = doctors.filter(doctor =>
//     doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     doctor.speciality.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen p-6 md:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <motion.div
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="mx-auto space-y-8 max-w-7xl"
//       >
//         {/* Header Section */}
//         <div className="flex flex-col justify-between gap-6 md:flex-row md:items-center">
//           <motion.div
//             initial={{ opacity: 0, x: -20 }}
//             animate={{ opacity: 1, x: 0 }}
//           >
//             <h1 className="text-3xl font-bold text-transparent md:text-4xl bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text">
//               Medical Professionals
//             </h1>
//             <p className="mt-2 text-gray-500">
//               {filteredDoctors.length} Healthcare experts in your team
//             </p>
//           </motion.div>

//           {/* Search and Filter */}
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               className="relative"
//             >
//               <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type="text"
//                 placeholder="Search doctors..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full py-2 pl-10 pr-4 transition-all border border-gray-200 outline-none sm:w-64 bg-white/70 backdrop-blur-sm rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
//               />
//             </motion.div>

//             <motion.button
//               whileHover={{ scale: 1.02 }}
//               whileTap={{ scale: 0.98 }}
//               onClick={handleRefresh}
//               className="flex items-center gap-2 px-4 py-2 transition-all border border-gray-200 bg-white/70 backdrop-blur-sm rounded-xl hover:border-blue-400"
//             >
//               <RefreshCw className={`w-5 h-5 text-gray-600 ${isRefreshing ? 'animate-spin' : ''}`} />
//               <span className="text-gray-600">Refresh</span>
//             </motion.button>
//           </div>
//         </div>

//         {/* Status Legend */}
//         <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500">
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-green-400 rounded-full"></div>
//             <span>Available for Consultation</span>
//           </div>
//           <div className="flex items-center gap-2">
//             <div className="w-3 h-3 bg-gray-300 rounded-full"></div>
//             <span>Currently Unavailable</span>
//           </div>
//         </div>

//         {/* Doctors Grid */}
//         <motion.div
//           layout
//           className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
//         >
//           <AnimatePresence>
//             {filteredDoctors.map((doctor) => (
//               <motion.div
//                 key={doctor._id}
//                 layout
//                 initial={{ opacity: 0, scale: 0.9 }}
//                 animate={{ opacity: 1, scale: 1 }}
//                 exit={{ opacity: 0, scale: 0.9 }}
//                 className="relative overflow-hidden transition-all duration-300 shadow-sm group bg-white/80 backdrop-blur-lg rounded-2xl hover:shadow-xl"
//               >
//                 <div className="relative h-48 overflow-hidden">
//                   <motion.img
//                     whileHover={{ scale: 1.05 }}
//                     src={doctor.image}
//                     alt={doctor.name}
//                     className="object-cover w-full h-full"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     whileHover={{ opacity: 1 }}
//                     className="absolute inset-0 transition-all duration-300 bg-blue-500/20 backdrop-blur-sm"
//                   />
//                   <motion.div
//                     initial={{ opacity: 0, y: 20 }}
//                     whileHover={{ opacity: 1, y: 0 }}
//                     className="absolute text-white bottom-4 left-4 right-4"
//                   >
//                     <p className="text-sm font-medium">{doctor.speciality}</p>
//                   </motion.div>
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-start justify-between">
//                     <div>
//                       <h3 className="text-xl font-semibold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
//                         {doctor.name}
//                       </h3>
//                       <div className="flex items-center gap-2 mt-1">
//                         <Medal className="w-4 h-4 text-blue-500" />
//                         <p className="text-sm text-gray-600">{doctor.experience}</p>
//                       </div>
//                     </div>
//                     <motion.div
//                       whileTap={{ scale: 0.95 }}
//                       className="relative"
//                     >
//                       <input
//                         type="checkbox"
//                         checked={doctor.available}
//                         onChange={() => changeAvailability(doctor._id)}
//                         className="sr-only peer"
//                         id={`availability-${doctor._id}`}
//                       />
//                       <label
//                         htmlFor={`availability-${doctor._id}`}
//                         className="relative h-6 transition-colors duration-300 bg-gray-200 rounded-full cursor-pointer w-11 peer-checked:bg-blue-500"
//                       >
//                         <span className="absolute w-4 h-4 transition-transform duration-300 bg-white rounded-full left-1 top-1 peer-checked:translate-x-5" />
//                       </label>
//                     </motion.div>
//                   </div>

//                   <div className="flex flex-wrap gap-2 mt-4">
//                     <span className="px-3 py-1 text-xs text-blue-600 rounded-full bg-blue-50">
//                       {doctor.experience || '5+ Years'}
//                     </span>
//                     <span className={`px-3 py-1 text-xs rounded-full ${
//                       doctor.available
//                         ? 'bg-green-50 text-green-600'
//                         : 'bg-gray-50 text-gray-600'
//                     }`}>
//                       {doctor.available ? 'Available' : 'Unavailable'}
//                     </span>
//                   </div>

//                   <motion.div
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="pt-4 mt-4 border-t border-gray-100"
//                   >
//                     <div className="flex items-center justify-between text-sm text-gray-500">
//                       <div className="flex items-center gap-1">
//                         <Calendar className="w-4 h-4" />
//                         <span>Next Available</span>
//                       </div>
//                       <span className="font-medium text-blue-600">Today</span>
//                     </div>
//                   </motion.div>
//                 </div>

//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   className="absolute top-4 right-4"
//                 >
//                   {doctor.available ? (
//                     <div className="flex items-center justify-center w-8 h-8 bg-green-400 rounded-full shadow-lg">
//                       <CheckCircle className="w-5 h-5 text-white" />
//                     </div>
//                   ) : (
//                     <div className="flex items-center justify-center w-8 h-8 bg-gray-400 rounded-full shadow-lg">
//                       <XCircle className="w-5 h-5 text-white" />
//                     </div>
//                   )}
//                 </motion.div>
//               </motion.div>
//             ))}
//           </AnimatePresence>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default DoctorsList;

import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import {
  UserRound,
  Calendar,
  GraduationCap,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react";

const DoctorsList = () => {
  const { aToken, doctors, getAllDoctors, changeAvailability } =
    useContext(AdminContext);

  useEffect(() => {
    if (aToken) {
      getAllDoctors();
    }
  }, [aToken]);

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-blue-50 to-indigo-50 xl:p-10">
      <div className="mx-auto max-w-7xl">
        <h1 className="flex items-center gap-3 mb-8 text-3xl font-bold text-gray-800">
          <UserRound className="text-indigo-600" size={32} />
          Manage Doctors
        </h1>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {doctors.map((doctor, index) => (
            <div
              key={index}
              className="overflow-hidden transition-all duration-300 bg-white border shadow-lg rounded-2xl hover:shadow-xl border-indigo-50"
            >
              {/* Image Section */}
              <div className="relative overflow-hidden h-80">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="object-cover w-full h-full transition-transform duration-500 transform hover:scale-110"
                />
                <div className="absolute top-4 left-4 px-4 py-1.5 bg-gradient-to-r from-indigo-600 to-blue-500 rounded-full text-white text-sm font-medium shadow-lg">
                  {doctor.speciality}
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 space-y-4">
                {/* Name and Status */}
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">
                    {doctor.name}
                  </h2>
                  <div className="flex items-center gap-2">
                    {doctor.available ? (
                      <div className="flex items-center gap-2 text-emerald-600">
                        <CheckCircle size={18} />
                        <span className="text-sm font-medium">Available</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-rose-600">
                        <XCircle size={18} />
                        <span className="text-sm font-medium">Unavailable</span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <GraduationCap className="text-indigo-500" size={18} />
                    <span className="text-sm">{doctor.degree}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Clock className="text-indigo-500" size={18} />
                    <span className="text-sm">
                      {doctor.experience} years experience
                    </span>
                  </div>
                </div>

                {/* Availability Toggle */}
                <div className="pt-4 border-t border-gray-100">
                  <label className="flex items-center justify-between cursor-pointer">
                    <span className="text-sm font-medium text-gray-700">
                      Availability Status
                    </span>
                    <div className="relative">
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={doctor.available}
                        onChange={() => changeAvailability(doctor._id)}
                      />
                      <div
                        className={`block w-14 h-8 rounded-full transition-colors duration-300 ${
                          doctor.available ? "bg-emerald-500" : "bg-gray-300"
                        }`}
                      >
                        <div
                          className={`absolute left-1 top-1 bg-white w-6 h-6 rounded-full transition-transform duration-300 ${
                            doctor.available ? "transform translate-x-6" : ""
                          }`}
                        ></div>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoctorsList;
