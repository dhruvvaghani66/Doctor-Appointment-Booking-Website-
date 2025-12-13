// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets_frontend/assets'
// import { toast } from 'react-toastify'
// import axios from 'axios'

// const MyProfile = () => {

//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

//   const [isEdit, setIsEdit] = useState(false)
//   const [image, setImage] = useState(false)

//   const updateUserProfileData = async () => {

//     try {

//       const formData = new FormData()

//       formData.append('name', userData.name)
//       formData.append('phone', userData.phone)
//       formData.append('address', JSON.stringify(userData.address))
//       formData.append('gender', userData.gender)
//       formData.append('dob', userData.dob)

//       image && formData.append('image', image)

//       const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

//       if (data.success) {
//         toast.success(data.message)
//         await loadUserProfileData()
//         setIsEdit(false)
//         setImage(false)
//       } else {
//         toast.error(data.message)
//       }

//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }

//   }

//   return userData && (
//     <div className='flex flex-col max-w-lg gap-2 text-sm'>

//       {
//         isEdit
//           ? <label htmlFor="image">
//             <div className='relative inline-block cursor-pointer'>
//               <img className='rounded opacity-75 w-36' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
//               <img className='absolute w-10 bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
//             </div>
//             <input onChange={(e) => setImage(e.target.files[0])} type="file" id='image' hidden />
//           </label>
//           : <img className='rounded w-36' src={userData.image} alt="" />
//       }

//       {
//         isEdit
//           ? <input className='mt-4 text-3xl font-medium bg-gray-50 max-w-60' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} />
//           : <p className='mt-4 text-3xl font-medium text-neutral-800'>{userData.name}</p>
//       }

//       <hr className='bg-zinc-400 h-[1px] border-none' />

//       <div>
//         <p className='mt-3 underline text-neutral-500'>CONTACT INFORMATION</p>

//         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//           <p className='font-medium'>Email id:</p>
//           <p className='text-blue-500'>{userData.email}</p>

//           <p className='font-medium'>Phone:</p>
//           {
//             isEdit
//               ? <input className='bg-gray-100 max-w-52' type="text" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
//               : <p className='text-blue-500'>{userData.phone}</p>
//           }

//           <p className='font-medium'>Address:</p>
//           <div>
//             {
//               isEdit
//                 ?
//                 <p>
//                   <input className='bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))} value={userData.address.line1} type="text" />
//                   <br />
//                   <input className='bg-gray-100' onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))} value={userData.address.line2} type="text" />
//                 </p>
//                 :
//                 <p className='text-gray-400'>
//                   {userData.address.line1}
//                   <br />
//                   {userData.address.line2}
//                 </p>
//             }
//           </div>
//         </div>
//       </div>

//       <div>
//         <p className='mt-3 underline text-neutral-500'>BASIC INFORMATION</p>

//         <div className='grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700'>
//           <p className='font-medium'>Gender:</p>
//           {
//             isEdit
//               ?
//               <select className='bg-gray-100 max-w-20' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))} value={userData.gender}>
//                 <option value="Male">Male</option>
//                 <option value="Female">Female</option>
//               </select>
//               :
//               <p className='text-gray-400'>{userData.gender}</p>
//           }

//           <p className='font-medium'>Birthday:</p>
//           {
//             isEdit
//               ? <input className='bg-gray-100 max-w-28' type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
//               : <p className='text-gray-400'>{userData.dob}</p>
//           }
//         </div>
//       </div>

//       <div className='mt-10'>
//         {
//           isEdit
//             ? <button className='px-8 py-2 transition-all duration-300 border rounded-full border-primary hover:bg-primary hover:text-white' onClick={() => updateUserProfileData()}>Save Information</button>
//             : <button className='px-8 py-2 transition-all duration-300 border rounded-full border-primary hover:bg-primary hover:text-white' onClick={() => setIsEdit(true)}>Edit</button>
//         }
//       </div>

//     </div>
//   )
// }

// export default MyProfile

// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets_frontend/assets'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { motion } from 'framer-motion'

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

//   const [isEdit, setIsEdit] = useState(false)
//   const [image, setImage] = useState(null)

//   const updateUserProfileData = async () => {
//     try {
//       const formData = new FormData()
//       formData.append('name', userData.name)
//       formData.append('phone', userData.phone)
//       formData.append('address', JSON.stringify(userData.address))
//       formData.append('gender', userData.gender)
//       formData.append('dob', userData.dob)
//       if (image) formData.append('image', image)

//       const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

//       if (data.success) {
//         toast.success(data.message)
//         await loadUserProfileData()
//         setIsEdit(false)
//         setImage(null)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   return userData && (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-600 via-pink-500 to-red-500">
//       {/* SVG Background with Gradient */}
//       <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <path fill="rgba(255, 255, 255, 0.1)" d="M0,30 C30,40 30,60 60,70 C90,80 90,100 100,90 L100,100 L0,100 Z"></path>
//       </svg>

