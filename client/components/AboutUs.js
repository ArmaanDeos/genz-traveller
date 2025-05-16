"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import CallNowCTA from "./CallToAction";

const AboutSection = () => {
  return (
    <>
      <section id="about" className="bg-gray-50 py-20 px-4 md:px-10">
        <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] md:h-[500px] rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src="/images/about-img.jpg"
              alt="About Us"
              layout="fill"
              objectFit="cover"
              className="rounded-xl"
            />
          </motion.div>

          {/* Right Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-tight">
              Welcome to{" "}
              <span className="text-primary-blue">GenzTraveller</span>
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              At Genztraveller, we’re committed to making your travel experience
              as smooth as possible. Whether you’re booking a quick domestic
              getaway or planning an international adventure, we’ve got you
              covered with the best fares and reliable service.
            </p>
            <p className="text-gray-600 text-lg mb-6">
              From booking your tickets to offering round-the-clock customer
              support, we’re your trusted travel companion for finding great
              deals and making your travel plans hassle-free.
            </p>

            {/* CTA Section */}
            <div className="mt-10">
              <motion.a
                href="tel:+1-(844) 930-0173"
                className="inline-block bg-primary-blue text-white text-lg font-semibold py-3 px-8 rounded-full shadow-lg transform hover:scale-105 transition duration-300"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
              >
                Explore Our Deals
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
