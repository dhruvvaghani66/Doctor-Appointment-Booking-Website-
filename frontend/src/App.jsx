// import React from "react";
// import { Route, Routes } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Navbar from "./components/Navbar";
// import Home from "./pages/Home";
// import Doctors from "./pages/Doctors";
// import Login from "./pages/Login";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import MyProfile from "./pages/MyProfile";
// import MyAppointments from "./pages/MyAppointments";
// import Appointment from "./pages/Appointment";
// import Footer from "./components/Footer";
// import "./index.css";

// const App = () => {
//   return (
//     <div className="mx-4 sm:mx-[4%] xl:mx-[8%]">
//       <ToastContainer />
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/doctors" element={<Doctors />} />
//         <Route path="/doctors/:speciality" element={<Doctors />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/my-profile" element={<MyProfile />} />
//         <Route path="/my-appointments" element={<MyAppointments />} />
//         <Route path="/appointment/:docId" element={<Appointment />} />
//       </Routes>
//       <Footer />
//     </div>
//   );
// };

// export default App;



import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";
import Login from "./pages/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import Footer from "./components/Footer";
import "./index.css";

const App = () => {
  const location = useLocation();

  // Routes where Navbar and Footer should be hidden
  const hideOnRoutes = ["/login"];
  const shouldHideLayout = hideOnRoutes.includes(location.pathname);

  return (
    <div className="mx-4 sm:mx-[4%] xl:mx-[8%]">
      <ToastContainer />
      
      {!shouldHideLayout && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
      </Routes>

      {!shouldHideLayout && <Footer />}
    </div>
  );
};

export default App;