//       <motion.div
//         className="relative w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Profile Image Section */}
//         <div className="flex justify-center mb-6">
//           {
//             isEdit ? (
//               <label htmlFor="image" className="relative transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
//                 <img
//                   className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36"
//                   src={image ? URL.createObjectURL(image) : userData.image}
//                   alt="Profile"
//                 />
//                 <img
//                   className="absolute bottom-0 right-0 w-10 p-1 bg-white border-2 rounded-full cursor-pointer border-primary"
//                   src={image ? '' : assets.upload_icon}
//                   alt="Upload Icon"
//                 />
//               </label>
//             ) : (
//               <img className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36" src={userData.image} alt="Profile" />
//             )
//           }
//           <input
//             type="file"
//             id="image"
//             hidden
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>

//         {/* Name Section */}
//         <motion.div className="mb-6 text-center">
//           {
//             isEdit ? (
//               <input
//                 type="text"
//                 className="w-3/4 p-3 mx-auto text-3xl font-semibold rounded-md shadow-md bg-gray-50 focus:ring-2 focus:ring-purple-500"
//                 value={userData.name}
//                 onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
//               />
//             ) : (
//               <p className="text-3xl font-semibold text-gray-800">{userData.name}</p>
//             )
//           }
//         </motion.div>

//         <motion.hr
//           className="mb-6 border-t-2 border-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         {/* Contact Information Section */}
//         <motion.div
//           className="w-full space-y-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-xl font-medium text-gray-600">Contact Information</p>
//           <div className="grid grid-cols-[1fr_2fr] gap-4">
//             <p className="font-medium text-gray-700">Email ID:</p>
//             <p className="text-blue-600">{userData.email}</p>

//             <p className="font-medium text-gray-700">Phone:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="text"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   value={userData.phone}
//                   onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                 />
//               ) : (
//                 <p className="text-blue-600">{userData.phone}</p>
//               )
//             }

//             <p className="font-medium text-gray-700">Address:</p>
//             <div>
//               {
//                 isEdit ? (
//                   <>
//                     <input
//                       className="w-full p-3 mb-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line1}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
//                     />
//                     <input
//                       className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line2}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
//                     />
//                   </>
//                 ) : (
//                   <p className="text-gray-600">{userData.address.line1}<br />{userData.address.line2}</p>
//                 )
//               }
//             </div>
//           </div>
//         </motion.div>

//         <motion.hr
//           className="mb-6 border-t-2 border-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         {/* Basic Information Section */}
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-xl font-medium text-gray-600">Basic Information</p>
//           <div className="grid grid-cols-[1fr_2fr] gap-4 mt-6">
//             <p className="font-medium text-gray-700">Gender:</p>
//             {
//               isEdit ? (
//                 <select
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                   value={userData.gender}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               ) : (
//                 <p className="text-gray-600">{userData.gender}</p>
//               )
//             }

//             <p className="font-medium text-gray-700">Birthday:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="date"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                   value={userData.dob}
//                 />
//               ) : (
//                 <p className="text-gray-600">{userData.dob}</p>
//               )
//             }
//           </div>
//         </motion.div>

//         {/* Save/Cancel Buttons */}
//         <motion.div
//           className="flex justify-center gap-6 mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           {
//             isEdit ? (
//               <button
//                 className="px-8 py-3 text-white transition duration-300 rounded-full bg-primary hover:bg-purple-700"
//                 onClick={() => updateUserProfileData()}
//               >
//                 Save Changes
//               </button>
//             ) : (
//               <button
//                 className="px-8 py-3 transition duration-300 border rounded-full border-primary hover:bg-purple-600 hover:text-white"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit Profile
//               </button>
//             )
//           }
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default MyProfile

// import React, { useContext, useState } from 'react'
// import { AppContext } from '../context/AppContext'
// import { assets } from '../assets/assets_frontend/assets'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { motion } from 'framer-motion'

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext)

//   const [isEdit, setIsEdit] = useState(false)
//   const [image, setImage] = useState(null)

//   const updateUserProfileData = async () => {
//     try {
//       const formData = new FormData()
//       formData.append('name', userData.name)
//       formData.append('phone', userData.phone)
//       formData.append('address', JSON.stringify(userData.address))
//       formData.append('gender', userData.gender)
//       formData.append('dob', userData.dob)
//       if (image) formData.append('image', image)

//       const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } })

//       if (data.success) {
//         toast.success(data.message)
//         await loadUserProfileData()
//         setIsEdit(false)
//         setImage(null)
//       } else {
//         toast.error(data.message)
//       }
//     } catch (error) {
//       console.log(error)
//       toast.error(error.message)
//     }
//   }

//   return userData && (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gray-50">
//       {/* SVG Background with Multiple Icons */}
//       <svg className="absolute inset-0 w-full h-full -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
//         <g>
//           <circle cx="10" cy="10" r="10" fill="#7f8c8d" opacity="0.1" />
//           <circle cx="90" cy="30" r="12" fill="#2ecc71" opacity="0.2" />
//           <circle cx="50" cy="50" r="15" fill="#3498db" opacity="0.15" />
//           <circle cx="30" cy="70" r="8" fill="#e74c3c" opacity="0.12" />
//           <circle cx="70" cy="85" r="6" fill="#f39c12" opacity="0.18" />
//         </g>
//       </svg>

