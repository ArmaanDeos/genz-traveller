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

const AirFlightsReservationPageFour = () => {
  const jsxContent = [
    {
      heading: "Why Choose KLM via Airbookings?",
      points: [
        "Unpublished Airfares: Access significantly lower rates not available publicly.",
        "24/7 Customer Support: We’re here to assist you around the clock with any travel concerns.",
        "Effortless Booking Process: Streamline your travel planning with our easy-to-use platform.",
      ],
    },
    {
      heading: "KLM Flight Deals and Reservations",
      points: [
        "Exclusive Discounts on KLM Tickets: Save big with our special offers on all KLM flights.",
        "Instant KLM Flight Reservations: Secure your seat on KLM flights instantly with just a few clicks.",
        "Broad Range of Choices: From economy to first-class, find tickets that best suit your budget and preferences.",
      ],
    },
    {
      heading: "Managing Your Booking",
      points: [
        "Efficient Date Changes: Need to reschedule? Easily modify your KLM flight dates.",
        "Hassle-Free Cancellations and Refunds: Change of plans? Cancel and get refunds smoothly with our support.",
        "Seamless Seat Upgrades: Enhance your travel experience with KLM seat upgrade options.",
      ],
    },
    {
      heading: "Additional Services",
      points: [
        "Baggage Policies Explained: Understand the specifics of domestic and international baggage policies to prepare better for your KLM flight.",
        "24/7 Service: Our customer support is always available to help with your KLM airline tickets, bookings, and inquiries.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I get the best deals on KLM flights?",
      answer:
        "Sign up for our newsletters to receive exclusive offers and early access to KLM flight deals that aren’t available to the general public.",
    },
    {
      question: "What should I do if I need to change my KLM booking?",
      answer:
        "Contact our toll-free customer service number or manage your booking directly through our website. Our team is here to assist with date changes or any other adjustments you need.",
    },
    {
      question:
        "What are the benefits of booking KLM flights through Airbookings?",
      answer:
        "By booking through us, you gain access to unpublished airfares, dedicated 24/7 support, and a seamless booking process, ensuring your travel is stress-free and economical.",
    },
  ];

  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="KLM Flights Reservations"
        subheading="Exclusive discounts available now!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Air Tickets Reservations With Airbookings"
        content="Booking your next journey has never been more straightforward or more cost-effective than with Air Tickets Reservations With Airbookings. Whether you're planning a domestic jaunt or an international adventure, our platform offers affordable price solutions over the phone. When you call now, you'll access exclusive unpublished airfare deals that aren't available online. Our service makes it easy to manage your travel plans with easy changes and instant cancellations, ensuring you get quick refunds without the fuss. Enjoy hassle-free assistance from our knowledgeable team and make secure payment reservations with confidence. We offer discounted flight deals that ensure you always get the best value. Need help? Our flight, airline, or contact phone numbers are always at your disposal for any queries. With secure payment options, the ability to cancel or upgrade your flight, and the freedom to search, compare, and book your flights effortlessly, Airbookings is your go-to for seamless flight booking. Experience the ease of creating unlimited new bookings and changes. Rest assured, you're getting the best price guaranteed, including the most competitive price and additional savings with a 59% Discount on unpublished airfare deals."
      />
      <FlightInfoSection
        title="Discover Premium Deals on KLM Flights with Airbookings"
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

export default AirFlightsReservationPageFour;
