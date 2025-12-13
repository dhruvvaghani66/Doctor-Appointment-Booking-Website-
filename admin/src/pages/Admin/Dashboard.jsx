// import React, { useContext, useEffect } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { assets } from '../../assets/assets_admin/assets'
// import { AppContext } from '../../context/AppContext'

// const Dashboard = () => {

//   const { aToken, cancelAppoitment, dashData, getDashData } = useContext(AdminContext)
//   const { slotDateFormat } = useContext(AppContext)

//   useEffect(() => {
//     if (aToken) {
//       getDashData()
//     }
//   }, [aToken])

//   return dashData && (
//     <div className='m-5'>
//       <div className='flex flex-wrap gap-3'>

//         <div className='flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105'>
//           <img className='w-14' src={assets.doctor_icon} alt="" />

//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{dashData.doctors}</p>
//             <p className='text-gray-400'>Doctors</p>
//           </div>
//         </div>

//         <div className='flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105'>
//           <img className='w-14' src={assets.appointments_icon} alt="" />

//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{dashData.appointments}</p>
//             <p className='text-gray-400'>Appointments</p>
//           </div>
//         </div>

//         <div className='flex items-center gap-2 p-4 transition-all bg-white border-2 border-gray-100 rounded cursor-pointer min-w-52 hover:scale-105'>
//           <img className='w-14' src={assets.patients_icon} alt="" />

//           <div>
//             <p className='text-xl font-semibold text-gray-600'>{dashData.patients}</p>
//             <p className='text-gray-400'>Patients</p>
//           </div>
//         </div>

//       </div>

//       <div className='bg-white'>

//         <div className='flex items-center gap-2.5 px-4 py-4 mt-10 rounded-t border'>
//           <img src={assets.list_icon} alt="" />
//           <p className='font-semibold'>Latest Bookings</p>
//         </div>

//         <div className='pt-4 border border-t-0'>
//           {
//             dashData.lastestAppointments.map((item, index) => (
//               <div className='flex items-center gap-3 px-6 py-3 hover:bg-gray-100' key={index}>
//                 <img className='w-10 rounded-full' src={item.docData.image} alt="" />

//                 <div className='flex-1 text-sm'>
//                   <p className='font-medium text-gray-800'>{item.docData.name}</p>
//                   <p className='text-gray-600'>{slotDateFormat(item.slotDate)}</p>
//                 </div>

//                 {
//                   item.cancelled
//                     ? <p className='text-xs font-medium text-red-400'>Cancelled</p>
//                     : <img onClick={() => cancelAppoitment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
//                 }

//               </div>
//             ))
//           }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Dashboard

// import React, { useContext, useEffect } from 'react';
// import { AdminContext } from '../../context/AdminContext';
// import { AppContext } from '../../context/AppContext';
// import {
//   Users,
//   Calendar,
//   UserRound,
//   List,
//   XCircle,
//   TrendingUp,
//   Clock,
//   CheckCircle2
// } from 'lucide-react';

// const Dashboard = () => {
//   const { aToken, cancelAppoitment, dashData, getDashData } = useContext(AdminContext);
//   const { slotDateFormat } = useContext(AppContext);

//   useEffect(() => {
//     if (aToken) {
//       getDashData();
//     }
//   }, [aToken]);

//   const StatCard = ({ icon: Icon, count, label, color, trend }) => (
//     <div className="relative overflow-hidden bg-white rounded-2xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 ease-in-out transform hover:-translate-y-1">
//       <div className="absolute top-0 right-0 w-32 h-32 -mt-8 -mr-8 rounded-full opacity-50 bg-gradient-to-br from-gray-50 to-gray-100" />
//       <div className="relative">
//         <div className="flex items-center gap-4 mb-4">
//           <div className={`p-4 rounded-2xl ${color} bg-opacity-10`}>
//             <Icon className={`w-6 h-6 ${color.replace('bg-', 'text-')}`} />
//           </div>
//           {trend && (
//             <div className="flex items-center text-sm text-emerald-500">
//               <TrendingUp className="w-4 h-4 mr-1" />
//               <span>+{trend}%</span>
//             </div>
//           )}
//         </div>
//         <div>
//           <p className="mb-1 text-3xl font-bold text-gray-800">{count}</p>
//           <p className="text-sm font-medium text-gray-500">{label}</p>
//         </div>
//       </div>
//     </div>
//   );

