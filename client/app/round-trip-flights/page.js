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

const RoundTripFlights = () => {
  const jsxContent = [
    {
      heading: "Round Trip Booking Made Simple",
      points: [
        "Exclusive Round Trip Deals: Book your round trip flights with Airbookings and access exclusive deals not available anywhere else.",
        "Fixed Return Dates: Choose your departure and return dates with ease, ensuring a seamless travel experience without the hassle of last-minute changes.",
        "Affordable Pricing: Enjoy discounted prices for both your departure and return flight, giving you more savings to spend on your destination.",
        "Easy Booking Process: Book your round-trip tickets in just a few clicks, with no hidden fees and transparent pricing every step of the way.",
      ],
    },
    {
      heading: "Convenient Round Trip Flight Options",
      points: [
        "Multiple Destinations: Whether you're flying to a domestic city or an international destination, we offer a range of round-trip flight options to suit your needs.",
        "Flexible Change Policies: Plans change, and we offer easy modifications to your return dates or destinations, so you don't have to worry about any sudden changes.",
      ],
    },
    {
      heading: "Best Value for Your Money",
      points: [
        "Round Trip Savings: Booking a round-trip flight can save you more compared to two one-way tickets, giving you the best value for your travel budget.",
        "Price Locking: Once you’ve secured your round trip, your price is locked in, ensuring you won’t face any unexpected price hikes later on.",
      ],
    },
    {
      heading: "Why Choose Airbookings for Your Round Trip Booking?",
      points: [
        "Best Price Guarantee: We guarantee the most competitive prices on round-trip tickets, ensuring your travel is affordable without compromising comfort.",
        "24/7 Support: Our team is available around the clock to assist you with your round-trip bookings, helping you make changes or solve any issues you may have.",
      ],
    },
    {
      heading: "Maximize Your Round Trip Savings",
      points: [
        "Compare and Book: Easily compare different round-trip options to find the best deals that suit your travel dates and budget.",
        "Special Offers: Get access to special promotions and discounts on your round-trip flights for an even better price.",
      ],
    },
  ];

  const jsxFaqs = [
    {
      question:
        "How can I find the best round-trip flight deals with Airbookings?",
      answer:
        "Simply search for round-trip flights on Airbookings and filter your results based on your preferred travel dates, destination, and budget. Be sure to check out our exclusive deals and seasonal promotions for the best rates.",
    },
    {
      question: "Can I modify my round-trip flight booking?",
      answer:
        "Yes! We offer flexible modification policies, allowing you to change your return date or other details of your round-trip flight if your plans change.",
    },
    {
      question: "What are the benefits of booking a round-trip flight?",
      answer:
        "Booking a round-trip flight typically offers significant savings compared to two one-way tickets. Additionally, it provides convenience, as you can secure your entire trip in one booking, including departure and return flights.",
    },
    {
      question: "Are there any hidden fees for round-trip bookings?",
      answer:
        "No! We believe in transparent pricing, so you won’t face any hidden fees when booking your round-trip flights with Airbookings.",
    },
    {
      question: "Can I get a refund for my round-trip flight?",
      answer:
        "Refund policies vary depending on the airline and ticket type. Our customer support team can guide you through the cancellation process and any applicable refund options for your round-trip booking.",
    },
  ];

  return (
    <div>
      <Header />
      <MobilePromo />
      <BannerSection
        heading="Round Trip Flights Made Easy"
        additionalHeading="Save on Your Round Trip Flight Booking"
        subheading="Find unbeatable deals today!"
      />
      <AboutSection />
      <ReservationAirTicket
        title="Book Your Round Trip Flights with Airbookings"
        content="Looking for affordable round-trip flights? Look no further! Airbookings offers exclusive deals on round-trip tickets, with flexible booking options and easy cancellations. Whether you're planning a domestic or international trip, we provide discounted rates and 24/7 customer support to ensure a smooth booking process. Enjoy hassle-free travel with secure payment options and the best price guarantee. Book your round-trip flights now and save big!"
      />
      <FlightInfoSection
        title="Round Trip Perks: Book and Save"
        airlineName="Round Trip Flights"
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

export default RoundTripFlights;
