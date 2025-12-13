import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import { useNavigate } from "react-router-dom";
import {
  FaBriefcase,
  FaCalendarAlt,
  FaMoneyBillWave,
  FaUserMd,
} from "react-icons/fa";

const RelatedDoctor = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext);
  const navigate = useNavigate();
  const [relDoc, setRelDoc] = useState([]);

  useEffect(() => {
    if (doctors.length > 0 && speciality) {
      const doctorsData = doctors.filter(
        (doc) => doc.speciality === speciality && doc._id !== docId
      );
      setRelDoc(doctorsData);
    }
  }, [doctors, speciality, docId]);

  return (
    <div className="flex flex-col items-center gap-4 text-gray-900 y16 lg:mx-6">
      <div className="grid w-full gap-4 px-3 pt-2 md:grid-cols-2 lg:grid-cols-3 gap-y-6 sm:px-0">
        {relDoc.slice(0, 3).map((item, index) => (
          <div
            onClick={() => {
              navigate(`/appointment/${item._id}`);
              scrollTo(0, 0);
            }}
            className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer hover:translate-y-[-10px] transition-all duration-500"
            key={index}
          >
            <div className="overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="object-cover w-full duration-500 00 h-80 hover:scale-110"
              />
            </div>
            <div className="p-4 space-y-1">
              {/* Availability */}
              <div className="flex items-center gap-2 text-sm font-semibold text-green-600">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>Available</span>
              </div>

              {/* Name & Speciality */}
              <p className="flex items-center gap-2 text-2xl font-bold text-gray-800">
                <FaUserMd className="w-[18px] h-6 text-blue-500" />
                {item.name}
              </p>
              <p className="text-[#6b7280]">{item.speciality}</p>

              {/* Info Grid */}
              <div className="grid grid-cols-1 pt-2 text-sm text-gray-700 gap-x-4 gap-y-3">
                <div className="flex items-center gap-2">
                  <FaBriefcase className="text-[#4b5563]" />
                  <span>{item.experience}</span>
                </div>
                <div className="flex items-center gap-2">
                  <FaMoneyBillWave className="text-[#4b5563]" />
                  <span>₹{item.fees} per visit</span>
                </div>
                <div className="flex items-center col-span-2 gap-2">
                  <FaCalendarAlt className="text-[#4b5563]" />
                  <span>
                    {new Date(item.date).toLocaleDateString("en-IN", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                </div>
              </div>

              {/* Divider */}
              <hr className="my-3 border-gray-200" />

              {/* Book Button */}
              <div className="pt-1 text-center">
                <button
                  onClick={() => navigate(`/appointment/${item._id}`)}
                  className="w-full px-8 py-2 font-semibold text-blue-600 transition rounded-md bgblue-50 hover:bg-blue-100"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={() => {
          navigate("/doctors");
          scrollTo(0, 0);
        }}
        className="px-12 py-3 mt-10 text-gray-600 rounded-full bg-blue-50"
      >
        more
      </button>
    </div>
  );
};

export default RelatedDoctor;
