// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const MyAppointments = () => {

//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)
//   const [appointments, setAppointments] = useState([])
//   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return dateArray[0] + ' ' + months[Number(dateArray[1])] + ' ' + dateArray[2]
//   }

//   const getUserAppointments = async () => {

//     try {

//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })

//       if (data.success) {
//         setAppointments(data.appointments.reverse())
//         console.log(data.appointments)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }

//   }

//   const cancelAppointment = async (appointmentId) => {

//     try {

//       const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

//       if (data.success) {
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       } else {
//         toast.error(data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }

//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     }
//   }, [token])

//   return (
//     <div>
//       <p className='pb-3 mt-12 font-medium border-b text-zinc-700'>My appointments</p>

//       <div>
//         {appointments.map((item, index) => (
//           <div className='grid grid-cols-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
//             <div>
//               <img className='w-32 bg-indigo-50' src={item.docData.image} alt="" />
//             </div>

//             <div className='flex-1 text-sm text-zinc-600'>
//               <p className='font-semibold text-neutral-800'>{item.docData.name}</p>
//               <p>{item.docData.speciality}</p>
//               <p className='mt-1 font-medium text-zinc-700'>Address:</p>
//               <p className='text-xs'>{item.docData.address.line1}</p>
//               <p className='text-xs'>{item.docData.address.line2}</p>
//               <p className='mt-1 text-sm'><span className='text-sm font-medium text-neutral-700'>Date & Time:</span> {slotDateFormat(item.slotDate)} |  {item.slotTime}</p>
//             </div>

//             <div></div>

//             <div className='flex flex-col justify-end gap-2'>
//               {!item.cancelled && <button className='py-2 text-sm transition-all duration-300 border rounded text-stone-500 sm:min-w-48 hover:bg-primary hover:text-white'>Pay Online</button>}
//               {!item.cancelled && <button onClick={() => cancelAppointment(item._id)} className='py-2 text-sm transition-all duration-300 border rounded text-stone-500 sm:min-w-48 hover:bg-red-600 hover:text-white'>Cancel Appointment</button>}
//               {item.cancelled && <button className='py-2 text-red-500 border border-red-500 rounded sm:min-w-48'>Appointment Cancelled</button>}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppointments

// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { MdOutlineLocationOn, MdCalendarToday, MdAccessTime, MdLocalHospital } from 'react-icons/md'
// import { FaRegUserCircle } from 'react-icons/fa'
// import { RiCloseCircleLine, RiCheckLine } from 'react-icons/ri'

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)
//   const [appointments, setAppointments] = useState([])
//   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`
//   }

//   const getUserAppointments = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
//       if (data.success) {
//         setAppointments(data.appointments.reverse())
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
//       if (data.success) {
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     }
//   }, [token])

//   return (
//     <div className="min-h-screen px-4 py-8 sm:px-10 bg-zinc-50">
//       <h2 className="pb-3 mb-6 text-2xl font-bold border-b text-zinc-800">My Appointments</h2>

//       <div className="grid gap-6">
//         {appointments.map((item, index) => (
//           <div key={index} className="flex flex-col gap-6 p-5 transition-all duration-200 bg-white border shadow-sm border-zinc-200 rounded-xl hover:shadow-md sm:flex-row">

//             {/* Doctor Image */}
//             <div className="flex-shrink-0">
//               {item.docData.image ? (
//                 <img src={item.docData.image} alt="Doctor" className="object-cover w-24 h-24 border-2 border-white rounded-full shadow" />
//               ) : (
//                 <FaRegUserCircle className="w-24 h-24 text-zinc-400" />
//               )}
//             </div>

//             {/* Info */}
//             <div className="flex-1 space-y-1 text-sm text-zinc-600">
//               <p className="text-lg font-semibold text-zinc-800">{item.docData.name}</p>
//               <p className="flex items-center gap-1 text-indigo-600">
//                 <MdLocalHospital className="text-base" /> {item.docData.speciality}
//               </p>
//               <div className="pt-2 space-y-1">
//                 <p className="flex items-center gap-1 text-zinc-600">
//                   <MdOutlineLocationOn className="text-base" />
//                   {item.docData.address.line1}, {item.docData.address.line2}
//                 </p>
//                 <p className="flex items-center gap-1">
//                   <MdCalendarToday className="text-base" /> {slotDateFormat(item.slotDate)}
//                 </p>
//                 <p className="flex items-center gap-1">
//                   <MdAccessTime className="text-base" /> {item.slotTime}
//                 </p>
//               </div>
//             </div>

