// import React, { useContext, useEffect, useState } from 'react'
// import { useNavigate, useParams } from 'react-router-dom'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets_frontend/assets'
// import RelatedDoctor from '../components/RelatedDoctor'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const Appointment = () => {

//   const { docId } = useParams()
//   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext)

//   const daysOfWeek = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT']

//   const navigate = useNavigate()
//   const [docInfo, setDocInfo] = useState(null)
//   const [docSlots, setDocSlots] = useState([])
//   const [slotIndex, setSlotIndex] = useState(0)
//   const [slotTime, setSlotTime] = useState('')

//   const fetchDocInfo = async () => {
//     const docInfo = doctors.find(doc => doc._id === docId)
//     setDocInfo(docInfo)
//   }

//   const getAvailableSlots = async () => {
//     setDocSlots([])

//     // getting current date
//     let today = new Date()

//     for (let i = 0; i < 7; i++) {
//       // getting date with index
//       let currentDate = new Date(today)
//       currentDate.setDate(today.getDate() + i)

//       // setting end time of the date with index
//       let endTime = new Date()
//       endTime.setDate(today.getDate() + i)
//       endTime.setHours(21, 0, 0, 0)

//       // setting hours
//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(currentDate.getHours() > 10 ? currentDate.getHours() + 1 : 10)
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0)
//       } else {
//         currentDate.setHours(10)
//         currentDate.setMinutes(0)
//       }

//       let timeSlots = []

//       while (currentDate < endTime) {
//         let formattedTime = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })

//         let day = currentDate.getDate()
//         let month = currentDate.getMonth() + 1
//         let year = currentDate.getFullYear()

//         const slotDate = day + '_' + month + '_' + year
//         const slotTime = formattedTime

//         const isSlotAvailable = docInfo.slots_booked[slotDate] && docInfo.slots_booked[slotDate].includes(slotTime) ? false : true

//         if (isSlotAvailable) {
//           // add slot to array
//           timeSlots.push({ datetime: new Date(currentDate), time: formattedTime })
//         }

//         // Increment current time by 30 minutes
//         currentDate.setMinutes(currentDate.getMinutes() + 30)
//       }

//       setDocSlots(prev => ([...prev, timeSlots]))
//     }
//   }

//   const bookAppointment = async () => {

//     if (!token) {
//       toast.warn('Login to book appointment')
//       return navigate('/login')
//     }

//     try {

//       const date = docSlots[slotIndex][0].datetime

//       let day = date.getDate()
//       let month = date.getMonth() + 1
//       let year = date.getFullYear()

//       const slotDate = day + '_' + month + '_' + year

//       const { data } = await axios.post(backendUrl + '/api/user/book-appointment', { docId, slotDate, slotTime }, { headers: { token } })

//       if (data.success) {
//         toast.success(data.message)
//         getDoctorsData()
//         navigate('/my-appointments')
//       } else {
//         toast.error(data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     fetchDocInfo(docInfo)
//   }, [doctors, docId])

//   useEffect(() => {
//     getAvailableSlots()
//   }, [docInfo])

//   useEffect(() => {
//     console.log(docSlots)
//   }, [docSlots])

//   return docInfo && (
//     <div>
//       {/* ---------- Doctor Details ---------- */}
//       <div className="flex flex-col gap-4 sm:flex-row">
//         <div>
//           <img className='w-full rounded-lg bg-primary sm:max-w-72' src={docInfo.image} alt="" />
//         </div>

//         <div className="flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0">
//           {/* ---------- Doc Info : name, degree, experience ---------- */}
//           <p className="flex items-center gap-2 text-2xl font-medium text-gray-900">{docInfo.name} <img className='w-5' src={assets.verified_icon} alt="" /></p>

//           <div className="flex items-center gap-2 mt-1 text-sm text-gray-600">
//             <p>{docInfo.degree} - {docInfo.speciality}</p>
//             <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
//           </div>