//       <motion.div
//         className="relative w-full max-w-lg p-8 bg-white shadow-2xl rounded-xl"
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//       >
//         {/* Profile Image Section */}
//         <div className="flex justify-center mb-6">
//           {
//             isEdit ? (
//               <label htmlFor="image" className="relative transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
//                 <img
//                   className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36"
//                   src={image ? URL.createObjectURL(image) : userData.image}
//                   alt="Profile"
//                 />
//                 <img
//                   className="absolute bottom-0 right-0 w-10 p-1 bg-white border-2 rounded-full cursor-pointer border-primary"
//                   src={image ? '' : assets.upload_icon}
//                   alt="Upload Icon"
//                 />
//               </label>
//             ) : (
//               <img className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36" src={userData.image} alt="Profile" />
//             )
//           }
//           <input
//             type="file"
//             id="image"
//             hidden
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>

//         {/* Name Section */}
//         <motion.div className="mb-6 text-center">
//           {
//             isEdit ? (
//               <input
//                 type="text"
//                 className="w-3/4 p-3 mx-auto text-3xl font-semibold rounded-md shadow-md bg-gray-50 focus:ring-2 focus:ring-purple-500"
//                 value={userData.name}
//                 onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
//               />
//             ) : (
//               <p className="text-3xl font-semibold text-gray-800">{userData.name}</p>
//             )
//           }
//         </motion.div>

//         <motion.hr
//           className="mb-6 border-t-2 border-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         {/* Contact Information Section */}
//         <motion.div
//           className="w-full space-y-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-xl font-medium text-gray-600">Contact Information</p>
//           <div className="grid grid-cols-[1fr_2fr] gap-4">
//             <p className="font-medium text-gray-700">Email ID:</p>
//             <p className="text-blue-600">{userData.email}</p>

//             <p className="font-medium text-gray-700">Phone:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="text"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   value={userData.phone}
//                   onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                 />
//               ) : (
//                 <p className="text-blue-600">{userData.phone}</p>
//               )
//             }

//             <p className="font-medium text-gray-700">Address:</p>
//             <div>
//               {
//                 isEdit ? (
//                   <>
//                     <input
//                       className="w-full p-3 mb-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line1}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
//                     />
//                     <input
//                       className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line2}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
//                     />
//                   </>
//                 ) : (
//                   <p className="text-gray-600">{userData.address.line1}<br />{userData.address.line2}</p>
//                 )
//               }
//             </div>
//           </div>
//         </motion.div>

//         <motion.hr
//           className="mb-6 border-t-2 border-gray-300"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.5 }}
//         />

//         {/* Basic Information Section */}
//         <motion.div
//           className="mt-6"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="text-xl font-medium text-gray-600">Basic Information</p>
//           <div className="grid grid-cols-[1fr_2fr] gap-4 mt-6">
//             <p className="font-medium text-gray-700">Gender:</p>
//             {
//               isEdit ? (
//                 <select
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                   value={userData.gender}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               ) : (
//                 <p className="text-gray-600">{userData.gender}</p>
//               )
//             }

//             <p className="font-medium text-gray-700">Birthday:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="date"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                   value={userData.dob}
//                 />
//               ) : (
//                 <p className="text-gray-600">{userData.dob}</p>
//               )
//             }
//           </div>
//         </motion.div>

//         {/* Save/Cancel Buttons */}
//         <motion.div
//           className="flex justify-center gap-6 mt-8"
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ duration: 0.6 }}
//         >
//           {
//             isEdit ? (
//               <button
//                 className="px-8 py-3 text-white transition duration-300 rounded-full bg-primary hover:bg-purple-700"
//                 onClick={() => updateUserProfileData()}
//               >
//                 Save Changes
//               </button>
//             ) : (
//               <button
//                 className="px-8 py-3 transition duration-300 border rounded-full border-primary hover:bg-purple-600 hover:text-white"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit Profile
//               </button>
//             )
//           }
//         </motion.div>
//       </motion.div>
//     </div>
//   )
// }

// export default MyProfile

// import React, { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { motion } from 'framer-motion';

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [image, setImage] = useState(null);

//   const updateUserProfileData = async () => {
//     try {
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('phone', userData.phone);
//       formData.append('address', JSON.stringify(userData.address));
//       formData.append('gender', userData.gender);
//       formData.append('dob', userData.dob);
//       if (image) formData.append('image', image);

//       const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });

//       if (data.success) {
//         toast.success(data.message);
//         await loadUserProfileData();
//         setIsEdit(false);
//         setImage(null);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error('Something went wrong!');
//     }
//   };

//   return userData && (
//     <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradientto-r frompurple-400 toblue-500">

//       {/* Background SVG Icons */}
//       <svg className="absolute top-0 left-0 w-full h-full -z-10 opacity-10" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
//         <circle cx="20" cy="20" r="20" fill="rgba(255, 255, 255, 0.1)" />
//         <circle cx="80" cy="80" r="30" fill="rgba(255, 255, 255, 0.2)" />
//       </svg>

//       {/* Profile Card */}
//       <motion.div className="relative w-full max-w-lg p-8 shadow-2xl bgwhite rounded-xl" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>

//         {/* Profile Image */}
//         <div className="flex justify-center mb-6">
//           {
//             isEdit ? (
//               <label htmlFor="image" className="relative transition-all duration-300 ease-in-out cursor-pointer hover:scale-105">
//                 <img
//                   className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36"
//                   src={image ? URL.createObjectURL(image) : userData.image}
//                   alt="Profile"
//                 />
//                 <img
//                   className="absolute bottom-0 right-0 w-10 p-1 bg-white border-2 rounded-full cursor-pointer border-primary"
//                   src={image ? '' : "/path/to/upload_icon.svg"}
//                   alt="Upload Icon"
//                 />
//               </label>
//             ) : (
//               <img className="object-cover border-4 border-white rounded-full shadow-lg w-36 h-36" src={userData.image} alt="Profile" />
//             )
//           }
//           <input
//             type="file"
//             id="image"
//             hidden
//             onChange={(e) => setImage(e.target.files[0])}
//           />
//         </div>

