import { PhoneCall } from "lucide-react";
import { motion } from "framer-motion";

const SectionCTA = () => {
  return (
    <section className="mt-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="bg-gradient-to-br from-white via-gray-50 to-gray-100 rounded-3xl shadow-xl p-10 text-center max-w-3xl mx-auto"
      >
        <h3 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4 leading-snug tracking-tight">
          🚨 Don’t Miss These Epic Flight Deals! 🚨
        </h3>

        <p className="text-base md:text-lg text-gray-600 mb-6 max-w-xl mx-auto">
          Ready for your next adventure?{" "}
          <span className="font-semibold text-blue-800">GenzTraveller</span> has
          you covered with insane prices—just call and get the best deals, fast.
        </p>

        <div className="text-3xl md:text-4xl font-black text-red-700 mb-5 tracking-wide">
          📞 +1-(844) 930-0173
        </div>

        <button
          onClick={() => (window.location.href = "tel:+1-(844) 930-0173")}
          className="inline-flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white font-medium text-base md:text-lg py-3 px-6 rounded-full shadow-md transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <PhoneCall size={22} className="animate-pulse" />
          Call & Save Now! ✈️
        </button>
      </motion.div>
    </section>
  );
};

export default SectionCTA;
