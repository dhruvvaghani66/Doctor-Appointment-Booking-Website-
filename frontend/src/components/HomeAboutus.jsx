// import React from "react";
// // import aboutImg from "../../assets/images/about.png";
// // import aboutCardImg from "../../assets/images/about-card.png";
// import { Link } from "react-router-dom";

// const HomeAboutus = () => {
//   return (
//     <section>
//       <div className="container py-10 mx-auto max-w[1260px] ">
//         <div className="flex justify-between gap-[50px] px-4 lg:gap-16 2xl:gap-0 flex-col lg:flex-row">
//           {/* ========= about img ======== */}
//           <div className="relative w3/4 lg:w-1/2 2xl:w-[870px] z-10 order-2 lg:order-1">
//             <img src="https://img.freepik.com/free-photo/handsome-indian-doctor-man-white-medical-gown-with-stethoscope-near-his-workplace_496169-2921.jpg?t=st=1744440518~exp=1744444118~hmac=069280ac695b0dcd80732ccd1c780338e74814d93029bbd52b07a7678949bf7e&w=996" />
//             <div className="absolute z-20 bottom-4 w-full md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
//               <img
//                 src="http://localhost:5175/src/assets/images/about-card.png"
//                 alt=""
//               />
//             </div>
//           </div>
//           {/* ======= about content ====== */}
//           <div className="w-full lg:w-1/2 xl:w[670px] order-1 lg:order-2 ">
//             <h2 className="mt-2 text-5xl heading">
//               Proud to be one of the nations best
//             </h2>
//             <p className="text-xl text-[#4e545f] tet_para mt-6 max-w-2xl">
//               For 30 years in a row, U.S. News & World Report has recognized us
//               as one of the best publics hospitals in the Nation and #1 in
//               Texas. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               www Quas, nemo?
//             </p>
//             <p className="text-xl text-[#4e545f] tet_para mt-[30px] max-w-2xl">
//               Our best is something we strive for each day, caring for our
//               patients-not looking back at what we accomplished but towards what
//               we can do tomorrow. Providing the best. Lorem ipsum dolor sit
//               amet, consectetur adipisicing elit. Aliquid, modi?
//             </p>
//             <Link to="/">
//               <button className="px-6 py-3 mt-6 text-white transition-all bg-blue-600 rounded-3xl hover:bg-blue-700">
//                 Learn More
//               </button>
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HomeAboutus;

import React from "react";
import { Link } from "react-router-dom";

const HomeAboutus = () => {
  return (
    <section>
      <div className="container py-10 mx-auto max-w[1260px]">
        <div className="flex justify-between gap-[50px] px-4 lg:gap-16 2xl:gap-0 flex-col lg:flex-row">
          {/* ========= about img ======== */}
          <div className="relative w3/4 lg:w-1/2 2xl:w-[870px] z-10 order-2 lg:order-1">
            <img src="https://img.freepik.com/free-photo/handsome-indian-doctor-man-white-medical-gown-with-stethoscope-near-his-workplace_496169-2921.jpg?t=st=1744440518~exp=1744444118~hmac=069280ac695b0dcd80732ccd1c780338e74814d93029bbd52b07a7678949bf7e&w=996" />
            <div className="absolute z-20 bottom-4 w-full md:w-[300px] right-[-30%] md:right-[-7%] lg:right-[22%]">
              <img
                src="http://localhost:5175/src/assets/images/about-card.png"
                alt=""
              />
            </div>
          </div>
          {/* ======= about content ====== */}
          <div className="w-full lg:w-1/2 xl:w[670px] order-1 lg:order-2">
            <h2 className="mt-2 text-5xl font-poppins">
              Proud to be one of the nation's best
            </h2>
            <p className="text-xl text-[#4e545f] font-inter mt-6 max-w-2xl">
              For 30 years in a row, U.S. News & World Report has recognized us
              as one of the best public hospitals in the Nation and #1 in Texas.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. www
              Quas, nemo?
            </p>
            <p className="text-xl text-[#4e545f] font-inter mt-[30px] max-w-2xl">
              Our best is something we strive for each day, caring for our
              patients-not looking back at what we accomplished but towards what
              we can do tomorrow. Providing the best. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aliquid, modi?
            </p>
            <Link to="/">
              <button className="px-6 py-3 mt-6 text-white transition-all bg-blue-600 font-inter rounded-3xl hover:bg-blue-700">
                Learn More
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeAboutus;
