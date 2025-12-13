// import React, { useContext, useState } from 'react'
// import { AdminContext } from '../../context/AdminContext'
// import { toast } from 'react-toastify'
// import axios from 'axios'
// import { assets } from '../../assets/assets_admin/assets'

// const AddDoctor = () => {

//   const [docImg, setDocImg] = useState(false)
//   const [name, setName] = useState('')
//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')
//   const [experience, setExperience] = useState('1 Year')
//   const [fees, setFees] = useState('')
//   const [about, setAbout] = useState('')
//   const [speciality, setSpeciality] = useState('General physician')
//   const [degree, setDegree] = useState('')
//   const [address1, setAddress1] = useState('')
//   const [address2, setAddress2] = useState('')

//   const { backendUrl, aToken } = useContext(AdminContext)

//   const onSubmitHandler = async (event) => {
//     event.preventDefault()

//     try {

//       if (!docImg) {
//         return toast.error('Image Not Selected!')
//       }

//       const formData = new FormData()

//       formData.append('image', docImg)
//       formData.append('name', name)
//       formData.append('email', email)
//       formData.append('password', password)
//       formData.append('experience', experience)
//       formData.append('fees', Number(fees))
//       formData.append('about', about)
//       formData.append('speciality', speciality)
//       formData.append('degree', degree)
//       formData.append('address', JSON.stringify({ line1: address1, line2: address2 }))

//       formData.forEach((value, key) => {
//         console.log(`${key} : ${value}`)
//       })

//       const { data } = await axios.post(backendUrl + '/api/admin/add-doctor', formData, { headers: { aToken } })

//       if (data.success) {
//         toast.success(data.message)
//         setDocImg(false)
//         setName('')
//         setEmail('')
//         setPassword('')
//         setAddress1('')
//         setAddress2('')
//         setDegree('')
//         setAbout('')
//         setFees('')
//       } else {
//         toast.error(data.message)
//       }

//     } catch (error) {
//       toast.error(error.message)
//       console.log(error)
//     }
//   }

//   return (
//     <form onSubmit={onSubmitHandler} className='w-full m-5'>
//       <p className='mb-3 text-lg font-medium'>Add Doctor</p>

//       <div className='bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll'>
//         <div className='flex items-center gap-4 mb-8 text-gray-500'>
//           <label htmlFor="doc-img">
//             <img className='w-16 bg-gray-100 rounded-full cursor-pointer' src={docImg ? URL.createObjectURL(docImg) : assets.upload_area} alt="" />
//           </label>
//           <input onChange={(e) => setDocImg(e.target.files[0])} type="file" id='doc-img' hidden />
//           <p>Upload doctor <br /> picture</p>
//         </div>

//         {/* Left Side */}
//         <div className='flex flex-col items-start gap-10 text-gray-600 lg:flex-row'>
//           <div className='flex flex-col w-full gap-4 lg:flex-1'>
//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Doctor Name</p>
//               <input onChange={(e) => setName(e.target.value)} value={name} className='px-3 py-2 border rounded' type="text" placeholder='Name' required />
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Doctor Email</p>
//               <input onChange={(e) => setEmail(e.target.value)} value={email} className='px-3 py-2 border rounded' type="email" placeholder='Email' required />
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Doctor Password</p>
//               <input onChange={(e) => setPassword(e.target.value)} value={password} className='px-3 py-2 border rounded' type="password" placeholder='Password' required />
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Experience</p>
//               <select onChange={(e) => setExperience(e.target.value)} value={experience} className='px-3 py-2 border rounded' name="" id="">
//                 <option value="1 Year">1 Year</option>
//                 <option value="2 Year">2 Year</option>
//                 <option value="3 Year">3 Year</option>
//                 <option value="4 Year">4 Year</option>
//                 <option value="5 Year">5 Year</option>
//                 <option value="6 Year">6 Year</option>
//                 <option value="7 Year">7 Year</option>
//                 <option value="8 Year">8 Year</option>
//                 <option value="9 Year">9 Year</option>
//                 <option value="10 Year">10 Year</option>
//               </select>
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Fees</p>
//               <input onChange={(e) => setFees(e.target.value)} value={fees} className='px-3 py-2 border rounded' type="number" placeholder='Fees' required />
//             </div>
//           </div>

