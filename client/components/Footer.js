"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail } from "lucide-react";

export default function Footer() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/contact-us", label: "Contact" },
    { href: "/privacy-policy", label: "Privacy Policy" },
    { href: "/refund-policy", label: "Refund Policy" },
    { href: "/terms-and-conditions", label: "Terms & Conditions" },
  ];

  const dropdownLinks = [
    {
      href: "/flights-reservation",
      label: "Flight Reservations",
    },
    { href: "/flight-deals/iberia-airlines", label: "Iberia Airlines" },
    { href: "/flight-deals/vueling-airlines", label: "Vueling Airlines" },
    { href: "/flight-deals/air-europa-airlines", label: "Air Europa Airlines" },
    { href: "/flight-deals/volotea-airlines", label: "Volotea Airlines" },
    { href: "/flight-deals/ryanair-airlines", label: "Ryanair Airlines" },
    {
      href: "/flight-deals/air-nostrum-airlines",
      label: "Air Nostrum Airlines",
    },
    { href: "/flight-deals/easyjet-airlines", label: "EasyJet Airlines" },
    { href: "/flight-deals/copa-airlines", label: "Copa Airlines" },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-14 pb-8 relative z-10 overflow-hidden">
      {/* Background Shape */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 via-indigo-900 to-black opacity-70 -z-10" />

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <Image
            src="/images/logo.png"
            alt="Genztraveller Logo"
            width={180}
            height={60}
            className="mb-4"
          />
          <p className="text-sm leading-relaxed mb-6 text-gray-300">
            Discover unbeatable airfare deals and explore the world with comfort
            and ease.
          </p>

          <div className="space-y-3 text-sm">
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-yellow-400" />
              <a
                href="tel:+1-(844) 930-0173"
                className="hover:text-yellow-500 transition"
              >
                +1-(844) 930-0173
              </a>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-yellow-400" />
              <a
                href="mailto:info@genztraveller.com"
                className="hover:text-yellow-500 transition"
              >
                info@genztraveller.com
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Quick Links
          </h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="hover:text-white transition">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Popular Deals */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Popular Deals
          </h3>
          <ul className="space-y-3 text-sm text-gray-300 max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500 pr-1">
            {dropdownLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-white transition">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-yellow-400">
            Stay Connected
          </h3>
          <p className="text-sm text-gray-300 mb-4">
            Join our newsletter to receive exclusive deals and updates.
          </p>
          <form className="flex flex-col space-y-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-4 py-2 rounded bg-white text-black placeholder-gray-500 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-2 rounded transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Divider */}
      <div className="my-8 border-t border-gray-700"></div>

      {/* Disclaimer & Bottom Bar */}
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-400 text-sm space-y-3">
        <p>
          Disclaimer: genztraveller.com provides travel deal comparisons only.
          We are not affiliated with any airline and do not guarantee prices.
          All offers are subject to availability and change.
        </p>
        <p>© {new Date().getFullYear()} GenzTraveller. All rights reserved.</p>
      </div>
    </footer>
  );
}
