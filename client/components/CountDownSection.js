"use client";

import { useEffect, useMemo, useState } from "react";
import { AlarmClock, Plane, PercentCircle, PlaneIcon } from "lucide-react";

const CountdownSection = () => {
  const targetDate = useMemo(() => {
    const date = new Date();
    date.setDate(date.getDate() + 13);
    return date;
  }, []);

  const calculateTimeLeft = () => {
    const now = new Date();
    const difference = targetDate.getTime() - now.getTime();

    return difference > 0
      ? {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        }
      : { days: 0, hours: 0, minutes: 0, seconds: 0 };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section id="countdown" className="py-16 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?auto=format&fit=crop&w=1400&q=80"
          alt="Hot air balloons"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            GenzTraveller Flash Deals — Fly Now, Flex Later
          </h2>
          <p className="text-lg text-white mb-10">
            Book your dream vacation before these exclusive offers expire!
          </p>

          {/* Countdown Timer */}
          <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 md:p-8 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Days", value: timeLeft.days },
                { label: "Hours", value: timeLeft.hours },
                { label: "Minutes", value: timeLeft.minutes },
                { label: "Seconds", value: timeLeft.seconds },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/20 rounded-lg p-4 transition-all duration-500"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {String(item.value).padStart(2, "0")}
                  </div>
                  <div className="text-sm uppercase tracking-wider text-white mt-2">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="mb-10">
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 text-white text-lg">
              <div className="flex items-center gap-2">
                <AlarmClock className="text-yellow-400 w-6 h-6" />
                <span>Limited Time Offers</span>
              </div>
              <div className="flex items-center gap-2">
                <Plane className="text-yellow-400 w-6 h-6" />
                <span>Exclusive Packages</span>
              </div>
              <div className="flex items-center gap-2">
                <PercentCircle className="text-yellow-400 w-6 h-6" />
                <span>Up to 40% Off</span>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <a
            href="tel:+1-(844) 930-0173"
            className="inline-flex items-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-blue-900 font-bold py-4 px-8 rounded-full transition duration-300 transform hover:scale-105 shadow-lg"
          >
            <PlaneIcon className="w-5 h-5" />
            Grab Your Deal Now!
          </a>
        </div>
      </div>
    </section>
  );
};

export default CountdownSection;
