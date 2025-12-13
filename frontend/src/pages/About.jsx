// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// const About = () => {
//   return (
//     <div>
//       <div className='pt-10 text-2xl text-center text-gray-500'>
//         <p>ABOUT <span className='font-medium text-gray-700'>US</span></p>
//       </div>

//       <div className='flex flex-col gap-12 my-10 md:flex-row'>
//         <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />

//         <div className='flex flex-col justify-center gap-6 text-sm text-gray-600 md:w-2/4'>
//           <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.</p>
//           <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
//           <b className='text-gray-800'>Our Vision</b>
//           <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
//         </div>
//       </div>

//       <div className='my-4 text-xl'>
//         <p>WHY <span className='font-semibold text-gray-700'>CHOOSE US</span></p>
//       </div>

//       <div className='flex flex-col mb-20 md:flex-row'>
//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Efficiency:</b>
//           <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Convenience:</b>
//           <p>Access to a network of trusted healthcare professionals in your area.</p>
//         </div>

//         <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
//           <b>Personalization:</b>
//           <p>Tailored recommendations and reminders to help you stay on top of your health.</p>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default About

// import React, { useState } from "react";
// import {
//   Award,
//   Clock,
//   Shield,
//   Heart,
//   Users,
//   Stethoscope,
//   Star,
//   CheckCircle,
//   Trophy,
//   ArrowRight,
//   Building2,
//   Activity,
// } from "lucide-react";

// function About() {
//   const [activeTab, setActiveTab] = useState("mission");

//   return (
//     <div className="min-h-screen pb-10 mt-28 bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 font-poppins">
//       {/* About Page Hero Section with Parallax Effect */}
//       <div className="relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-teal-600/20 mix-blend-multiply" />
//           <img
//             src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2070"
//             alt="Doctor with patient"
//             className="w-full h-[40vh] object-cover"
//           />
//         </div>
//         <div className="container relative px-4 py-20 mx-auto text-center">
//           <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-white/90 backdrop-blur-sm">
//             <span className="flex w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
//             <span className="font-medium text-teal-700">
//               Your Health, Our Priority
//             </span>
//           </div>
//           <h1 className="mb-6 text-5xl font-bold text-white md:text-6xl drop-shadow-lg">
//             Trusted Doctor Appointments
//             <br />
//             <span className="text-transparent bg-gradient-to-r from-teal-200 to-blue-200 bg-clip-text">
//               Anytime, Anywhere
//             </span>
//           </h1>
//         </div>
//       </div>

//       <div className="container relative z-10 px-4 mx-auto -mt-20">
//         {/* Stats Cards - Appointment Booking Related */}
//         <div className="grid grid-cols-2 gap-4 mb-24 md:grid-cols-4">
//           {[
//             {
//               icon: Users,
//               value: "10M+",
//               label: "Patients Served",
//               color: "teal",
//             },
//             {
//               icon: Building2,
//               value: "5000+",
//               label: "Verified Doctors",
//               color: "blue",
//             },
//             {
//               icon: Activity,
//               value: "24/7",
//               label: "Online Booking",
//               color: "emerald",
//             },
//             {
//               icon: Trophy,
//               value: "99%",
//               label: "Patient Satisfaction",
//               color: "indigo",
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="p-6 transition-all duration-300 shadow-xl bg-white/90 backdrop-blur-xl rounded-2xl hover:shadow-2xl group"
//             >
//               <div
//                 className={`bg-${stat.color}-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
//               </div>
//               <h3 className="text-2xl font-bold text-gray-900">{stat.value}</h3>
//               <p className="text-gray-600">{stat.label}</p>
//             </div>
//           ))}
//         </div>

//         {/* About Content with Tabs */}
//         <div className="flex flex-col items-start gap-12 mb-24 lg:flex-row">
//           <div className="relative lg:w-1/2">
//             <div className="relative">
//               <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 rounded-3xl blur-3xl opacity-30"></div>
//               <img
//                 src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=1000"
//                 alt="Modern healthcare facility"
//                 className="rounded-3xl shadow-2xl w-full object-cover h-[600px] transform hover:scale-[1.02] transition-transform duration-500"
//               />

//               {/* Achievement Cards */}
//               <div className="absolute right-0 p-4 shadow-xl -top-6 lg:-right-6 bg-white/90 backdrop-blur-sm rounded-2xl animate-float">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-purple-100 rounded-lg">
//                     <Star className="w-6 h-6 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">4.9/5 Rating</p>
//                     <p className="text-sm text-gray-600">From 100K+ Users</p>
//                   </div>
//                 </div>
//               </div>

