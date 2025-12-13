// // import React, { useContext, useEffect } from 'react'
// // import { AdminContext } from '../../context/AdminContext'
// // import { AppContext } from '../../context/AppContext'
// // import { assets } from '../../assets/assets_admin/assets'

// // const AllAppointments = () => {

// //   const { aToken, appointments, getAllAppointments, cancelAppointment } = useContext(AdminContext)
// //   const { calculateAge, slotDateFormat, currency } = useContext(AppContext)

// //   useEffect(() => {
// //     if (aToken) {
// //       getAllAppointments()
// //     }
// //   }, [aToken])

// //   return (
// //     <div className='w-full max-w-6xl m-5'>
// //       <p className='mb-3 text-lg font-medium'>All Appointments</p>

// //       <div className='bg-white border rounded text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
// //         <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] grid-flow-col py-3 px-6 border-b'>
// //           <p>#</p>
// //           <p>Patient</p>
// //           <p>Age</p>
// //           <p>Date & Time</p>
// //           <p>Doctor</p>
// //           <p>Fees</p>
// //           <p>Actions</p>
// //         </div>

// //         {appointments.map((item, index) => (
// //           <div className='flex flex-wrap justify-between max-sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-500 py-3 px-3 border-b hover:bg-gray-50' key={index}>
// //             <p className='max-sm:hidden'>{index + 1}</p>

// //             <div className='flex items-center gap-2'>
// //               <img className='w-8 rounded-full' src={item.userData.image} alt="" /> <p>{item.userData.name}</p>
// //             </div>

// //             <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
// //             <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>

// //             <div className='flex items-center gap-2'>
// //               <img className='w-8 bg-gray-200 rounded-full' src={item.docData.image} alt="" /> <p>{item.docData.name}</p>
// //             </div>

// //             <p>{currency}{item.amount}</p>

// //             {
// //               item.cancelled
// //                 ? <p className='text-xs font-medium text-red-400'>Cancelled</p>
// //                 : <img onClick={() => cancelAppointment(item._id)} className='w-10 cursor-pointer' src={assets.cancel_icon} alt="" />
// //             }

// //           </div>
// //         ))}

// //       </div>
// //     </div>
// //   )
// // }

// // export default AllAppointments

// import React, { useContext, useEffect } from "react";
// import { AdminContext } from '../../context/AdminContext';

