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

const AirFlightsReservationPageFive = () => {
  const jsxContent = [
    {
      heading: "Unbeatable LOT Airlines Booking Offers",
      points: [
        "New Bookings: Grab the lowest fares on LOT Polish Airlines and explore new destinations without breaking the bank.",
        "LOT Flight Deals: Save significantly with our special discounts and promotional offers available only here.",
      ],
    },
    {
      heading: "Manage Your LOT Flight Tickets with Ease",
      points: [
        "Date Changes: Flexibility to change your travel dates with minimal hassle and fees.",
        "Cancellations and Refunds: Easy cancellation policies and quick refunds to ensure peace of mind.",
      ],
    },
    {
      heading: "Exclusive Benefits with LOT Airline Tickets",
      points: [
        "Unpublished Airfares: Access rates not available to the general public.",
        "Seat Upgrade Flight Options: Enhance your comfort with affordable seat upgrades.",
      ],
    },
    {
      heading: "24/7 Customer Service",
      points: [
        "Our dedicated team is here to assist with your LOT Polish Airline reservations anytime, ensuring a seamless travel experience.",
      ],
    },
    {
      heading: "LOT Airline Reservations: Baggage Policies",
      points: [
        "Detailed guidance on baggage policies for both domestic and international flights, helping you travel smarter and lighter.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I find the best LOT flight deals?",
      answer:
        "Visit Airbookings to access exclusive discounts and unpublished fares you won’t find anywhere else.",
    },
    {
      question: "What should I do if I need to change my LOT flight date?",
      answer:
        "Contact our customer service team available 24/7 to assist you with date changes with minimal fees.",
    },
    {
      question: "Can I get a refund if I cancel my LOT airline ticket?",
      answer:
        "Yes, cancellations are easy with us. You can receive a refund swiftly, subject to LOT Polish Airlines’ cancellation policy.",
    },
    {
      question: "How do I upgrade my seat on a LOT flight?",
      answer:
        "Simply call our toll-free number or visit our website to explore cost-effective upgrade options.",
    },
    {
      question: "What are the baggage allowances for LOT Polish Airlines?",
      answer:
        "Baggage allowances vary by ticket type and destination. Check our website or call our customer support for detailed information.",
    },
  ];

  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="LOT Polish Flights Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Tickets Reservations With Airbookings"
        content="When planning your next journey, consider Air Poland Reservations With Airbookings for both domestic and international flights, ensuring you get the best deals at an affordable price over the phone. Ready to discover the world without breaking the bank? Call Now for unpublished airfare deals, including an impressive 59% Discount on select routes. Our service makes flight booking effortless with secure payment options, allowing you to search, compare, and book your flights with confidence. Need flexibility? We offer easy changes and instant cancellations with quick refunds, ensuring a hassle-free experience. Moreover, our secure payment reservations and discounted flight deals are tailored to provide maximum savings. Whether you need to cancel or upgrade your flight, enjoy unlimited new booking, or require expert advice, our dedicated contact phone numbers are here to assist you. At Airbookings, you're guaranteed not just the best price but the most competitive price in the market, making every trip memorable and affordable."
      />
      <FlightInfoSection
        title="Boost Your Travel Experience with Airbookings and LOT Polish Airlines"
        airlineName="KLM Airlines"
        contentSections={jsxContent}
        faqs={jsxFaqs}
      />
      <HowWeWork />
      <WhyChooseUs />
      <ClientBg />
      <TravelAssistanceSection />
      <AdBanner />
      <CustomerReviews />
      <ContactUs />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default AirFlightsReservationPageFive;