//               <div className="absolute p-4 shadow-xl -bottom-6 lg:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl animate-float animation-delay-2000">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <CheckCircle className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">ISO Certified</p>
//                     <p className="text-sm text-gray-600">Quality Assured</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <div className="space-y-8 lg:w-1/2">
//             {/* Tab Navigation */}
//             <div className="flex p-1 space-x-2 bg-gray-100 rounded-xl">
//               {["mission", "vision", "values"].map((tab) => (
//                 <button
//                   key={tab}
//                   onClick={() => setActiveTab(tab)}
//                   className={`flex-1 py-3 px-6 rounded-lg font-medium transition-all duration-300 ${
//                     activeTab === tab
//                       ? "bg-white shadow-md text-blue-600"
//                       : "text-gray-600 hover:text-blue-600"
//                   }`}
//                 >
//                   {tab.charAt(0).toUpperCase() + tab.slice(1)}
//                 </button>
//               ))}
//             </div>

//             {/* Tab Content */}
//             <div className="p-8 space-y-6 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl">
//               {activeTab === "mission" && (
//                 <>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     Our Mission
//                   </h3>
//                   <p className="leading-relaxed text-gray-600">
//                     To revolutionize healthcare accessibility through
//                     cutting-edge technology and human-centered design, ensuring
//                     quality medical care is available to everyone, anywhere,
//                     anytime.
//                   </p>
//                   <ul className="space-y-4">
//                     {[
//                       "24/7 Healthcare Access",
//                       "Personalized Care Solutions",
//                       "Innovative Technology",
//                     ].map((item) => (
//                       <li key={item} className="flex items-center gap-3">
//                         <div className="p-2 bg-blue-100 rounded-lg">
//                           <CheckCircle className="w-4 h-4 text-blue-600" />
//                         </div>
//                         <span className="text-gray-700">{item}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </>
//               )}
//               {activeTab === "vision" && (
//                 <>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     Our Vision
//                   </h3>
//                   <p className="leading-relaxed text-gray-600">
//                     To be the global leader in digital healthcare solutions,
//                     creating a world where quality healthcare is accessible to
//                     all through seamless technology integration and innovative
//                     approaches.
//                   </p>
//                 </>
//               )}
//               {activeTab === "values" && (
//                 <>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     Our Values
//                   </h3>
//                   <div className="grid grid-cols-2 gap-4">
//                     {[
//                       "Innovation First",
//                       "Patient-Centric",
//                       "Ethical Practice",
//                       "Excellence Always",
//                     ].map((value) => (
//                       <div key={value} className="p-4 bg-gray-50 rounded-xl">
//                         <p className="font-medium text-gray-900">{value}</p>
//                       </div>
//                     ))}
//                   </div>
//                 </>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* Features Section */}
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-4xl font-bold text-gray-900">
//             Why Choose Us
//           </h2>
//           <p className="max-w-2xl mx-auto text-gray-600">
//             Experience healthcare reimagined through our innovative platform
//           </p>
//         </div>

//         <div className="grid gap-8 mb-24 md:grid-cols-2 lg:grid-cols-3">
//           {[
//             {
//               icon: Shield,
//               title: "Advanced Security",
//               description:
//                 "HIPAA-compliant platform with end-to-end encryption for your medical data",
//               color: "blue",
//             },
//             {
//               icon: Clock,
//               title: "Instant Access",
//               description:
//                 "Book appointments and consult with doctors in minutes, not days",
//               color: "purple",
//             },
//             {
//               icon: Heart,
//               title: "Personalized Care",
//               description:
//                 "AI-powered health recommendations tailored to your unique needs",
//               color: "pink",
//             },
//             {
//               icon: Users,
//               title: "Expert Network",
//               description:
//                 "Access to a vast network of verified healthcare specialists",
//               color: "indigo",
//             },
//             {
//               icon: Stethoscope,
//               title: "Smart Health Tech",
//               description:
//                 "Cutting-edge digital health solutions for better care delivery",
//               color: "violet",
//             },
//             {
//               icon: Award,
//               title: "Quality Assured",
//               description:
//                 "ISO certified platform with strict quality control measures",
//               color: "blue",
//             },
//           ].map((feature, index) => (
//             <div
//               key={index}
//               className="p-8 transition-all duration-300 shadow-lg group bg-white/80 backdrop-blur-sm rounded-2xl hover:shadow-xl hover:-translate-y-1"
//             >
//               <div
//                 className={`bg-${feature.color}-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
//               >
//                 <feature.icon className={`w-7 h-7 text-${feature.color}-600`} />
//               </div>
//               <h3 className="mb-3 text-xl font-bold text-gray-900">
//                 {feature.title}
//               </h3>
//               <p className="mb-4 text-gray-600">{feature.description}</p>
//               <a
//                 href="#"
//                 className="inline-flex items-center text-blue-600 transition-colors duration-300 hover:text-blue-700"
//               >
//                 Learn more <ArrowRight className="w-4 h-4 ml-2" />
//               </a>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;