//         {/* Name Section */}
//         <motion.div className="mb-6 text-center">
//           {
//             isEdit ? (
//               <input
//                 type="text"
//                 className="w-3/4 p-3 mx-auto text-3xl font-semibold rounded-md shadow-md bg-gray-50 focus:ring-2 focus:ring-purple-500"
//                 value={userData.name}
//                 onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
//               />
//             ) : (
//               <p className="text-3xl font-semibold text-gray-800">{userData.name}</p>
//             )
//           }
//         </motion.div>

//         {/* Contact Information */}
//         <motion.div className="space-y-4">
//           <p className="text-xl font-medium text-gray-600">Contact Information</p>
//           <div className="flex justify-between">
//             <p className="font-medium text-gray-700">Email:</p>
//             <p className="text-blue-600">{userData.email}</p>
//           </div>
//           <div className="flex justify-between">
//             <p className="font-medium text-gray-700">Phone:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="text"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   value={userData.phone}
//                   onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                 />
//               ) : (
//                 <p className="text-blue-600">{userData.phone}</p>
//               )
//             }
//           </div>
//           <div className="flex justify-between">
//             <p className="font-medium text-gray-700">Address:</p>
//             <div>
//               {
//                 isEdit ? (
//                   <>
//                     <input
//                       className="w-full p-3 mb-2 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line1}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
//                     />
//                     <input
//                       className="w-full p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                       type="text"
//                       value={userData.address.line2}
//                       onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
//                     />
//                   </>
//                 ) : (
//                   <p className="text-gray-600">{userData.address.line1}<br />{userData.address.line2}</p>
//                 )
//               }
//             </div>
//           </div>
//         </motion.div>

//         {/* Basic Information */}
//         <motion.div className="mt-6">
//           <p className="text-xl font-medium text-gray-600">Basic Information</p>
//           <div className="flex justify-between mt-6">
//             <p className="font-medium text-gray-700">Gender:</p>
//             {
//               isEdit ? (
//                 <select
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                   value={userData.gender}
//                 >
//                   <option value="Male">Male</option>
//                   <option value="Female">Female</option>
//                 </select>
//               ) : (
//                 <p className="text-gray-600">{userData.gender}</p>
//               )
//             }
//           </div>
//           <div className="flex justify-between mt-6">
//             <p className="font-medium text-gray-700">Birthday:</p>
//             {
//               isEdit ? (
//                 <input
//                   type="date"
//                   className="p-3 bg-gray-100 rounded-md focus:ring-2 focus:ring-purple-500"
//                   onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                   value={userData.dob}
//                 />
//               ) : (
//                 <p className="text-gray-600">{userData.dob}</p>
//               )
//             }
//           </div>
//         </motion.div>

//         {/* Save/Cancel Buttons */}
//         <motion.div className="flex justify-center gap-6 mt-8">
//           {
//             isEdit ? (
//               <button
//                 className="px-8 py-3 text-white transition duration-300 rounded-full bg-primary hover:bg-purple-700"
//                 onClick={() => updateUserProfileData()}
//               >
//                 Save Changes
//               </button>
//             ) : (
//               <button
//                 className="px-8 py-3 transition duration-300 border rounded-full border-primary hover:bg-purple-600 hover:text-white"
//                 onClick={() => setIsEdit(true)}
//               >
//                 Edit Profile
//               </button>
//             )
//           }
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default MyProfile;

// import React, { useState, useContext } from 'react';
// import { AppContext } from '../context/AppContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { motion, AnimatePresence } from 'framer-motion';
// import {
//   User,
//   Mail,
//   Phone,
//   MapPin,
//   Calendar,
//   Upload,
//   Edit3,
//   Save,
//   X,
//   CheckCircle2
// } from 'lucide-react';

// const MyProfile = () => {
//   const { userData, setUserData, token, backendUrl, loadUserProfileData } = useContext(AppContext);
//   const [isEdit, setIsEdit] = useState(false);
//   const [image, setImage] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const updateUserProfileData = async () => {
//     setIsLoading(true);
//     try {
//       const formData = new FormData();
//       formData.append('name', userData.name);
//       formData.append('phone', userData.phone);
//       formData.append('address', JSON.stringify(userData.address));
//       formData.append('gender', userData.gender);
//       formData.append('dob', userData.dob);
//       if (image) formData.append('image', image);

//       const { data } = await axios.post(backendUrl + '/api/user/update-profile', formData, { headers: { token } });

//       if (data.success) {
//         toast.success(data.message);
//         await loadUserProfileData();
//         setIsEdit(false);
//         setImage(null);
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error('Something went wrong!');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const containerVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.1
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, x: -20 },
//     visible: {
//       opacity: 1,
//       x: 0,
//       transition: { duration: 0.3 }
//     }
//   };

