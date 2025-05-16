"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { MapPin, Phone, Mail } from "lucide-react";

export default function ContactPage() {
  return (
    <>
      <Header />
      <div className="px-6 pt-24 pb-20 max-w-7xl mx-auto text-gray-800 mt-10">
        {/* Page Title */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold tracking-tight bg-gradient-to-r from-red-600 via-red-500 to-pink-500 text-transparent bg-clip-text">
            Contact Us
          </h1>
          <p className="text-lg text-gray-500 mt-4 max-w-xl mx-auto">
            We’d love to hear from you! Whether you have a question, feedback,
            or just want to say hello — our team is ready to help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-20">
          {/* Address */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-xl p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <MapPin className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
            <h4 className="text-md font-semibold">Our Office</h4>
            <p className="text-gray-700 text-sm mt-2">
              66 McLeod Rd, Lucedale, MS, 39462
            </p>
          </div>

          {/* Phone */}
          <div className="bg-gradient-to-br from-indigo-600 to-purple-600 text-white p-6 rounded-2xl text-center shadow-xl hover:scale-105 transition-transform duration-300">
            <Phone className="w-10 h-10 mx-auto mb-4" />
            <h4 className="text-md font-semibold">Call Us</h4>
            <p className="mt-2 text-sm">+1-(844) 930-0173</p>
          </div>

          {/* Email */}
          <div className="bg-white/40 backdrop-blur-lg border border-white/30 shadow-xl p-6 rounded-2xl text-center hover:scale-105 transition-transform duration-300">
            <Mail className="w-10 h-10 mx-auto mb-4 text-indigo-600" />
            <h4 className="text-md font-semibold">Email</h4>
            <p className="text-gray-700 text-sm mt-2">info@genztraveller.com</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white/80 backdrop-blur-2xl shadow-2xl rounded-3xl p-10 md:p-16 mb-20 border border-gray-200">
          <h2 className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
            Send Us a Message
          </h2>
          <form className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
              <select className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition">
                <option value="">Select Subject</option>
                <option>General Inquiry</option>
                <option>Support</option>
                <option>Feedback</option>
              </select>
            </div>
            <textarea
              rows="5"
              placeholder="Write your message..."
              className="w-full px-5 py-3 rounded-xl border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            ></textarea>
            <div className="text-center">
              <button
                type="submit"
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3 rounded-full font-semibold shadow-lg transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200">
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3418.8839379786364!2d-88.60581761792135!3d31.029483108544234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x889b7056a80dd89f%3A0x297e13ad84db599d!2s66%20Pete%20McLeod%20Rd%2C%20Lucedale%2C%20MS%2039452%2C%20USA!5e0!3m2!1sen!2sin!4v1747195069867!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
}
