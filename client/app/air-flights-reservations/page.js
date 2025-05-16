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

const AirFlightsReservationPage = () => {
  const jsxContent = [
    {
      heading: "Why Choose JSX Airlines?",
      points: [
        "Exclusive Access: Skip the crowds with private terminals and direct boarding.",
        "Tailored Flights: Customize your travel with flexible JSX booking options.",
        "Unmatched Comfort: Luxurious seating and personalized in-flight services.",
      ],
    },
    {
      heading: "JSX Flights and Destinations",
      points: [
        "Wide Reach: Fly to top cities with JSX planes on both domestic and international routes.",
        "Regularly Updated Schedules: Find JSX flights that fit your timetable perfectly.",
        "Easy Integration: Connect with major airlines for further travel.",
      ],
    },
    {
      heading: "Booking Your Flight with JSX",
      points: [
        "Simple Process: Use 'JSX Book Flight' for a streamlined booking experience.",
        "Instant Confirmation: Get real-time updates and secure your seat on JSX planes.",
        "Customer Support: Our 24/7 service ensures your booking is hassle-free.",
      ],
    },
    {
      heading: "Comprehensive Services",
      points: [
        "On-Demand Services: Request in-flight upgrades or special meals easily.",
        "Ground Services: Enjoy premium ground transportation arrangements.",
        "Baggage Handling: Smooth and secure baggage policies tailored for you.",
      ],
    },
    {
      heading: "Changes, Cancellations, and Refunds",
      points: [
        "Flexible Changes: Adjust your flight details with minimal fuss.",
        "Easy Cancellations: Cancel your JSX booking without hassle and get quick refunds.",
        "Transparent Policies: Clear guidelines on changes and cancellations.",
      ],
    },
    {
      heading: "Upgrades and Seat Selection",
      points: [
        "Seat Upgrades: Enhance your travel with preferred seat selection on JSX planes.",
        "Cabin Upgrades: Switch to higher classes effortlessly for an upgraded experience.",
      ],
    },
    {
      heading: "Baggage Policies",
      points: [
        "Generous Allowances: Understand JSX’s baggage policies for hassle-free travel.",
        "Special Items: Guidelines on traveling with sports equipment or musical instruments.",
        "Security Procedures: Ensure your belongings are secure with JSX’s robust policies.",
      ],
    },
    {
      heading: "24/7 Customer Support - We're Here Whenever You Need Us",
      points: [
        "Round-the-clock service to assist with any inquiries.",
        "Multi-language support for global travelers.",
        "Quick response times to keep your travel plans smooth.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I book a JSX private jet?",
      answer:
        "Visit our 'JSX Book Flight' section or call our toll-free number for personalized assistance.",
    },
    {
      question: "What are the benefits of flying with JSX Airlines?",
      answer:
        "Enjoy private terminals, fast boarding, luxurious seating, and impeccable service.",
    },
    {
      question: "How do I change or cancel my JSX flight reservation?",
      answer:
        "Contact our 24/7 customer service or manage your booking directly through our website.",
    },
    {
      question: "Can I request a seat upgrade after booking my flight?",
      answer:
        "Absolutely! Call us or select the upgrade option online to adjust your booking.",
    },
    {
      question: "What is JSX Airlines’ baggage policy?",
      answer:
        "We offer comprehensive details on baggage allowances and restrictions on our website.",
    },
  ];

  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="JSX Air Flight Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Flights Reservations With Airbookings"
        content="Booking your next journey has never been easier with Air Flights Reservation With Airbookings, whether you're planning a domestic escapade or an international adventure. We offer an array of services at an affordable price over the phone. When you're ready to secure your next trip, just Call Now for unpublished airfare deals. Our process allows for easy changes and instant cancellations with quick refunds, ensuring that your travel plans remain as flexible as your schedule. Our clients enjoy hassle-free assistance and benefit from secure payment reservations and discounted flight deals. If you need further assistance, our dedicated staff is just a phone call away at our flight, airline, or contact phone numbers. Experience the convenience of seamless flight booking with secure payment options. Whether you need to cancel or upgrade your flight, or if you're initiating unlimited new bookings, we've got you covered. You can search, compare, and book your flights with confidence, knowing that you're getting the best price guaranteed, which includes the most competitive rates and unpublished airfare deals with 59% discount. So, take the step towards your next travel experience with Airbookings and ensure a smooth and budget-friendly journey."
      />
      <FlightInfoSection
        title="Fly with JSX Airlines: Discover JSX Airlines Today"
        airlineName="JSX Air"
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

export default AirFlightsReservationPage;