//           {/* Right Side */}
//           <div className='flex flex-col w-full gap-4 lg:flex-1'>
//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Speciality</p>
//               <select onChange={(e) => setSpeciality(e.target.value)} value={speciality} className='px-3 py-2 border rounded'>
//                 <option value="General physician">General physician</option>
//                 <option value="Gynecologist">Gynecologist</option>
//                 <option value="Dermatologist">Dermatologist</option>
//                 <option value="Pediatricians">Pediatricians</option>
//                 <option value="Neurologist">Neurologist</option>
//                 <option value="Gastroenterologist">Gastroenterologist</option>
//               </select>
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Education</p>
//               <input onChange={(e) => setDegree(e.target.value)} value={degree} className='px-3 py-2 border rounded' type="text" placeholder='Education' required />
//             </div>

//             <div className='flex flex-col flex-1 gap-1'>
//               <p>Address</p>
//               <input onChange={(e) => setAddress1(e.target.value)} value={address1} className='px-3 py-2 border rounded' type="text" placeholder='address 1' required />
//               <input onChange={(e) => setAddress2(e.target.value)} value={address2} className='px-3 py-2 border rounded' type="text" placeholder='address 2' required />
//             </div>

//           </div>
//         </div>

//         {/* Bottom Side */}
//         <div>
//           <p className='mt-4 mb-2'>About Doctor</p>
//           <textarea onChange={(e) => setAbout(e.target.value)} value={about} className='w-full px-4 pt-2 border rounded' placeholder='Write about doctor' rows={5} required></textarea>
//         </div>

//       </div>

//       <button type='submit' className='px-10 py-3 mt-4 text-white rounded-full bg-primary'>Add Doctor</button>

//     </form>
//   )
// }

// export default AddDoctor

// import React, { useContext, useState } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";
// import {
//   Upload,
//   User,
//   Mail,
//   Lock,
//   Award,
//   DollarSign,
//   Stethoscope,
//   GraduationCap,
//   MapPin,
//   FileText,
//   Plus,
// } from "lucide-react";

// const AddDoctor = () => {
//   const [docImg, setDocImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [experience, setExperience] = useState("1 Year");
//   const [fees, setFees] = useState("");
//   const [about, setAbout] = useState("");
//   const [speciality, setSpeciality] = useState("General physician");
//   const [degree, setDegree] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { backendUrl, aToken } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!docImg) {
//         toast.error("Image Not Selected!");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("image", docImg);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("experience", experience);
//       formData.append("fees", Number(fees));
//       formData.append("about", about);
//       formData.append("speciality", speciality);
//       formData.append("degree", degree);
//       formData.append(
//         "address",
//         JSON.stringify({ line1: address1, line2: address2 })
//       );

//       const { data } = await axios.post(
//         backendUrl + "/api/admin/add-doctor",
//         formData,
//         { headers: { aToken } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setDocImg(false);
//         setName("");
//         setEmail("");
//         setPassword("");
//         setAddress1("");
//         setAddress2("");
//         setDegree("");
//         setAbout("");
//         setFees("");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const InputField = ({
//     icon: Icon,
//     label,
//     type,
//     value,
//     onChange,
//     placeholder,
//     required = true,
//   }) => (
//     <div className="flex flex-col gap-1.5 w-full">
//       <label className="text-sm font-medium text-gray-700">{label}</label>
//       <div className="relative">
//         <div className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
//           <Icon className="w-5 h-5" />
//         </div>
//         <input
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200"
//         />
//       </div>
//     </div>
//   );

//   const SelectField = ({ icon: Icon, label, value, onChange, options }) => (
//     <div className="flex flex-col gap-1.5 w-full">
//       <label className="text-sm font-medium text-gray-700">{label}</label>
//       <div className="relative">
//         <div className="absolute text-gray-400 -translate-y-1/2 left-3 top-1/2">
//           <Icon className="w-5 h-5" />
//         </div>
//         <select
//           value={value}
//           onChange={onChange}
//           className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 appearance-none"
//         >
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );

//   return (
//     <div className="min-h-screen p-8 bg-gradient-to-br from-gray-50 via-gray-50 to-blue-50">
//       <div className="max-w-6xl mx-auto">
//         <div className="flex items-center justify-between mb-8">
//           <div>
//             <h1 className="mb-2 text-3xl font-bold text-gray-800">
//               Add New Doctor
//             </h1>
//             <p className="text-gray-500">
//               Add a new medical professional to your healthcare team
//             </p>
//           </div>
//         </div>

