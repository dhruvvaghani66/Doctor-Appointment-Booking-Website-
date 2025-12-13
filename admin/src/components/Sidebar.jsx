// import React, { useContext } from 'react'
// import { AdminContext } from '../context/AdminContext'
// import { NavLink } from 'react-router-dom'
// import { assets } from '../assets/assets_admin/assets'

// const Sidebar = () => {

//   const { aToken } = useContext(AdminContext)

//   return (
//     <div className='min-h-screen bg-white border-r'>
//       {
//         aToken &&
//         <ul className='text-[#515151] mt-5'>
//           <NavLink className={({ isActive }) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`} to={'/admin-dashboard'}>
//             <img src={assets.home_icon} alt="" />
//             <p>Dashboard</p>
//           </NavLink>

//           <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`} to={'/all-appointments'}>
//             <img src={assets.appointment_icon} alt="" />
//             <p>Appointments</p>
//           </NavLink>

//           <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`} to={'/add-doctor'}>
//             <img src={assets.add_icon} alt="" />
//             <p>Add Doctor</p>
//           </NavLink>

//           <NavLink className={({isActive}) => `flex items-center gap-3 py-3.5 md:px-9 md:min-w-72 cursor-pointer ${isActive ? 'bg-[#f2f3ff] border-r-4 border-primary' : ''}`} to={'/doctor-list'}>
//             <img src={assets.people_icon} alt="" />
//             <p>Doctors List</p>
//           </NavLink>
//         </ul>
//       }
//     </div>
//   )
// }

// export default Sidebar

import React, { useContext, useState } from "react";
import { AdminContext } from "../context/AdminContext";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  CalendarClock,
  UserPlus,
  Users,
  Menu,
  X,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const Sidebar = () => {
  const { aToken } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(true);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const menuItems = [
    {
      path: "/admin-dashboard",
      name: "Dashboard",
      icon: (
        <LayoutDashboard className="transition-colors duration-200" size={20} />
      ),
    },
    {
      path: "/all-appointments",
      name: "Appointments",
      icon: (
        <CalendarClock className="transition-colors duration-200" size={20} />
      ),
    },
    {
      path: "/add-doctor",
      name: "Add Doctor",
      icon: <UserPlus className="transition-colors duration-200" size={20} />,
    },
    {
      path: "/doctor-list",
      name: "Doctors List",
      icon: <Users className="transition-colors duration-200" size={20} />,
    },
  ];

  return (
    <>
      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="fixed top-4 left-4 z-50 p-2.5 rounded-xl bg-white shadow-lg md:hidden hover:bg-gray-50 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        {isMobileOpen ? (
          <X className="text-gray-600" size={20} />
        ) : (
          <Menu className="text-gray-600" size={20} />
        )}
      </button>

      {/* Backdrop */}
      {isMobileOpen && (
        <div
          className="fixed inset-0 z-40 transition-opacity duration-300 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed md:sticky top-0 left-0 h-full bg-white border-r border-gray-100
          shadow-xl md:shadow-sm transition-all duration-300 ease-in-out z-40
          ${
            isMobileOpen ? "translate-x-0" : "-translate-x-full"
          } md:translate-x-0
          ${isOpen ? "w-72" : "w-20"} md:flex flex-col
        `}
      >
        {/* Logo Area */}
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-100 md:mt-0 mt-14">
          <h1
            className={`
            font-bold bg-gradient-to-r from-indigo-600 to-blue-500 bg-clip-text text-transparent
            transition-all duration-300
            ${isOpen ? "text-xl" : "text-sm"}
          `}
          >
            {isOpen ? "Admin Panel" : "AP"}
          </h1>

          {/* Toggle Button (Desktop) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden p-2 transition-colors duration-200 rounded-lg md:flex hover:bg-gray-100"
          >
            {isOpen ? (
              <ChevronLeft size={20} className="text-gray-500" />
            ) : (
              <ChevronRight size={20} className="text-gray-500" />
            )}
          </button>
        </div>

        {/* Menu Items */}
        {aToken && (
          <nav className="flex-1 p-4 overflow-y-auto">
            <ul className="space-y-2">
              {menuItems.map((item, index) => (
                <li key={index}>
                  <NavLink
                    to={item.path}
                    onClick={() => setIsMobileOpen(false)}
                    className={({ isActive }) => `
                      relative flex items-center gap-3 px-4 py-3 rounded-xl
                      transition-all duration-200 group
                      ${
                        isActive
                          ? "bg-gradient-to-r from-indigo-50 to-blue-50 text-indigo-600"
                          : "text-gray-600 hover:bg-gray-50"
                      }
                    `}
                  >
                    <span className="flex-shrink-0">{item.icon}</span>
                    <span
                      className={`
                      whitespace-nowrap transition-all duration-200
                      ${isOpen ? "opacity-100" : "opacity-0 md:opacity-0"}
                      ${isOpen ? "w-auto" : "w-0 md:w-0"}
                    `}
                    >
                      {item.name}
                    </span>
                    {!isOpen && (
                      <div
                        className={`
                        absolute left-full ml-2 px-2 py-1 bg-gray-800 text-white text-sm
                        rounded-md opacity-0 -translate-x-3 pointer-events-none
                        group-hover:opacity-100 group-hover:translate-x-0
                        transition-all duration-200
                        ${isOpen ? "hidden" : "hidden md:block"}
                      `}
                      >
                        {item.name}
                      </div>
                    )}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </aside>
    </>
  );
};

export default Sidebar;