//             {/* Actions */}
//             <div className="flex flex-col items-start justify-center gap-2 mt-4 sm:items-end sm:w-48 sm:mt-0">
//               {!item.cancelled ? (
//                 <>
//                   <button className="w-full px-4 py-2 text-sm font-medium text-white transition-all bg-indigo-500 rounded-lg hover:bg-indigo-600">
//                     Pay Online
//                   </button>
//                   <button
//                     onClick={() => cancelAppointment(item._id)}
//                     className="flex items-center justify-center w-full gap-1 px-4 py-2 text-sm font-medium text-red-600 transition-all bg-red-100 rounded-lg hover:bg-red-200"
//                   >
//                     <RiCloseCircleLine /> Cancel
//                   </button>
//                 </>
//               ) : (
//                 <div className="flex items-center gap-1 px-3 py-1 text-sm font-medium text-red-500 border border-red-200 rounded-lg">
//                   <RiCloseCircleLine className="text-lg" /> Cancelled
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   )
// }

// export default MyAppointments

// import React, { useContext, useEffect, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// // Icons
// import { MdLocationOn, MdAccessTime, MdDateRange, MdLocalHospital } from 'react-icons/md'
// import { FaUserMd } from 'react-icons/fa'
// import { RiCloseLine, RiCheckLine } from 'react-icons/ri'

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext)
//   const [appointments, setAppointments] = useState([])
//   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_')
//     return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`
//   }

//   const getUserAppointments = async () => {
//     try {
//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
//       if (data.success) {
//         setAppointments(data.appointments.reverse())
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
//       if (data.success) {
//         toast.success(data.message)
//         getUserAppointments()
//         getDoctorsData()
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       toast.error(error.message)
//     }
//   }

//   useEffect(() => {
//     if (token) {
//       getUserAppointments()
//     }
//   }, [token])

//   return (
//     <div className="min-h-screen px-4 py-10 sm:px-12 bg-gradient-to-b from-gray-50 to-white">
//       <h1 className="pb-4 mb-8 text-3xl font-semibold text-gray-800 border-b">📋 My Appointments</h1>

//       <div className="grid gap-7">
//         {appointments.map((item, index) => {
//           const status = item.cancelled ? 'Cancelled' : 'Upcoming'
//           const statusColor = item.cancelled ? 'bg-red-100 text-red-600' : 'bg-green-100 text-green-600'

//           return (
//             <div key={index} className="flex flex-col items-start justify-between p-6 transition duration-300 bg-white border border-gray-100 shadow-md sm:flex-row sm:items-center rounded-2xl hover:shadow-lg">

//               {/* Left: Doctor Info */}
//               <div className="flex items-start w-full gap-5 sm:w-auto">
//                 {/* Doctor Image */}
//                 {item.docData.image ? (
//                   <img src={item.docData.image} alt="Doctor" className="object-cover w-20 h-20 border rounded-full shadow" />
//                 ) : (
//                   <FaUserMd className="w-20 h-20 text-gray-300" />
//                 )}

//                 {/* Doctor Details */}
//                 <div className="space-y-1 text-gray-700">
//                   <p className="text-xl font-semibold text-gray-900">{item.docData.name}</p>
//                   <p className="flex items-center gap-1 text-indigo-600">
//                     <MdLocalHospital /> {item.docData.speciality}
//                   </p>
//                   <p className="flex items-center gap-1">
//                     <MdLocationOn className="text-lg" />
//                     {item.docData.address.line1}, {item.docData.address.line2}
//                   </p>
//                 </div>
//               </div>

//               {/* Right: Slot Info + Actions */}
//               <div className="flex flex-col items-start w-full gap-3 mt-4 sm:items-end sm:w-auto sm:mt-0">
//                 <div className="flex flex-col gap-1 text-sm text-gray-600 sm:items-end">
//                   <span className="flex items-center gap-2"><MdDateRange /> {slotDateFormat(item.slotDate)}</span>
//                   <span className="flex items-center gap-2"><MdAccessTime /> {item.slotTime}</span>
//                   <span className={`mt-1 text-xs font-semibold px-3 py-1 rounded-full ${statusColor}`}>
//                     {status}
//                   </span>
//                 </div>