//         <form
//           onSubmit={onSubmitHandler}
//           className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-8"
//         >
//           <div className="flex flex-col items-center mb-8">
//             <div className="relative mb-4 cursor-pointer group">
//               <input
//                 type="file"
//                 id="doc-img"
//                 onChange={(e) => setDocImg(e.target.files[0])}
//                 className="hidden"
//               />
//               <label htmlFor="doc-img" className="cursor-pointer">
//                 <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden transition-all duration-300 bg-gray-100 rounded-full group-hover:bg-gray-200">
//                   {docImg ? (
//                     <img
//                       src={URL.createObjectURL(docImg)}
//                       alt="Doctor preview"
//                       className="object-cover w-full h-full"
//                     />
//                   ) : (
//                     <Upload className="w-8 h-8 text-gray-400 transition-colors duration-300 group-hover:text-gray-500" />
//                   )}
//                 </div>
//                 <div className="absolute bottom-0 right-0 p-2 transition-transform duration-300 transform bg-blue-500 rounded-full shadow-lg group-hover:scale-110">
//                   <Plus className="w-4 h-4 text-white" />
//                 </div>
//               </label>
//             </div>
//             <p className="text-sm text-gray-500">
//               Upload doctor's profile picture
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="space-y-6">
//               <InputField
//                 icon={User}
//                 label="Doctor Name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter doctor's full name"
//               />
//               <InputField
//                 icon={Mail}
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter doctor's email"
//               />
//               <InputField
//                 icon={Lock}
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter secure password"
//               />
//               <SelectField
//                 icon={Award}
//                 label="Experience"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 options={Array.from({ length: 10 }, (_, i) => `${i + 1} Year`)}
//               />
//               <InputField
//                 icon={DollarSign}
//                 label="Consultation Fees"
//                 type="number"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
//                 placeholder="Enter consultation fees"
//               />
//             </div>

//             <div className="space-y-6">
//               <SelectField
//                 icon={Stethoscope}
//                 label="Specialization"
//                 value={speciality}
//                 onChange={(e) => setSpeciality(e.target.value)}
//                 options={[
//                   "General physician",
//                   "Gynecologist",
//                   "Dermatologist",
//                   "Pediatricians",
//                   "Neurologist",
//                   "Gastroenterologist",
//                 ]}
//               />
//               <InputField
//                 icon={GraduationCap}
//                 label="Education"
//                 type="text"
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//                 placeholder="Enter educational qualifications"
//               />
//               <div className="space-y-4">
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 1"
//                   type="text"
//                   value={address1}
//                   onChange={(e) => setAddress1(e.target.value)}
//                   placeholder="Enter primary address"
//                 />
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 2"
//                   type="text"
//                   value={address2}
//                   onChange={(e) => setAddress2(e.target.value)}
//                   placeholder="Enter secondary address"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <label className="block mb-2 text-sm font-medium text-gray-700">
//               About Doctor
//             </label>
//             <div className="relative">
//               <div className="absolute text-gray-400 left-3 top-3">
//                 <FileText className="w-5 h-5" />
//               </div>
//               <textarea
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//                 placeholder="Write a detailed description about the doctor's expertise and experience"
//                 rows={5}
//                 required
//                 className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-200 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-200 resize-none"
//               />
//             </div>
//           </div>

//           <div className="flex justify-end mt-8">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`
//                 px-8 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 text-white font-medium
//                 transform hover:-translate-y-0.5 transition-all duration-200
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//                 ${
//                   isSubmitting
//                     ? "opacity-75 cursor-not-allowed"
//                     : "hover:shadow-lg"
//                 }
//               `}
//             >
//               {isSubmitting ? "Adding Doctor..." : "Add Doctor"}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddDoctor;

// import React, { useContext, useState } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// import {
//   Upload,
//   User,
//   Mail,
//   Lock,
//   Award,
//   DollarSign,
//   Stethoscope,
//   GraduationCap,
//   MapPin,
//   FileText,
//   Plus,
//   Sparkles,
// } from "lucide-react";

