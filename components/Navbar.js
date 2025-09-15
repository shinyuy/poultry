"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-6 py-1 flex items-center justify-between">
        {/* Logo with Image */}
        <Link href="/" className="flex items-center space-x-3 rounded">
          {/* Replace /images/logo.png with your actual logo */}
          <img
            style={{ borderRadius: "10px" }}
            src="/logo.png"
            alt="Poultry & GuestHouse Logo"
            className="h-20 object-contain rounded"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-gray-700 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/agriculture">Agriculture</Link>
          <Link href="/guesthouses">Guest Houses</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 font-bold"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <Link
            href="/"
            className="block px-6 py-3 text-gray-700 font-semibold"
          >
            Home
          </Link>
          <Link
            href="/agriculture"
            className="block px-6 py-3 text-gray-700 font-semibold"
          >
            Agriculture
          </Link>
          <Link
            href="/guesthouses"
            className="block px-6 py-3 text-gray-700 font-semibold"
          >
            Guest Houses
          </Link>
          <Link
            href="/contact"
            className="block px-6 py-3 text-gray-700 font-semibold"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