//                 {!item.cancelled ? (
//                   <div className="flex gap-3 mt-2">
//                     <button className="px-4 py-2 text-sm font-medium text-white transition bg-indigo-600 rounded-full shadow hover:bg-indigo-700">
//                       Pay Online
//                     </button>
//                     <button
//                       onClick={() => cancelAppointment(item._id)}
//                       className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-red-600 transition bg-red-100 rounded-full hover:bg-red-200"
//                     >
//                       <RiCloseLine /> Cancel
//                     </button>
//                   </div>
//                 ) : (
//                   <span className="flex items-center gap-1 mt-2 text-sm font-medium text-red-500">
//                     <RiCloseLine className="text-lg" /> This appointment is cancelled
//                   </span>
//                 )}
//               </div>
//             </div>
//           )
//         })}
//       </div>
//     </div>
//   )
// }

// export default MyAppointments

// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import {
//   MapPin,
//   Clock,
//   Calendar,
//   Stethoscope,
//   User,
//   X,
//   CheckCircle,
//   AlertCircle,
//   CreditCard,
//   Building2
// } from 'lucide-react';

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext);
//   const [appointments, setAppointments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_');
//     return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
//   };

//   const getUserAppointments = async () => {
//     setIsLoading(true);
//     try {
//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });
//       if (data.success) {
//         setAppointments(data.appointments.reverse());
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + '/api/user/cancel-appointment',
//         { appointmentId },
//         { headers: { token } }
//       );
//       if (data.success) {
//         toast.success(data.message);
//         getUserAppointments();
//         getDoctorsData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   useEffect(() => {
//     if (token) {
//       getUserAppointments();
//     }
//   }, [token]);

//   return (
//     <div className="min-h-screen px-4 py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50 sm:px-6 lg:px-8">
//       <div className="mx-auto max-w-7xl">
//         {/* Header Section */}
//         <div className="mb-12 animate-fade-in">
//           <div className="flex items-center gap-4 mb-6">
//             <div className="p-3 bg-indigo-100 rounded-2xl">
//               <Calendar className="w-8 h-8 text-indigo-600" />
//             </div>
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">My Appointments</h1>
//               <p className="mt-1 text-gray-500">Manage your upcoming and past appointments</p>
//             </div>
//           </div>

//           {/* Stats Overview */}
//           <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
//             <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-green-100 rounded-xl">
//                   <CheckCircle className="w-6 h-6 text-green-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Upcoming</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {appointments.filter(a => !a.cancelled).length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-red-100 rounded-xl">
//                   <X className="w-6 h-6 text-red-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Cancelled</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {appointments.filter(a => a.cancelled).length}
//                   </p>
//                 </div>
//               </div>
//             </div>
//             <div className="p-6 transition-shadow duration-300 bg-white shadow-lg rounded-2xl hover:shadow-xl">
//               <div className="flex items-center gap-4">
//                 <div className="p-3 bg-blue-100 rounded-xl">
//                   <Building2 className="w-6 h-6 text-blue-600" />
//                 </div>
//                 <div>
//                   <p className="text-sm text-gray-500">Total Clinics</p>
//                   <p className="text-2xl font-bold text-gray-900">
//                     {new Set(appointments.map(a => a.docData.address.line1)).size}
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Appointments List */}
//         <div className="space-y-6 animate-fade-in-up">
//           {isLoading ? (
//             <div className="flex items-center justify-center py-12">
//               <div className="w-12 h-12 border-b-2 border-indigo-600 rounded-full animate-spin"></div>
//             </div>
//           ) : appointments.length === 0 ? (
//             <div className="py-12 text-center bg-white shadow-lg rounded-3xl">
//               <AlertCircle className="w-16 h-16 mx-auto mb-4 text-gray-400" />
//               <h3 className="mb-2 text-xl font-semibold text-gray-900">No Appointments Found</h3>
//               <p className="text-gray-500">You haven't scheduled any appointments yet.</p>
//             </div>
//           ) : (
//             appointments.map((item, index) => {
//               const status = item.cancelled ? 'Cancelled' : 'Upcoming';
//               const statusColor = item.cancelled
//                 ? 'bg-red-100 text-red-600'
//                 : 'bg-green-100 text-green-600';

