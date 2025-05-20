"use client";

import { motion } from "framer-motion";
import { PhoneCall, RefreshCw, Clock } from "lucide-react";

const WhyChooseAirline = ({ airline }) => {
  const features = [
    {
      icon: (
        <PhoneCall
          size={36}
          className="text-primary-blue group-hover:scale-110 transition-transform"
        />
      ),
      title: `Exclusive ${airline} Deals`,
      description: `Call-only fares on ${airline} flights you won’t find online — unlock hidden discounts with our agents!`,
    },
    {
      icon: (
        <RefreshCw
          size={36}
          className="text-primary-blue group-hover:scale-110 transition-transform"
        />
      ),
      title: "Flexible Booking Options",
      description: `Change, cancel, or upgrade your ${airline} flight with ease. We help you stay in control of your plans.`,
    },
    {
      icon: (
        <Clock
          size={36}
          className="text-primary-blue group-hover:scale-110 transition-transform"
        />
      ),
      title: "24/7 Agent Support",
      description: `Book ${airline} flights anytime. Our travel experts are here 24/7 to help you book fast and stress-free.`,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-gray-100 via-white to-gray-100 py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight"
        >
          Why Book{" "}
          <span className="text-primary-blue font-extrabold drop-shadow-sm">
            {airline}
          </span>{" "}
          Flights with GenzTraveller?
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          From unbeatable phone-only fares to 24/7 expert help, GenzTraveller is
          your go-to partner for booking {airline} flights.
        </motion.p>

        {/* Feature Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-5">{feature.icon}</div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseAirline;