// const AllAppointments = () => {
//   const { appointments, getAllAppointments, cancelAppointment } =
//     useContext(AdminContext);

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   return (
//     <div className="container">
//       <h2 className="my-4">All Appointments</h2>
//       <table className="table table-bordered">
//         <thead>
//           <tr>
//             <th>User</th>
//             <th>Doctor</th>
//             <th>Date</th>
//             <th>Time</th>
//             <th>Payment</th>
//             <th>Cancelled</th>
//             <th>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {appointments.length === 0 ? (
//             <tr>
//               <td colSpan="7" className="text-center">
//                 No Appointments Found
//               </td>
//             </tr>
//           ) : (
//             appointments.map((item) => (
//               <tr key={item._id}>
//                 <td>{item.userData.name}</td>
//                 <td>{item.docData.name}</td>
//                 <td>{item.slotDate}</td>
//                 <td>{item.slotTime}</td>
//                 <td>{item.payment ? "Paid" : "Pending"}</td>
//                 <td>{item.cancelled ? "Yes" : "No"}</td>
//                 <td>
//                   {!item.cancelled ? (
//                     <button
//                       className="btn btn-danger btn-sm"
//                       onClick={() => cancelAppointment(item._id)}
//                     >
//                       Cancel
//                     </button>
//                   ) : (
//                     "Cancelled"
//                   )}
//                 </td>
//               </tr>
//             ))
//           )}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default AllAppointments;

// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";
// import { assets } from "../../assets/assets_admin/assets";

// const AllAppointments = () => {
//   const { appointments, getAllAppointments, cancelAppointment } =
//     useContext(AdminContext);

//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   return (
//     <div className="container my-4">
//       <h2 className="mb-4">All Appointments</h2>

//       <div className="table-responsive">
//         <table className="table text-center align-middle table-hover table-bordered">
//           <thead className="table-dark">
//             <tr>
//               <th>#</th>
//               <th>Patient</th>
//               <th>Age</th>
//               <th>Date & Time</th>
//               <th>Doctor</th>
//               <th>Fees</th>
//               <th>Status</th>
//               <th>Action</th>
//             </tr>
//           </thead>

//           <tbody>
//             {appointments.length === 0 ? (
//               <tr>
//                 <td colSpan="8" className="text-center">
//                   No Appointments Found
//                 </td>
//               </tr>
//             ) : (
//               appointments.map((item, index) => (
//                 <tr key={item._id}>
//                   <td>{index + 1}</td>

//                   <td className="gap-2 d-flex align-items-center">
//                     <img
//                       src={item.userData.image}
//                       alt="User"
//                       className="rounded-circle"
//                       width="35"
//                       height="35"
//                     />
//                     <span>{item.userData.name}</span>
//                   </td>

//                   <td>{calculateAge(item.userData.dob)}</td>

//                   <td>
//                     {slotDateFormat(item.slotDate)}, {item.slotTime}
//                   </td>

//                   <td className="gap-2 d-flex align-items-center justify-content-center">
//                     <img
//                       src={item.docData.image}
//                       alt="Doctor"
//                       className="rounded-circle bg-light"
//                       width="35"
//                       height="35"
//                     />
//                     <span>{item.docData.name}</span>
//                   </td>

//                   <td>
//                     {currency}
//                     {item.amount}
//                   </td>

//                   <td>
//                     {item.cancelled ? (
//                       <span className="badge bg-danger">Cancelled</span>
//                     ) : item.payment ? (
//                       <span className="badge bg-success">Paid</span>
//                     ) : (
//                       <span className="badge bg-warning text-dark">Pending</span>
//                     )}
//                   </td>

//                   <td>
//                     {!item.cancelled ? (
//                       <button
//                         className="btn btn-sm btn-outline-danger"
//                         onClick={() => cancelAppointment(item._id)}
//                       >
//                         Cancel
//                       </button>
//                     ) : (
//                       "-"
//                     )}
//                   </td>
//                 </tr>
//               ))
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;

// import React, { useContext, useEffect } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { AppContext } from "../../context/AppContext";
// import { XCircle } from 'lucide-react';

// const AllAppointments = () => {
//   const { appointments, getAllAppointments, cancelAppointment } =
//     useContext(AdminContext);

//   const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

//   useEffect(() => {
//     getAllAppointments();
//   }, []);

//   const getStatusBadge = (cancelled, payment) => {
//     if (cancelled) {
//       return (
//         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
//           Cancelled
//         </span>
//       );
//     }
//     if (payment) {
//       return (
//         <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
//           Paid
//         </span>
//       );
//     }
//     return (
//       <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
//         Pending
//       </span>
//     );
//   };

//   return (
//     <div className="container px-4 py-8 mx-auto">
//       <div className="overflow-hidden bg-white shadow-sm rounded-xl">
//         <div className="px-6 py-4 border-b border-gray-200">
//           <h2 className="text-xl font-semibold text-gray-800">All Appointments</h2>
//         </div>

//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   #
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Patient
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Age
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Date & Time
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Doctor
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Fees
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Status
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase">
//                   Action
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {appointments.length === 0 ? (
//                 <tr>
//                   <td colSpan={8} className="px-6 py-4 text-sm text-center text-gray-500">
//                     No Appointments Found
//                   </td>
//                 </tr>
//               ) : (
//                 appointments.map((item, index) => (
//                   <tr
//                     key={item._id}
//                     className="transition-colors duration-200 hover:bg-gray-50"
//                   >
//                     <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
//                       {index + 1}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 w-10 h-10">
//                           <img
//                             className="object-cover w-10 h-10 border-2 border-gray-200 rounded-full"
//                             src={item.userData.image}
//                             alt={item.userData.name}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">
//                             {item.userData.name}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 text-sm text-gray-900 whitespace-nowrap">
//                       {calculateAge(item.userData.dob)}
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm text-gray-900">{slotDateFormat(item.slotDate)}</div>
//                       <div className="text-sm text-gray-500">{item.slotTime}</div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="flex items-center">
//                         <div className="flex-shrink-0 w-10 h-10">
//                           <img
//                             className="object-cover w-10 h-10 border-2 border-gray-200 rounded-full"
//                             src={item.docData.image}
//                             alt={item.docData.name}
//                           />
//                         </div>
//                         <div className="ml-4">
//                           <div className="text-sm font-medium text-gray-900">
//                             {item.docData.name}
//                           </div>
//                         </div>
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       <div className="text-sm font-medium text-gray-900">
//                         {currency}{item.amount}
//                       </div>
//                     </td>
//                     <td className="px-6 py-4 whitespace-nowrap">
//                       {getStatusBadge(item.cancelled, item.payment)}
//                     </td>
//                     <td className="px-6 py-4 text-sm whitespace-nowrap">
//                       {!item.cancelled ? (
//                         <button
//                           onClick={() => cancelAppointment(item._id)}
//                           className="inline-flex items-center px-3 py-1.5 border border-red-600 text-red-600 rounded-lg text-sm font-medium hover:bg-red-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
//                         >
//                           <XCircle className="w-4 h-4 mr-1.5" />
//                           Cancel
//                         </button>
//                       ) : (
//                         <span className="text-gray-400">-</span>
//                       )}
//                     </td>
//                   </tr>
//                 ))
//               )}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AllAppointments;

import React, { useContext, useEffect } from "react";
import { AdminContext } from "../../context/AdminContext";
import { AppContext } from "../../context/AppContext";
import { XCircle, Calendar, Clock, IndianRupee } from "lucide-react";

const AllAppointments = () => {
  const { appointments, getAllAppointments, cancelAppointment } =
    useContext(AdminContext);

  const { calculateAge, slotDateFormat, currency } = useContext(AppContext);

  useEffect(() => {
    getAllAppointments();
  }, []);

  const getStatusBadge = (cancelled, payment) => {
    if (cancelled) {
      return (
        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-red-700 rounded-full bg-red-50 ring-1 ring-inset ring-red-600/20">
          <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-red-500"></span>
          Cancelled
        </span>
      );
    }
    if (payment) {
      return (
        <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-green-700 rounded-full bg-green-50 ring-1 ring-inset ring-green-600/20">
          <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-green-500"></span>
          Paid
        </span>
      );
    }
    return (
      <span className="inline-flex items-center px-3 py-1 text-xs font-semibold text-yellow-700 rounded-full bg-yellow-50 ring-1 ring-inset ring-yellow-600/20">
        <span className="w-1.5 h-1.5 mr-1.5 rounded-full bg-yellow-500 "></span>
        Pending
      </span>
    );
  };

  return (
    <div className="container px-4 py-8 mx-auto ">
      <div className="overflow-hidden bg-white border border-gray-100 shadow-lg rounded-2xl">
        <div className="px-6 py-5 border-b border-gray-100 bg-gradient-to-r from-white to-gray-50">
          <h2 className="text-2xl font-bold text-gray-800">All Appointments</h2>
          <p className="mt-1 text-sm text-gray-500">
            Manage and monitor all patient appointments
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="divide-y divide-gray-200 max -w-full">
            <thead>
              <tr className="bg-gray-50">
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  #
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  Patient Details
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  Appointment Info
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  Doctor
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  Payment & Status
                </th>
                <th
                  scope="col"
                  className="px-6 py-4 text-xs font-semibold tracking-wider text-left text-gray-500 uppercase"
                >
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {appointments.length === 0 ? (
                <tr>
                  <td colSpan={6} className="px-6 py-8 text-center">
                    <div className="flex flex-col items-center justify-center">
                      <Calendar className="w-12 h-12 mb-3 text-gray-300" />
                      <p className="text-sm text-gray-500">
                        No Appointments Found
                      </p>
                    </div>
                  </td>
                </tr>
              ) : (
                appointments.map((item, index) => (
                  <tr
                    key={item._id}
                    className="transition-colors duration-200 hover:bg-gray-50/50"
                  >
                    <td className="px-6 py-5 whitespace-nowrap">
                      <span className="text-sm font-medium text-gray-900">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12">
                          <img
                            className="object-cover w-12 h-12 rounded-xl ring-2 ring-gray-100"
                            src={item.userData.image}
                            alt={item.userData.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {item.userData.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {/* Age: {calculateAge(item.userData.dob)} years */}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex flex-col">
                        <div className="flex items-center text-sm text-gray-900">
                          <Calendar className="w-4 h-4 text-gray-400 mr-1.5" />
                          {slotDateFormat(item.slotDate)}
                        </div>
                        <div className="flex items-center mt-1 text-sm text-gray-500">
                          <Clock className="w-4 h-4 text-gray-400 mr-1.5" />
                          {item.slotTime}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 w-12 h-12">
                          <img
                            className="object-cover w-12 h-12 rounded-xl ring-2 ring-gray-100"
                            src={item.docData.image}
                            alt={item.docData.name}
                          />
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-semibold text-gray-900">
                            {item.docData.name}
                          </div>
                          <div className="flex items-center mt-1 text-sm text-gray-500">
                            <IndianRupee className="w-4 h-4 mr-1 text-gray-400" />
                            {item.amount}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      {getStatusBadge(item.cancelled, item.payment)}
                    </td>
                    <td className="px-6 py-5 whitespace-nowrap">
                      {!item.cancelled ? (
                        <button
                          onClick={() => cancelAppointment(item._id)}
                          className="inline-flex items-center px-3.5 py-2 border-2 border-red-200 text-red-600 rounded-xl text-sm font-semibold hover:bg-red-50 hover:border-red-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-all duration-200"
                        >
                          <XCircle className="w-4 h-4 mr-2" />
                          Cancel
                        </button>
                      ) : (
                        <span className="text-gray-400">-</span>
                      )}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllAppointments;
