"use client";

import { motion } from "framer-motion";

export default function GuestHouses() {
  return (
    <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <img
          src="/guesthouse6.jpg"
          alt="Guest House Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
            Cozy Guest Houses in Douala & Yaoundé
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-8 opacity-90">
            Experience comfort, privacy, and affordability in our modern guest
            houses, designed for your relaxation.
          </p>
          <a
            href="/contact"
            className="px-8 py-4 bg-[#dda15e] hover:bg-[#c98e4c] text-white rounded-2xl shadow-lg text-lg font-semibold"
          >
            Book Your Stay
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <motion.img
          src="/guesthouse6.jpg"
          alt="Guest House"
          className="rounded-3xl shadow-lg"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
        <div>
          <h2 className="text-4xl font-bold text-[#dda15e] mb-6">
            About Our Guest Houses
          </h2>
          <p className="text-lg leading-relaxed text-gray-700">
            We provide modern, fully equipped guest houses in Douala and
            Yaoundé. Whether you’re traveling for work, family, or leisure, our
            spaces are designed to make you feel at home.
          </p>
        </div>
      </section>

      {/* Locations Section */}
      <section className="bg-[#dda15e]/10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#dda15e] mb-12">
            Our Locations
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { city: "Douala", img: "/guesthouse7.jpg" },
              { city: "Yaoundé", img: "/guesthouse1.jpg" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden group"
              >
                <img
                  src={item.img}
                  alt={item.city}
                  className="h-64 w-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800">
                    {item.city} Guest Houses
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Comfortable, fully furnished guest houses in the heart of{" "}
                    {item.city}.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#dda15e] text-center mb-12">
          Amenities & Comfort
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            "Free WiFi",
            "Air Conditioning",
            "Private Parking",
            "24/7 Security",
            "Fully Furnished",
            "Kitchen Access",
          ].map((amenity, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-[#dda15e]/10 rounded-2xl p-6 shadow-lg hover:shadow-xl transition"
            >
              <p className="text-lg font-semibold text-gray-800">{amenity}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Gallery Section */}
      <section className="bg-[#dda15e]/10 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-[#dda15e] mb-12">
            Guest House Gallery
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["gallery1.jpg", "gallery2.jpg", "guesthouse2.jpg"].map(
              (img, i) => (
                <motion.img
                  key={i}
                  src={`/${img}`}
                  alt="Guest House"
                  className="rounded-2xl shadow-lg object-cover h-64 w-full hover:scale-105 transition-transform duration-500"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                />
              )
            )}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-6 max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#dda15e] text-center mb-12">
          What Our Guests Say
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              name: "Sarah M.",
              text: "The Douala guest house was perfect! Clean, cozy, and in a great location.",
            },
            {
              name: "Jean K.",
              text: "I stayed in Yaoundé for a week. Excellent service, safe environment, and very affordable.",
            },
          ].map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
            >
              <p className="text-lg text-gray-700 italic">
                &quot;{review.text}&quot;
              </p>
              <p className="mt-4 font-semibold text-gray-900">
                - {review.name}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Dining Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#dda15e] mb-6">
              Dining Experience
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Enjoy a variety of local and international dishes freshly prepared
              at our in-house restaurant. Perfect meals for every occasion.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/dining.jpg"
              alt="Dining"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Car Rentals Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/carrentals.jpeg"
              alt="Car Rental"
              className="w-full h-96 object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-[#dda15e] mb-6">
              Car Rentals
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              Need transportation during your stay? We offer reliable,
              affordable car rental services with or without a driver, ensuring
              you travel comfortably and safely.
            </p>
            <a
              href="/car-rental"
              className="px-6 py-3 bg-[#dda15e] hover:bg-[#c98e4c] text-white rounded-xl shadow-lg text-lg font-semibold"
            >
              Rent a Car
            </a>
          </div>
        </div>
      </section>

      {/* Nearby Attractions Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-[#dda15e] mb-6">
              Discover Nearby Attractions
            </h2>
            <p className="text-lg text-gray-700 mb-6">
              From cultural landmarks to vibrant nightlife and shopping, our
              guest houses keep you close to the best experiences in Cameroon.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-lg">
            <img
              src="/attractions.jpeg"
              alt="Nearby Attractions"
              className="w-full h-96 object-cover"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-[#dda15e] py-20 px-6 text-center text-white">
        <h2 className="text-4xl font-bold mb-6">Ready to Book Your Stay?</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Reserve your guest house today and enjoy comfort, convenience, and
          peace of mind.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block px-8 py-4 bg-white text-[#dda15e] font-semibold rounded-2xl shadow-lg hover:bg-gray-100"
        >
          Book Now
        </motion.a>
      </section>
    </div>
  );
}
