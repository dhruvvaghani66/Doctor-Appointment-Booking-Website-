// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'

// const Doctors = () => {

//   const { speciality } = useParams()
//   const [filterDoc, setFilterDoc] = useState([])
//   const [showFilter, setShowFilter] = useState(false)
//   const navigate = useNavigate()
//   const { doctors } = useContext(AppContext)

//   const applyFilter = () => {
//     if (speciality) {
//       setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
//     } else {
//       setFilterDoc(doctors)
//     }
//   }

//   useEffect(() => {
//     applyFilter()
//   }, [doctors, speciality])

//   return (
//     <div>
//       <p className='text-gray-600'>Browse through the doctors specialist.</p>

//       <div className='flex flex-col items-start gap-5 mt-5 sm:flex-row'>
//         <button className={`py-1 px-3 border rounded text-sm transition-all sm:hidden ${showFilter ? 'bg-primary text-white' : ''}`} onClick={() => setShowFilter(prev => !prev)}>Filters</button>
//         <div className={`flex-col gap-4 text-sm text-gray-600 ${showFilter ? 'flex' : 'hidden sm:flex'}`}>
//           <p onClick={() => speciality === 'General physician' ? navigate('/doctors') : navigate('/doctors/General physician')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'General physician' ? 'bg-indigo-100 text-black' : ''}`}>General physician</p>
//           <p onClick={() => speciality === 'Gynecologist' ? navigate('/doctors') : navigate('/doctors/Gynecologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gynecologist' ? 'bg-indigo-100 text-black' : ''}`}>Gynecologist</p>
//           <p onClick={() => speciality === 'Dermatologist' ? navigate('/doctors') : navigate('/doctors/Dermatologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Dermatologist' ? 'bg-indigo-100 text-black' : ''}`}>Dermatologist</p>
//           <p onClick={() => speciality === 'Pediatricians' ? navigate('/doctors') : navigate('/doctors/Pediatricians')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Pediatricians' ? 'bg-indigo-100 text-black' : ''}`}>Pediatricians</p>
//           <p onClick={() => speciality === 'Neurologist' ? navigate('/doctors') : navigate('/doctors/Neurologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Neurologist' ? 'bg-indigo-100 text-black' : ''}`}>Neurologist</p>
//           <p onClick={() => speciality === 'Gastroenterologist' ? navigate('/doctors') : navigate('/doctors/Gastroenterologist')} className={`w-[94vw] sm:w-auto pl-3 py-1.5 pr-16 border border-gray-300 rounded transition-all cursor-pointer ${speciality === 'Gastroenterologist' ? 'bg-indigo-100 text-black' : ''}`}>Gastroenterologist</p>
//         </div>

//         <div className='grid w-full gap-4 grid-cols-auto gap-y-6'>
//           {
//             filterDoc.map((item, index) => (
//               <div onClick={() => navigate(`/appointment/${item._id}`)} className='border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500' key={index}>
//                 <img className='bg-blue-50' src={item.image} alt="" />
//                 <div className='p-4'>
//                   <div className='flex items-center gap-2 text-sm text-center text-green-500'>
//                     <p className='w-2 h-2 bg-green-500 rounded-full'></p>
//                     <p className=''>Available</p>
//                   </div>
//                   <p className='text-lg font-medium text-gray-900'>{item.name}</p>
//                   <p className='text-sm text-gray-600'>{item.speciality}</p>
//                 </div>
//               </div>
//             ))
//           }
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Doctors

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import {
  FaUserMd,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaBriefcase,
  FaFilter,
} from "react-icons/fa";

