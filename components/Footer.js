"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {/* About */}
        <div>
          <h3 className="text-xl font-bold text-[#dda15e] mb-4">
            Poultry & GuestHouse
          </h3>
          <p>
            We provide quality meat, poultry, and comfortable guest houses in
            Douala and Yaoundé. Experience the best of both worlds with us.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold text-[#dda15e] mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/" className="hover:text-white transition">
                Home
              </Link>
            </li>
            <li>
              <Link href="/agriculture" className="hover:text-white transition">
                Agriculture
              </Link>
            </li>
            <li>
              <Link href="/guesthouses" className="hover:text-white transition">
                Guest Houses
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-xl font-bold text-[#dda15e] mb-4">Contact Us</h3>
          <p>Douala & Yaoundé, Cameroon</p>
          <p>Email: info@poultryguesthouse.cm</p>
          <p>Phone: +237 6XX XXX XXX</p>
        </div>
      </div>

      <div className="mt-12 text-center text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} Poultry & GuestHouse. All rights
        reserved.
      </div>
    </footer>
  );
}
