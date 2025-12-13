// import React, { useContext, useState } from 'react'
// import { NavLink, useNavigate } from 'react-router-dom'
// import { assets } from '../assets/assets_frontend/assets'
// import { AppContext } from '../context/AppContext';

// const Navbar = () => {

//   const navigate = useNavigate();
//   const { token, setToken, userData } = useContext(AppContext)
//   const [showMenu, setShowMenu] = useState(false);

//   const logout = () => {
//     setToken(false)
//     localStorage.removeItem('token')
//   }

//   return (
//     <div className='flex items-center justify-between py-4 mb-5 text-sm border-b border-b-gray-400'>
//       <img onClick={() => navigate('/')} className='cursor-pointer w-44' src={assets.logo} alt="" />
//       <ul className='items-start hidden gap-5 font-medium md:flex'>
//         <NavLink to='/'>
//           <li className='py-1'>HOME</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>

//         <NavLink to='/doctors'>
//           <li className='py-1'>ALL DOCTORS</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>

//         <NavLink to='/about'>
//           <li className='py-1'>ABOUT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>

//         <NavLink to='/contact'>
//           <li className='py-1'>CONTACT</li>
//           <hr className='border-none outline-none h-0.5 bg-primary w-3/5 m-auto hidden' />
//         </NavLink>
//       </ul>

//       <div className='flex items-center gap-4'>
//         {
//           token && userData
//             ? <div className='relative flex items-center gap-2 cursor-pointer group'>
//               <img className='w-8 rounded-full' src={userData.image} alt="" />
//               <img className='w-2.5' src={assets.dropdown_icon} alt="" />
//               <div className='absolute top-0 right-0 z-20 hidden text-base font-medium text-gray-600 pt-14 group-hover:block'>
//                 <div className='flex flex-col gap-4 p-4 rounded min-w-48 bg-stone-100'>
//                   <p onClick={() => navigate('/my-profile')} className='cursor-pointer hover:text-black'>My Profile</p>
//                   <p onClick={() => navigate('/my-appointments')} className='cursor-pointer hover:text-black'>My Appointments</p>
//                   <p onClick={logout} className='cursor-pointer hover:text-black'>Logout</p>
//                 </div>
//               </div>
//             </div>
//             : <button onClick={() => navigate('/login')} className='hidden px-8 py-3 font-light text-white rounded-full bg-primary md:block'>Create Account</button>
//         }

//         <img onClick={() => setShowMenu(true)} className='w-6 md:hidden' src={assets.menu_icon} alt="" />

//         {/* ---------- Mobile Menu ---------- */}
//         <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-white transition-all`}>
//           <div className='flex items-center justify-between px-5 py-6'>
//             <img className='w-36' src={assets.logo} alt="" />
//             <img className='w-7' onClick={() => setShowMenu(false)} src={assets.cross_icon} alt="" />
//           </div>

//           <ul className='flex flex-col items-center gap-2 px-5 mt-5 text-lg font-medium'>
//             <NavLink onClick={() => setShowMenu(false)} to='/'><p className='inline-block px-4 py-2 rounded'>HOME</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/doctors'><p className='inline-block px-3 py-3 rounded'>ALL DOCTORS</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/about'><p className='inline-block px-3 py-3 rounded'>ABOUT</p></NavLink>
//             <NavLink onClick={() => setShowMenu(false)} to='/contact'><p className='inline-block px-3 py-3 rounded'>CONTACT</p></NavLink>
//           </ul>
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Navbar

