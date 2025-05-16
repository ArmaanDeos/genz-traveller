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

const AirSwitzerlandReservations = () => {
  const jsxContent = [
    {
      heading: "Explore Swiss Airlines Flight Booking Options",
      points: [
        "New Bookings: Grab your ticket to world-class travel. Enjoy access to unpublished airfares and exclusive deals only through Airbookings.",
        "Date Changes: Flexible plans for unforeseen changes. Reschedule your Swiss Airlines flights without hassle.",
        "Cancellation and Refunds: Decide with freedom. Easy cancellations and quick refunds make your booking worry-free.",
        "Seat Upgrades: Experience luxury. Upgrade your seat with Swiss Airlines through our simple booking system.",
      ],
    },
    {
      heading: "Unpublished Airfares and Deals on Swiss Airlines",
      points: [
        "Exclusive Savings: Unlock lower prices on Swiss Airlines flights not available to the public.",
        "Last-Minute Deals: Spontaneous trip? Get great deals on last-minute flights with Swiss Airlines.",
      ],
    },
    {
      heading: "Swiss Airlines Booking: Seamless and Secure",
      points: [
        "24/7 Customer Service: Our travel experts are here for you around the clock. Get support whenever you need it.",
        "Secure Transactions: Book with confidence. Our encrypted platform ensures your data is safe during every transaction.",
      ],
    },
    {
      heading: "Comprehensive Swiss Airlines Reservations Services",
      points: [
        "Baggage Policies: Understand baggage allowances before you fly. We provide clear information on domestic and international flights.",
        "Check-in and Boarding: Skip the hassle. Learn about Swiss Airlines' streamlined check-in and boarding processes.",
      ],
    },
    {
      heading: "Why Choose Swiss Airline Deals Through Airbookings?",
      points: [
        "Best Price Guarantee: We promise the lowest prices on Swiss Airlines flights, helping you save big on airfare.",
        "Customer Satisfaction: Our commitment to excellence ensures a smooth and enjoyable travel experience.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I find the best deals on Swiss Airlines?",
      answer:
        "Visit Airbookings for exclusive access to Swiss Airlines deals that aren't available elsewhere. Check our site regularly for new discounts and last-minute offers.",
    },
    {
      question:
        "What should I do if I need to change my flight date with Swiss Airlines?",
      answer:
        "You can easily change your flight dates through Airbookings. Contact our customer service team 24/7 for assistance with adjustments.",
    },
    {
      question: "How can I upgrade my seat on a Swiss Airlines flight?",
      answer:
        "To upgrade your seat, select the upgrade option when booking through Airbookings or contact our support team to make the changes for you.",
    },
    {
      question: "What are the cancellation policies for Swiss Airlines?",
      answer:
        "Swiss Airlines offers flexible cancellation policies, which you can review on Airbookings. Most tickets can be cancelled for a full or partial refund, depending on the fare conditions.",
    },
    {
      question: "How do I contact Airbookings for immediate assistance?",
      answer:
        "For instant support, call our toll-free number available on our website. Our travel experts are ready to help you 24/7.",
    },
  ];

  return (
    <div>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="Swiss Air Flights Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Switzerland Reservations With Airbookings"
        content="Experience the best of both worlds with Air Switzerland Reservations With Airbookings. Whether you're planning a domestic escape or an international adventure, our team is ready to help you lock in exceptional deals. Call now for unpublished airfare deals that can save you up to 59%. With Airbookings, seamless flight booking is just the beginning. Enjoy the flexibility of unlimited new bookings, and easily change or upgrade your travel plans. Should your plans change, instant cancellations are met with quick refunds, ensuring a hassle-free experience from start to finish. With our advanced search tools, you can compare and secure the best available fares, confidently booking with our best price guaranteed. Our competitive rates are complemented by safe payment options, making every transaction secure. For any inquiries or assistance, our dedicated flight, airline, or contact phone numbers are always at your service. Don't miss out on our discounted flight deals and secure your next journey with Airbookings today."
      />
      <FlightInfoSection
        title="Welcome to Airbookings – Your Gateway to Swiss Airlines Flights"
        airlineName="Swiss Airlines"
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

export default AirSwitzerlandReservations;