const Doctors = () => {
  const { speciality } = useParams();
  const [filterDoc, setFilterDoc] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const navigate = useNavigate();
  const { doctors } = useContext(AppContext);

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter((doc) => doc.speciality === speciality));
    } else {
      setFilterDoc(doctors);
    }
  };

  useEffect(() => {
    applyFilter();
  }, [doctors, speciality]);

  const specialties = [
    "All Specialist",
    "General physician",
    "Gynecologist",
    "Dermatologist",
    "Pediatricians",
    "Neurologist",
    "Gastroenterologist",
  ];

  return (
    <div className="px-4 py-32">
      <h2 className="mb-2 text-2xl font-bold text-gray-800 font-poppins">
        Find Your Specialist
      </h2>
      <p className="mb-6 text-gray-600 font-poppins">
        Browse and book appointments with top-rated doctors.
      </p>

      {/* Filter Toggle for Mobile */}
      <div className="mb-4 sm:hidden">
        <button
          className="flex items-center gap-2 px-4 py-2 text-white bg-blue-600 rounded-lg shadow"
          onClick={() => setShowFilter((prev) => !prev)}
        >
          <FaFilter />
          {showFilter ? "Hide Filters" : "Show Filters"}
        </button>
      </div>

      <div className="flex flex-col items-start gap-5 sm:flex-row">
        {/* Sidebar Filter */}
        <div
          className={`w-full sm:w-1/4 bg-white border rounded-lg p-4 sm:p-5 ${
            showFilter ? "block" : "hidden sm:block"
          }`}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-1 sm:gap-4 font-poppins">
            {specialties.map((type) => (
              <button
                key={type}
                onClick={() => {
                  if (type === "All Specialist") {
                    navigate("/doctors");
                  } else {
                    navigate(`/doctors/${type}`);
                  }
                  if (window.innerWidth < 640) setShowFilter(false); // auto-close on mobile
                }}
                className={`px-4 py-2 text-sm rounded-lg transition-all shadow-sm border ${
                  speciality === type ||
                  (!speciality && type === "All Specialist")
                    ? "bg-blue-600 text-white font-semibold"
                    : "bg-gray-50 hover:bg-blue-100 text-gray-800"
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        {/* Doctor Cards */}
        <div className="grid w-full gap-6 sm:w-3/4 sm:grid-cols-2 lg:grid-cols-3">
          {filterDoc.length > 0 ? (
            filterDoc.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden border border-blue-100 shadow-xl cursor-pointer rounded-2xl bg-white/60 backdrop-blur-sm hover:shadow-xl hover:border-blue-300 duration-400 group"
              >
                {/* Image */}
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-full duration-500 h-80 hover:scale-110"
                  />
                </div>

                <div className="p-4 space-y-1">
                  {/* Availability */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-green-600 font-inter">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Available</span>
                  </div>

                  {/* Name & Speciality */}
                  <p className="flex items-center gap-2 text-xl font-bold text-gray-800 font-poppins">
                    <FaUserMd className="w-[18px] h-6 text-blue-500" />
                    {item.name}
                  </p>
                  <p className="text-[#6b7280]  font-inter">{item.speciality}</p>

                  {/* Info */}
                  <div className="grid grid-cols-1 pt-2 text-sm text-gray-700 gap-x-4 gap-y-3 font-inter">
                    <div className="flex items-center gap-2">
                      <FaBriefcase className="text-[#4b5563]" />
                      <span>{item.experience}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaMoneyBillWave className="text-[#4b5563]" />
                      <span>₹{item.fees} per visit</span>
                    </div>
                    <div className="flex items-center col-span-2 gap-2">
                      <FaCalendarAlt className="text-[#4b5563]" />
                      <span>
                        {new Date(item.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>
                  </div>

                  <hr className="my-3 border-gray-200" />

                  {/* Book Button */}
                  <div className="pt-1 text-center">
                    <button
                      onClick={() => navigate(`/appointment/${item._id}`)}
                      className="w-full px-8 py-2 font-semibold text-blue-600 transition rounded-md bg-blue-50 hover:bg-blue-100 font-poppins"
                    >
                      Book Appointment
                    </button>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="mt-10 italic text-center text-gray-500 col-span-full font-poppins">
              No doctors available for this speciality.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Doctors;
