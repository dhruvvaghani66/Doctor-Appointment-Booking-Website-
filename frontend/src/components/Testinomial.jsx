// import React, { useState, useEffect } from "react";
// import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Anderson",
//     role: "Patient",
//     avatar:
//       "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     rating: 5,
//     review:
//       "Dr. Emily transformed my healthcare experience. Her attention to detail and caring approach made me feel truly valued as a patient. The online booking system was seamless!",
//     doctorName: "Dr. Emily Chen",
//     specialty: "Cardiologist",
//     doctorImage:
//       "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     verified: true,
//   },
//   {
//     id: 2,
//     name: "Michael Roberts",
//     role: "Patient",
//     avatar:
//       "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     rating: 5,
//     review:
//       "The entire process was incredibly smooth. Dr. James not only provided excellent care but also took the time to explain everything thoroughly. Best medical experience ever!",
//     doctorName: "Dr. James Wilson",
//     specialty: "Neurologist",
//     doctorImage:
//       "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     verified: true,
//   },
//   {
//     id: 3,
//     name: "Emma Thompson",
//     role: "Patient",
//     avatar:
//       "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     rating: 5,
//     review:
//       "Finding and booking appointments with Dr. Sarah was incredibly easy through this platform. Her expertise in dermatology is unmatched. Highly recommend!",
//     doctorName: "Dr. Sarah Martinez",
//     specialty: "Dermatologist",
//     doctorImage:
//       "https://images.unsplash.com/photo-1594824476967-48c8b964273f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80",
//     verified: true,
//   },
// ];

// export default function Testimonials() {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const [isAnimating, setIsAnimating] = useState(false);

//   const nextTestimonial = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setActiveIndex((prev) => (prev + 1) % testimonials.length);
//     }
//   };

//   const prevTestimonial = () => {
//     if (!isAnimating) {
//       setIsAnimating(true);
//       setActiveIndex(
//         (prev) => (prev - 1 + testimonials.length) % testimonials.length
//       );
//     }
//   };

//   useEffect(() => {
//     const timer = setTimeout(() => setIsAnimating(false), 500);
//     return () => clearTimeout(timer);
//   }, [activeIndex]);

//   return (
//     <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
//       <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
//         <div className="mb-16 text-center">
//           <h2 className="mb-4 text-4xl font-bold text-gray-900">
//             Patient Success Stories
//           </h2>
//           <p className="max-w-2xl mx-auto text-lg text-gray-600">
//             Discover how our platform has helped patients find the perfect
//             doctors and receive exceptional care.
//           </p>
//         </div>

//         <div className="relative">
//           {/* Navigation Buttons */}
//           <button
//             onClick={prevTestimonial}
//             className="absolute left-0 z-10 p-2 text-gray-600 transition-all duration-200 -translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 lg:-translate-x-12 hover:shadow-xl hover:text-gray-900"
//           >
//             <ChevronLeft className="w-6 h-6" />
//           </button>
//           <button
//             onClick={nextTestimonial}
//             className="absolute right-0 z-10 p-2 text-gray-600 transition-all duration-200 translate-x-4 -translate-y-1/2 bg-white rounded-full shadow-lg top-1/2 lg:translate-x-12 hover:shadow-xl hover:text-gray-900"
//           >
//             <ChevronRight className="w-6 h-6" />
//           </button>

//           {/* Testimonial Card */}
//           <div className="relative overflow-hidden bg-white shadow-xl rounded-2xl">
//             <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-10" />

//             <div className="relative p-8 md:p-12">
//               <div className="flex flex-col items-start gap-8 md:flex-row">
//                 {/* Doctor Info */}
//                 <div className="flex flex-col items-center w-full text-center md:w-1/3">
//                   <div className="relative mb-4">
//                     <img
//                       src={testimonials[activeIndex].doctorImage}
//                       alt={testimonials[activeIndex].doctorName}
//                       className="object-cover w-32 h-32 border-4 border-white rounded-full shadow-lg"
//                     />
//                     <div className="absolute bottom-0 right-0 p-1 bg-green-500 border-2 border-white rounded-full">
//                       <div className="w-3 h-3 bg-green-500 rounded-full" />
//                     </div>
//                   </div>
//                   <h3 className="mb-1 text-xl font-bold text-gray-900">
//                     {testimonials[activeIndex].doctorName}
//                   </h3>
//                   <p className="mb-4 font-medium text-blue-600">
//                     {testimonials[activeIndex].specialty}
//                   </p>
//                   <div className="flex items-center gap-1">
//                     {[...Array(testimonials[activeIndex].rating)].map(
//                       (_, i) => (
//                         <Star
//                           key={i}
//                           className="w-5 h-5 text-yellow-400 fill-yellow-400"
//                         />
//                       )
//                     )}
//                   </div>
//                 </div>

