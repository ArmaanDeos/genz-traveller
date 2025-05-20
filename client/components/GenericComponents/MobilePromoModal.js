"use client";
import { useEffect, useState } from "react";
import Image from "next/image";

const MobilePromoModal = ({
  airlineName,
  bgColor = "bg-red-600",
  phoneNumber = "+1-(844) 930-0173",
}) => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowModal(true);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const closeModal = () => setShowModal(false);
  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[99999999] md:hidden flex items-center justify-center bg-black/60 px-4">
      <div className="relative bg-white w-full max-w-sm mx-auto rounded-xl shadow-lg p-4 overflow-y-auto max-h-[100%]">
        {/* Header Top Bar */}
        <div className="flex items-center justify-end p-2 rounded">
          <button
            onClick={closeModal}
            className="text-gray-600 hover:text-red-500 text-2xl ml-2"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Dynamic Title */}
        <div className={`${bgColor} text-white py-2 rounded mb-4 mt-2`}>
          <h3 className="text-lg font-semibold text-center">
            {airlineName} Reservation Desk
          </h3>
        </div>

        {/* Banner Image */}
        <Image
          src="/images/Airline-Ticket.png"
          alt={`${airlineName} Ticket`}
          width={500}
          height={300}
          className="w-full mb-4 rounded"
        />

        {/* Dynamic Buttons */}
        <div className="grid grid-cols-2 gap-2 text-sm font-fira mb-4">
          {[
            `New Bookings`,
            `Changes`,
            `Cancellations`,
            ` Customer Service`,
            `Refunds`,
            `Upgrades`,
          ].map((text, i) => (
            <a
              key={i}
              href={`tel:${phoneNumber}`}
              className={`${bgColor} text-white py-2 rounded text-center hover:bg-gray-800 transition`}
            >
              {text}
            </a>
          ))}
        </div>

        {/* Agent Info */}
        <Image
          src="/images/calling-cus.png"
          alt="Agent"
          width={80}
          height={80}
          className="w-20 h-20 object-cover rounded-full border-2 border-black mx-auto mb-2"
        />
        <p className="text-center font-semibold text-gray-900 mb-1">
          No Hold - Call Answered in 5 Sec
        </p>
        <p className="text-center font-bold text-rose-600 animate-pulse">
          Click to Call!
        </p>

        {/* Dynamic Phone Box */}
        <div
          className={`${bgColor} text-white rounded-full px-5 py-3 flex flex-wrap items-center justify-center gap-3 mt-4 max-w-xs mx-auto`}
        >
          <span className="h-12 w-12 rounded-full bg-center bg-no-repeat bg-[url('https://www.aireticket.us/images/phoneRotate.png')] bg-[length:28px] animate-[trin_1.5s_linear_infinite]" />
          <div className="text-center">
            <small className="block text-sm">
              Unpublished Phone-Only Offers
            </small>
            <span className="text-xl font-bold block">{phoneNumber}</span>
          </div>
        </div>
      </div>

      {/* Shake Animation */}
      <style jsx>{`
        @keyframes trin {
          0%,
          20%,
          32%,
          44%,
          56%,
          68%,
          80% {
            transform: rotate(0deg);
          }
          23%,
          35%,
          47%,
          59%,
          71% {
            transform: rotate(15deg);
          }
          26%,
          38%,
          50%,
          62%,
          74% {
            transform: rotate(0deg);
          }
          29%,
          41%,
          53%,
          65%,
          77% {
            transform: rotate(-15deg);
          }
        }
      `}</style>
    </div>
  );
};

export default MobilePromoModal;
