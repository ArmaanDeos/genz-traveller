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

const AirTicketReservationsPage = () => {
  const evaContent = [
    {
      heading: "EVA Air Reservations - Start Your Journey with Ease",
      points: [
        "Effortlessly book your next flight with real-time availability",
        "Enjoy flexible travel dates and easy ticket upgrades",
        "Experience personalized service with our dedicated support team",
      ],
    },
    {
      heading: "Comprehensive Changes and Cancellations",
      points: [
        "Flexible change policies to suit your ever-evolving needs",
        "Hassle-free cancellations with full or partial refunds",
        "Immediate assistance with rebooking options",
      ],
    },
    {
      heading: "Refund Policies - Your Satisfaction, Guaranteed",
      points: [
        "Easy refund process on cancellations and adjustments",
        "Transparent policies that put you first",
        "Quick resolutions to ensure your peace of mind",
      ],
    },
    {
      heading: "Flight Upgrades - Travel in Style",
      points: [
        "Access affordable upgrades to enhance your flying experience",
        "Spacious seating and superior in-flight amenities",
        "Personalized service in premium classes",
      ],
    },
    {
      heading: "Seat Upgrades for Optimal Comfort",
      points: [
        "Choose your preferred seat ahead of time",
        "Options ranging from extra legroom seats to window views",
        "Easy online management of your seat selection",
      ],
    },
    {
      heading: "Baggage Policies - Pack More, Worry Less",
      points: [
        "Clear guidelines on baggage allowances and restrictions",
        "Solutions for extra luggage needs, both domestic and international",
        "Secure handling and timely delivery of your belongings",
      ],
    },
    {
      heading: "24/7 Customer Support - We're Here Whenever You Need Us",
      points: [
        "Round-the-clock service to assist with any inquiries",
        "Multi-language support for global travelers",
        "Quick response times to keep your travel plans smooth",
      ],
    },
  ];

  const evaFaqs = [
    {
      question: "How can I change my EVA Air flight?",
      answer:
        "Changes can be easily made by calling our toll-free number or managing your booking online.",
    },
    {
      question: "What is the cancellation policy for EVA Air?",
      answer:
        "We offer flexible cancellation policies. For specific details, please contact our customer service.",
    },
    {
      question: "How do I request a refund or upgrade my EVA Air flight?",
      answer:
        "For refunds and upgrades, please reach out to our support team via our toll-free number.",
    },
    {
      question: "What are the baggage policies for EVA Air?",
      answer:
        "Baggage allowances vary by ticket type and destination. Details are available on our website or via support.",
    },
  ];
  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading=" Your Travel Assistance Starts Here"
        additionalHeading="Eva Air Flight Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Ticket Reservation With Airbookings"
        content="Embarking on your next journey begins with a seamless Air Ticket Reservation With Airbookings, where both domestic and international travel meets unparalleled convenience and affordability. Secure your spot in the skies at an affordable price over the phone. Call Now for unpublished airfare deals, ensuring you access the best rates not typically available online. Our process simplifies adjustments, with easy changes and instant cancellations accompanied by quick refunds, ensuring peace of mind from booking to boarding. Our robust platform supports hassle-free assistance and secure payment reservations, making your experience smooth and safe. Whether you’re looking to cancel or upgrade your flight, or dive into unlimited opportunities with new bookings, our comprehensive services cover every aspect of your travel needs. You can search, compare, and book your flights with confidence, knowing you’re getting the best price guaranteed, inclusive of the most competitive price and unpublished airfare deals with a 59% discount. At Airbookings, every call connects you to a realm of discounted flight deals and expert support via our flight, airline, or contact phone numbers—experience the pinnacle of seamless flight booking with multiple secure payment options."
      />
      <FlightInfoSection
        title="Unlock Seamless Travel with EVA Air - Book Today & Fly Hassle-Free"
        airlineName="EVA Air"
        contentSections={evaContent}
        faqs={evaFaqs}
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

export default AirTicketReservationsPage;