//           {/* ---------- Doctor About ---------- */}
//           <div>
//             <p className="flex items-center gap-1 mt-3 text-sm font-medium text-gray-900">About <img src={assets.info_icon} alt="" /></p>
//             <p className="text-sm text-gray-500 max-w-[700px] mt-1">{docInfo.about}</p>
//           </div>

//           <p className="mt-4 font-medium text-gray-500">Appointment fee: <span className='font-bold text-gray-600'>{currencySymbol}{docInfo.fees}</span></p>
//         </div>
//       </div>

//       {/* ---------- Booking Slots ---------- */}
//       <div className="mt-4 font-medium text-gray-700 sm:ml-72 sm:pl-4">
//         <p>Booking slots</p>

//         <div className="flex items-center w-full gap-3 mt-4 overflow-x-scroll">
//           {
//             docSlots.length && docSlots.map((item, index) => (
//               <div onClick={() => setSlotIndex(index)} className={`text-center py-6 min-w-16 rounded-full cursor-pointer ${slotIndex === index ? 'bg-primary text-white' : 'border border-gray-200'}`} key={index}>
//                 <p>{item[0] && daysOfWeek[item[0].datetime.getDay()]}</p>
//                 <p>{item[0] && item[0].datetime.getDate()}</p>
//               </div>
//             ))
//           }
//         </div>

//         <div className='flex items-center w-full gap-3 mt-4 overflow-x-scroll'>
//           {
//             docSlots.length && docSlots[slotIndex].map((item, index) => (
//               <p onClick={() => setSlotTime(item.time)} className={`text-sm font-light flex-shrink-0 px-5 py-2 rounded-full cursor-pointer ${item.time === slotTime ? 'bg-primary text-white' : 'text-gray-400 border border-gray-300'}`} key={index}>
//                 {item.time.toLowerCase()}
//               </p>
//             ))
//           }
//         </div>

//         <button onClick={bookAppointment} className="py-3 my-6 text-sm font-light text-white rounded-full bg-primary px-14">Book an appointment</button>
//       </div>

//       {/* Listing Related Doctors */}
//       <RelatedDoctor docId={docId} speciality={docInfo.speciality} />

//     </div>
//   )
// }

// export default Appointment

// import React, { useContext, useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import { AppContext } from "../context/AppContext";
// import { assets } from "../assets/assets_frontend/assets";
// import RelatedDoctor from "../components/RelatedDoctor";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { Calendar, Clock, Award, Star, Stethoscope, ChevronRight } from 'lucide-react';

// const Appointment = () => {
//   const { docId } = useParams();
//   const { doctors, currencySymbol, backendUrl, token, getDoctorsData } = useContext(AppContext);
//   const navigate = useNavigate();
//   const [docInfo, setDocInfo] = useState(null);
//   const [docSlots, setDocSlots] = useState([]);
//   const [slotIndex, setSlotIndex] = useState(0);
//   const [slotTime, setSlotTime] = useState("");
//   const [isLoading, setIsLoading] = useState(false);

//   const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

//   const fetchDocInfo = async () => {
//     const info = doctors.find((doc) => doc._id === docId);
//     setDocInfo(info);
//   };

//   const getAvailableSlots = async () => {
//     setDocSlots([]);
//     let today = new Date();
//     for (let i = 0; i < 7; i++) {
//       let currentDate = new Date(today);
//       currentDate.setDate(today.getDate() + i);

//       let endTime = new Date(currentDate);
//       endTime.setHours(21, 0, 0, 0);

//       if (today.getDate() === currentDate.getDate()) {
//         currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
//         currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
//       } else {
//         currentDate.setHours(10);
//         currentDate.setMinutes(0);
//       }

