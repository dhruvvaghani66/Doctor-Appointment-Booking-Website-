// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// const Footer = () => {
//   return (
//     <div className='md:mx-10'>
//       <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

//         {/* ---------- Left Section ---------- */}
//         <div>
//           <img className='w-40 mb-5' src={assets.logo} alt="" />
//           <p className='w-full leading-6 text-gray-600 md:w-2/3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
//         </div>

//         {/* ---------- Center Section ---------- */}
//         <div>
//           <p className='mb-5 text-xl font-medium'>COMPANY</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>Home</li>
//             <li>About us</li>
//             <li>Contact us</li>
//             <li>Privacy policy</li>
//           </ul>
//         </div>

//         {/* ---------- Right Section ---------- */}
//         <div>
//           <p className='mb-5 text-xl font-medium'>GET IN TOUCH</p>
//           <ul className='flex flex-col gap-2 text-gray-600'>
//             <li>+1-212-456-7890</li>
//             <li>sadikahmetaydin@gmail.com</li>
//           </ul>
//         </div>

//       </div>

//       {/* ---------- Copyright Text ---------- */}
//       <div>
//         <hr />
//         <p className='py-5 text-sm text-center'>Copyright © 2024 - All Right Reserved.</p>
//       </div>

//     </div>
//   )
// }

// export default Footer

import React from "react";
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
import { RiLinkedinFill } from "react-icons/ri";
import {
  AiFillYoutube,
  AiFillGithub,
  AiOutlineInstagram,
} from "react-icons/ai";

const socialLinks = [
  {
    path: "https://youtube.com/shorts/ArTdXc-v6f8?si=ADiyKr6SQ0pl6gtw",
    icon: <AiFillYoutube className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://gist.github.com/roachhd/d579b58148d7e36a6b72",
    icon: <AiFillGithub className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "https://www.instagram.com/muhib160.official/",
    icon: <AiOutlineInstagram className="w-4 h-5 group-hover:text-white" />,
  },
  {
    path: "",
    icon: <RiLinkedinFill className="w-4 h-5 group-hover:text-white" />,
  },
];

const quickLinks01 = [
  {
    path: "/",
    display: "Home",
  },
  {
    path: "/about",
    display: "About Us",
  },
  {
    path: "/about",
    display: "Services",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];

const quickLinks02 = [
  {
    path: "/doctors",
    display: "Find a Doctor",
  },
  {
    path: "/doctors",
    display: "Request an Appointment",
  },
  {
    path: "/doctors",
    display: "Find a Location",
  },
  {
    path: "/doctors",
    display: "Get a Opinion",
  },
];
const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/contact",
    display: "Contact Us",
  },
];
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="px-6 pt-10 pb-16">
      <div className="container">
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px] ">
          <div>
            <img
              src="https://gist.github.com/roachhd/d579b58148d7e36a6b72"
              alt=""
            />
            <p className="text-[16px] leading-7 font-[400] text-textColor mt-4">
              Copyright © {year} developed by Dhruv Vaghani all right reserved.
            </p>
            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border border-solid border-[#181A1E] rounded-full flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] mb-6 text-headingColor">
              Support
            </h2>
            <ul>
              {quickLinks03.map((item, index) => (
                <li key={index} className="mb-4">
                  <Link
                    to={item.path}
                    className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}{" "}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
