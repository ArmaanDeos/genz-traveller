"use client";

import { PhoneCall, Info, CheckCircle2 } from "lucide-react";

const WhyCallInstead = ({ airline = "Iberia Airlines" }) => {
  return (
    <section className="max-w-4xl mx-auto my-12 px-6 py-10 bg-yellow-50 rounded-2xl shadow-md text-gray-900">
      <div className="flex items-center gap-3 mb-6">
        <Info className="w-8 h-8 text-yellow-600" />
        <h2 className="text-2xl sm:text-3xl font-extrabold">
          Why Call Instead of Booking {airline} Flights Online?
        </h2>
      </div>

      <ul className="list-none space-y-4 text-lg">
        {[
          "Access unpublished phone-only rates",
          "Get help from live travel experts",
          "Book flexible, last-minute flights",
          "Avoid hidden online fees",
          "Custom trip planning with multi-city support",
        ].map((point, i) => (
          <li key={i} className="flex items-center gap-3">
            <CheckCircle2 className="w-6 h-6 text-green-600 flex-shrink-0" />
            <span>{point}</span>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-center gap-4">
        <PhoneCall className="w-6 h-6 text-yellow-700" />
        <a
          href="tel:+18449300173"
          className="text-yellow-800 font-extrabold text-xl sm:text-2xl underline hover:no-underline hover:text-yellow-900 transition"
          aria-label="Call travel agents at 844-930-0173"
        >
          +1 (844) 930-0173 – Agents Available 24/7
        </a>
      </div>
    </section>
  );
};

export default WhyCallInstead;