//       let timeSlots = [];
//       while (currentDate < endTime) {
//         const formattedTime = currentDate.toLocaleTimeString([], {
//           hour: "2-digit",
//           minute: "2-digit",
//         });
//         const slotDate = `${currentDate.getDate()}_${
//           currentDate.getMonth() + 1
//         }_${currentDate.getFullYear()}`;
//         const isAvailable =
//           !docInfo.slots_booked[slotDate]?.includes(formattedTime);
//         if (isAvailable) {
//           timeSlots.push({
//             datetime: new Date(currentDate),
//             time: formattedTime,
//           });
//         }
//         currentDate.setMinutes(currentDate.getMinutes() + 30);
//       }
//       setDocSlots((prev) => [...prev, timeSlots]);
//     }
//   };

//   const bookAppointment = async () => {
//     if (!token) {
//       toast.warn("Login to book appointment");
//       return navigate("/login");
//     }
//     setIsLoading(true);
//     try {
//       const date = docSlots[slotIndex][0].datetime;
//       const slotDate = `${date.getDate()}_${
//         date.getMonth() + 1
//       }_${date.getFullYear()}`;

//       const { data } = await axios.post(
//         `${backendUrl}/api/user/book-appointment`,
//         { docId, slotDate, slotTime },
//         { headers: { token } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         getDoctorsData();
//         navigate("/my-appointments");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchDocInfo();
//   }, [doctors, docId]);

//   useEffect(() => {
//     if (docInfo) getAvailableSlots();
//   }, [docInfo]);

//   return (
//     docInfo && (
//       <div className="min-h-screen px-4 py-8 bg-gradient-to-br from-indigo-50 via-white to-purple-50 sm:px-6 lg:px-8">
//         <div className="mx-auto space-y-8 max-w-7xl">
//           {/* Hero Section */}
//           <div className="flex flex-col gap-6 md:flex-row animate-fade-in">
//             {/* Doctor Image Card */}
//             <div className="w-full md:w-1/3 lg:w-1/4">
//               <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl transition-transform hover:scale-[1.02] duration-300">
//                 <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/30 to-transparent"></div>
//                 <img
//                   src={docInfo.image}
//                   alt={docInfo.name}
//                   className="w-full h-full object-cover aspect-[3/4]"
//                 />
//                 <div className="absolute z-20 bottom-4 left-4 right-4">
//                   <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/90 backdrop-blur-sm">
//                     <Star className="w-5 h-5 text-yellow-400" />
//                     <span className="text-sm font-medium">Top Rated Doctor</span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Doctor Info Card */}
//             <div className="flex-1">
//               <div className="bg-white rounded-2xl shadow-xl p-8 space-y-6 transition-transform hover:scale-[1.01] duration-300">
//                 <div className="space-y-4">
//                   <div className="flex items-center gap-3">
//                     <h1 className="text-3xl font-bold text-gray-900">{docInfo.name}</h1>
//                     <img src={assets.verified_icon} alt="verified" className="w-6 h-6" />
//                   </div>

//                   <div className="flex flex-wrap gap-4">
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Stethoscope className="w-5 h-5 text-indigo-600" />
//                       <span>{docInfo.speciality}</span>
//                     </div>
//                     <div className="flex items-center gap-2 text-gray-600">
//                       <Award className="w-5 h-5 text-indigo-600" />
//                       <span>{docInfo.degree}</span>
//                     </div>
//                   </div>

//                   <div className="flex flex-wrap gap-3">
//                     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-800 bg-indigo-100 rounded-full">
//                       {docInfo.experience} years experience
//                     </span>
//                     <span className="inline-flex items-center px-4 py-2 text-sm font-medium text-green-800 bg-green-100 rounded-full">
//                       Fees: {currencySymbol}{docInfo.fees}
//                     </span>
//                   </div>

//                   <p className="leading-relaxed text-gray-600">{docInfo.about}</p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Booking Section */}
//           <div className="p-8 space-y-8 bg-white shadow-xl rounded-2xl animate-fade-in-up">
//             <div className="flex items-center gap-3">
//               <Calendar className="w-6 h-6 text-indigo-600" />
//               <h2 className="text-2xl font-bold text-gray-900">Book Appointment</h2>
//             </div>