// const AddDoctor = () => {
//   const [docImg, setDocImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [experience, setExperience] = useState("1 Year");
//   const [fees, setFees] = useState("");
//   const [about, setAbout] = useState("");
//   const [speciality, setSpeciality] = useState("General physician");
//   const [degree, setDegree] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { backendUrl, aToken } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!docImg) {
//         toast.error("Image Not Selected!");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("image", docImg);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("experience", experience);
//       formData.append("fees", Number(fees));
//       formData.append("about", about);
//       formData.append("speciality", speciality);
//       formData.append("degree", degree);
//       formData.append(
//         "address",
//         JSON.stringify({ line1: address1, line2: address2 })
//       );

//       const { data } = await axios.post(
//         backendUrl + "/api/admin/add-doctor",
//         formData,
//         { headers: { aToken } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setDocImg(false);
//         setName("");
//         setEmail("");
//         setPassword("");
//         setAddress1("");
//         setAddress2("");
//         setDegree("");
//         setAbout("");
//         setFees("");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const InputField = ({
//     icon: Icon,
//     label,
//     type,
//     value,
//     onChange,
//     placeholder,
//     required = true,
//   }) => (
//     <div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex flex-col gap-1.5 w-full"
//     >
//       <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//         {label}
//         <span className="text-blue-500">
//           <Sparkles className="w-3 h-3" />
//         </span>
//       </label>
//       <div className="relative group">
//         <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
//           <Icon className="w-5 h-5" />
//         </div>
//         <input
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//         />
//       </div>
//     </div>
//   );

//   const SelectField = ({ icon: Icon, label, value, onChange, options }) => (
//     <div
//       initial={{ opacity: 0, y: 20 }}
//       animate={{ opacity: 1, y: 0 }}
//       className="flex flex-col gap-1.5 w-full"
//     >
//       <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//         {label}
//         <span className="text-blue-500">
//           <Sparkles className="w-3 h-3" />
//         </span>
//       </label>
//       <div className="relative group">
//         <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
//           <Icon className="w-5 h-5" />
//         </div>
//         <select
//           value={value}
//           onChange={onChange}
//           className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none appearance-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//         >
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 min-hscren md:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-600 md:text-4xl ">
//               Add New Doctor
//             </h1>
//             <p className="mt-2 text-gray-500">
//               Expand your medical team with top professionals
//             </p>
//           </div>
//         </div>

//         <form
//           onSubmit={onSubmitHandler}
//           className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8"
//         >
//           <div className="flex flex-col items-center mb-8">
//             <div className="relative mb-4 cursor-pointer group">
//               <input
//                 type="file"
//                 id="doc-img"
//                 onChange={(e) => setDocImg(e.target.files[0])}
//                 className="hidden"
//               />
//               <label htmlFor="doc-img" className="cursor-pointer">
//                 <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden transition-all duration-300 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:shadow-xl">
//                   {docImg ? (
//                     <img
//                       src={URL.createObjectURL(docImg)}
//                       alt="Doctor preview"
//                       className="object-cover w-full h-full"
//                     />
//                   ) : (
//                     <Upload className="w-8 h-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-600" />
//                   )}
//                 </div>
//                 <div className="absolute bottom-0 right-0 p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
//                   <Plus className="w-4 h-4 text-white" />
//                 </div>
//               </label>
//             </div>
//             <p className="text-sm text-gray-500">
//               Upload doctor's profile picture
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="space-y-6">
//               <InputField
//                 icon={User}
//                 label="Doctor Name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter doctor's full name"
//               />
//               <InputField
//                 icon={Mail}
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter doctor's email"
//               />
//               <InputField
//                 icon={Lock}
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter secure password"
//               />
//               <SelectField
//                 icon={Award}
//                 label="Experience"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 options={Array.from({ length: 10 }, (_, i) => `${i + 1} Year`)}
//               />
//               <InputField
//                 icon={DollarSign}
//                 label="Consultation Fees"
//                 type="number"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
//                 placeholder="Enter consultation fees"
//               />
//             </div>