//   const AppointmentStatus = ({ status }) => {
//     const statusStyles = {
//       upcoming: 'bg-blue-50 text-blue-600',
//       completed: 'bg-emerald-50 text-emerald-600',
//       cancelled: 'bg-red-50 text-red-500'
//     };

//     return (
//       <span className={`px-3 py-1 rounded-full text-xs font-medium ${statusStyles[status]}`}>
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     );
//   };

//   return dashData && (
//     <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 to-gray-100">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="mb-2 text-3xl font-bold text-gray-800">Dashboard Overview</h1>
//             <p className="text-gray-500">Welcome back! Here's what's happening with your clinic today.</p>
//           </div>
//           <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow-sm">
//             <Clock className="w-4 h-4 text-gray-400" />
//             <span className="text-sm text-gray-600">Last updated: {new Date().toLocaleTimeString()}</span>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
//           <StatCard
//             icon={UserRound}
//             count={dashData.doctors}
//             label="Total Doctors"
//             color="bg-blue-500"
//             trend="12"
//           />
//           <StatCard
//             icon={Calendar}
//             count={dashData.appointments}
//             label="Total Appointments"
//             color="bg-emerald-500"
//             trend="8"
//           />
//           <StatCard
//             icon={Users}
//             count={dashData.patients}
//             label="Total Patients"
//             color="bg-violet-500"
//             trend="15"
//           />
//         </div>

//         <div className="bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">
//           <div className="flex items-center justify-between px-6 py-4 border-b">
//             <div className="flex items-center gap-3">
//               <List className="w-5 h-5 text-gray-600" />
//               <h2 className="font-semibold text-gray-800">Latest Bookings</h2>
//             </div>
//             <div className="flex gap-2">
//               <span className="flex items-center gap-1 text-xs text-gray-500">
//                 <CheckCircle2 className="w-4 h-4 text-emerald-500" />
//                 {dashData.lastestAppointments.length} Active
//               </span>
//             </div>
//           </div>

//           <div className="divide-y">
//             {dashData.lastestAppointments.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center px-6 py-4 transition-all duration-200 hover:bg-gray-50"
//               >
//                 <div className="relative">
//                   <img
//                     className="object-cover w-12 h-12 border-2 border-gray-100 rounded-full"
//                     src={item.docData.image}
//                     alt={item.docData.name}
//                   />
//                   <div className="absolute bottom-0 right-0 w-3 h-3 border-2 border-white rounded-full bg-emerald-500" />
//                 </div>

//                 <div className="flex-1 ml-4">
//                   <div className="flex items-center justify-between mb-1">
//                     <p className="font-semibold text-gray-900">{item.docData.name}</p>
//                     <AppointmentStatus status={item.cancelled ? 'cancelled' : 'upcoming'} />
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <Calendar className="w-4 h-4 text-gray-400" />
//                     <p className="text-sm text-gray-500">{slotDateFormat(item.slotDate)}</p>
//                   </div>
//                 </div>

//                 {!item.cancelled && (
//                   <button
//                     onClick={() => cancelAppoitment(item._id)}
//                     className="p-2 ml-4 transition-colors duration-200 rounded-full hover:bg-red-50 group"
//                   >
//                     <XCircle className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-red-500" />
//                   </button>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// import React, { useContext, useEffect, useState } from 'react';
// import { AdminContext } from '../../context/AdminContext';
// import { AppContext } from '../../context/AppContext';
// import {
//   Users,
//   Calendar,
//   UserRound,
//   List,
//   XCircle,
//   TrendingUp,
//   Clock,
//   CheckCircle2,
//   Activity,
//   ChevronRight,
//   Bell
// } from 'lucide-react';

// const Dashboard = () => {
//   const { aToken, cancelAppoitment, dashData, getDashData } = useContext(AdminContext);
//   const { slotDateFormat } = useContext(AppContext);
//   const [currentTime, setCurrentTime] = useState(new Date());

//   useEffect(() => {
//     if (aToken) {
//       getDashData();
//     }
//   }, [aToken]);

//   useEffect(() => {
//     const timer = setInterval(() => setCurrentTime(new Date()), 1000);
//     return () => clearInterval(timer);
//   }, []);