//             {/* Date Selection */}
//             <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
//               {docSlots.map((day, index) => (
//                 <button
//                   key={index}
//                   onClick={() => setSlotIndex(index)}
//                   className={`relative p-4 rounded-xl text-center transition-all duration-300
//                     ${slotIndex === index
//                       ? 'bg-indigo-600 text-white shadow-lg scale-105'
//                       : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:scale-105'}`}
//                 >
//                   <p className="font-semibold">
//                     {day[0]?.datetime && daysOfWeek[day[0].datetime.getDay()]}
//                   </p>
//                   <p className="mt-1 text-sm">
//                     {day[0]?.datetime && day[0].datetime.getDate()}
//                   </p>
//                 </button>
//               ))}
//             </div>

//             {/* Time Slots */}
//             <div className="space-y-4">
//               <div className="flex items-center gap-3">
//                 <Clock className="w-6 h-6 text-indigo-600" />
//                 <h3 className="text-xl font-semibold text-gray-900">Available Time Slots</h3>
//               </div>

//               <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
//                 {docSlots[slotIndex]?.map((slot, index) => (
//                   <button
//                     key={index}
//                     onClick={() => setSlotTime(slot.time)}
//                     className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300
//                       ${slot.time === slotTime
//                         ? 'bg-indigo-600 text-white shadow-lg scale-105'
//                         : 'bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:scale-105'}`}
//                   >
//                     {slot.time.toLowerCase()}
//                   </button>
//                 ))}
//               </div>
//             </div>

//             {/* Book Button */}
//             <div className="flex justify-center pt-4">
//               <button
//                 onClick={bookAppointment}
//                 disabled={isLoading || !slotTime}
//                 className={`
//                   flex items-center gap-2 px-8 py-4 rounded-xl text-lg font-semibold
//                   transition-all duration-300 transform
//                   ${isLoading || !slotTime
//                     ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
//                     : 'bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 hover:scale-105 active:scale-95'
//                   }
//                 `}
//               >
//                 Book Appointment
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//             </div>
//           </div>

//           {/* Related Doctors Section */}
//           <div className="space-y-6 animate-fade-in-up">
//             <h2 className="text-2xl font-bold text-gray-900">
//               Other Recommended Doctors
//             </h2>
//             <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
//           </div>
//         </div>
//       </div>
//     )
//   );
// };

// export default Appointment;

import React, { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../context/AppContext";
import { assets } from "../assets/assets_frontend/assets";
import RelatedDoctor from "../components/RelatedDoctor";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Calendar,
  Clock,
  Award,
  Star,
  Stethoscope,
  ChevronRight,
  MapPin,
  ThumbsUp,
  Users,
  Shield,
  Phone,
} from "lucide-react";