//   return userData && (
//     <div className="min-h-screen py-12 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
//       <div className="relative px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         {/* Decorative Elements */}
//         <div className="absolute inset-0 overflow-hidden -z-10">
//           <div className="absolute w-40 h-40 bg-purple-200 rounded-full opacity-20 -top-10 -left-10 blur-3xl"></div>
//           <div className="absolute w-40 h-40 bg-indigo-200 rounded-full opacity-20 -bottom-10 -right-10 blur-3xl"></div>
//         </div>

//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//           className="relative overflow-hidden bg-white border shadow-xl rounded-3xl border-white/20 backdrop-blur-xl bg-white/80"
//         >
//           {/* Profile Header */}
//           <div className="px-6 py-8 text-center border-b sm:px-8 bg-gradient-to-r from-indigo-50 to-purple-50 border-white/10">
//             <motion.div className="relative inline-block" variants={itemVariants}>
//               <div className="relative group">
//                 <motion.div
//                   whileHover={{ scale: 1.05 }}
//                   className="relative inline-block"
//                 >
//                   <div className="overflow-hidden border-4 border-white rounded-full shadow-xl w-36 h-36">
//                     {isEdit ? (
//                       <label htmlFor="image" className="relative block cursor-pointer group">
//                         <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-black/40 group-hover:opacity-100">
//                           <div className="flex items-center justify-center w-full h-full">
//                             <Upload className="w-8 h-8 text-white" />
//                           </div>
//                         </div>
//                         <img
//                           className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
//                           src={image ? URL.createObjectURL(image) : userData.image || 'https://via.placeholder.com/150'}
//                           alt="Profile"
//                         />
//                       </label>
//                     ) : (
//                       <img
//                         className="object-cover w-full h-full"
//                         src={userData.image || 'https://via.placeholder.com/150'}
//                         alt="Profile"
//                       />
//                     )}
//                   </div>
//                   {isEdit && (
//                     <motion.div
//                       initial={{ scale: 0 }}
//                       animate={{ scale: 1 }}
//                       className="absolute p-2 transition-transform duration-300 bg-white rounded-full shadow-lg -bottom-2 -right-2 hover:scale-110"
//                     >
//                       <Edit3 className="w-5 h-5 text-indigo-600" />
//                     </motion.div>
//                   )}
//                 </motion.div>
//               </div>
//               <input
//                 type="file"
//                 id="image"
//                 className="hidden"
//                 onChange={(e) => setImage(e.target.files[0])}
//               />
//             </motion.div>

//             <motion.div variants={itemVariants} className="mt-6">
//               {isEdit ? (
//                 <input
//                   type="text"
//                   className="w-full max-w-md px-4 py-2 text-2xl font-bold text-center transition-all duration-300 border border-indigo-100 rounded-xl bg-white/50 focus:ring-2 focus:ring-indigo-500"
//                   value={userData.name}
//                   onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))}
//                 />
//               ) : (
//                 <h2 className="text-2xl font-bold text-gray-900">{userData.name}</h2>
//               )}
//               <p className="mt-2 text-sm text-gray-500">Member since {new Date(userData.createdAt).getFullYear()}</p>
//             </motion.div>
//           </div>

//           {/* Profile Content */}
//           <div className="p-6 sm:p-8">
//             <motion.div variants={containerVariants} className="grid gap-8 md:grid-cols-2">
//               {/* Contact Information */}
//               <motion.div
//                 variants={itemVariants}
//                 className="p-6 transition-all duration-300 border shadow-lg rounded-2xl bg-gradient-to-br from-white to-indigo-50/30 border-white/20 hover:shadow-xl"
//               >
//                 <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold text-gray-900">
//                   <User className="w-5 h-5 text-indigo-500" />
//                   Contact Information
//                 </h3>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4 p-3 transition-all duration-300 border rounded-xl hover:bg-white/50 border-indigo-50">
//                     <Mail className="w-5 h-5 text-indigo-400" />
//                     <div>
//                       <p className="text-sm font-medium text-gray-500">Email</p>
//                       <p className="text-gray-900">{userData.email}</p>
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-3 transition-all duration-300 border rounded-xl hover:bg-white/50 border-indigo-50">
//                     <Phone className="w-5 h-5 text-indigo-400" />
//                     <div>
//                       <p className="text-sm font-medium text-gray-500">Phone</p>
//                       {isEdit ? (
//                         <input
//                           type="text"
//                           className="w-full px-3 py-1 transition-all duration-300 border border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500"
//                           value={userData.phone}
//                           onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))}
//                         />
//                       ) : (
//                         <p className="text-gray-900">{userData.phone}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-start gap-4 p-3 transition-all duration-300 border rounded-xl hover:bg-white/50 border-indigo-50">
//                     <MapPin className="w-5 h-5 text-indigo-400" />
//                     <div className="flex-1">
//                       <p className="text-sm font-medium text-gray-500">Address</p>
//                       {isEdit ? (
//                         <div className="space-y-2">
//                           <input
//                             type="text"
//                             className="w-full px-3 py-1 transition-all duration-300 border border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500"
//                             value={userData.address.line1}
//                             onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line1: e.target.value } }))}
//                             placeholder="Address Line 1"
//                           />
//                           <input
//                             type="text"
//                             className="w-full px-3 py-1 transition-all duration-300 border border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500"
//                             value={userData.address.line2}
//                             onChange={(e) => setUserData(prev => ({ ...prev, address: { ...prev.address, line2: e.target.value } }))}
//                             placeholder="Address Line 2"
//                           />
//                         </div>
//                       ) : (
//                         <div>
//                           <p className="text-gray-900">{userData.address.line1}</p>
//                           <p className="text-gray-900">{userData.address.line2}</p>
//                         </div>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>