//               return (
//                 <div
//                   key={index}
//                   className="overflow-hidden transition-all duration-300 bg-white shadow-lg rounded-3xl hover:shadow-xl group"
//                 >
//                   <div className="p-6 sm:p-8">
//                     <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//                       {/* Doctor Info */}
//                       <div className="flex items-start gap-6">
//                         <div className="relative">
//                           {item.docData.image ? (
//                             <img
//                               src={item.docData.image}
//                               alt={item.docData.name}
//                               className="object-cover w-24 h-24 transition-transform duration-300 shadow-lg rounded-2xl group-hover:scale-105"
//                             />
//                           ) : (
//                             <div className="flex items-center justify-center w-24 h-24 bg-gray-100 rounded-2xl">
//                               <User className="w-12 h-12 text-gray-400" />
//                             </div>
//                           )}
//                           <div className={`absolute -top-2 -right-2 px-3 py-1 rounded-full text-xs font-semibold ${statusColor}`}>
//                             {status}
//                           </div>
//                         </div>

//                         <div className="space-y-3">
//                           <div>
//                             <h3 className="mb-1 text-xl font-bold text-gray-900">{item.docData.name}</h3>
//                             <div className="flex items-center gap-2 text-indigo-600">
//                               <Stethoscope className="w-4 h-4" />
//                               <span className="font-medium">{item.docData.speciality}</span>
//                             </div>
//                           </div>

//                           <div className="space-y-2 text-gray-600">
//                             <div className="flex items-center gap-2">
//                               <MapPin className="w-4 h-4" />
//                               <span>{item.docData.address.line1}, {item.docData.address.line2}</span>
//                             </div>
//                             <div className="flex items-center gap-4">
//                               <div className="flex items-center gap-2">
//                                 <Calendar className="w-4 h-4" />
//                                 <span>{slotDateFormat(item.slotDate)}</span>
//                               </div>
//                               <div className="flex items-center gap-2">
//                                 <Clock className="w-4 h-4" />
//                                 <span>{item.slotTime}</span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       {!item.cancelled && (
//                         <div className="flex flex-wrap gap-4">
//                           <button
//                             className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-colors duration-300 bg-indigo-600 shadow-lg rounded-xl hover:bg-indigo-700 hover:shadow-indigo-200"
//                           >
//                             <CreditCard className="w-4 h-4" />
//                             Pay Online
//                           </button>
//                           <button
//                             onClick={() => cancelAppointment(item._id)}
//                             className="flex items-center gap-2 px-6 py-3 font-medium text-red-600 transition-colors duration-300 bg-red-100 rounded-xl hover:bg-red-200"
//                           >
//                             <X className="w-4 h-4" />
//                             Cancel
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;

// import React, { useContext, useEffect, useState } from 'react';
// import { AppContext } from '../context/AppContext';
// import { toast } from 'react-toastify';
// import axios from 'axios';
// import {
//   Calendar,
//   Clock,
//   Stethoscope,
//   User,
//   X,
//   CheckCircle,
//   AlertCircle,
//   CreditCard,
//   Building2,
//   MapPin,
//   Shield,
//   Star,
//   ArrowRight,
//   Search
// } from 'lucide-react';

// const MyAppointments = () => {
//   const { backendUrl, token, getDoctorsData } = useContext(AppContext);
//   const [appointments, setAppointments] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const months = ['', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

//   const slotDateFormat = (slotDate) => {
//     const dateArray = slotDate.split('_');
//     return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
//   };

