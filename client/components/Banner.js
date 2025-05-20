"use client";

import { PhoneCall, ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import FlightSearch from "./FlightSearchForm";
import { Suspense } from "react";

const BannerSection = ({
  heading = "Book Your Dream Trip Today!",
  subheading = "Best flight deals, no hidden fees, and 24/7 support.",
  additionalHeading = "Trusted by Thousands of Travelers",
  bgImage = "/images/banner-bg.jpg",
}) => {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById("next-section");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative text-white md:h-[90vh] sm:h-[70vh] flex items-center justify-center mt-[90px] overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={bgImage}
          alt="Travel background"
          layout="fill"
          objectFit="cover"
          quality={80}
          className="opacity-70"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-sky-900/60 to-teal-800/50"></div>
      </div>

      {/* Content & Search Form */}
      <div className="relative z-10 px-4 max-w-7xl mx-auto py-10 w-full">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <motion.h1
              initial={{ opacity: 0, y: -40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-5xl font-extrabold leading-tight mb-2"
            >
              {heading}
            </motion.h1>

            {additionalHeading && (
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-xl md:text-2xl font-medium text-blue-100 mb-1"
              >
                {additionalHeading}
              </motion.h2>
            )}

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl text-blue-100 mb-5"
            >
              {subheading}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-wrap justify-center md:justify-start gap-5 mb-6"
            >
              <Link
                href="tel:+1-(844)930-0173"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 font-bold rounded-full shadow-xl hover:scale-105 hover:shadow-2xl transition-all duration-300"
              >
                <PhoneCall className="animate-pulse" />
                Call Now
              </Link>
              <Link
                href="tel:+1-(844)930-0173"
                className="inline-flex items-center gap-2 px-6 py-3 border border-yellow-400 text-yellow-300 font-bold rounded-full hover:bg-yellow-400 hover:text-black transition-all duration-300 "
              >
                <PhoneCall className="animate-pulse" />
                +1 (844) 930-0173
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="grid grid-cols-2 gap-5 max-w-md mx-auto md:mx-0"
            >
              {[
                { label: "Airlines", value: "100+" },
                { label: "Support", value: "24/7" },
                { label: "Savings", value: "Up to 50%" },
                { label: "Hidden Fees", value: "Zero" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/10 p-6 rounded-2xl backdrop-blur-lg text-center hover:scale-105 transition-all duration-300 shadow-md"
                >
                  <p className="text-3xl font-extrabold text-yellow-400 drop-shadow-md">
                    {item.value}
                  </p>
                  <p className="text-sm text-blue-100 mt-2">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Form */}
          <div className="w-full md:w-1/2 mt-12 md:mt-0 hidden md:block">
            <Suspense fallback={<div>Loading...</div>}>
              <FlightSearch />
            </Suspense>
          </div>
        </div>

        {/* Down Arrow Scroll */}
        <motion.button
          onClick={scrollToNextSection}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
          className="mt-12 text-yellow-400 animate-bounce mx-auto block"
          aria-label="Scroll Down"
        >
          <ArrowDown size={38} />
        </motion.button>
      </div>
    </section>
  );
};

export default BannerSection;