//               {/* Personal Information */}
//               <motion.div
//                 variants={itemVariants}
//                 className="p-6 transition-all duration-300 border shadow-lg rounded-2xl bg-gradient-to-br from-white to-purple-50/30 border-white/20 hover:shadow-xl"
//               >
//                 <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold text-gray-900">
//                   <User className="w-5 h-5 text-purple-500" />
//                   Personal Information
//                 </h3>

//                 <div className="space-y-4">
//                   <div className="flex items-center gap-4 p-3 transition-all duration-300 border rounded-xl hover:bg-white/50 border-purple-50">
//                     <User className="w-5 h-5 text-purple-400" />
//                     <div>
//                       <p className="text-sm font-medium text-gray-500">Gender</p>
//                       {isEdit ? (
//                         <select
//                           className="w-full px-3 py-1 transition-all duration-300 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500"
//                           value={userData.gender}
//                           onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}
//                         >
//                           <option value="Male">Male</option>
//                           <option value="Female">Female</option>
//                         </select>
//                       ) : (
//                         <p className="text-gray-900">{userData.gender}</p>
//                       )}
//                     </div>
//                   </div>

//                   <div className="flex items-center gap-4 p-3 transition-all duration-300 border rounded-xl hover:bg-white/50 border-purple-50">
//                     <Calendar className="w-5 h-5 text-purple-400" />
//                     <div>
//                       <p className="text-sm font-medium text-gray-500">Date of Birth</p>
//                       {isEdit ? (
//                         <input
//                           type="date"
//                           className="w-full px-3 py-1 transition-all duration-300 border border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500"
//                           value={userData.dob}
//                           onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))}
//                         />
//                       ) : (
//                         <p className="text-gray-900">{new Date(userData.dob).toLocaleDateString()}</p>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//             </motion.div>

//             {/* Action Buttons */}
//             <motion.div
//               variants={itemVariants}
//               className="flex justify-center gap-4 mt-8"
//             >
//               {isEdit ? (
//                 <>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={updateUserProfileData}
//                     disabled={isLoading}
//                     className="flex items-center gap-2 px-6 py-2 font-medium text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl hover:shadow-xl disabled:opacity-50"
//                   >
//                     {isLoading ? (
//                       <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
//                     ) : (
//                       <Save className="w-5 h-5" />
//                     )}
//                     Save Changes
//                   </motion.button>
//                   <motion.button
//                     whileHover={{ scale: 1.02 }}
//                     whileTap={{ scale: 0.98 }}
//                     onClick={() => setIsEdit(false)}
//                     className="flex items-center gap-2 px-6 py-2 font-medium transition-all duration-300 bg-white border border-red-100 shadow-lg rounded-xl hover:bg-red-50 hover:shadow-xl"
//                   >
//                     <X className="w-5 h-5 text-red-500" />
//                     Cancel
//                   </motion.button>
//                 </>
//               ) : (
//                 <motion.button
//                   whileHover={{ scale: 1.02 }}
//                   whileTap={{ scale: 0.98 }}
//                   onClick={() => setIsEdit(true)}
//                   className="flex items-center gap-2 px-6 py-2 font-medium transition-all duration-300 bg-white border border-indigo-100 shadow-lg rounded-xl hover:bg-indigo-50 hover:shadow-xl"
//                 >
//                   <Edit3 className="w-5 h-5 text-indigo-500" />
//                   Edit Profile
//                 </motion.button>
//               )}
//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default MyProfile;

import React, { useState, useContext } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Upload,
  Edit3,
  Save,
  X,
  CheckCircle2,
  Camera,
  Shield,
  Clock,
  Award,
} from "lucide-react";