//                 {/* Review Content */}
//                 <div className="w-full md:w-2/3">
//                   <Quote className="w-12 h-12 mb-4 text-blue-600 opacity-20" />
//                   <p className="mb-8 text-xl italic text-gray-600">
//                     "{testimonials[activeIndex].review}"
//                   </p>

//                   {/* Patient Info */}
//                   <div className="flex items-center gap-4">
//                     <img
//                       src={testimonials[activeIndex].avatar}
//                       alt={testimonials[activeIndex].name}
//                       className="object-cover w-16 h-16 border-2 border-gray-100 rounded-full"
//                     />
//                     <div>
//                       <div className="flex items-center gap-2">
//                         <h4 className="text-lg font-semibold text-gray-900">
//                           {testimonials[activeIndex].name}
//                         </h4>
//                         {testimonials[activeIndex].verified && (
//                           <span className="px-2 py-1 text-xs font-medium text-blue-600 bg-blue-100 rounded-full">
//                             Verified Patient
//                           </span>
//                         )}
//                       </div>
//                       <p className="text-gray-500">
//                         {testimonials[activeIndex].role}
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Pagination Dots */}
//           <div className="flex justify-center gap-3 mt-8">
//             {testimonials.map((_, index) => (
//               <button
//                 key={index}
//                 onClick={() => setActiveIndex(index)}
//                 className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
//                   index === activeIndex
//                     ? "bg-blue-600 w-8"
//                     : "bg-gray-300 hover:bg-gray-400"
//                 }`}
//               />
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// src/pages/Testimonial.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { MdStarRate } from "react-icons/md";
import "swiper/css";
import { Stethoscope } from "lucide-react"; // minimal, professional icon

const testimonials = [
  {
    name: "Anjali Sharma",
    role: "Patient - Skin Specialist",
    image: "https://randomuser.me/api/portraits/women/79.jpg",
    feedback:
      "From booking to consultation, everything was smooth and fast. The UI is amazing and feels trustworthy!",
    rating: 5,
  },
  {
    name: "Amit Verma",
    role: "Patient - ENT Specialist",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "Loved the animations, responsiveness, and clean layout. Found my doctor in 2 minutes!",
    rating: 4,
  },
  {
    name: "Priya Singh",
    role: "Patient - Pediatrician",
    image: "https://randomuser.me/api/portraits/women/60.jpg",
    feedback:
      "Honestly, the design is world-class. It looks like a premium medical platform. Well done!",
    rating: 5,
  },
  {
    name: "Rohit Mehra",
    role: "Patient - General Checkup",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    feedback:
      "The platform is very clean and the appointment booking process is seamless. Highly recommended!",
    rating: 5,
  },
];

const TestimonialCard = ({ name, role, image, feedback, rating }) => (
  <div className="flex flex-col justify-between w-full h-full p-6 bg-white border border-gray-300  shadow-lg rounded-2xl transform transition duration-300 hover:scale-[1.03] hover:shadow-xl">
    <div className="flex items-center gap-4 mb-4 ">
      <img
        src={image}
        alt={name}
        className="object-cover w-16 h-16 border-2 border-blue-400 rounded-full"
      />
      <div>
        <h3 className="text-xl font-semibold text-blue-800 font-poppins">
          {name}
        </h3>
        <p className="text-sm text-gray-500 font-inter">{role}</p>
      </div>
    </div>
    <p className="flex-grow mb-4 text-base leading-relaxed text-gray-700 font-poppins">
      “{feedback}”
    </p>
    <div className="flex gap-1 text-lg text-yellow-500 ">
      {Array(rating)
        .fill()
        .map((_, i) => (
          <MdStarRate key={i} />
        ))}
    </div>
  </div>
);

const Testimonial = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="px-4 mx-auto text-center max-w-7xl">
        <h2 className="flex items-center justify-center gap-2 mb-6 text-4xl font-bold text-blue-900 font-poppins">
          <Stethoscope className="text-blue-700 w-7 h-7" />
          Patients Trust Our Platform
        </h2>

        <p className="max-w-xl mx-auto mb-12 text-gray-600 text-md font-inter">
          Real feedback from our satisfied patients. Quality care starts with
          trust.
        </p>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          speed={900} // smooth transition speed
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="px-4"
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className="flex items-center justify-center w-full h-64 xl:h-60 h[370px]">
                <TestimonialCard {...t} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