const Appointment = () => {
  const { docId } = useParams();
  const { doctors, currencySymbol, backendUrl, token, getDoctorsData } =
    useContext(AppContext);
  const navigate = useNavigate();
  const [docInfo, setDocInfo] = useState(null);
  const [docSlots, setDocSlots] = useState([]);
  const [slotIndex, setSlotIndex] = useState(0);
  const [slotTime, setSlotTime] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const fetchDocInfo = async () => {
    const info = doctors.find((doc) => doc._id === docId);
    setDocInfo(info);
  };

  const getAvailableSlots = async () => {
    setDocSlots([]);
    let today = new Date();
    for (let i = 0; i < 7; i++) {
      let currentDate = new Date(today);
      currentDate.setDate(today.getDate() + i);

      let endTime = new Date(currentDate);
      endTime.setHours(21, 0, 0, 0);

      if (today.getDate() === currentDate.getDate()) {
        currentDate.setHours(Math.max(currentDate.getHours() + 1, 10));
        currentDate.setMinutes(currentDate.getMinutes() > 30 ? 30 : 0);
      } else {
        currentDate.setHours(10);
        currentDate.setMinutes(0);
      }

      let timeSlots = [];
      while (currentDate < endTime) {
        const formattedTime = currentDate.toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        });
        const slotDate = `${currentDate.getDate()}_${
          currentDate.getMonth() + 1
        }_${currentDate.getFullYear()}`;
        const isAvailable =
          !docInfo.slots_booked[slotDate]?.includes(formattedTime);
        if (isAvailable) {
          timeSlots.push({
            datetime: new Date(currentDate),
            time: formattedTime,
          });
        }
        currentDate.setMinutes(currentDate.getMinutes() + 30);
      }
      setDocSlots((prev) => [...prev, timeSlots]);
    }
  };

  const bookAppointment = async () => {
    if (!token) {
      toast.warn("Login to book appointment");
      return navigate("/login");
    }
    setIsLoading(true);
    try {
      const date = docSlots[slotIndex][0].datetime;
      const slotDate = `${date.getDate()}_${
        date.getMonth() + 1
      }_${date.getFullYear()}`;

      const { data } = await axios.post(
        `${backendUrl}/api/user/book-appointment`,
        { docId, slotDate, slotTime },
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        getDoctorsData();
        navigate("/my-appointments");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchDocInfo();
  }, [doctors, docId]);

  useEffect(() => {
    if (docInfo) getAvailableSlots();
  }, [docInfo]);

  return (
    docInfo && (
      <div className="min-h-screen px-4 py-12 mt-16 bg-gradient-to-br from-indigo-50 via-white to-purple-50 sm:px-6 lg:px-8">
        <div className="mx-auto space-y-10 max-w-7xl">
          {/* Hero Section */}
          <div className="flex flex-col gap-8 lg:flex-row animate-fade-in">
            {/* Doctor Image Card */}
            <div className="w-full lg:w-1/3">
              <div className="relative transition-all duration-500 bg-white shadow-2xl group rounded-3xl hover:shadow-indigo-200">
                <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-3xl group-hover:opacity-100"></div>
                <img
                  src={docInfo.image}
                  alt={docInfo.name}
                  className="w-full h-[500px] object-cover rounded-3xl"
                />
                <div className="absolute z-20 transition-all duration-500 transform translate-y-4 opacity-0 bottom-6 left-6 right-6 group-hover:translate-y-0 group-hover:opacity-100">
                  <div className="space-y-4 font-inter">
                    <div className="flex items-center gap-3 p-4 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl">
                      <Star className="w-5 h-5 text-yellow-500" />
                      <span className="font-medium text-gray-800">
                        Top Rated Specialist
                      </span>
                    </div>
                    <div className="flex items-center gap-3 p-4 shadow-lg bg-white/95 backdrop-blur-sm rounded-2xl">
                      <Users className="w-5 h-5 text-blue-500" />
                      <span className="font-medium text-gray-800">
                        1000+ Patients Treated
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Doctor Info Card */}
            <div className="flex-1">
              <div className="p-8 space-y-8 transition-shadow duration-500 bg-white shadow-2xl rounded-3xl lg:p-10 hover:shadow-indigo-200">
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <h1 className="text-4xl font-bold text-gray-900 font-poppins">
                      {docInfo.name}
                    </h1>
                    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 font-inter">
                      <img
                        src={assets.verified_icon}
                        alt="verified"
                        className="w-6 h-6"
                      />
                      <span className="font-medium text-blue-700">
                        Verified
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-6 md:grid-cols-2 font-inter">
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                      <Stethoscope className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-500">Specialization</p>
                        <p className="font-medium text-gray-900">
                          {docInfo.speciality}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl">
                      <Award className="w-6 h-6 text-indigo-600" />
                      <div>
                        <p className="text-sm text-gray-500">Qualification</p>
                        <p className="font-medium text-gray-900">
                          {docInfo.degree}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 font-inter">
                    <div className="flex items-center gap-2 px-6 py-3 bg-indigo-50 rounded-2xl">
                      <ThumbsUp className="w-5 h-5 text-indigo-600" />
                      <span className="font-medium text-indigo-900">
                        {docInfo.experience} Years Experience
                      </span>
                    </div>
                    <div className="flex items-center gap-2 px-6 py-3 bg-green-50 rounded-2xl">
                      <Shield className="w-5 h-5 text-green-600" />
                      <span className="font-medium text-green-900">
                        Fees: ₹{docInfo.fees}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-gray-900 font-inter">
                      About Doctor
                    </h3>
                    <p className="leading-relaxed text-gray-600 font-poppins">
                      {docInfo.about}
                    </p>
                  </div>

                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-2xl font-poppins">
                    <Phone className="w-6 h-6 text-blue-600" />
                    <div>
                      <p className="text-sm text-blue-600">
                        Available for Consultation
                      </p>
                      <p className="font-medium text-blue-900">
                        Mon - Sat, 10:00 AM - 9:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Section */}
          <div className="p-8 space-y-8 transition-shadow duration-500 bg-white shadow-2xl rounded-3xl lg:p-10 animate-fade-in-up hover:shadow-indigo-200">
            <div className="flex items-center gap-4 pb-6 border-b border-gray-100">
              <Calendar className="w-8 h-8 text-indigo-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 font-poppins">
                  Schedule Appointment
                </h2>
                <p className="text-gray-500 font-inter">
                  Choose your preferred date and time
                </p>
              </div>
            </div>

            {/* Date Selection */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 font-poppins">
              {docSlots.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setSlotIndex(index)}
                  className={`relative p-6 rounded-2xl text-center transition-all duration-500 
                    ${
                      slotIndex === index
                        ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                        : "bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:scale-105"
                    }`}
                >
                  <p className="text-lg font-semibold">
                    {day[0]?.datetime && daysOfWeek[day[0].datetime.getDay()]}
                  </p>
                  <p className="mt-1 text-sm opacity-80">
                    {day[0]?.datetime && day[0].datetime.getDate()}
                  </p>
                </button>
              ))}
            </div>

            {/* Time Slots */}
            <div className="space-y-6 font-poppins">
              <div className="flex items-center gap-4">
                <Clock className="w-8 h-8 text-indigo-600" />
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Available Time Slots
                  </h3>
                  <p className="text-gray-500">Select your preferred time</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
                {docSlots[slotIndex]?.map((slot, index) => (
                  <button
                    key={index}
                    onClick={() => setSlotTime(slot.time)}
                    className={`px-6 py-4 rounded-2xl text-base font-medium transition-all duration-500
                      ${
                        slot.time === slotTime
                          ? "bg-indigo-600 text-white shadow-lg shadow-indigo-200 scale-105"
                          : "bg-gray-50 text-gray-700 hover:bg-indigo-50 hover:scale-105"
                      }`}
                  >
                    {slot.time.toLowerCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Book Button */}
            <div className="flex justify-center pt-6 font-poppins">
              <button
                onClick={bookAppointment}
                disabled={isLoading || !slotTime}
                className={`
                  flex items-center gap-3 px-10 py-4 rounded-2xl text-lg font-semibold
                  transition-all duration-500 transform
                  ${
                    isLoading || !slotTime
                      ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                      : "bg-indigo-600 text-white shadow-xl hover:bg-indigo-700 hover:shadow-indigo-200 hover:scale-105 active:scale-95"
                  }
                `}
              >
                {isLoading ? "Processing..." : "Confirm Appointment"}
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Related Doctors Section */}
          <div className="space-y-8 animate-fade-in-up font-poppins">
            <div className="flex items-center gap-4 mt-20 ">
              <Users className="w-8 h-8 text-indigo-600" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  Similar Specialists
                </h2>
                <p className="text-gray-500">
                  Other recommended doctors in {docInfo.speciality}
                </p>
              </div>
            </div>
            <RelatedDoctor docId={docId} speciality={docInfo.speciality} />
          </div>
        </div>
      </div>
    )
  );
};

export default Appointment;