//   const StatCard = ({ icon: Icon, count, label, color, trend, description }) => (
//     <div className="relative overflow-hidden bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-in-out transform hover:-translate-y-1 group">
//       <div className="absolute top-0 right-0 w-48 h-48 -mt-20 -mr-20 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:opacity-50" />
//       <div className="relative">
//         <div className="flex items-center justify-between mb-6">
//           <div className={`p-4 rounded-2xl ${color} bg-opacity-10 backdrop-blur-xl`}>
//             <Icon className={`w-7 h-7 ${color.replace('bg-', 'text-')}`} />
//           </div>
//           {trend && (
//             <div className="flex items-center px-3 py-1 text-sm rounded-full text-emerald-500 bg-emerald-50">
//               <TrendingUp className="w-4 h-4 mr-1" />
//               <span>+{trend}%</span>
//             </div>
//           )}
//         </div>
//         <div>
//           <div className="flex items-baseline gap-1 mb-2">
//             <p className="text-4xl font-bold text-gray-800">{count}</p>
//             <p className="text-sm font-medium text-gray-400">total</p>
//           </div>
//           <p className="mb-1 text-base font-medium text-gray-600">{label}</p>
//           <p className="text-sm text-gray-400">{description}</p>
//         </div>
//       </div>
//     </div>
//   );

//   const AppointmentStatus = ({ status }) => {
//     const statusConfig = {
//       upcoming: {
//         classes: 'bg-blue-50 text-blue-600 border border-blue-200',
//         icon: Calendar
//       },
//       completed: {
//         classes: 'bg-emerald-50 text-emerald-600 border border-emerald-200',
//         icon: CheckCircle2
//       },
//       cancelled: {
//         classes: 'bg-red-50 text-red-500 border border-red-200',
//         icon: XCircle
//       }
//     };

//     const config = statusConfig[status];
//     const StatusIcon = config.icon;

//     return (
//       <span className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${config.classes}`}>
//         <StatusIcon className="w-3 h-3" />
//         {status.charAt(0).toUpperCase() + status.slice(1)}
//       </span>
//     );
//   };

//   return dashData && (
//     <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex items-center justify-between mb-10">
//           <div>
//             <h1 className="mb-2 text-4xl font-bold text-gray-800">Welcome Back 👋</h1>
//             <p className="text-lg text-gray-500">Here's what's happening with your clinic today.</p>
//           </div>
//           <div className="flex items-center gap-6">
//             <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100">
//               <Activity className="w-5 h-5 text-emerald-500" />
//               <span className="text-sm font-medium text-gray-600">System Status: <span className="text-emerald-500">Healthy</span></span>
//             </div>
//             <button className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
//               <Bell className="w-5 h-5 text-gray-600" />
//             </button>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2 lg:grid-cols-3">
//           <StatCard
//             icon={UserRound}
//             count={dashData.doctors}
//             label="Active Doctors"
//             description="Medical professionals available"
//             color="bg-blue-500"
//             trend="12"
//           />
//           <StatCard
//             icon={Calendar}
//             count={dashData.appointments}
//             label="Total Appointments"
//             description="Scheduled consultations"
//             color="bg-emerald-500"
//             trend="8"
//           />
//           <StatCard
//             icon={Users}
//             count={dashData.patients}
//             label="Registered Patients"
//             description="Growing patient base"
//             color="bg-violet-500"
//             trend="15"
//           />
//         </div>

//         <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100">
//           <div className="flex items-center justify-between px-8 py-6 border-b bg-gray-50/50">
//             <div className="flex items-center gap-4">
//               <div className="p-3 bg-gray-100 rounded-xl">
//                 <List className="w-5 h-5 text-gray-600" />
//               </div>
//               <div>
//                 <h2 className="text-xl font-bold text-gray-800">Latest Appointments</h2>
//                 <p className="text-sm text-gray-500">Real-time booking updates</p>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl">
//                 <Clock className="w-4 h-4 text-gray-400" />
//                 <span className="text-sm text-gray-600">{currentTime.toLocaleTimeString()}</span>
//               </div>
//               <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600">
//                 <CheckCircle2 className="w-4 h-4" />
//                 {dashData.lastestAppointments.length} Active
//               </span>
//             </div>
//           </div>

