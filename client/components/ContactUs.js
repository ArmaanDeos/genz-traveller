"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Plane } from "lucide-react";

const ContactUs = () => {
  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-blue-50 via-white to-blue-100 overflow-hidden">
      {/* Soft Background Texture */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/clouds.png')] opacity-10 z-0" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80')] opacity-10 bg-cover bg-center z-0" />

      {/* Animated Plane */}
      <motion.div
        initial={{ x: -100, y: 80, rotate: -15 }}
        animate={{ x: [0, 150, -100, 0], y: [0, -40, 30, 0] }}
        transition={{ repeat: Infinity, duration: 14, ease: "easeInOut" }}
        className="absolute top-16 left-10 w-20 h-20 text-blue-400 z-10"
      >
        <Plane className="w-full h-full" />
      </motion.div>

      <div className="relative z-20 max-w-5xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-gray-800"
        >
          Let’s Plan Your Next Journey
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto"
        >
          Got questions or need help with your booking? Fill out the form below
          or connect with our travel support team.
        </motion.p>
      </div>

      <div className="relative z-20 mt-14 max-w-4xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <input
                type="text"
                placeholder="Full Name"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email Address"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              />
            </div>
            <div>
              <textarea
                placeholder="Your Message"
                rows="4"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-400 focus:outline-none"
              ></textarea>
            </div>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition-all"
            >
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 flex flex-col justify-between"
        >
          <h3 className="text-xl font-semibold text-gray-800 mb-6">
            Reach Out Directly
          </h3>
          <div className="space-y-6 text-gray-700 text-base">
            <div className="flex items-center">
              <Phone className="w-5 h-5 text-blue-600 mr-3" />
              <span>+1 (844) 930-0173 (Toll-Free)</span>
            </div>
            <div className="flex items-center">
              <Mail className="w-5 h-5 text-blue-600 mr-3" />
              <span>info@genztraveller.com</span>
            </div>
            <div className="flex items-start">
              <MapPin className="w-5 h-5 text-blue-600 mr-3 mt-1" />
              <span>66 McLeod Rd, Lucedale, MS, 39462</span>
            </div>
          </div>

          <div className="mt-10 text-sm text-gray-500">
            Our travel experts are available 24/7 to assist you.
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
