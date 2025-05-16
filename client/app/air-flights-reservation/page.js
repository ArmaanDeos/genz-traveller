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

const AirFlightsReservationPageTwo = () => {
  const jsxContent = [
    {
      heading: "Why Choose Alaska Airlines for Your Next Trip?",
      points: [
        "Wide Range of Destinations: Fly to domestic and international destinations with Alaska Airlines flights.",
        "Exceptional Service: Enjoy top-tier customer service with Alaska Air, available 24/7 to assist with your booking.",
        "Exclusive Deals: Get unpublished fares on Alaska Airlines reservations by calling our Toll-Free number.",
        "Zero Hold Time: Speak with an agent immediately to book or modify your Alaska Airlines tickets.",
      ],
    },
    {
      heading: "Alaska Airlines Reservations—Simple and Quick",
      points: [
        "Book Instantly: Find the lowest prices for Alaska Airlines flights by calling us directly.",
        "Unbeatable Prices: Exclusive access to unpublished Alaska Airlines ticket deals.",
        "24/7 Availability: Our experts are here for you at any time, day or night.",
      ],
    },
    {
      heading: "Make Changes to Your Alaska Airlines Reservation Easily",
      points: [
        "Flexible Changes: Modify your flight dates, times, or destinations effortlessly.",
        "Zero Hold Time: Speak with a live agent immediately for your flight changes.",
        "Fast and Simple: No hassle, no long waits. Our customer support team ensures swift and smooth changes to your Alaska Airlines reservations.",
      ],
    },
    {
      heading: "Cancel or Reschedule Your Alaska Airlines Flight—Hassle-Free",
      points: [
        "Easy Cancellations: Quickly cancel your Alaska Airlines flights with zero hold time on the phone.",
        "Simple Process: Speak to a live agent to cancel or modify your booking at any time.",
        "No Hidden Fees: Enjoy peace of mind with clear and upfront information on cancellations.",
        "Quick and Efficient: Our team handles your cancellation swiftly, so you can focus on your next step.",
      ],
    },
    {
      heading: "Request a Refund for Your Alaska Airlines Tickets",
      points: [
        "Fast Refund Process: Get your refund quickly with minimal effort.",
        "Call Our Experts: Our customer service team will guide you through the refund process step by step.",
        "Instant Assistance: No waiting! Speak directly with an agent for immediate help with your Alaska Airlines refund.",
        "Available 24/7: Call us anytime to process your refund request with no hold time!",
      ],
    },
    {
      heading: "Upgrade Your Alaska Airlines Flight",
      points: [
        "Exclusive Upgrades: Unlock seat upgrades and premium services by calling us directly.",
        "Better Seats: Get access to upgraded seats on Alaska Airlines flights.",
        "Fast and Easy: Speak to our experts and request an upgrade to your preferred seat.",
        "24/7 Assistance: We’re always here to assist with flight upgrades and ensure you have a comfortable travel experience.",
      ],
    },
    {
      heading:
        "Baggage Policies for Domestic and International Alaska Airlines Flights",
      points: [
        "Know Your Limits: Understand baggage allowances and fees for both domestic and international Alaska Airlines flights.",
        "Easy Process: Find out how to check in your luggage, including special baggage needs like oversized bags or sporting equipment.",
        "Domestic Baggage: Learn about carry-on and checked baggage policies within the U.S.",
        "International Baggage: Get all the information you need for flying internationally with Alaska Airlines, including baggage allowances and fees.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I book Alaska Airlines flights?",
      answer:
        "You can book your Alaska Airlines flight easily by calling our toll-free number. Our team is available 24/7 to help you with your reservation and secure the best prices.",
    },
    {
      question: "Can I change my Alaska Airlines reservation after booking?",
      answer:
        "Yes! You can change your Alaska Airlines reservation by calling us. Our experts will help you modify your flight according to your preferences.",
    },
    {
      question:
        "What should I do if I need to cancel my Alaska Airlines flight?",
      answer:
        "If you need to cancel your flight, just give us a call! We will guide you through the cancellation process and provide information on any applicable fees or refunds.",
    },
    {
      question: "How do I upgrade my seat on Alaska Airlines?",
      answer:
        "Seat upgrades are easy to request through our customer service. Call now, and our experts will assist you in securing a more comfortable seat on your Alaska Airlines flight.",
    },
    {
      question: "What is Alaska Airlines' baggage policy for domestic flights?",
      answer:
        "Alaska Airlines offers free carry-on luggage and checked baggage with specific weight limits. If you need more details or have special baggage needs, call us now for assistance.",
    },
    {
      question: "How do I get a refund for my Alaska Airlines ticket?",
      answer:
        "To request a refund, simply call us. Our team will provide clear instructions and help you process your refund quickly.",
    },
  ];

  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="Alaska Airlines Flight Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Flights Reservation With Airbookings"
        content="Looking for Air Flights Reservation With Airbookings? Whether you're booking domestic or international flights, we offer the best deals with an affordable price over the phone. Call Now for exclusive unpublished airfare deals, easy changes, and instant cancellations with quick refunds. Experience hassle-free assistance with secure payment options for your flight reservations. You can also enjoy discounted flight deals while accessing dedicated airline customer service. Need help? Contact us through our flight phone numbers for fast, reliable support. With our seamless booking process, secure payment reservations, and unlimited changes, you can search, compare, and book your flights with confidence. Enjoy the best price guaranteed, including the most competitive price and unpublished airfare deals with 59% discount!"
      />
      <FlightInfoSection
        title="Book Your Alaska Airlines Flight Now with Airbookings!"
        airlineName="Alaska Airlines"
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

export default AirFlightsReservationPageTwo;
