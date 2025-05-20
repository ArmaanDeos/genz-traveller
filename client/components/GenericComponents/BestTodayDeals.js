"use client";

import { useState } from "react";
import { Plane, CalendarCheck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const topDestinations = [
  {
    city: "New York",
    code: "JFK",
    date: "2025-06-01",
    price: 350,
    oldPrice: 500,
    badge: "🔥 Hot Deal",
  },
  {
    city: "London",
    code: "LHR",
    date: "2025-06-03",
    price: 450,
    oldPrice: 600,
  },
  {
    city: "Paris",
    code: "CDG",
    date: "2025-06-05",
    price: 430,
    oldPrice: 550,
    badge: "⚡ Last Minute",
  },
  { city: "Dubai", code: "DXB", date: "2025-06-07", price: 480, oldPrice: 620 },
  {
    city: "Tokyo",
    code: "HND",
    date: "2025-06-09",
    price: 620,
    oldPrice: 770,
    badge: "🔥 Hot Deal",
  },
  {
    city: "Singapore",
    code: "SIN",
    date: "2025-06-11",
    price: 570,
    oldPrice: 690,
  },
  {
    city: "Toronto",
    code: "YYZ",
    date: "2025-06-13",
    price: 390,
    oldPrice: 520,
  },
  {
    city: "Barcelona",
    code: "BCN",
    date: "2025-06-15",
    price: 410,
    oldPrice: 530,
  },
  {
    city: "Istanbul",
    code: "IST",
    date: "2025-06-17",
    price: 460,
    oldPrice: 580,
    badge: "⚡ Last Minute",
  },
];

const departureCities = [
  { city: "New York", code: "JFK" },
  { city: "Los Angeles", code: "LAX" },
  { city: "Chicago", code: "ORD" },
  { city: "Miami", code: "MIA" },
  { city: "Atlanta", code: "ATL" },
  { city: "Dallas", code: "DFW" },
  { city: "San Francisco", code: "SFO" },
  { city: "Houston", code: "IAH" },
  { city: "Boston", code: "BOS" },
  { city: "Washington, D.C.", code: "IAD" },
];

const BestTodayDeals = ({ airline = "Iberia Airlines" }) => {
  const [fromCity, setFromCity] = useState(departureCities[0]);
  const [flexibleDates, setFlexibleDates] = useState(false);

  return (
    <section className="bg-gradient-to-r from-rose-100 via-orange-50 to-amber-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">
          Popular {airline} Deals
        </h2>
        <p className="text-gray-600 text-lg">
          Unlock special fares and limited-time offers. Book your next trip now!
        </p>

        <div className="my-6">
          <label className="block text-gray-700 font-medium mb-2 text-lg">
            Select Departure City:
          </label>
          <select
            value={fromCity.code}
            onChange={(e) =>
              setFromCity(
                departureCities.find((city) => city.code === e.target.value)
              )
            }
            className="px-4 py-2 rounded-lg border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-amber-400"
          >
            {departureCities.map((city) => (
              <option key={city.code} value={city.code}>
                {city.city} ({city.code})
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center justify-center gap-3 mb-8">
          <input
            type="checkbox"
            id="flexibleDates"
            checked={flexibleDates}
            onChange={() => setFlexibleDates(!flexibleDates)}
            className="w-5 h-5"
          />
          <label
            htmlFor="flexibleDates"
            className="text-gray-700 font-medium flex items-center gap-1"
          >
            <CalendarCheck className="w-5 h-5" />
            Flexible Dates
          </label>
        </div>
      </div>

      {/* Mobile Carousel */}
      <div className="md:hidden max-w-7xl mx-auto">
        <Swiper
          spaceBetween={16}
          slidesPerView={1.15}
          pagination={{ clickable: true }}
          modules={[Pagination]}
        >
          {topDestinations.map((dest, index) => (
            <SwiperSlide key={index}>
              <FlightCard fromCity={fromCity} dest={dest} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Desktop Grid */}
      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {topDestinations.map((dest, index) => (
          <FlightCard key={index} fromCity={fromCity} dest={dest} />
        ))}
      </div>
    </section>
  );
};

const FlightCard = ({ fromCity, dest }) => {
  const savings = dest.oldPrice ? dest.oldPrice - dest.price : null;

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex flex-col justify-between transition-transform hover:scale-[1.02] relative">
      {dest.badge && (
        <span className="absolute top-3 right-3 bg-red-500 text-white text-xs px-3 py-1 rounded-full shadow-sm">
          {dest.badge}
        </span>
      )}
      <div className="flex items-center gap-3 mb-4">
        <div className="bg-amber-500 text-white p-2 rounded-full">
          <Plane className="w-5 h-5" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            {fromCity.city} ({fromCity.code}) → {dest.city}{" "}
            <span className="text-sm text-gray-500">({dest.code})</span>
          </h3>
          <p className="text-sm text-gray-500">Departure: {dest.date}</p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <div>
          <div className="text-xl font-bold text-green-600">${dest.price}</div>
          {savings && (
            <div className="text-sm text-gray-500 line-through">
              ${dest.oldPrice}
            </div>
          )}
        </div>
        <a
          href="tel:+1-(844) 930-0173"
          className="rounded-full text-sm px-6 py-2 font-semibold text-white bg-gradient-to-r from-orange-500 to-red-500 hover:from-red-600 hover:to-orange-600 shadow-md hover:shadow-xl transition-all duration-300 transform hover:scale-105"
        >
          Book Now
        </a>
      </div>
    </div>
  );
};

export default BestTodayDeals;