import React, { useContext, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets_frontend/assets";
import { AppContext } from "../context/AppContext";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();
  const { token, setToken, userData } = useContext(AppContext);
  const [showMenu, setShowMenu] = useState(false);

  const logout = () => {
    setToken(false);
    localStorage.removeItem("token");
  };

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "ALL DOCTORS", path: "/doctors" },
    { name: "ABOUT", path: "/about" },
    { name: "CONTACT", path: "/contact" },
  ];

  return (
    <div className="">
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-4 py-6 mx-auto bg-white shadow-md max-w-[1233px]  2xl:max-w-[1610px]  md:px-10 bg-opacity-80 backdrop-blur-md rounded-bxl">
        <img
          onClick={() => navigate("/")}
          className="w-40 transition-transform duration-300 cursor-pointer md:w-40 hover:scale-105"
          src={assets.logo}
          alt="Logo"
        />

        <ul className="hidden md:flex gap-8 text-[15px] font-semibold text-gray-700">
          {navItems.map(({ name, path }) => (
            <NavLink
              to={path}
              key={name}
              className={({ isActive }) =>
                `relative py-2 transition-colors duration-300 font-poppins ${
                  isActive ? "text-blue-800" : "hover:text-blue-700"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  <li>{name}</li>
                  {isActive && (
                    <motion.div
                      layoutId="underline"
                      className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-700 rounded-full"
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          {token && userData ? (
            <div className="relative z-50 group">
              <div className ="flex items-center gap-2 cursor-pointer md:flex-row mdblock">
                <img
                  className="hidden object-cover border-2 border-white rounded-full shadow-lg md:block w-9 h-9"
                  src={userData.image}
                  alt="profile"
                />
                <img
                  className="w-2.5 hidden md:block "
                  src={assets.dropdown_icon}
                  alt="dropdown"
                />
              </div>

              {/* Dropdown Menu */}
              <div className="absolute right-0 z-50 flex-col hidden gap-3 px-5 py-3 text-gray-800 border shadow-xl mt2 group-hover:flex min-w-48 rounded-xl border-white/20 bg-white/80 backdrop-blur-md">
                <p
                  onClick={() => navigate("/my-profile")}
                  className="transition-all duration-200 cursor-pointer hover:text-black"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/my-appointments")}
                  className="transition-all duration-200 cursor-pointer hover:text-black"
                >
                  My Appointments
                </p>
                <p
                  onClick={logout}
                  className="transition-all duration-200 cursor-pointer hover:text-red-600"
                >
                  Logout
                </p>
              </div>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="hidden px-6 py-2 text-white transition-all bg-blue-700 rounded-full shadow-lg font-poppins md:inline-block hover:shadow-xl"
            >
              Create Account
            </button>
          )}

          {/* // inside your component... */}
          <img
            onClick={() => setShowMenu(!showMenu)}
            className="cursor-pointer w-7 md:hidden"
            src={showMenu ? assets.cross_icon : assets.menu_icon}
            alt="Menu Toggle"
          />
        </div>

        {/* ---------- Mobile Menu ---------- */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="fixed top-0 bottom-0 left-0 z-50 w-[74%] h-[990px] bg-white shadow-lg px-8 py-6 overflow-y-auto md:hidden"
            >
              <div className="flex items-center justify-between mb-8">
                <img className="w-32" src={assets.logo} alt="Logo" />
              </div>

              {/* Navigation Links */}
              <ul className="flex flex-col gap-5 mt-10 text-lg font-semibold text-gray-800 mb-18">
                {navItems.map(({ name, path }) => (
                  <NavLink
                    key={name}
                    to={path}
                    onClick={() => setShowMenu(false)}
                    className={({ isActive }) =>
                      `px-5 py-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-200 ${
                        isActive ? "text-blue-600" : "text-gray-800"
                      }`
                    }
                  >
                    {name}
                  </NavLink>
                ))}
              </ul>

              {/* Profile Section - only if user is logged in */}
              {token && userData && (
                <div className="pt-6 mt-6 border-t border-gray-300">
                  <div className="flex items-center gap-5 mb-6">
                    <img
                      className="border-2 border-gray-300 rounded-full shadow-xl w-14 h-14"
                      src={userData.image}
                      alt="Profile"
                    />
                    <div className="flex flex-col">
                      <p className="text-xl font-semibold text-gray-800">
                        {userData.name}
                      </p>
                      <p className="text-sm text-gray-600">{userData.email}</p>
                    </div>
                  </div>

                  <ul className="flex flex-col gap-5 text-base text-gray-700">
                    <li
                      onClick={() => {
                        navigate("/my-profile");
                        setShowMenu(false);
                      }}
                      className="px-4 py-2 transition-all duration-300 rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-100"
                    >
                      <span className="font-medium">My Profile</span>
                    </li>
                    <li
                      onClick={() => {
                        navigate("/my-appointments");
                        setShowMenu(false);
                      }}
                      className="px-4 py-2 transition-all duration-300 rounded-lg cursor-pointer hover:text-blue-600 hover:bg-blue-100"
                    >
                      <span className="font-medium">My Appointments</span>
                    </li>
                    <li
                      onClick={() => {
                        logout();
                        setShowMenu(false);
                      }}
                      className="px-4 py-2 text-red-500 transition-all duration-300 rounded-lg cursor-pointer hover:bg-red-100 hover:text-red-600"
                    >
                      <span className="font-medium">Logout</span>
                    </li>
                  </ul>
                </div>
              )}

              {/* If not logged in, show login button */}
              {!token && (
                <button
                  onClick={() => {
                    navigate("/login");
                    setShowMenu(false);
                  }}
                  className="w-full py-3 mt-8 text-white transition-all duration-300 bg-blue-700 rounded-full shadow-lg hover:shadow-xl"
                >
                  Create Account
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Navbar;