//             <div className="space-y-6">
//               <SelectField
//                 icon={Stethoscope}
//                 label="Specialization"
//                 value={speciality}
//                 onChange={(e) => setSpeciality(e.target.value)}
//                 options={[
//                   "General physician",
//                   "Gynecologist",
//                   "Dermatologist",
//                   "Pediatricians",
//                   "Neurologist",
//                   "Gastroenterologist",
//                 ]}
//               />
//               <InputField
//                 icon={GraduationCap}
//                 label="Education"
//                 type="text"
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//                 placeholder="Enter educational qualifications"
//               />
//               <div className="space-y-4">
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 1"
//                   type="text"
//                   value={address1}
//                   onChange={(e) => setAddress1(e.target.value)}
//                   placeholder="Enter primary address"
//                 />
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 2"
//                   type="text"
//                   value={address2}
//                   onChange={(e) => setAddress2(e.target.value)}
//                   placeholder="Enter secondary address"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               About Doctor
//               <span className="text-blue-500">
//                 <Sparkles className="w-3 h-3" />
//               </span>
//             </label>
//             <div className="relative mt-2 group">
//               <div className="absolute text-gray-400 transition-colors left-3 top-3 group-hover:text-blue-500">
//                 <FileText className="w-5 h-5" />
//               </div>
//               <textarea
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//                 placeholder="Write a detailed description about the doctor's expertise and experience"
//                 rows={5}
//                 required
//                 className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none resize-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mt-8">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`
//                 px- w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 to-purple200
//                 text-white font-medium shadow-lg shadow-blue-500/20
//                 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//                 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
//               `}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center gap-2">
//                   <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   Adding Doctor...
//                 </span>
//               ) : (
//                 "Add Doctor"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddDoctor;



// here in these page the problem is when I type on any filed then only one letter is typed and then again I have to click on that particular filed and then type 1 letter and again so its very annoying so please these thing fix it



// import React, { useContext, useState } from "react";
// import { AdminContext } from "../../context/AdminContext";
// import { toast } from "react-toastify";
// import axios from "axios";

// import {
//   Upload,
//   User,
//   Mail,
//   Lock,
//   Award,
//   DollarSign,
//   Stethoscope,
//   GraduationCap,
//   MapPin,
//   FileText,
//   Plus,
//   Sparkles,
// } from "lucide-react";

// const AddDoctor = () => {
//   const [docImg, setDocImg] = useState(false);
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [experience, setExperience] = useState("1 Year");
//   const [fees, setFees] = useState("");
//   const [about, setAbout] = useState("");
//   const [speciality, setSpeciality] = useState("General physician");
//   const [degree, setDegree] = useState("");
//   const [address1, setAddress1] = useState("");
//   const [address2, setAddress2] = useState("");
//   const [isSubmitting, setIsSubmitting] = useState(false);

//   const { backendUrl, aToken } = useContext(AdminContext);

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     setIsSubmitting(true);

//     try {
//       if (!docImg) {
//         toast.error("Image Not Selected!");
//         return;
//       }

//       const formData = new FormData();
//       formData.append("image", docImg);
//       formData.append("name", name);
//       formData.append("email", email);
//       formData.append("password", password);
//       formData.append("experience", experience);
//       formData.append("fees", Number(fees));
//       formData.append("about", about);
//       formData.append("speciality", speciality);
//       formData.append("degree", degree);
//       formData.append(
//         "address",
//         JSON.stringify({ line1: address1, line2: address2 })
//       );

//       const { data } = await axios.post(
//         backendUrl + "/api/admin/add-doctor",
//         formData,
//         { headers: { aToken } }
//       );

//       if (data.success) {
//         toast.success(data.message);
//         setDocImg(false);
//         setName("");
//         setEmail("");
//         setPassword("");
//         setAddress1("");
//         setAddress2("");
//         setDegree("");
//         setAbout("");
//         setFees("");
//       } else {
//         toast.error(data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   const InputField = ({
//     icon: Icon,
//     label,
//     type,
//     value,
//     onChange,
//     placeholder,
//     required = true,
//   }) => (
//     <div className="flex flex-col gap-1.5 w-full">
//       <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//         {label}
//         <span className="text-blue-500">
//           <Sparkles className="w-3 h-3" />
//         </span>
//       </label>
//       <div className="relative group">
//         <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
//           <Icon className="w-5 h-5" />
//         </div>
//         <input
//           type={type}
//           value={value}
//           onChange={onChange}
//           placeholder={placeholder}
//           required={required}
//           className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//         />
//       </div>
//     </div>
//   );