const MyProfile = () => {
  const { userData, setUserData, token, backendUrl, loadUserProfileData } =
    useContext(AppContext);
  const [isEdit, setIsEdit] = useState(false);
  const [image, setImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const updateUserProfileData = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("name", userData.name);
      formData.append("phone", userData.phone);
      formData.append("address", JSON.stringify(userData.address));
      formData.append("gender", userData.gender);
      formData.append("dob", userData.dob);
      if (image) formData.append("image", image);

      const { data } = await axios.post(
        backendUrl + "/api/user/update-profile",
        formData,
        { headers: { token } }
      );

      if (data.success) {
        toast.success(data.message);
        await loadUserProfileData();
        setIsEdit(false);
        setImage(null);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error("Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    userData && (
      <div className="min-h-screen py-28">
        {/* Decorative Elements */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob bg-purple-300 top-0 -left-4"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000 bg-indigo-300 -bottom-8 left-20"></div>
          <div className="absolute w-[500px] h-[500px] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000 bg-sky-300 bottom-20 -right-4"></div>
        </div>

        <div className="relative max-w-6xl mx-auto px4 sm:px6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="relative overflow-hidden bg-white/70 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-[2rem]"
          >
            {/* Profile Header */}
            <div className="relative px-6 pt-12 text-center sm:px-12 bg-gradient-to-b from-white/80 to-transparent">
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute w-full h-48 opacity-10 bg-gradient-to-b from-indigo-500/20 to-transparent"></div>
              </div>

              <motion.div className="relative" variants={itemVariants}>
                <div className="relative inline-block group">
                  <motion.div whileHove={{ scale: 1.05 }} className="relative">
                    <div className="relative w-40 h-40 overflow-hidden border-4 border-white rounded-full shadow-2xl group">
                      {isEdit ? (
                        <label
                          htmlFor="image"
                          className="relative block w-full h-full cursor-pointer"
                        >
                          <div className="absolute inset-0 transition-all duration-500 opacity-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent group-hover:opacity-100">
                            <div className="absolute inset-0 flex flex-col items-center justify-center p-4 space-y-2">
                              <Camera className="w-8 h-8 text-white" />
                              <p className="text-sm font-medium text-white">
                                Change Photo
                              </p>
                            </div>
                          </div>
                          <img
                            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                            src={
                              image
                                ? URL.createObjectURL(image)
                                : userData.image ||
                                  "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
                            }
                            alt="Profile"
                          />
                        </label>
                      ) : (
                        <img
                          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                          src={
                            userData.image ||
                            "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&h=400&q=80"
                          }
                          alt="Profile"
                        />
                      )}
                    </div>
                    {isEdit && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute p-2 transition-transform duration-300 bg-white rounded-full shadow-lg -bottom-2 -right-2 hover:scale110"
                      >
                        <Edit3 className="w-5 h-5 text-indigo-600" />
                      </motion.div>
                    )}
                  </motion.div>
                </div>
                <input
                  type="file"
                  id="image"
                  className="hidden"
                  onChange={(e) => setImage(e.target.files[0])}
                />
              </motion.div>

              <div className="mt-6">
                {isEdit ? (
                  <input
                    type="text"
                    className="w-full max-w-md px-6 py-3 text-2xl font-bold text-center border-2 border-indigo-100 duration300 transition-al rounded-2xl bg-white/50 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300"
                    value={userData.name}
                    onChange={(e) =>
                      setUserData((prev) => ({ ...prev, name: e.target.value }))
                    }
                  />
                ) : (
                  <h2 className="text-3xl font-bold text-transparent bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text">
                    {userData.name}
                  </h2>
                )}
                <div className="flex items-center justify-center gap-2 mt-2">
                  {/* <Clock className="w-4 h-4 text-gray-400" /> */}
                  <p className="text-sm text-gray-500">
                    {/* Member since {new Date(userData.createdAt).getFullYear()} */}
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              {/* <motion.div
                variants={containerVariants}
                className="grid grid-cols-2 gap-4 px-4 mt-8 sm:grid-cols-4 sm:px-0"
              >
                <div className="p-4 transition-all duration-300 bg-white/50 rounded-2xl hover:bg-white/80">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-indigo-500" />
                  <p className="text-sm font-medium text-gray-600">Verified</p>
                </div>
                <div className="p-4 transition-all duration-300 bg-white/50 rounded-2xl hover:bg-white/80">
                  <Award className="w-6 h-6 mx-auto mb-2 text-purple-500" />
                  <p className="text-sm font-medium text-gray-600">Premium</p>
                </div>
                <div className="p-4 transition-all duration-300 bg-white/50 rounded-2xl hover:bg-white/80">
                  <CheckCircle2 className="w-6 h-6 mx-auto mb-2 text-emerald-500" />
                  <p className="text-sm font-medium text-gray-600">Active</p>
                </div>
                <div className="p-4 transition-all duration-300 bg-white/50 rounded-2xl hover:bg-white/80">
                  <User className="w-6 h-6 mx-auto mb-2 text-sky-500" />
                  <p className="text-sm font-medium text-gray-600">Personal</p>
                </div>
              </motion.div> */}
            </div>

            {/* Profile Content */}
            <div className="p-6 xl:p-12">
              <motion.div
                variants={containerVariants}
                className="grid gap-8 md:grid-cols-2"
              >
                {/* Contact Information */}
                <motion.div
                  variants={itemVariants}
                  className="p-6 transitionall duration300 bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] backdrop-blur-sm"
                >
                  <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold text-gray-900">
                    <User className="w-5 h-5 text-indigo-500" />
                    Contact Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 transition-all duration-300 bg-white/50 rounded-xl hover:bg-white/80">
                      <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">
                        <Mail className="w-5 h-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-500">
                          Email
                        </p>
                        <p className="font-medium text-gray-900">
                          {userData.email}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 transition-all duration-300 bg-white/50 rounded-xl hover:bg-white/80">
                      <div className="p-2 text-purple-600 bg-purple-100 rounded-lg">
                        <Phone className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">
                          Phone
                        </p>
                        {isEdit ? (
                          <input
                            type="text"
                            className="w-full px-4 py-2 mt-1 font-medium transition-all duration-300 border-2 border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-300 bg-white/50"
                            value={userData.phone}
                            onChange={(e) =>
                              setUserData((prev) => ({
                                ...prev,
                                phone: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <p className="font-medium text-gray-900">
                            {userData.phone}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-start gap-4 p-4 transition-all duration-300 bg-white/50 rounded-xl hover:bg-white/80">
                      <div className="p-2 rounded-lg text-sky-600 bg-sky-100">
                        <MapPin className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">
                          Address
                        </p>
                        {isEdit ? (
                          <div className="mt-1 space-y-2">
                            <input
                              type="text"
                              className="w-full px-4 py-2 font-medium transition-all duration-300 border-2 rounded-lg focus:ring-2 focus:ring-sky-500 border-sky-100 focus:border-sky-300 bg-white/50"
                              value={userData.address.line1}
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  address: {
                                    ...prev.address,
                                    line1: e.target.value,
                                  },
                                }))
                              }
                              placeholder="Address Line 1"
                            />
                            <input
                              type="text"
                              className="w-full px-4 py-2 font-medium transition-all duration-300 border-2 rounded-lg focus:ring-2 focus:ring-sky-500 border-sky-100 focus:border-sky-300 bg-white/50"
                              value={userData.address.line2}
                              onChange={(e) =>
                                setUserData((prev) => ({
                                  ...prev,
                                  address: {
                                    ...prev.address,
                                    line2: e.target.value,
                                  },
                                }))
                              }
                              placeholder="Address Line 2"
                            />
                          </div>
                        ) : (
                          <div className="font-medium text-gray-900">
                            <p>{userData.address.line1}</p>
                            <p>{userData.address.line2}</p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Personal Information */}
                <motion.div
                  variants={itemVariants}
                  className="p-6 transition-al duration-00 bg-gradient-to-br from-white/80 to-white/40 border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-2xl hover:shadow-[0_8px_30px_rgb(0,0,0,0.16)] backdrop-blur-sm"
                >
                  <h3 className="flex items-center gap-2 mb-6 text-lg font-semibold text-gray-900">
                    <User className="w-5 h-5 text-purple-500" />
                    Personal Information
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4 p-4 transition-all duration-300 bg-white/50 rounded-xl hover:bg-white/80">
                      <div className="p-2 text-indigo-600 bg-indigo-100 rounded-lg">
                        <User className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">
                          Gender
                        </p>
                        {isEdit ? (
                          <select
                            className="w-full px-4 py-2 mt-1 font-medium transition-all duration-300 border-2 border-indigo-100 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-300 bg-white/50"
                            value={userData.gender}
                            onChange={(e) =>
                              setUserData((prev) => ({
                                ...prev,
                                gender: e.target.value,
                              }))
                            }
                          >
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                          </select>
                        ) : (
                          <p className="font-medium text-gray-900">
                            {userData.gender}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 transition-all duration-300 bg-white/50 rounded-xl hover:bg-white/80">
                      <div className="p-2 text-purple-600 bg-purple-100 rounded-lg">
                        <Calendar className="w-5 h-5" />
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-medium text-gray-500">
                          Date of Birth
                        </p>
                        {isEdit ? (
                          <input
                            type="date"
                            className="w-full px-4 py-2 mt-1 font-medium transition-all duration-300 border-2 border-purple-100 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-300 bg-white/50"
                            value={userData.dob}
                            onChange={(e) =>
                              setUserData((prev) => ({
                                ...prev,
                                dob: e.target.value,
                              }))
                            }
                          />
                        ) : (
                          <p className="font-medium text-gray-900">
                            {new Date(userData.dob).toLocaleDateString()}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                variants={itemVariants}
                className="flex justify-center gap-4 mt-12"
              >
                {isEdit ? (
                  <>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={updateUserProfileData}
                      disabled={isLoading}
                      className="relative flex items-center gap-2 px-8 py-3 overflow-hidden font-medium text-white transition-all duration-300 shadow-lg bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl hover:shadow-xl disabled:opacity-50 group"
                    >
                      <div className="absolute inset-0 w-full h-full transition-all duration-300 opacity-0 bg-gradient-to-r from-indigo-600 to-blue-600 group-hover:opacity-10"></div>
                      <div className="relative flex items-center gap-2">
                        {isLoading ? (
                          <div className="w-5 h-5 border-2 border-white rounded-full animate-spin border-t-transparent"></div>
                        ) : (
                          <Save className="w-5 h-5" />
                        )}
                        Save Changes
                      </div>
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setIsEdit(false)}
                      className="flex items-center gap-2 px-8 py-3 font-medium transition-all duration-300 bg-white border border-red-100 shadow-lg rounded-xl hover:bg-red-50 hover:shadow-xl hover:text-red-600 group"
                    >
                      <X className="w-5 h-5 text-red-500 transition-colors duration-300 group-hover:text-red-600" />
                      Cancel
                    </motion.button>
                  </>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => setIsEdit(true)}
                    className="relative flex items-center gap-2 px-8 py-3 overflow-hidden font-medium transition-all duration-300 bg-white border border-indigo-100 shadow-lg rounded-xl hover:shadow-xl group"
                  >
                    <div className="absolute inset-0 w-0 transition-all duration-300 bg-gradient-to-r from-indigo-100 to-purple-100 group-hover:w-full"></div>
                    <Edit3 className="relative w-5 h-5 text-indigo-500" />
                    <span className="relative">Edit Profile</span>
                  </motion.button>
                )}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    )
  );
};

export default MyProfile;

// close but thee looks like common UI and very simple and make new proper format try to make more proffeisnall, modern UI at any cost because I want full 100 marks in my internship project and keep backend as it is because its in working condition so