//           <div className="divide-y">
//             {dashData.lastestAppointments.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center px-8 py-5 transition-all duration-200 hover:bg-gray-50 group"
//               >
//                 <div className="relative">
//                   <img
//                     className="object-cover transition-colors duration-200 border-2 border-gray-100 w-14 h-14 rounded-2xl group-hover:border-blue-100"
//                     src={item.docData.image}
//                     alt={item.docData.name}
//                   />
//                   <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-emerald-500 rounded-full border-2 border-white" />
//                 </div>

//                 <div className="flex-1 ml-5">
//                   <div className="flex items-center justify-between mb-1.5">
//                     <div className="flex items-center gap-2">
//                       <p className="font-semibold text-gray-900">{item.docData.name}</p>
//                       <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
//                       <p className="text-sm text-gray-500">Appointment ID: #{item._id.slice(-6)}</p>
//                     </div>
//                     <AppointmentStatus status={item.cancelled ? 'cancelled' : 'upcoming'} />
//                   </div>
//                   <div className="flex items-center gap-3 text-sm text-gray-500">
//                     <div className="flex items-center gap-1.5">
//                       <Calendar className="w-4 h-4 text-gray-400" />
//                       <p>{slotDateFormat(item.slotDate)}</p>
//                     </div>
//                   </div>
//                 </div>

//                 {!item.cancelled && (
//                   <button
//                     onClick={() => cancelAppoitment(item._id)}
//                     className="p-2 ml-6 transition-colors duration-200 border border-transparent rounded-xl hover:bg-red-50 group-hover:shadow-sm hover:border-red-100"
//                   >
//                     <XCircle className="w-5 h-5 text-gray-400 transition-colors duration-200 group-hover:text-red-500" />
//                   </button>
//                 )}

//                 <ChevronRight className="w-5 h-5 ml-4 text-gray-300" />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