//   const SelectField = ({ icon: Icon, label, value, onChange, options }) => (
//     <div className="flex flex-col gap-1.5 w-full">
//       <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//         {label}
//         <span className="text-blue-500">
//           <Sparkles className="w-3 h-3" />
//         </span>
//       </label>
//       <div className="relative group">
//         <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
//           <Icon className="w-5 h-5" />
//         </div>
//         <select
//           value={value}
//           onChange={onChange}
//           className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none appearance-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//         >
//           {options.map((option) => (
//             <option key={option} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </div>
//     </div>
//   );

//   return (
//     <div className="p-4 min-hscren md:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
//       <div className="mx-auto max-w-7xl">
//         <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
//           <div>
//             <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
//               Add New Doctor
//             </h1>
//             <p className="mt-2 text-gray-500">
//               Expand your medical team with top professionals
//             </p>
//           </div>
//         </div>

//         <form
//           onSubmit={onSubmitHandler}
//           className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8"
//         >
//           <div className="flex flex-col items-center mb-8">
//             <div className="relative mb-4 cursor-pointer group">
//               <input
//                 type="file"
//                 id="doc-img"
//                 onChange={(e) => setDocImg(e.target.files[0])}
//                 className="hidden"
//               />
//               <label htmlFor="doc-img" className="cursor-pointer">
//                 <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden transition-all duration-300 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:shadow-xl">
//                   {docImg ? (
//                     <img
//                       src={URL.createObjectURL(docImg)}
//                       alt="Doctor preview"
//                       className="object-cover w-full h-full"
//                     />
//                   ) : (
//                     <Upload className="w-8 h-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-600" />
//                   )}
//                 </div>
//                 <div className="absolute bottom-0 right-0 p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
//                   <Plus className="w-4 h-4 text-white" />
//                 </div>
//               </label>
//             </div>
//             <p className="text-sm text-gray-500">
//               Upload doctor's profile picture
//             </p>
//           </div>

//           <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
//             <div className="space-y-6">
//               <InputField
//                 icon={User}
//                 label="Doctor Name"
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Enter doctor's full name"
//               />
//               <InputField
//                 icon={Mail}
//                 label="Email Address"
//                 type="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}
//                 placeholder="Enter doctor's email"
//               />
//               <InputField
//                 icon={Lock}
//                 label="Password"
//                 type="password"
//                 value={password}
//                 onChange={(e) => setPassword(e.target.value)}
//                 placeholder="Enter secure password"
//               />
//               <SelectField
//                 icon={Award}
//                 label="Experience"
//                 value={experience}
//                 onChange={(e) => setExperience(e.target.value)}
//                 options={Array.from({ length: 10 }, (_, i) => `${i + 1} Year`)}
//               />
//               <InputField
//                 icon={DollarSign}
//                 label="Consultation Fees"
//                 type="number"
//                 value={fees}
//                 onChange={(e) => setFees(e.target.value)}
//                 placeholder="Enter consultation fees"
//               />
//             </div>

//             <div className="space-y-6">
//               <SelectField
//                 icon={Stethoscope}
//                 label="Specialization"
//                 value={speciality}
//                 onChange={(e) => setSpeciality(e.target.value)}
//                 options={[
//                   "General physician",
//                   "Gynecologist",
//                   "Dermatologist",
//                   "Pediatricians",
//                   "Neurologist",
//                   "Gastroenterologist",
//                 ]}
//               />
//               <InputField
//                 icon={GraduationCap}
//                 label="Education"
//                 type="text"
//                 value={degree}
//                 onChange={(e) => setDegree(e.target.value)}
//                 placeholder="Enter educational qualifications"
//               />
//               <div className="space-y-4">
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 1"
//                   type="text"
//                   value={address1}
//                   onChange={(e) => setAddress1(e.target.value)}
//                   placeholder="Enter primary address"
//                 />
//                 <InputField
//                   icon={MapPin}
//                   label="Address Line 2"
//                   type="text"
//                   value={address2}
//                   onChange={(e) => setAddress2(e.target.value)}
//                   placeholder="Enter secondary address"
//                 />
//               </div>
//             </div>
//           </div>