// import React, { useState } from "react";
// import {
//   Award,
//   Clock,
//   Shield,
//   Heart,
//   Users,
//   Stethoscope,
//   Star,
//   CheckCircle,
//   Calendar,
//   ArrowRight,
//   Building2,
//   Activity,
//   Quote,
//   MessageCircle,
//   ChevronDown,
//   Sparkles,
// } from "lucide-react";

// function App() {
//   const [activeTab, setActiveTab] = useState("about");
//   const [activeFaq, setActiveFaq] = useState(null);
//   const [activeTestimonial, setActiveTestimonial] = useState(0);

//   const testimonials = [
//     {
//       name: "Sarah Johnson",
//       role: "Patient",
//       image:
//         "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "The booking process was incredibly smooth. I found a great specialist and got an appointment the same day!",
//       rating: 5,
//       specialty: "Cardiology",
//     },
//     {
//       name: "Michael Chen",
//       role: "Regular Patient",
//       image:
//         "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "The platform has transformed how I manage my healthcare. The doctors are excellent and very professional.",
//       rating: 5,
//       specialty: "Orthopedics",
//     },
//     {
//       name: "Emily Rodriguez",
//       role: "Patient",
//       image:
//         "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
//       quote:
//         "I love how easy it is to access my medical history and schedule follow-up appointments. Highly recommended!",
//       rating: 5,
//       specialty: "Pediatrics",
//     },
//   ];

//   const faqs = [
//     {
//       question: "How do I book an appointment?",
//       answer:
//         "Simply search for your desired specialist, select a convenient time slot, and confirm your booking. You'll receive an immediate confirmation via email with all the necessary details for your appointment.",
//     },
//     {
//       question: "What happens if I need to reschedule?",
//       answer:
//         "You can reschedule your appointment up to 24 hours before the scheduled time through your account dashboard without any penalty. Our system will automatically notify the doctor and provide you with alternative time slots.",
//     },
//     {
//       question: "Are all doctors verified?",
//       answer:
//         "Yes, all healthcare providers on our platform undergo a rigorous verification process. We check their medical licenses, professional certifications, practice history, and patient reviews. We also conduct regular audits to maintain quality standards.",
//     },
//     {
//       question: "How can I access my medical records?",
//       answer:
//         "Your medical records are securely stored in your account. You can access them anytime through the patient dashboard. We use bank-level encryption to ensure your data remains private and secure.",
//     },
//     {
//       question: "What insurance providers do you accept?",
//       answer:
//         "We work with most major insurance providers. You can verify your insurance coverage directly through our platform before booking an appointment. We also provide transparent pricing for self-pay patients.",
//     },
//     {
//       question: "Is telemedicine available?",
//       answer:
//         "Yes, we offer telemedicine consultations with qualified healthcare providers. You can choose between in-person visits or virtual consultations based on your needs and the doctor's availability.",
//     },
//   ];

//   return (
//     <div className="min-h-screen mt-24 bg-white">
//       {/* Hero Section with Enhanced Visual Impact */}
//       <div className="relative h-[70vh] max-w-[1610px] mx-auto overflow-hidden">
//         <div className="absolute inset-0">
//           <img
//             src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091"
//             alt="Modern medical facility"
//             className="object-cover w-full h-full"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-blue-900/70 via-blue-900/60 to-blue-800/60" />
//         </div>
//         <div className="absolute inset-0 flex items-center">
//           <div className="container px-4 mx-auto">
//             <div className="max-w-3xl">
//               <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 border rounded-full bg-blue-500/20 backdrop-blur-sm border-blue-300/20">
//                 <Sparkles className="w-5 h-5 text-blue-300" />
//                 <span className="text-blue-200">
//                   Trusted by 50,000+ Patients
//                 </span>
//               </div>
//               <h1 className="mb-6 text-3xl font-bold text-white md:text-6xl">
//                 Expert Healthcare
//                 <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text">
//                   At Your Fingertips
//                 </span>
//               </h1>
//               <p className="leading-relaxed text-blue-100 lg:text-xl">
//                 Connect with top healthcare professionals and book appointments
//                 seamlessly. Your health journey begins with a single click.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced Stats Section */}
//       <div className="container px-4 mx-auto -mt-16">
//         <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
//           {[
//             {
//               icon: Users,
//               value: "50,000+",
//               label: "Satisfied Patients",
//               color: "blue",
//             },
//             {
//               icon: Building2,
//               value: "1,000+",
//               label: "Specialist Doctors",
//               color: "blue",
//             },
//             {
//               icon: Calendar,
//               value: "100K+",
//               label: "Appointments",
//               color: "blue",
//             },
//             {
//               icon: Star,
//               value: "4.9/5",
//               label: "Patient Rating",
//               color: "blue",
//             },
//           ].map((stat, index) => (
//             <div
//               key={index}
//               className="p-4 transition-all duration-300 transform bg-white shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1"
//             >
//               <div className="flex items-center gap-4">
//                 <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
//                   <stat.icon className="w-8 h-8 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-2xl font-bold text-gray-900">
//                     {stat.value}
//                   </h3>
//                   <p className="text-gray-600">{stat.label}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="container px-4 py-24 mx-auto">
//         {/* Navigation Tabs */}
//         <div className="flex justify-center mb-12">
//           <div className="inline-flex p-1 space-x-1 bg-gray-100 rounded-lg">
//             {["about", "services", "expertise"].map((tab) => (
//               <button
//                 key={tab}
//                 onClick={() => setActiveTab(tab)}
//                 className={`px-8 py-3 rounded-md font-medium transition-all ${
//                   activeTab === tab
//                     ? "bg-blue-600 text-white shadow-lg"
//                     : "text-gray-600 hover:text-blue-600"
//                 }`}
//               >
//                 {tab.charAt(0).toUpperCase() + tab.slice(1)}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Tab Content */}
//         <div className="max-w-4xl mx-auto">
//           {activeTab === "about" && (
//             <div className="space-y-12">
//               <div className="flex flex-col gap-8 md:flex-row">
//                 <div className="flex-1">
//                   <h2 className="mb-4 text-3xl font-bold text-gray-900">
//                     Leading Healthcare Platform
//                   </h2>
//                   <p className="text-lg text-gray-600">
//                     We're committed to making quality healthcare accessible to
//                     everyone. Our platform connects patients with verified
//                     specialists, ensuring the best possible care when you need
//                     it.
//                   </p>
//                 </div>
//                 <div className="flex-1">
//                   <img
//                     src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=2070"
//                     alt="Doctor consultation"
//                     className="object-cover w-full rounded-lg shadow-lg h-72"
//                   />
//                 </div>
//               </div>

//               <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
//                 {[
//                   {
//                     icon: Shield,
//                     title: "Verified Doctors",
//                     description:
//                       "All our specialists are thoroughly verified and credentialed",
//                   },
//                   {
//                     icon: Clock,
//                     title: "Quick Booking",
//                     description:
//                       "Book appointments in minutes with real-time availability",
//                   },
//                   {
//                     icon: Heart,
//                     title: "Quality Care",
//                     description:
//                       "Highest standards of healthcare delivery and patient service",
//                   },
//                 ].map((feature, index) => (
//                   <div
//                     key={index}
//                     className="p-6 transition-all duration-300 rounded-lg bg-gray-50 hover:bg-blue-50"
//                   >
//                     <feature.icon className="w-8 h-8 mb-4 text-blue-600" />
//                     <h3 className="mb-2 text-xl font-semibold text-gray-900">
//                       {feature.title}
//                     </h3>
//                     <p className="text-gray-600">{feature.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}

//           {activeTab === "services" && (
//             <div className="grid gap-8 md:grid-cols-2">
//               {[
//                 {
//                   icon: Stethoscope,
//                   title: "General Consultation",
//                   description:
//                     "Regular check-ups and general health consultations",
//                 },
//                 {
//                   icon: Activity,
//                   title: "Specialist Care",
//                   description: "Access to specialized medical professionals",
//                 },
//                 {
//                   icon: Calendar,
//                   title: "Emergency Booking",
//                   description: "Priority appointments for urgent care needs",
//                 },
//                 {
//                   icon: Shield,
//                   title: "Health Records",
//                   description: "Secure digital storage of your medical history",
//                 },
//               ].map((service, index) => (
//                 <div
//                   key={index}
//                   className="p-8 transition-all duration-300 bg-white border shadow-lg rounded-xl hover:shadow-xl hover:-translate-y-1"
//                 >
//                   <service.icon className="w-10 h-10 mb-4 text-blue-600" />
//                   <h3 className="mb-2 text-xl font-semibold text-gray-900">
//                     {service.title}
//                   </h3>
//                   <p className="mb-4 text-gray-600">{service.description}</p>
//                   <button className="flex items-center text-blue-600 hover:text-blue-700">
//                     Learn more <ArrowRight className="w-4 h-4 ml-2" />
//                   </button>
//                 </div>
//               ))}
//             </div>
//           )}

//           {activeTab === "expertise" && (
//             <div className="space-y-8">
//               <div className="text-center">
//                 <h2 className="mb-4 text-3xl font-bold text-gray-900">
//                   Our Medical Expertise
//                 </h2>
//                 <p className="text-lg text-gray-600">
//                   Access top specialists across multiple medical disciplines
//                 </p>
//               </div>
//               <div className="grid gap-6 md:grid-cols-3">
//                 {[
//                   "Cardiology",
//                   "Orthopedics",
//                   "Pediatrics",
//                   "Neurology",
//                   "Dermatology",
//                   "General Medicine",
//                 ].map((specialty) => (
//                   <div
//                     key={specialty}
//                     className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-lg"
//                   >
//                     <p className="text-lg font-medium text-gray-900">
//                       {specialty}
//                     </p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Enhanced Testimonials Section */}
//       <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-2xl mx-auto mb-16 text-center">
//             <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
//               Patient Stories
//             </span>
//             <h2 className="mb-4 text-4xl font-bold text-gray-900">
//               What Our Patients Say
//             </h2>
//             <p className="text-lg text-gray-600">
//               Real experiences from people who have transformed their healthcare
//               journey
//             </p>
//           </div>

//           <div className="relative max-w-5xl mx-auto">
//             <div className="grid gap-8 md:grid-cols-3">
//               {testimonials.map((testimonial, index) => (
//                 <div
//                   key={index}
//                   className={`p-8 transition-all duration-500 bg-white rounded-2xl shadow-xl ${
//                     activeTestimonial === index
//                       ? "scale-105 shadow-2xl border-2 border-blue-200"
//                       : "hover:shadow-xl"
//                   }`}
//                   onMouseEnter={() => setActiveTestimonial(index)}
//                 >
//                   <div className="relative">
//                     <Quote className="absolute w-12 h-12 text-blue-100 -top-2 -left-2" />
//                     <div className="relative z-10">
//                       <div className="flex items-center gap-4 mb-6">
//                         <img
//                           src={testimonial.image}
//                           alt={testimonial.name}
//                           className="w-16 h-16 rounded-full ring-4 ring-blue-50"
//                         />
//                         <div>
//                           <h4 className="font-semibold text-gray-900">
//                             {testimonial.name}
//                           </h4>
//                           <p className="text-sm text-gray-600">
//                             {testimonial.role}
//                           </p>
//                           <div className="flex mt-1">
//                             {[...Array(testimonial.rating)].map((_, i) => (
//                               <Star
//                                 key={i}
//                                 className="w-4 h-4 text-yellow-400 fill-current"
//                               />
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                       <p className="mb-4 italic text-gray-600">
//                         {testimonial.quote}
//                       </p>
//                       <span className="inline-block px-3 py-1 text-sm text-blue-600 rounded-full bg-blue-50">
//                         {testimonial.specialty}
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Enhanced FAQ Section with Accordion */}
//       <div className="py-24 bg-white">
//         <div className="container px-4 mx-auto">
//           <div className="max-w-2xl mx-auto mb-16 text-center">
//             <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full">
//               FAQ
//             </span>
//             <h2 className="mb-4 text-4xl font-bold text-gray-900">
//               Frequently Asked Questions
//             </h2>
//             <p className="text-lg text-gray-600">
//               Get answers to common questions about our services
//             </p>
//           </div>

//           <div className="max-w-3xl mx-auto">
//             <div className="space-y-4">
//               {faqs.map((faq, index) => (
//                 <div
//                   key={index}
//                   className="overflow-hidden transition-all duration-300 bg-white border rounded-xl hover:shadow-md"
//                 >
//                   <button
//                     onClick={() =>
//                       setActiveFaq(activeFaq === index ? null : index)
//                     }
//                     className="flex items-center justify-between w-full p-6 text-left"
//                   >
//                     <h3 className="flex items-center gap-3 text-lg font-semibold text-gray-900">
//                       <MessageCircle className="flex-shrink-0 w-5 h-5 text-blue-600" />
//                       {faq.question}
//                     </h3>
//                     <ChevronDown
//                       className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${
//                         activeFaq === index ? "rotate-180" : ""
//                       }`}
//                     />
//                   </button>
//                   <div
//                     className={`transition-all duration-300 ${
//                       activeFaq === index
//                         ? "max-h-96 opacity-100"
//                         : "max-h-0 opacity-0"
//                     }`}
//                   >
//                     <p className="px-6 pb-6 text-gray-600">{faq.answer}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import {
  Award,
  Clock,
  Shield,
  Heart,
  Users,
  Stethoscope,
  Star,
  CheckCircle,
  Calendar,
  ArrowRight,
  Building2,
  Activity,
  Quote,
  MessageCircle,
  ChevronDown,
  Sparkles,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [activeFaq, setActiveFaq] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      quote:
        "The booking process was incredibly smooth. I found a great specialist and got an appointment the same day!",
      rating: 5,
      specialty: "Cardiology",
    },
    {
      name: "Michael Chen",
      role: "Regular Patient",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
      quote:
        "The platform has transformed how I manage my healthcare. The doctors are excellent and very professional.",
      rating: 5,
      specialty: "Orthopedics",
    },
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200",
      quote:
        "I love how easy it is to access my medical history and schedule follow-up appointments. Highly recommended!",
      rating: 5,
      specialty: "Pediatrics",
    },
  ];

  const faqs = [
    {
      question: "How do I book an appointment?",
      answer:
        "Simply search for your desired specialist, select a convenient time slot, and confirm your booking. You'll receive an immediate confirmation via email with all the necessary details for your appointment.",
    },
    {
      question: "What happens if I need to reschedule?",
      answer:
        "You can reschedule your appointment up to 24 hours before the scheduled time through your account dashboard without any penalty. Our system will automatically notify the doctor and provide you with alternative time slots.",
    },
    {
      question: "Are all doctors verified?",
      answer:
        "Yes, all healthcare providers on our platform undergo a rigorous verification process. We check their medical licenses, professional certifications, practice history, and patient reviews. We also conduct regular audits to maintain quality standards.",
    },
    {
      question: "How can I access my medical records?",
      answer:
        "Your medical records are securely stored in your account. You can access them anytime through the patient dashboard. We use bank-level encryption to ensure your data remains private and secure.",
    },
    {
      question: "What insurance providers do you accept?",
      answer:
        "We work with most major insurance providers. You can verify your insurance coverage directly through our platform before booking an appointment. We also provide transparent pricing for self-pay patients.",
    },
    {
      question: "Is telemedicine available?",
      answer:
        "Yes, we offer telemedicine consultations with qualified healthcare providers. You can choose between in-person visits or virtual consultations based on your needs and the doctor's availability.",
    },
  ];

  return (
    <div className="min-h-screen pt-24 bg-transparent">
      {/* Fixed Navigation */}
      <div
        className={` z-50 transition-all duration-300 ${
          isScrolled ? "bg-transparent shadow-soft-xl" : "bg-transparent"
        }`}
      >
        <div className="container px-10 mx-auto ">
          <div className="flex items-center justify-between h-20 font-inter">
            <div className="flex items-center space-x-2">
              <Stethoscope className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-blue-600">MediBook</span>
            </div>
            <div className="items-center hidden space-x-8 md:flex">
              <button className="px-6 py-2 font-medium text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg">
                Book Appointment
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section with Enhanced Visual Impact */}
      <div className="relative h-[85vh]  overflow-hidden  max-w-[1610px] mx-auto">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&q=80&w=2091"
            alt="Modern medical facility"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/75 via-blue-900/60 to-blue-800/60" />
        </div>
        <div className="absolute inset-0 flex items-center">
          <div className="container px-4 mx-auto">
            <div className="max-w-3xl">
              <div className="inline-flex items-center px-4 py-2 mb-6 space-x-2 transition-all duration-300 border rounded-full animate-pulse-soft bg-blue-500/20 backdrop-blur-sm border-blue-300/20">
                <Sparkles className="w-5 h-5 text-blue-300" />
                <span className="text-blue-200 font-inter">
                  Trusted by 50,000+ Patients
                </span>
              </div>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl font-poppins">
                Expert Healthcare
                <span className="block mt-2 text-transparent bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text">
                  At Your Fingertips
                </span>
              </h1>
              <p className="max-w-xl mb-8 text-lg leading-relaxed text-blue-100 md:text-xl font-inter">
                Connect with top healthcare professionals and book appointments
                seamlessly. Your health journey begins with a single click.
              </p>
              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4 font-poppins">
                <button className="px-8 py-4 text-lg font-medium text-white transition-all duration-300 bg-blue-600 rounded-full hover:bg-blue-700 hover:shadow-lg">
                  Book Appointment
                </button>
                <button className="px-8 py-4 text-lg font-medium text-blue-100 transition-all duration-300 border rounded-full border-blue-200/30 hover:bg-blue-800/30 backdrop-blur-sm">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating Achievement Cards */}
        <div className="absolute hidden space-y-6 -translate-y-1/2 lg:block right-10 top-1/2 font-inter">
          <div className="p-4 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl animate-float shadow-soft-xl hover:shadow-soft-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">4.9/5 Rating</p>
                <p className="text-sm text-gray-600">From 100K+ Users</p>
              </div>
            </div>
          </div>
          <div className="p-4 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-2xl animate-float animation-delay-1000 shadow-soft-xl hover:shadow-soft-2xl">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="font-semibold text-gray-900">ISO Certified</p>
                <p className="text-sm text-gray-600">Quality Assured</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Stats Section */}
      <div className="container relative z-10 px-4 mx-auto -mt-16">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: Users,
              value: "50,000+",
              label: "Satisfied Patients",
              color: "blue",
            },
            {
              icon: Building2,
              value: "1,000+",
              label: "Specialist Doctors",
              color: "blue",
            },
            {
              icon: Calendar,
              value: "100K+",
              label: "Appointments",
              color: "blue",
            },
            {
              icon: Star,
              value: "4.9/5",
              label: "Patient Rating",
              color: "blue",
            },
          ].map((stat, index) => (
            <div
              key={index}
              className="p-4 transition-all duration-300 transform bg-white border xl:p-8 border2xl rounded-xl shadow-soft-xl hover:shadow-soft-2xl hover:-translate-y-1"
            >
              <div className="flex items-center gap-4">
                <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 xl:text-3xl font-poppins">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-poppins">{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="container px-4 py-24 mx-auto">
        {/* Navigation Tabs */}
        <div className="flex justify-center mb-12 overflow-x-auto scrollbar-hide font-inter">
          <div className="inline-flex p-1 space-x-1 bg-gray-100 rounded-lg">
            {["about", "services", "expertise"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-3 rounded-md font-medium transition-all whitespace-nowrap ${
                  activeTab === tab
                    ? "bg-blue-600 text-white shadow-lg"
                    : "text-gray-600 hover:text-blue-600"
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="max-w-5xl mx-auto">
          {activeTab === "about" && (
            <div className="space-y-12">
              <div className="flex flex-col gap-8 md:flex-row">
                <div className="flex-1">
                  <h2 className="mb-4 text-3xl font-bold text-gray-900 font-poppins">
                    Leading Healthcare Platform
                  </h2>
                  <p className="text-lg text-gray-600 font-inter">
                    We're committed to making quality healthcare accessible to
                    everyone. Our platform connects patients with verified
                    specialists, ensuring the best possible care when you need
                    it.
                  </p>
                </div>
                <div className="flex-1">
                  <img
                    src="https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&q=80&w=2070"
                    alt="Doctor consultation"
                    className="object-cover w-full rounded-lg shadow-lg h-72"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {[
                  {
                    icon: Shield,
                    title: "Verified Doctors",
                    description:
                      "All our specialists are thoroughly verified and credentialed",
                  },
                  {
                    icon: Clock,
                    title: "Quick Booking",
                    description:
                      "Book appointments in minutes with real-time availability",
                  },
                  {
                    icon: Heart,
                    title: "Quality Care",
                    description:
                      "Highest standards of healthcare delivery and patient service",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="p-6 transition-all duration-300 rounded-lg bg-gray-50 hover:bg-blue-50 hover:shadow-soft-xl group "
                  >
                    <feature.icon className="w-8 h-8 mb-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                    <h3 className="mb-2 text-xl font-semibold text-gray-900 font-poppins">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 font-poppins">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "services" && (
            <div className="grid gap-8 md:grid-cols-2 font-poppins">
              {[
                {
                  icon: Stethoscope,
                  title: "General Consultation",
                  description:
                    "Regular check-ups and general health consultations",
                },
                {
                  icon: Activity,
                  title: "Specialist Care",
                  description: "Access to specialized medical professionals",
                },
                {
                  icon: Calendar,
                  title: "Emergency Booking",
                  description: "Priority appointments for urgent care needs",
                },
                {
                  icon: Shield,
                  title: "Health Records",
                  description: "Secure digital storage of your medical history",
                },
              ].map((service, index) => (
                <div
                  key={index}
                  className="p-8 transition-all duration-300 bg-white border shadow-soft-xl rounded-xl hover:shadow-soft-2xl hover:-translate-y-1 group font-poppins"
                >
                  <service.icon className="w-10 h-10 mb-4 text-blue-600 transition-transform duration-300 group-hover:scale-110" />
                  <h3 className="mb-2 text-xl font-semibold text-gray-900">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600">{service.description}</p>
                  <button className="flex items-center text-blue-600 transition-all duration-300 group-hover:text-blue-700">
                    Learn more{" "}
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {activeTab === "expertise" && (
            <div className="space-y-8">
              <div className="text-center">
                <h2 className="mb-4 text-3xl font-bold text-gray-900 font-poppins">
                  Our Medical Expertise
                </h2>
                <p className="text-lg text-gray-600 font-inter">
                  Access top specialists across multiple medical disciplines
                </p>
              </div>
              <div className="grid gap-6 md:grid-cols-3">
                {[
                  "Cardiology",
                  "Orthopedics",
                  "Pediatrics",
                  "Neurology",
                  "Dermatology",
                  "General Medicine",
                ].map((specialty) => (
                  <div
                    key={specialty}
                    className="p-6 text-center transition-all duration-300 bg-gray-50 rounded-xl hover:bg-blue-50 hover:shadow-soft-xl group"
                  >
                    <p className="text-lg font-medium text-gray-900 transition-all duration-300 group-hover:text-blue-600 font-poppins">
                      {specialty}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Enhanced Testimonials Section */}
      <div className="py-24 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full font-inter">
              Patient Stories
            </span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-poppins">
              What Our Patients Say
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Real experiences from people who have transformed their healthcare
              journey
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid gap-8 md:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className={`p-8 transition-all duration-500 bg-white rounded-2xl shadow-soft-xl ${
                    activeTestimonial === index
                      ? "scale-105 shadow-soft-2xl border-2 border-blue-200"
                      : "hover:shadow-soft-2xl"
                  }`}
                  onMouseEnter={() => setActiveTestimonial(index)}
                >
                  <div className="relative">
                    <Quote className="absolute w-12 h-12 text-blue-100 -top-2 -left-2" />
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-6">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="object-cover w-16 h-16 rounded-full ring-4 ring-blue-50"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900 font-poppins">
                            {testimonial.name}
                          </h4>
                          <p className="text-sm text-gray-600 font-inter">
                            {testimonial.role}
                          </p>
                          <div className="flex mt-1">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-4 h-4 text-yellow-400 fill-current "
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="mb-4 italic text-gray-600 font-inter">
                        {testimonial.quote}
                      </p>
                      <span className="inline-block px-3 py-1 text-sm text-blue-600 rounded-full bg-blue-50 font-poppins">
                        {testimonial.specialty}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced FAQ Section with Accordion */}
      <div className="py-24 bg-white">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full font-inter">
              FAQ
            </span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-poppins">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Get answers to common questions about our services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="overflow-hidden transition-shadow duration-300 bg-white border rounded-xl hover:shadow-lg"
                >
                  <button
                    onClick={() =>
                      setActiveFaq(activeFaq === index ? null : index)
                    }
                    className="flex items-center justify-between w-full p-6 text-left"
                    aria-expanded={activeFaq === index}
                  >
                    <h3 className="flex items-center gap-3 text-lg font-semibold text-gray-900 font-poppins">
                      <MessageCircle className="flex-shrink-0 w-5 h-5 text-blue-600 " />
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transform transition-transform duration-500 ease-in-out ${
                        activeFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      activeFaq === index
                        ? "grid-rows-[1fr]"
                        : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden font-inter">
                      <p className="p-6 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="py-24 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container px-4 mx-auto">
          <div className="max-w-2xl mx-auto mb-16 text-center">
            <span className="inline-block px-4 py-2 mb-4 text-sm font-medium text-blue-600 bg-blue-100 rounded-full font-inter">
              Contact Us
            </span>
            <h2 className="mb-4 text-4xl font-bold text-gray-900 font-poppins">
              Get in Touch
            </h2>
            <p className="text-lg text-gray-600 font-inter">
              Have questions? Our team is here to help you 24/7
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                icon: Phone,
                title: "Phone",
                info: "+1 (555) 123-4567",
                description: "Mon-Fri from 8am to 5pm",
              },
              {
                icon: Mail,
                title: "Email",
                info: "support@medibook.com",
                description: "Online 24/7",
              },
              {
                icon: MapPin,
                title: "Address",
                info: "123 Medical Center Dr",
                description: "New York, NY 10001",
              },
            ].map((contact, index) => (
              <div
                key={index}
                className="p-8 text-center transition-all duration-300 bg-white rounded-2xl shadow-soft-xl hover:shadow-soft-2xl"
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-6 bg-blue-100 rounded-full">
                  <contact.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-gray-900 font-poppins">
                  {contact.title}
                </h3>
                <p className="mb-1 text-lg font-medium text-blue-600 font-inter">
                  {contact.info}
                </p>
                <p className="text-gray-600 font-inter">{contact.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
