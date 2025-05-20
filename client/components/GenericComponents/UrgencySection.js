"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AlertTriangle, Clock } from "lucide-react";

const UrgencySection = ({
  airline,
  dealExpiresInMinutes = 10,
  bgGradient = "bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600",
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: dealExpiresInMinutes,
    seconds: 0,
  });

  useEffect(() => {
    const endTime = Date.now() + dealExpiresInMinutes * 60 * 1000;

    const interval = setInterval(() => {
      const now = Date.now();
      const diff = endTime - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
      } else {
        const hours = Math.floor(diff / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((diff % (1000 * 60)) / 1000);

        setTimeLeft({ hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [dealExpiresInMinutes]);

  const formatTime = (num) => num.toString().padStart(2, "0");

  return (
    <section className={`${bgGradient} text-white py-16 px-6`}>
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="flex justify-center mb-6"
        >
          <AlertTriangle className="text-white w-10 h-10" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Limited-Time {airline} Deals – Act Fast!
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg max-w-2xl mx-auto text-white/90"
        >
          These special {airline} flight deals are going fast and may not last
          long. Seats are limited, so don’t miss your chance to save big on your
          next trip.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center items-center mt-10 space-x-3 text-white text-2xl font-semibold"
          aria-label="Countdown timer for limited time deal"
        >
          <Clock className="w-8 h-8 animate-pulse" />
          <span>
            {formatTime(timeLeft.hours)}:{formatTime(timeLeft.minutes)}:
            {formatTime(timeLeft.seconds)}
          </span>
        </motion.div>

        <motion.a
          href="tel:+18449300173"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="inline-block mt-8 bg-white text-black font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-200 transition"
        >
          Call Now & Unlock {airline} Discounts
        </motion.a>
      </div>
    </section>
  );
};

export default UrgencySection;