//           <div className="mt-8">
//             <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
//               About Doctor
//               <span className="text-blue-500">
//                 <Sparkles className="w-3 h-3" />
//               </span>
//             </label>
//             <div className="relative mt-2 group">
//               <div className="absolute text-gray-400 transition-colors left-3 top-3 group-hover:text-blue-500">
//                 <FileText className="w-5 h-5" />
//               </div>
//               <textarea
//                 value={about}
//                 onChange={(e) => setAbout(e.target.value)}
//                 placeholder="Write a detailed description about the doctor's expertise and experience"
//                 rows={5}
//                 required
//                 className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none resize-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
//               />
//             </div>
//           </div>

//           <div className="flex justify-center mt-8">
//             <button
//               type="submit"
//               disabled={isSubmitting}
//               className={`
//                 px-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600
//                 text-white font-medium shadow-lg shadow-blue-500/20
//                 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30
//                 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
//                 ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
//               `}
//             >
//               {isSubmitting ? (
//                 <span className="flex items-center justify-center gap-2">
//                   <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
//                     <circle
//                       className="opacity-25"
//                       cx="12"
//                       cy="12"
//                       r="10"
//                       stroke="currentColor"
//                       strokeWidth="4"
//                     />
//                     <path
//                       className="opacity-75"
//                       fill="currentColor"
//                       d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
//                     />
//                   </svg>
//                   Adding Doctor...
//                 </span>
//               ) : (
//                 "Add Doctor"
//               )}
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddDoctor;
import React, { useContext, useState } from "react";
import { AdminContext } from "../../context/AdminContext";
import { toast } from "react-toastify";
import axios from "axios";

import {
  Upload,
  User,
  Mail,
  Lock,
  Award,
  DollarSign,
  Stethoscope,
  GraduationCap,
  MapPin,
  FileText,
  Plus,
  Sparkles,
  IndianRupee
} from "lucide-react";

// Move components outside of the main component to prevent re-renders
const InputField = React.memo(({ 
  icon: Icon, 
  label, 
  type, 
  value, 
  onChange, 
  placeholder, 
  required = true 
}) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {label}
      <span className="text-blue-500">
        <Sparkles className="w-3 h-3" />
      </span>
    </label>
    <div className="relative group">
      <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
        <Icon className="w-5 h-5" />
      </div>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
      />
    </div>
  </div>
));

const SelectField = React.memo(({ icon: Icon, label, value, onChange, options }) => (
  <div className="flex flex-col gap-1.5 w-full">
    <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
      {label}
      <span className="text-blue-500">
        <Sparkles className="w-3 h-3" />
      </span>
    </label>
    <div className="relative group">
      <div className="absolute text-gray-400 transition-colors -translate-y-1/2 left-3 top-1/2 group-hover:text-blue-500">
        <Icon className="w-5 h-5" />
      </div>
      <select
        value={value}
        onChange={onChange}
        className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none appearance-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  </div>
));

