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

const AirFlightsReservationPageThree = () => {
  const jsxContent = [
    {
      heading: "Why Choose TAP Portugal with Airbookings?",
      points: [
        "Unpublished Airfares: Access significantly lower rates not available publicly.",
        "24/7 Customer Service: Get support anytime, anywhere for peace of mind.",
        "Flexible Booking Options: Easy new bookings, date changes, and cancellations.",
      ],
    },
    {
      heading: "Explore Our TAP Portugal Services",
      points: [
        "New Bookings: Discover affordable TAP Portugal flights to global destinations. Benefit from exclusive deals only available through Airbookings.",
        "Date Changes and Cancellations: Flexible policies to accommodate unexpected changes. Hassle-free adjustments with minimal fees.",
        "Refunds and Unpublished Airfares: Get the best prices on TAP Air Portugal with hidden deals. Straightforward refund process if plans change.",
        "Seat Upgrades and Enhanced Travel: Enjoy superior comfort with TAP Airlines seat upgrades. Experience first-class amenities even before you board.",
        "Comprehensive Baggage Policies: Understand all details for both domestic and international flights. Avoid surprises with transparent information on allowances and fees.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question: "How can I find the best deals on TAP Portugal flights?",
      answer:
        "Keep an eye on our Airbookings specials and sign up for alerts to never miss out on low fares and exclusive offers.",
    },
    {
      question: "What should I do if I need to change my flight date?",
      answer:
        "You can easily modify your booking online or call our toll-free customer service for immediate assistance.",
    },
    {
      question: "Are there options for upgrading my seat on TAP flights?",
      answer:
        "Absolutely! Contact us to discuss available upgrades and make your journey even more comfortable.",
    },
  ];

  return (
    <div className="">
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Your Travel Assistance Starts Here"
        additionalHeading="TAP Air Portugal Flight Reservations"
        subheading="Exclusive discounts available now!"
      />

      <AboutSection />
      <ReservationAirTicket
        title="Air Ticket Reservation With Airbookings"
        content="Looking for the best domestic and international flight ticket reservation deals? With Air Ticket Reservations With Airbookings, you can secure flights at an affordable price over the phone with ease. Call Now for unpublished airfare deals, giving you access to exclusive discounts of up to 59% off. Need flexibility? Enjoy easy changes and instant cancellations with quick refunds, so you can modify your plans without stress. Our platform ensures secure payment reservations, offering hassle-free assistance and discounted flight deals on major airlines. Whether you need to cancel or upgrade your flight, make unlimited new bookings, changes, or simply search, compare, and book flights with confidence, we’ve got you covered. With our best price guaranteed, you’ll always find the most competitive price and unpublished airfare deals. Call now and experience seamless flight booking today!"
      />
      <FlightInfoSection
        title="Unlock Exclusive Travel Deals at Airbookings – Book TAP Portugal Today!"
        airlineName="TAP Portugal Air"
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

export default AirFlightsReservationPageThree;
