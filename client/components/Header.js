"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, Home, Info, Phone, Plane } from "lucide-react"; // Lucide Icons

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => setMenuOpen(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { href: "/", label: "Home", icon: <Home className="w-4 h-4 mr-1" /> },
    {
      href: "/flights-reservation",
      label: "Flight Reservations",
      icon: <Plane className="w-4 h-4 mr-1" />,
    },
    {
      href: "/about-us",
      label: "About",
      icon: <Info className="w-4 h-4 mr-1" />,
    },
    {
      href: "/contact-us",
      label: "Contact",
      icon: <Phone className="w-4 h-4 mr-1" />,
    },
  ];

  const dropdownLinks = [
    { href: "/american-airlines", label: "American Airlines" },
    { href: "/southwest-airlines", label: "Southwest Airlines" },
    { href: "/united-airlines", label: "United Airlines" },
    { href: "/alaska-airlines", label: "Alaska Airlines" },
    { href: "/jetblue-airlines", label: "JetBlue Airlines" },
    { href: "/hawaiian-airlines", label: "Hawaiian Airlines" },
    { href: "/spirit-airlines", label: "Spirit Airlines" },
    { href: "/frontier-airlines", label: "Frontier Airlines" },
    { href: "/british-airways", label: "British Airways" },
    { href: "/emirates-airlines", label: "Emirates Airlines" },
  ];

  return (
    <header className="bg-white shadow-sm fixed top-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/logo.png"
              alt="Airbookings logo"
              width={100}
              height={100}
              className="object-cover"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6 font-lato text-gray-700 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center hover:text-primary-red transition duration-200 font-semibold text-lg"
              >
                <span className="hidden md:inline">{item.icon}</span>
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="tel:+1-(844) 930-0173"
              className="flex items-center gap-4 bg-gradient-to-r from-primary-blue to-primary-red hover:from-primary-blue hover:to-primary-red text-white font-semibold px-6 py-3 rounded-full shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              <Image
                src="/images/call-agent-icon.png"
                alt="Call Agent Icon"
                width={40}
                height={24}
                className="object-contain"
              />
              <span className="text-center text-md font-lato">
                Call Us For Booking
              </span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-gray-700"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {menuOpen && (
          <div className="md:hidden pb-4 animate-slide-down">
            <div className="flex flex-col space-y-3 font-lato">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="py-2 border-b border-gray-100 hover:bg-blue-50 px-2 rounded transition duration-200"
                >
                  {item.label}
                </Link>
              ))}

              {/* Mobile Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="flex items-center py-2 px-2 border-b border-gray-100 hover:bg-blue-50 rounded transition duration-200"
                >
                  Flight Deals <ChevronDown className="ml-1 w-4 h-4" />
                </button>

                {dropdownOpen && (
                  <div className="mt-2 w-full max-h-64 overflow-y-auto bg-white rounded-md shadow-lg z-10 animate-fade-in scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100">
                    {dropdownLinks.map((link) => (
                      <Link
                        key={link.href}
                        href={link.href}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-primary-red transition duration-200"
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Mobile Call Button */}
              <a
                href="tel:+1-(844) 930-0173"
                className="flex justify-center items-center gap-2 mt-2 bg-primary-blue hover:bg-primary-red text-white font-semibold px-4 py-2 rounded-md transition"
              >
                <Image
                  src="/images/call-agent-icon.png"
                  alt="Phone Icon"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                <span>Call Us :+1-(844) 930-0173</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