import React, { useContext, useEffect, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import {
  Users,
  Calendar,
  UserRound,
  List,
  XCircle,
  TrendingUp,
  Clock,
  CheckCircle2,
  Activity,
  ChevronRight,
  Bell,
} from "lucide-react";

const Dashboard = () => {
  const { aToken, cancelAppoitment, dashData, getDashData } =
    useContext(AdminContext);
  const { slotDateFormat } = useContext(AppContext);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [cancellingIds, setCancellingIds] = useState(new Set());

  useEffect(() => {
    if (aToken) {
      getDashData();
    }
  }, [aToken]);

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const handleCancelAppointment = async (appointmentId) => {
    try {
      setCancellingIds((prev) => new Set([...prev, appointmentId]));
      await cancelAppoitment(appointmentId);
      await getDashData(); // Refresh data after cancellation
    } catch (error) {
      console.error("Failed to cancel appointment:", error);
    } finally {
      setCancellingIds((prev) => {
        const newSet = new Set(prev);
        newSet.delete(appointmentId);
        return newSet;
      });
    }
  };

  const StatCard = ({
    icon: Icon,
    count,
    label,
    color,
    trend,
    description,
  }) => (
    <div className="relative  font-poppins overflow-hidden bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all duration-500 ease-in-out transform hover:-translate-y-1 group">
      <div className="absolute top-0 right-0 w-48 h-48 -mt-20 -mr-20 transition-opacity duration-500 rounded-full opacity-0 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:opacity-50" />
      <div className="relative">
        <div className="flex items-center justify-between mb-6">
          <div
            className={`p-4 rounded-2xl ${color} bg-opacity-10 backdrop-blur-xl`}
          >
            <Icon className={`w-7 h-7 ${color.replace("bg-", "text-")}`} />
          </div>
          {trend && (
            <div className="flex items-center px-3 py-1 text-sm rounded-full text-emerald-500 bg-emerald-50">
              <TrendingUp className="w-4 h-4 mr-1" />
              <span>+{trend}%</span>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-baseline gap-1 mb-2">
            <p className="text-4xl font-bold text-gray-800">{count}</p>
            <p className="text-sm font-medium text-gray-400">total</p>
          </div>
          <p className="mb-1 text-base font-medium text-gray-600">{label}</p>
          <p className="text-sm text-gray-400">{description}</p>
        </div>
      </div>
    </div>
  );

  const AppointmentStatus = ({ status }) => {
    const statusConfig = {
      upcoming: {
        classes: "bg-blue-50 text-blue-600 border border-blue-200",
        icon: Calendar,
      },
      completed: {
        classes: "bg-emerald-50 text-emerald-600 border border-emerald-200",
        icon: CheckCircle2,
      },
      cancelled: {
        classes: "bg-red-50 text-red-500 border border-red-200",
        icon: XCircle,
      },
    };

    const config = statusConfig[status];
    const StatusIcon = config.icon;

    return (
      <span
        className={`px-3 py-1.5 rounded-full text-xs font-medium flex items-center gap-1 ${config.classes}`}
      >
        <StatusIcon className="w-3 h-3" />
        {status.charAt(0).toUpperCase() + status.slice(1)}
      </span>
    );
  };

  return (
    dashData && (
      <div className="p-4 lg:p-8 min--screen bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50 ">
        <div className="mx-auto max-w-7xl">
          <div className="items-center justify-between mb-10 md:flex-row">
            <div>
              <h1 className="mb-2 text-4xl font-bold text-gray-800">
                Welcome Back 👋
              </h1>
              <p className="mb-4 text-lg text-gray-500 md:mb-0">
                Here's what's happening with your clinic today.
              </p>
            </div>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-xl px-4 py-2.5 rounded-2xl shadow-sm border border-gray-100">
                <Activity className="w-5 h-5 text-emerald-500" />
                <span className="text-sm font-medium text-gray-600">
                  System Status:{" "}
                  <span className="text-emerald-500">Healthy</span>
                </span>
              </div>
              <button className="p-2.5 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                <Bell className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 mb-10 md:grid-cols-2 lg:grid-cols-3">
            <StatCard
              icon={UserRound}
              count={dashData.doctors}
              label="Active Doctors"
              description="Medical professionals available"
              color="bg-blue-500"
              trend="12"
            />
            <StatCard
              icon={Calendar}
              count={dashData.appointments}
              label="Total Appointments"
              description="Scheduled consultations"
              color="bg-emerald-500"
              trend="8"
            />
            <StatCard
              icon={Users}
              count={dashData.patients}
              label="Registered Patients"
              description="Growing patient base"
              color="bg-violet-500"
              trend="15"
            />
          </div>

          <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between px-8 py-6 border-b bg-gray-50/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-gray-100 rounded-xl">
                  <List className="w-5 h-5 text-gray-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800 font-poppins">
                    Latest Appointments
                  </h2>
                  <p className="text-sm text-gray-500 font-poppins">
                    Real-time booking updates
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-100 rounded-xl">
                  <Clock className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600 font-poppins">
                    {currentTime.toLocaleTimeString()}
                  </span>
                </div>
                <span className="flex items-center gap-1 px-3 py-1 text-sm font-medium rounded-full bg-emerald-50 text-emerald-600 font-poppins">
                  <CheckCircle2 className="w-4 h-4" />
                  {
                    dashData.lastestAppointments.filter((apt) => !apt.cancelled)
                      .length
                  }{" "}
                  Active
                </span>
              </div>
            </div>

            <div className="divide-y">
              {dashData.lastestAppointments.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center px-8 py-5 hover:bg-gray-50 transition-all duration-200 group ${
                    cancellingIds.has(item._id)
                      ? "opacity-50 pointer-events-none"
                      : ""
                  }`}
                >
                  <div className="relative">
                    <img
                      className="object-cover transition-colors duration-200 border-2 border-gray-100 w-14 h-14 rounded-2xl group-hover:border-blue-100"
                      src={item.docData.image}
                      alt={item.docData.name}
                    />
                    <div
                      className={`absolute bottom-0 right-0 w-3.5 h-3.5 ${
                        item.cancelled ? "bg-red-500" : "bg-emerald-500"
                      } rounded-full border-2 border-white`}
                    />
                  </div>

                  <div className="flex-1 ml-5">
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <p className="font-semibold text-gray-900">
                          {item.docData.name}
                        </p>
                        <span className="w-1.5 h-1.5 bg-gray-300 rounded-full"></span>
                        <p className="text-sm text-gray-500">
                          Appointment ID: #{item._id.slice(-6)}
                        </p>
                      </div>
                      <AppointmentStatus
                        status={item.cancelled ? "cancelled" : "upcoming"}
                      />
                    </div>
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <Calendar className="w-4 h-4 text-gray-400" />
                        <p>{slotDateFormat(item.slotDate)}</p>
                      </div>
                    </div>
                  </div>

                  {/* <ChevronRight className="w-5 h-5 ml-4 text-gray-300" /> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default Dashboard;
