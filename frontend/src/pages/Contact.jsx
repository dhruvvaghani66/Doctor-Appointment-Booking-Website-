// import React from 'react'
// import { assets } from '../assets/assets_frontend/assets'

// const Contact = () => {
//   return (
//     <div>
//       <div className='pt-10 text-2xl text-center text-gray-500'>
//         <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
//       </div>

//       <div className='flex flex-col justify-center gap-10 my-10 text-sm md:flex-row mb-28'>
//         <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />

//         <div className='flex flex-col items-start justify-center gap-6'>
//           <p className='text-lg font-semibold text-gray-600'>Our OFFICE</p>
//           <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Washington, USA</p>
//           <p className='text-gray-500'>Tel: (415) 555 0132 <br /> Email: sadikahmetaydin@gmail.com</p>
//           <p className='text-lg font-semibold text-gray-600'>Careers at PRESCRIPTO</p>
//           <p className='text-gray-500'>Learn more about our teams and job openings.</p>

//           <button className='px-8 py-4 text-sm transition-all duration-500 border border-black hover:bg-black hover:text-white'>Explore Jobs</button>
//         </div>
//       </div>

//     </div>
//   )
// }

// export default Contact

import React, { useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Briefcase,
  ArrowRight,
  Clock,
  Send,
  MessageSquare,
  Users,
  Building,
  Calendar,
  Award,
  Heart,
} from "lucide-react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = () => {
    // Existing backend integration remains unchanged
  };

  return (
    <div className="min-hscreen mt-24 bg-[#f8fafc] overflow-hidden font-poppins">
      {/* Hero Section with Background Image */}
      <div className="relative h-[50vh] mb-24">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80"
            alt="Modern Medical Facility"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 to-blue-900/70"></div>
        </div>

        <div className="relative flex flex-col justify-center h-full px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h1 className="mb-6 text-5xl font-bold text-white md:text-7xl">
            Healthcare
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-indigo-200">
              Made Personal
            </span>
          </h1>
          <p className="max-w-2xl text-xl text-blue-100">
            Connect with top healthcare professionals and experience medical
            excellence tailored to your needs.
          </p>

          <div className="flex justify-start gap-4 mt-10 lg:gap-6">
            <button className="relative px-6 py-2 overflow-hidden text-white transition-all duration-300 shadow-lg lg:py-4 lg:px-8 group bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-2xl hover:-translate-y-1">
              <div className="absolute inset-0 w-full h-full transition-transform origin-left transform scale-x-0 bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:scale-x-100"></div>
              <span className="relative flex items-center gap-2">
                <MessageSquare className="w-5 h-5" />
                Book Consultation
              </span>
            </button>
            <button className="relative px-4 py-3.5 overflow-hidden text-gray-700 transition-all duration-300 bg-white border-2 border-gray-100 shadow-lg lg:py-4 lg:px-8 group rounded-xl hover:shadow-2xl hover:-translate-y-1">
              <span className="relative flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call Now
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Stats Section with Image */}
      <div className="px-4 mx-auto mb-24 max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="absolute -inset-4">
              <div className="w-full h-full mx-auto rotate-2 bg-gradient-to-r from-blue-300 to-indigo-400 opacity-10 blur-lg"></div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80"
              alt="Doctor Team"
              className="relative shadow-xl rounded-3xl"
            />
          </div>

          <div className="grid grid-cols-2 gap-8">
            {[
              {
                icon: Building,
                label: "Medical Centers",
                value: "25+",
                color: "from-blue-500 to-blue-600",
              },
              {
                icon: Users,
                label: "Expert Doctors",
                value: "100+",
                color: "from-indigo-500 to-indigo-600",
              },
              {
                icon: Calendar,
                label: "Daily Appointments",
                value: "500+",
                color: "from-purple-500 to-purple-600",
              },
              {
                icon: Heart,
                label: "Patient Satisfaction",
                value: "99%",
                color: "from-pink-500 to-pink-600",
              },
            ].map((stat, index) => (
              <div key={index} className="relative group">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative p-6 bg-white shadow-xl rounded-2xl">
                  <div
                    className={`bg-gradient-to-r ${stat.color} w-12 h-12 rounded-xl flex items-center justify-center mb-4`}
                  >
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div className="px-4 pb-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25"></div>
              <div className="relative overflow-hidden bg-white shadow-xl rounded-3xl">
                <div className="relative h-48">
                  <img
                    src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80"
                    alt="Modern Office"
                    className="object-cover w-full h-full"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  <div className="absolute bottom-0 p-6">
                    <h2 className="text-2xl font-bold text-white">
                      Contact Information
                    </h2>
                    <p className="mt-2 text-blue-100">
                      Reach out through any channel
                    </p>
                  </div>
                </div>
                <div className="p-8 space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Main Office",
                      details: [
                        "123 Healthcare Avenue",
                        "San Francisco, CA 94105",
                      ],
                    },
                    {
                      icon: Phone,
                      title: "Phone Lines",
                      details: ["(415) 555-0123", "(415) 555-0124"],
                    },
                    {
                      icon: Mail,
                      title: "Email",
                      details: [
                        "contact@healthcarebooking.com",
                        "support@healthcarebooking.com",
                      ],
                    },
                    {
                      icon: Clock,
                      title: "Working Hours",
                      details: [
                        "Monday - Friday: 9:00 AM - 6:00 PM",
                        "Saturday: 9:00 AM - 2:00 PM",
                      ],
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 group"
                    >
                      <div className="p-3 transition-transform duration-300 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl group-hover:scale-110">
                        <item.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {item.title}
                        </h3>
                        {item.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Careers Card */}
            <div className="relative group">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
              <div className="relative p-8 bg-white shadow-xl rounded-3xl">
                <div className="flex items-start space-x-6">
                  <div className="relative">
                    <div className="absolute opacity-25 -inset-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl blur"></div>
                    <div className="relative p-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                      <Award className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                        Join Our Elite Team
                      </h3>
                      <p className="mt-2 leading-relaxed text-gray-600">
                        Be part of a revolutionary healthcare platform. We're
                        looking for passionate professionals to help transform
                        healthcare delivery.
                      </p>
                    </div>
                    <button className="flex items-center px-6 py-3 space-x-2 text-white transition-all duration-300 transform group bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:-translate-y-1">
                      <span>View Opportunities</span>
                      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl blur opacity-25"></div>
            <div className="relative p-8 bg-white shadow-xl rounded-3xl">
              <div className="flex items-center mb-8 space-x-4">
                <div className="p-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl">
                  <MessageSquare className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Send us a Message
                  </h2>
                  <p className="text-gray-600">
                    We'll get back to you within 24 hours
                  </p>
                </div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Full Name
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      className="w-full px-4 py-3 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) =>
                      setFormData({ ...formData, subject: e.target.value })
                    }
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="How can we help?"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    className="w-full px-4 py-3 transition-all duration-300 border border-gray-200 rounded-xl bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Tell us more about your inquiry..."
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center justify-center w-full px-6 py-4 space-x-2 text-white transition-all duration-300 transform group bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl hover:shadow-lg hover:-translate-y-1"
                >
                  <span>Send Message</span>
                  <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