const AddDoctor = () => {
  const [docImg, setDocImg] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [experience, setExperience] = useState("1 Year");
  const [fees, setFees] = useState("");
  const [about, setAbout] = useState("");
  const [speciality, setSpeciality] = useState("General physician");
  const [degree, setDegree] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { backendUrl, aToken } = useContext(AdminContext);

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      if (!docImg) {
        toast.error("Image Not Selected!");
        return;
      }

      const formData = new FormData();
      formData.append("image", docImg);
      formData.append("name", name);
      formData.append("email", email);
      formData.append("password", password);
      formData.append("experience", experience);
      formData.append("fees", Number(fees));
      formData.append("about", about);
      formData.append("speciality", speciality);
      formData.append("degree", degree);
      formData.append(
        "address",
        JSON.stringify({ line1: address1, line2: address2 })
      );

      const { data } = await axios.post(
        backendUrl + "/api/admin/add-doctor",
        formData,
        { headers: { aToken } }
      );

      if (data.success) {
        toast.success(data.message);
        setDocImg(false);
        setName("");
        setEmail("");
        setPassword("");
        setAddress1("");
        setAddress2("");
        setDegree("");
        setAbout("");
        setFees("");
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen p-4 md:p-8 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-4 mb-8 md:flex-row md:items-center">
          <div>
            <h1 className="text-3xl font-bold text-blue-600 md:text-4xl">
              Add New Doctor
            </h1>
            <p className="mt-2 text-gray-500">
              Expand your medical team with top professionals
            </p>
          </div>
        </div>

        <form
          onSubmit={onSubmitHandler}
          className="bg-white/80 backdrop-blur-lg rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] p-6 md:p-8"
        >
          <div className="flex flex-col items-center mb-8">
            <div className="relative mb-4 cursor-pointer group">
              <input
                type="file"
                id="doc-img"
                onChange={(e) => setDocImg(e.target.files[0])}
                className="hidden"
                accept="image/*"
              />
              <label htmlFor="doc-img" className="cursor-pointer">
                <div className="relative flex items-center justify-center w-32 h-32 overflow-hidden transition-all duration-300 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 group-hover:shadow-xl">
                  {docImg ? (
                    <img
                      src={URL.createObjectURL(docImg)}
                      alt="Doctor preview"
                      className="object-cover w-full h-full"
                    />
                  ) : (
                    <Upload className="w-8 h-8 text-blue-500 transition-colors duration-300 group-hover:text-blue-600" />
                  )}
                </div>
                <div className="absolute bottom-0 right-0 p-2 rounded-full shadow-lg bg-gradient-to-r from-blue-500 to-purple-500">
                  <Plus className="w-4 h-4 text-white" />
                </div>
              </label>
            </div>
            <p className="text-sm text-gray-500">
              Upload doctor's profile picture
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <InputField
                icon={User}
                label="Doctor Name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter doctor's full name"
              />
              <InputField
                icon={Mail}
                label="Email Address"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter doctor's email"
              />
              <InputField
                icon={Lock}
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter secure password"
              />
              <SelectField
                icon={Award}
                label="Experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                options={Array.from({ length: 10 }, (_, i) => `${i + 1} Year`)}
              />
              <InputField
                icon={IndianRupee}
                label="Consultation Fees"
                type="number"
                value={fees}
                onChange={(e) => setFees(e.target.value)}
                placeholder="Enter consultation fees"
              />
            </div>

            <div className="space-y-6">
              <SelectField
                icon={Stethoscope}
                label="Specialization"
                value={speciality}
                onChange={(e) => setSpeciality(e.target.value)}
                options={[
                  "General physician",
                  "Gynecologist",
                  "Dermatologist",
                  "Pediatricians",
                  "Neurologist",
                  "Gastroenterologist",
                ]}
              />
              <InputField
                icon={GraduationCap}
                label="Education"
                type="text"
                value={degree}
                onChange={(e) => setDegree(e.target.value)}
                placeholder="Enter educational qualifications"
              />
              <div className="space-y-4">
                <InputField
                  icon={MapPin}
                  label="Address Line 1"
                  type="text"
                  value={address1}
                  onChange={(e) => setAddress1(e.target.value)}
                  placeholder="Enter primary address"
                />
                <InputField
                  icon={MapPin}
                  label="Address Line 2"
                  type="text"
                  value={address2}
                  onChange={(e) => setAddress2(e.target.value)}
                  placeholder="Enter secondary address"
                />
              </div>
            </div>
          </div>

          <div className="mt-8">
            <label className="flex items-center gap-2 text-sm font-medium text-gray-700">
              About Doctor
              <span className="text-blue-500">
                <Sparkles className="w-3 h-3" />
              </span>
            </label>
            <div className="relative mt-2 group">
              <div className="absolute text-gray-400 transition-colors left-3 top-3 group-hover:text-blue-500">
                <FileText className="w-5 h-5" />
              </div>
              <textarea
                value={about}
                onChange={(e) => setAbout(e.target.value)}
                placeholder="Write a detailed description about the doctor's expertise and experience"
                rows={5}
                required
                className="w-full py-3 pr-4 transition-all duration-300 bg-white border border-gray-200 shadow-sm outline-none resize-none pl-11 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-100 hover:border-blue-400 hover:shadow-md"
              />
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`
                px-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-500 to-blue-600
                text-white font-medium shadow-lg shadow-blue-500/20
                transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/30
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                ${isSubmitting ? "opacity-75 cursor-not-allowed" : ""}
              `}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center gap-2">
                  <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Adding Doctor...
                </span>
              ) : (
                "Add Doctor"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddDoctor;