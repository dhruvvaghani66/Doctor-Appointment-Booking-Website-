// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// const Header = () => {
//   return (
//     <div className='flex flex-col flex-wrap px-6 rounded-lg md:flex-row bg-primary md:px-10 lg:px-20'>

//       {/* ---------- Left Side ---------- */}
//       <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[30px]'>
//         <p className='text-3xl font-semibold leading-tight text-white md:text-4xl lg:text-5xl md:leading-tight lg:leading-tight'>Book Appointment <br /> With Trusted Doctors</p>
//         <div className='flex flex-col items-center gap-3 text-sm font-light text-white md:flex-row'>
//           <img className='w-28' src={assets.group_profiles} alt="" />
//           <p>Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
//         </div>
//         <a className='flex items-center gap-2 px-8 py-3 m-auto text-sm text-gray-600 transition-all duration-300 bg-white rounded-full md:m-0 hover:scale-105' href="#speciality">
//           Book appointment
//           <img className='w-3' src={assets.arrow_icon} alt="" />
//         </a>
//       </div>

//       {/* ----------Right Side ---------- */}
//       <div className='relative md:w-1/2'>
//         <img className='bottom-0 w-full h-auto rounded-lg md:absolute' src={assets.header_img} alt="" />
//       </div>

//     </div>
//   )
// }

// export default Header



// import React, { useState } from "react";
// import {
//   Calendar,
//   Search,
//   Star,
//   Users,
//   Clock,
//   ArrowRight,
//   Shield,
//   Award,
// } from "lucide-react";

// function Header() {
//   const [isSearchFocused, setIsSearchFocused] = useState(false);

//   return (
//     <div className="relative mt-24 overflow-x-hidden min-hscreen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 ">
//       {/* Background Decorative Elements */}
//       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
//         {/* <div className="absolute top-0 bg-blue-200 rounded-full left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
//         <div className="absolute bg-pink-200 rounded-full -bottom-8 left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
//         {/* <div className="absolute top-0 bg-purple-200 rounded-full right-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
//       </div>

//       <div className="container relative px-4 py-6 mx-auto mdpx-10 max-w7xl md:py-14">
//         {/* Navigation Pills */}

//         <div className="relative flex flex-col items-center gap-16 lg:gap-12 lg:flex-row">
//           {/* Left Content */}
//           <div className="z-10 flex-1 space-y-8">
//             <div className="space-y-6">
//               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
//                 <span className="flex w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
//                 <span className="font-medium text-blue-700">
//                   Live Consultations Available
//                 </span>
//               </div>

//               <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl">
//                 Your Journey to
//                 <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text">
//                   {" "}
//                   Better Health{" "}
//                 </span>
//                 Starts Here
//               </h1>

//               <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl">
//                 Experience healthcare reimagined. Connect with top specialists,
//                 schedule appointments, and receive personalized care from the
//                 comfort of your home.
//               </p>
//             </div>

//             {/* Search Bar */}
//             <div
//               className={`relative max-w-xl transition-all duration-300 ${
//                 isSearchFocused ? "scale-105" : ""
//               }`}
//             >
//               <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
//                 <Search
//                   className={`h-5 w-5 transition-colors duration-300 ${
//                     isSearchFocused ? "text-blue-600" : "text-gray-400"
//                   }`}
//                 />
//               </div>
//               <input
//                 type="text"
//                 className="block w-full py-5 pl-3 pr-32 text-lg placeholder-gray-400 transition duration-300 border-2 border-gray-100 md:pl-12 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200"
//                 placeholder="Search doctors or specialties..."
//                 onFocus={() => setIsSearchFocused(true)}
//                 onBlur={() => setIsSearchFocused(false)}
//               />
//               <button className="absolute px-4 py-3 font-medium text-white transition-all duration-300 transform -translate-y-1/2 md:px-6 right-3 top-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 active:scale-95">
//                 Find Doctor
//               </button>
//             </div>

//             {/* Stats Grid */}
//             <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
//               {[
//                 {
//                   icon: Users,
//                   label: "Doctors",
//                   value: "2000+",
//                   color: "blue",
//                 },
//                 { icon: Star, label: "Rating", value: "4.8", color: "purple" },
//                 {
//                   icon: Calendar,
//                   label: "Success Rate",
//                   value: "98%",
//                   color: "indigo",
//                 },
//                 {
//                   icon: Clock,
//                   label: "Response Time",
//                   value: "15min",
//                   color: "violet",
//                 },
//               ].map((stat, index) => (
//                 <div
//                   key={index}
//                   className="p-4 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl shadow-blue-100/50 hover:transform hover:-translate-y-1 hover:shadow-xl group"
//                 >
//                   <div className="flex flex-col items-center gap-2 text-center">
//                     <div
//                       className={`bg-${stat.color}-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
//                     >
//                       <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
//                     </div>
//                     <p className="text-2xl font-bold text-gray-900">
//                       {stat.value}
//                     </p>
//                     <p className="text-sm text-gray-600">{stat.label}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Right Content */}
//           <div className="relative flex-1">
//             <div className="relative">
//               {/* Background Glow */}
//               <div className="absolute rounded-full -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-30"></div>

//               {/* Main Image */}
//               <img
//                 src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
//                 alt="Professional doctor with advanced medical technology"
//                 className="relative rounded-3xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
//               />

//               {/* Floating Achievement Card */}
//               <div className="absolute right-0 max-w-xs p-4 shadow-xl -top-6 md:-right-2 bg-white/90 backdrop-blur-sm rounded-2xl animate-float">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-purple-100 rounded-lg">
//                     <Award className="w-8 h-8 text-purple-600" />
//                   </div>
//                   <div>
//                     <p className="font-semibold text-gray-900">
//                       Top Rated 2024
//                     </p>
//                     <p className="text-sm text-gray-600">Healthcare Platform</p>
//                   </div>
//                 </div>
//               </div>

