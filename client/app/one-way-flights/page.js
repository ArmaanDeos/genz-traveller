"use client";
import AboutSection from "@/components/AboutUs";
import AdBanner from "@/components/AdBanner";
import BannerSection from "@/components/Banner";
import ClientBg from "@/components/ClientBg";
import ContactUs from "@/components/ContactUs";
import CustomerReviews from "@/components/CustomerReviews";
import FlightInfoSection from "@/components/FlightInfoSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HowWeWork from "@/components/HowWeWork";
import MobilePromo from "@/components/MobilePromoBanner";
import Newsletter from "@/components/NewsLetter";
import ReservationAirTicket from "@/components/ReservationAirTicket";
import WhyChooseUs from "@/components/WhyChooseUs";
import TravelAssistanceSection from "@/components/WorkSteps";
import { Bus } from "lucide-react";

const OnewayFlights = () => {
  const jsxContent = [
    {
      heading: "Flexible Flight Modifications",
      points: [
        "Easy Changes: Quickly modify your flight dates, times, or destinations without the usual hassles.",
        "Affordable Fees: Enjoy competitive and transparent modification fees, making it easier to adjust your plans.",
        "Instant Changes: Get immediate assistance over the phone to modify your flight in real time.",
        "Stress-Free Travel: Avoid unnecessary penalties with our customer-friendly flight change policies.",
      ],
    },
    {
      heading: "Hassle-Free Cancellations and Refunds",
      points: [
        "Quick Refunds: Get your refund processed swiftly with minimal paperwork.",
        "Flexible Cancellations: Enjoy peace of mind with flexible cancellation options, especially for business and premium tickets.",
        "Instant Assistance: Call us anytime to initiate your cancellation process and receive support for your booking.",
      ],
    },
    {
      heading: "Upgrade Your Flight with Ease",
      points: [
        "Simple Upgrades: Upgrade to a better seat or class effortlessly, whether it’s for more comfort or better amenities.",
        "Last-Minute Availability: Check for available upgrade options at the time of booking or even after your initial reservation.",
        "Priority Service: Our dedicated team ensures a smooth upgrade experience without complications.",
      ],
    },
    {
      heading: "24/7 Support for Flight Modifications",
      points: [
        "Round-the-Clock Assistance: Our customer service team is available 24/7 to assist you with any modifications, upgrades, or cancellations.",
        "Expert Help: Rely on our knowledgeable agents to guide you through the process and ensure you get the best options.",
      ],
    },
    {
      heading: "Why Choose Airbookings for Flight Modifications?",
      points: [
        "Best Price Guarantee: We promise you the most competitive rates, even after booking, for any changes or upgrades.",
        "Instant Customer Support: Get quick responses and immediate resolutions to any booking changes or issues you might face.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I modify my flight booking?",
      answer:
        "You can modify your flight booking by contacting our 24/7 support team or making changes directly through our website. We ensure a seamless modification experience with minimal hassle.",
    },
    {
      question: "Are there any fees for changing a flight?",
      answer:
        "Modification fees are based on the airline’s policy and the type of ticket purchased. We offer transparent and affordable fees to ensure flexibility with your travel plans.",
    },
    {
      question: "Can I upgrade my flight after booking?",
      answer:
        "Yes! You can request an upgrade at any time before your flight. Our team will assist you in checking upgrade availability and processing the change quickly.",
    },
    {
      question: "How do I cancel a flight and get a refund?",
      answer:
        "Canceling your flight is simple. Reach out to our support team, and we’ll help you with the process. Refunds are processed promptly, depending on the ticket type and cancellation policy.",
    },
    {
      question: "How do I get the best price for flight modifications?",
      answer:
        "To get the best prices, we offer exclusive deals for modifications, upgrades, and cancellations. Keep an eye on our promotions and talk to our team for special offers.",
    },
  ];

  return (
    <div>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Flight Modifications Made Easy"
        additionalHeading="One Way Flights Tickets Reservations"
        subheading="Exclusive options available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="One Way Flights Deals"
        content="Discover incredible One Way Flights Deals With Airbookings for both domestic and international travel, ensuring you get the best value every time you fly. Affordable price over the phone makes it effortless to access our unpublished airfare deals. Call Now for service that’s as quick as it is efficient, offering easy changes and instant cancellations with quick refunds. Our hassle-free assistance and secure payment reservations mean every booking is straightforward and safe. Benefit from discounted flight deals and comprehensive support via our flight, airline, or contact phone numbers. With Airbookings, experience seamless flight booking with a variety of secure payment options. Whether you need to cancel or upgrade your flight, our system allows for unlimited new booking, changes, and the ability to search, compare, and book your flights with confidence. We guarantee the best price, including the most competitive price and additional unpublished airfare deals with a staggering 59% Discount. Choose Airbookings for your next journey and enjoy the pinnacle of air travel booking experiences."
      />
      <FlightInfoSection
        title="Flexible Flight Options for Every Traveler"
        airlineName="Swiss Airlines"
        contentSections={jsxContent}
        faqs={jsxFaqs}
      />
      {/* New Flight Modifications Section */}
      <section className="bg-white py-16 px-8 md:px-16">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6">
          Seamless Flight Modifications with Airbookings
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Discover the convenience of modifying your flight arrangements
          effortlessly with Airbookings. Whether you&apos;re planning domestic
          or international travel, our platform ensures a hassle-free experience
          with numerous benefits:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Unpublished airfare deals:</strong> Ensure access to the
            best prices that aren’t available publicly.
          </li>
          <li>
            <strong>Instant cancellations and quick refunds:</strong> Making
            your travel plans flexible and stress-free.
          </li>
          <li>
            <strong>Easy changes over the phone:</strong> Just a call away to
            adjust your itinerary as needed.
          </li>
        </ul>
        <p className="text-lg text-gray-700 mt-6">
          Our services are designed to offer you the ultimate convenience and
          peace of mind. With secure payment options and discounted flight
          deals, you can manage your travel expenses efficiently while enjoying
          the affordability of our offers. Our customer service is geared
          towards making your flight booking experience seamless and satisfying.
        </p>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Why Choose Airbookings for Your Travel Needs?
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          At Airbookings, we prioritize providing our customers with affordable
          and transparent travel solutions. Here’s why you should book with us:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Best price guaranteed:</strong> Including the most
            competitive and unpublished rates with discounts up to 59%.
          </li>
          <li>
            <strong>Comprehensive secure payment reservations:</strong> Ensuring
            your financial details are always safe.
          </li>
          <li>
            <strong>Seamless booking:</strong> From browsing options to
            finalizing your travel plans, all in one place.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Hassle-Free Assistance and Support
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Navigating flight bookings and modifications doesn’t have to be
          complicated. At Airbookings, we offer:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>24/7 customer support:</strong> Through our flight, airline,
            or contact phone numbers.
          </li>
          <li>
            <strong>Affordable prices over the phone:</strong> Making it
            convenient to secure your travel plans from anywhere.
          </li>
          <li>
            <strong>Assistance with secure payment reservations:</strong>{" "}
            Ensuring that every transaction is straightforward and protected.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Upgrade and Customize Your Travel Experience
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Enhance your travel experience with Airbookings by taking advantage of
          our flexible service offerings:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>Unlimited new booking options:</strong> Explore a wide range
            of travel possibilities.
          </li>
          <li>
            <strong>Easy upgrade options:</strong> Travel in comfort and style
            without the hassle.
          </li>
          <li>
            <strong>Robust search and compare tools:</strong> Empowering you to
            find flights that best match your budget and preferences.
          </li>
        </ul>

        <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">
          Book With Confidence: The Airbookings Guarantee
        </h3>
        <p className="text-lg text-gray-700 mb-4">
          Choose Airbookings for a trustworthy and efficient flight booking
          experience. Our guarantees include:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-lg text-gray-700">
          <li>
            <strong>59% discount on select routes:</strong> Making us one of the
            most competitive providers in the market.
          </li>
          <li>
            <strong>Secure payment reservations:</strong> Protecting your
            personal and financial information.
          </li>
          <li>
            <strong>Reliable assistance:</strong> For all your booking needs,
            from last-minute changes to advanced travel planning.
          </li>
        </ul>
      </section>
      {/* End of Flight Modifications Section */}
      <HowWeWork />
      <WhyChooseUs />
      <CustomerReviews />
      <Newsletter />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default OnewayFlights;