//   const getUserAppointments = async () => {
//     setIsLoading(true);
//     try {
//       const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } });
//       if (data.success) {
//         setAppointments(data.appointments.reverse());
//       }
//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const cancelAppointment = async (appointmentId) => {
//     try {
//       const { data } = await axios.post(
//         backendUrl + '/api/user/cancel-appointment',
//         { appointmentId },
//         { headers: { token } }
//       );
//       if (data.success) {
//         toast.success(data.message);
//         getUserAppointments();
//         getDoctorsData();
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const filteredAppointments = appointments.filter(item =>
//     item.docData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     item.docData.speciality.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   useEffect(() => {
//     if (token) {
//       getUserAppointments();
//     }
//   }, [token]);

//   return (
//     <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-100 via-white to-purple-100">
//       {/* Glass Header */}
//       <div className="sticky top-0 z-50 border-b shadow-sm backdrop-blur-xl bg-white/70 border-white/20">
//         <div className="px-4 py-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//           <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
//             <div className="flex items-center gap-3">
//               <div className="p-3 shadow-lg bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl">
//                 <Calendar className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text">
//                   My Appointments
//                 </h1>
//                 <p className="text-sm text-gray-500">Track and manage your medical visits</p>
//               </div>
//             </div>
//             <div className="relative w-full sm:w-auto">
//               <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
//               <input
//                 type="text"
//                 placeholder="Search appointments..."
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 className="w-full py-2 pl-10 pr-4 border border-gray-200 sm:w-64 rounded-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white/50 backdrop-blur-sm"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className="px-4 py-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         {/* Stats Grid */}
//         <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4">
//           <div className="p-6 transition-all duration-300 border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50">
//             <div className="flex items-center gap-4">
//               <div className="p-3 shadow-lg bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl">
//                 <CheckCircle className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Upcoming</p>
//                 <p className="text-2xl font-bold text-gray-900">{appointments.filter(a => !a.cancelled).length}</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 transition-all duration-300 border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50">
//             <div className="flex items-center gap-4">
//               <div className="p-3 shadow-lg bg-gradient-to-br from-red-400 to-rose-500 rounded-2xl">
//                 <X className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Cancelled</p>
//                 <p className="text-2xl font-bold text-gray-900">{appointments.filter(a => a.cancelled).length}</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 transition-all duration-300 border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50">
//             <div className="flex items-center gap-4">
//               <div className="p-3 shadow-lg bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl">
//                 <Building2 className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Clinics Visited</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {new Set(appointments.map(a => a.docData.address.line1)).size}
//                 </p>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 transition-all duration-300 border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50">
//             <div className="flex items-center gap-4">
//               <div className="p-3 shadow-lg bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl">
//                 <Star className="w-6 h-6 text-white" />
//               </div>
//               <div>
//                 <p className="text-sm font-medium text-gray-500">Specialties</p>
//                 <p className="text-2xl font-bold text-gray-900">
//                   {new Set(appointments.map(a => a.docData.speciality)).size}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Appointments List */}
//         <div className="space-y-6">
//           {isLoading ? (
//             <div className="flex items-center justify-center py-16">
//               <div className="relative">
//                 <div className="w-16 h-16 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600"></div>
//                 <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-indigo-400 opacity-30"></div>
//               </div>
//             </div>
//           ) : filteredAppointments.length === 0 ? (
//             <div className="py-16 text-center border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl border-white/50">
//               <div className="flex items-center justify-center w-20 h-20 mx-auto mb-6 bg-gray-100 rounded-full">
//                 <AlertCircle className="w-10 h-10 text-gray-400" />
//               </div>
//               <h3 className="mb-2 text-2xl font-bold text-gray-900">No Appointments Found</h3>
//               <p className="max-w-md mx-auto text-gray-500">
//                 {searchTerm ? "No appointments match your search criteria" : "You haven't scheduled any appointments yet"}
//               </p>
//             </div>
//           ) : (
//             filteredAppointments.map((item, index) => {
//               const status = item.cancelled ? 'Cancelled' : 'Upcoming';
//               const statusColor = item.cancelled
//                 ? 'from-red-400 to-rose-500'
//                 : 'from-green-400 to-emerald-500';

//               return (
//                 <div
//                   key={index}
//                   className="overflow-hidden transition-all duration-300 border shadow-xl group bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50"
//                 >
//                   <div className="p-6 sm:p-8">
//                     <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
//                       {/* Doctor Info */}
//                       <div className="flex items-start gap-6">
//                         <div className="relative">
//                           {item.docData.image ? (
//                             <div className="relative group">
//                               <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl group-hover:opacity-100"></div>
//                               <img
//                                 src={item.docData.image}
//                                 alt={item.docData.name}
//                                 className="object-cover transition-transform duration-300 shadow-xl w-28 h-28 rounded-2xl group-hover:scale-105"
//                               />
//                             </div>
//                           ) : (
//                             <div className="flex items-center justify-center shadow-xl w-28 h-28 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200">
//                               <User className="w-12 h-12 text-gray-400" />
//                             </div>
//                           )}
//                           <div className={`absolute -top-2 -right-2 px-4 py-1 rounded-full text-xs font-semibold text-white bg-gradient-to-r ${statusColor} shadow-lg`}>
//                             {status}
//                           </div>
//                         </div>

//                         <div className="space-y-4">
//                           <div>
//                             <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-indigo-600">
//                               {item.docData.name}
//                             </h3>
//                             <div className="flex items-center gap-2 text-indigo-600">
//                               <Stethoscope className="w-4 h-4" />
//                               <span className="font-medium">{item.docData.speciality}</span>
//                             </div>
//                           </div>

//                           <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
//                             <div className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-xl bg-gray-50">
//                               <MapPin className="w-4 h-4 text-gray-400" />
//                               <span className="truncate">{item.docData.address.line1}</span>
//                             </div>
//                             <div className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-xl bg-gray-50">
//                               <Shield className="w-4 h-4 text-gray-400" />
//                               <span>{item.docData.address.line2}</span>
//                             </div>
//                             <div className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-xl bg-gray-50">
//                               <Calendar className="w-4 h-4 text-gray-400" />
//                               <span>{slotDateFormat(item.slotDate)}</span>
//                             </div>
//                             <div className="flex items-center gap-2 px-4 py-2 text-gray-600 rounded-xl bg-gray-50">
//                               <Clock className="w-4 h-4 text-gray-400" />
//                               <span>{item.slotTime}</span>
//                             </div>
//                           </div>
//                         </div>
//                       </div>

//                       {/* Actions */}
//                       {!item.cancelled && (
//                         <div className="flex flex-wrap gap-4">
//                           <button className="flex items-center gap-2 px-6 py-3 font-medium text-white transition-all duration-300 group/btn bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:shadow-lg hover:shadow-indigo-200 active:scale-95">
//                             <CreditCard className="w-4 h-4" />
//                             <span>Pay Online</span>
//                             <ArrowRight className="w-4 h-4 transition-all duration-300 -translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
//                           </button>
//                           <button
//                             onClick={() => cancelAppointment(item._id)}
//                             className="flex items-center gap-2 px-6 py-3 font-medium text-red-600 transition-all duration-300 group/btn bg-red-50 rounded-xl hover:bg-red-100 hover:shadow-lg active:scale-95"
//                           >
//                             <X className="w-4 h-4" />
//                             <span>Cancel</span>
//                             <ArrowRight className="w-4 h-4 transition-all duration-300 -translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               );
//             })
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MyAppointments;

import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { toast } from "react-toastify";
import axios from "axios";
import {
  Calendar,
  Clock,
  Stethoscope,
  User,
  X,
  CheckCircle,
  AlertCircle,
  CreditCard,
  Building2,
  MapPin,
  Shield,
  Star,
  ArrowRight,
  Search,
  ChevronRight,
  CalendarClock,
} from "lucide-react";

const MyAppointments = () => {
  const { backendUrl, token, getDoctorsData } = useContext(AppContext);
  const [appointments, setAppointments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedFilter, setSelectedFilter] = useState("all");
  const months = [
    "",
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split("_");
    return `${dateArray[0]} ${months[Number(dateArray[1])]} ${dateArray[2]}`;
  };

  const getUserAppointments = async () => {
    setIsLoading(true);
    try {
      const { data } = await axios.get(backendUrl + "/api/user/appointments", {
        headers: { token },
      });
      if (data.success) {
        setAppointments(data.appointments.reverse());
      }
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(
        backendUrl + "/api/user/cancel-appointment",
        { appointmentId },
        { headers: { token } }
      );
      if (data.success) {
        toast.success(data.message);
        getUserAppointments();
        getDoctorsData();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const filteredAppointments = appointments.filter((item) => {
    const matchesSearch =
      item.docData.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.docData.speciality.toLowerCase().includes(searchTerm.toLowerCase());

    if (selectedFilter === "all") return matchesSearch;
    if (selectedFilter === "upcoming") return matchesSearch && !item.cancelled;
    if (selectedFilter === "cancelled") return matchesSearch && item.cancelled;
    return matchesSearch;
  });

  useEffect(() => {
    if (token) {
      getUserAppointments();
    }
  }, [token]);

  const StatCard = ({ icon: Icon, label, value, gradient }) => (
    <div className="relative overflow-hidden transition-all duration-500 bg-white border shadow-lg group hover:shadow-2xl rounded-3xl hover:-translate-y-1 font-inter">
      <div
        className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br group-hover:opacity-5"
        style={{ background: gradient }}
      ></div>
      <div className="p-6">
        <div className="flex items-center gap-4">
          <div
            className="p-3 transition-transform duration-500 shadow-lg group-hover:scale-110 rounded-2xl"
            style={{ background: gradient }}
          >
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div>
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-2xl font-bold text-gray-900">{value}</p>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen mt-20  bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-purple-50">
      {/* Glassmorphic Header */}
      <div className="top-0 z-50 border-b shadow-sm backdrop-blur-xl bg-white/70 border-white/20">
        <div className="px-4 py-6 mx-auto max-w7xl">
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <div className="p-4 transition-transform duration-300 shadow-lg hover:scale-110 bg-gradient-to-br from-indigo-500 to-blue-500 rounded-2xl">
                <CalendarClock className="w-8 h-8 text-white" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h1 className="text-3xl font-bold text-blue-600 underline decoration-blue-300 underline-offset-4 font-poppins">
                    My Appointments
                  </h1>
                  <div className="w-2 h-2 rounded-full animate-pulse bg-gradient-to-r from-indigo-500 to-blue-500"></div>
                </div>
                <p className="text-sm text-gray-500 font-inter">
                  Manage your healthcare journey efficiently
                </p>
              </div>
            </div>

            <div className="flex flex-col w-full gap-4 sm:flex-row sm:w-auto sm:items-center">
              <div className="relative font-poppins">
                <Search className="absolute w-5 h-5 text-gray-400 -translate-y-1/2 left-3 top-1/2" />
                <input
                  type="text"
                  placeholder="Search by doctor or specialty..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full py-2 pl-10 pr-4 transition-all duration-300 border border-gray-200 sm:w-72 rounded-xl focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 bg-white/50 backdrop-blur-sm hover:shadow-md"
                />
              </div>

              <div className="flex p-1 bg-gray-100 rounded-xl font-poppins">
                {["all", "upcoming", "cancelled"].map((filter) => (
                  <button
                    key={filter}
                    onClick={() => setSelectedFilter(filter)}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg ${
                      selectedFilter === filter
                        ? "bg-white text-indigo-600 shadow-md"
                        : "text-gray-500 hover:text-gray-700"
                    }`}
                  >
                    {filter.charAt(0).toUpperCase() + filter.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-4 py-8 mx-auto max-w7xl sm:px-6">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-4 ">
          <StatCard
            icon={CheckCircle}
            label="Upcoming"
            value={appointments.filter((a) => !a.cancelled).length}
            gradient="linear-gradient(to right bottom, #34d399, #059669)"
          />
          <StatCard
            icon={X}
            label="Cancelled"
            value={appointments.filter((a) => a.cancelled).length}
            gradient="linear-gradient(to right bottom, #f87171, #dc2626)"
          />
          <StatCard
            icon={Building2}
            label="Clinics Visited"
            value={
              new Set(appointments.map((a) => a.docData.address.line1)).size
            }
            gradient="linear-gradient(to right bottom, #60a5fa, #2563eb)"
          />
          <StatCard
            icon={Star}
            label="Specialties"
            value={new Set(appointments.map((a) => a.docData.speciality)).size}
            gradient="linear-gradient(to right bottom, #c084fc, #7c3aed)"
          />
        </div>

        {/* Appointments List */}
        <div className="space-y-6 ">
          {isLoading ? (
            <div className="flex items-center justify-center py-16">
              <div className="relative">
                <div className="w-20 h-20 border-4 border-indigo-200 rounded-full animate-spin border-t-indigo-600"></div>
                <div className="absolute inset-0 w-20 h-20 border-4 border-transparent rounded-full animate-ping border-t-indigo-400 opacity-30"></div>
              </div>
            </div>
          ) : filteredAppointments.length === 0 ? (
            <div className="py-16 text-center transition-all duration-300 border shadow-xl bg-white/80 backdrop-blur-lg rounded-3xl border-white/50 hover:shadow-2xl">
              <div className="flex items-center justify-center w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full">
                <AlertCircle className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="mb-2 text-2xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text font-poppins">
                No Appointments Found
              </h3>
              <p className="max-w-md mx-auto text-gray-500">
                {searchTerm
                  ? "No appointments match your search criteria"
                  : "You haven't scheduled any appointments yet"}
              </p>
            </div>
          ) : (
            filteredAppointments.map((item, index) => {
              const status = item.cancelled ? "Cancelled" : "Upcoming";
              const statusColor = item.cancelled
                ? "from-red-400 to-rose-500 "
                : "from-green-400 to-emerald-500 ";

              return (
                <div
                  key={index}
                  className="overflow-hidden transition-all duration-500 border shadow-xl group bg-white/80 backdrop-blur-lg rounded-3xl hover:shadow-2xl border-white/50 hover:-translate-y-1"
                >
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                      {/* Doctor Info */}
                      <div className="flex items-start gap-6">
                        <div className="relative group/image">
                          {item.docData.image ? (
                            <div className="relative overflow-hidden bg-gray-100 rounded-2xl">
                              <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 group-hover/image:opacity-100"></div>
                              <img
                                src={item.docData.image}
                                alt={item.docData.name}
                                className="object-cover h-32 transition-transform duration-500 shadow-xl w-36 group-hover/image:scale-110"
                              />
                            </div>
                          ) : (
                            <div className="flex items-center justify-center transition-transform duration-300 shadow-xl w-28 h-28 rounded-2xl bg-gradient-to-br from-gray-100 to-gray-200 group-hover/image:scale-105">
                              <User className="w-12 h-12 text-gray-400 " />
                            </div>
                          )}
                          <div
                            className={`absolute -top-3 -right-2 px-4 py-1 text-xs font-semibold text-white shadow-lg rounded-full bg-gradient-to-r  font-inter ${statusColor}`}
                          >
                            {status}
                          </div>
                        </div>

                        <div className="space-y-4 ju">
                          <div>
                            <h3 className="mb-1 text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-blue-600 font-poppins">
                              {item.docData.name}
                            </h3>
                            <div className="flex items-center gap-2 text-blue-800 font-inter">
                              <Stethoscope className="w-4 h-4" />
                              <span className="font-medium ">
                                {item.docData.speciality}
                              </span>
                            </div>
                          </div>

                          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 font-inter ">
                            <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-xl bg-gray-50 group-hover:bg-gray-100">
                              <MapPin className="w-4 h-4 text-gray-400" />
                              <span className="truncate">
                                {item.docData.address.line1
                                  .split(" ")
                                  .slice(0, 3)
                                  .join(" ")}
                                {item.docData.address.line1.split(" ").length >
                                  4 && "..."}
                              </span>
                            </div>

                            <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-xl bg-gray-50 group-hover:bg-gray-100">
                              <Shield className="w-4 h-4 text-gray-400" />
                              <span className="truncate">
                                {item.docData.address.line2
                                  .split(" ")
                                  .slice(0, 3)
                                  .join(" ")}
                                {item.docData.address.line2.split(" ").length >
                                  4 && "..."}
                              </span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-xl bg-gray-50 group-hover:bg-gray-100">
                              <Calendar className="w-4 h-4 text-gray-400" />
                              <span>{slotDateFormat(item.slotDate)}</span>
                            </div>
                            <div className="flex items-center gap-2 px-4 py-2 transition-all duration-300 rounded-xl bg-gray-50 group-hover:bg-gray-100">
                              <Clock className="w-4 h-4 text-gray-400" />
                              <span>{item.slotTime}</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Actions */}
                      {!item.cancelled && (
                        <div className="flex flex-wrap gap-4 mx-auto font-poppins">
                          <button className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-white transition-all duration-300 shadow-lg md:w-auto group/btn bg-gradient-to-r from-indigo-600 to-blue-500 rounded-xl hover:shadow-xl hover:shadow-indigo-200 active:scale-95">
                            <CreditCard className="w-4 h-4" />
                            <span>Pay Now</span>
                            <ChevronRight className="w-4 h-4 transition-all duration-300 -translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                          </button>
                          <button
                            onClick={() => cancelAppointment(item._id)}
                            className="flex items-center justify-center w-full gap-2 px-6 py-3 font-medium text-red-600 transition-all duration-300 border border-red-100 shadow-lg md:w-auto group/btn bg-red-50 rounded-xl hover:bg-red-100 hover:shadow-xl active:scale-95"
                          >
                            <X className="w-4 h-4" />
                            <span>Cancel </span>
                            <ChevronRight className="w-4 h-4 transition-all duration-300 -translate-x-2 opacity-0 group-hover/btn:opacity-100 group-hover/btn:translate-x-0" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default MyAppointments;
