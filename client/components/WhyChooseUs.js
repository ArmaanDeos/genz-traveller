"use client";

import { motion } from "framer-motion";
import { PhoneCall, RefreshCw, Clock } from "lucide-react";
import SectionCTA from "./SectionCTA";

const features = [
  {
    icon: (
      <PhoneCall
        size={36}
        className="text-primary-blue group-hover:scale-110 transition-transform"
      />
    ),
    title: "Exclusive Flash Deals",
    description:
      "Get access to secret fares and exclusive discounts when you call us directly—perfect for last-minute getaways!",
  },
  {
    icon: (
      <RefreshCw
        size={36}
        className="text-primary-blue group-hover:scale-110 transition-transform"
      />
    ),
    title: "Easy Flexibility",
    description:
      "Life happens! Modify your plans or cancel with no stress, because flexibility is key to your spontaneous adventures.",
  },
  {
    icon: (
      <Clock
        size={36}
        className="text-primary-blue group-hover:scale-110 transition-transform"
      />
    ),
    title: "24/7 Support Anytime",
    description:
      "Got a question? We're always here to help, day or night, so you can book with confidence no matter where you are.",
  },
];

const WhyChooseUs = () => {
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
          Why Choose{" "}
          <span className="text-primary-blue font-extrabold drop-shadow-sm">
            GenzTraveller
          </span>
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto"
        >
          We&apos;re all about affordable, flexible, and unforgettable travel
          experiences that fit your vibe and pace.
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

        {/* CTA */}
        <div className="mt-16">
          <SectionCTA />
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