//               {/* Floating Security Card */}
//               <div className="absolute p-4 shadow-xl -bottom-6 lg:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl animate-float animation-delay-2000">
//                 <div className="flex items-center gap-3">
//                   <div className="p-2 bg-blue-100 rounded-lg">
//                     <Shield className="w-6 h-6 text-blue-600" />
//                   </div>
//                   <div className="text-sm">
//                     <p className="font-semibold text-gray-900">
//                       HIPAA Compliant
//                     </p>
//                     <p className="text-gray-600">Secure & Private</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;




import React, { useState } from "react";
import {
  Calendar,
  Search,
  Star,
  Users,
  Clock,
  ArrowRight,
  Shield,
  Award,
} from "lucide-react";

function Header() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <div className="relative mt-24 overflow-x-hidden min-hscreen bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 ">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        {/* <div className="absolute top-0 bg-blue-200 rounded-full left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div> */}
        <div className="absolute bg-pink-200 rounded-full -bottom-8 left-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        {/* <div className="absolute top-0 bg-purple-200 rounded-full right-1/4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div> */}
      </div>

      <div className="container relative px-4 py-6 mx-auto mdpx-10 max-w7xl md:py-14">
        {/* Navigation Pills */}

        <div className="relative flex flex-col items-center gap-16 lg:gap-12 lg:flex-row">
          {/* Left Content */}
          <div className="z-10 flex-1 space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm">
                <span className="flex w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span className="font-medium text-blue-700 font-inter">
                  Live Consultations Available
                </span>
              </div>

              <h1 className="text-5xl font-bold leading-tight text-gray-900 md:text-6xl lg:text-7xl font-poppins">
                Your Journey to
                <span className="text-transparent bg-gradient-to-r from-blue-600 to-purple-500 bg-clip-text">
                  {" "}
                  Better Health{" "}
                </span>
                Starts Here
              </h1>

              <p className="max-w-2xl text-lg leading-relaxed text-gray-600 md:text-xl font-inter">
                Experience healthcare reimagined. Connect with top specialists,
                schedule appointments, and receive personalized care from the
                comfort of your home.
              </p>
            </div>

            {/* Search Bar */}
            <div
              className={`relative max-w-xl transition-all duration-300 ${
                isSearchFocused ? "scale-105" : ""
              }`}
            >
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
                <Search
                  className={`h-5 w-5 transition-colors duration-300 ${
                    isSearchFocused ? "text-blue-600" : "text-gray-400"
                  }`}
                />
              </div>
              <input
                type="text"
                className="block w-full py-5 pl-3 pr-32 text-lg placeholder-gray-400 transition duration-300 border-2 border-gray-100 md:pl-12 bg-white/80 backdrop-blur-sm rounded-2xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 font-inter"
                placeholder="Search doctors or specialties..."
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
              />
              <button className="absolute px-4 py-3 font-medium text-white transition-all duration-300 transform -translate-y-1/2 md:px-6 right-3 top-1/2 bg-gradient-to-r from-blue-600 to-indigo-500 rounded-xl hover:shadow-lg hover:shadow-blue-500/30 active:scale-95 font-inter">
                Find Doctor
              </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
              {[
                {
                  icon: Users,
                  label: "Doctors",
                  value: "2000+",
                  color: "blue",
                },
                { icon: Star, label: "Rating", value: "4.8", color: "purple" },
                {
                  icon: Calendar,
                  label: "Success Rate",
                  value: "98%",
                  color: "indigo",
                },
                {
                  icon: Clock,
                  label: "Response Time",
                  value: "15min",
                  color: "violet",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="p-4 transition-all duration-300 shadow-lg bg-white/80 backdrop-blur-sm rounded-2xl shadow-blue-100/50 hover:transform hover:-translate-y-1 hover:shadow-xl group"
                >
                  <div className="flex flex-col items-center gap-2 text-center">
                    <div
                      className={`bg-${stat.color}-100 p-3 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
                    </div>
                    <p className="text-2xl font-bold text-gray-900 font-inter">
                      {stat.value}
                    </p>
                    <p className="text-sm text-gray-600 font-inter">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex-1">
            <div className="relative">
              {/* Background Glow */}
              <div className="absolute rounded-full -inset-4 bg-gradient-to-r from-blue-500/30 to-purple-500/30 blur-3xl opacity-30"></div>

              {/* Main Image */}
              <img
                src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=1000"
                alt="Professional doctor with advanced medical technology"
                className="relative rounded-3xl shadow-2xl w-full object-cover transform hover:scale-[1.02] transition-transform duration-500"
              />

              {/* Floating Achievement Card */}
              <div className="absolute right-0 max-w-xs p-4 shadow-xl -top-6 md:-right-2 bg-white/90 backdrop-blur-sm rounded-2xl animate-float">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <Award className="w-8 h-8 text-purple-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 font-inter">
                      Top Rated 2024
                    </p>
                    <p className="text-sm text-gray-600 font-inter">Healthcare Platform</p>
                  </div>
                </div>
              </div>

              {/* Floating Security Card */}
              <div className="absolute p-4 shadow-xl -bottom-6 lg:-left-6 bg-white/90 backdrop-blur-sm rounded-2xl animate-float animation-delay-2000">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Shield className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-sm">
                    <p className="font-semibold text-gray-900 font-inter">
                      HIPAA Compliant
                    </p>
                    <p className="text-gray-600 font-inter">Secure & Private</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
