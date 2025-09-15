"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function Agriculture() {
  return (
    <div className="bg-neutral-50 text-gray-900">
      <Navbar />
      {/* 1. Hero Section */}
      <section className="relative h-[90vh] w-full flex items-center justify-center overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/poultry3.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/80" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center text-white px-6"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 drop-shadow-xl">
            Fresh. Healthy. Trusted.
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl mb-10 opacity-90">
            From pigs and poultry to beef and fish — we provide Cameroon with
            sustainable, high-quality meat every day.
          </p>
          <a
            href="#products"
            className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 rounded-2xl text-lg font-semibold shadow-lg transition"
          >
            Explore Our Products
          </a>
        </motion.div>
      </section>

      {/* 2. About Our Farms */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6">About Our Farms</h2>
          <p className="text-lg leading-relaxed mb-6 text-gray-700">
            Our farms are located in fertile regions where we raise pigs,
            poultry, cattle, and fish under hygienic and sustainable conditions.
            With a focus on quality and transparency, we ensure every product
            meets the highest standards.
          </p>
          <p className="text-lg leading-relaxed text-gray-700">
            Whether you are a wholesaler, retailer, or family, our mission is to
            nourish communities with healthy and affordable food.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-xl"
        >
          <Image
            src="/poultry2.jpg"
            alt="Our Farm"
            width={600}
            height={400}
            className="object-cover"
          />
        </motion.div>
      </section>

      {/* 3. Products */}
      <section id="products" className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Our Products</h2>
          <p className="text-lg text-gray-600">
            Fresh, hygienic, and delivered in bulk or retail quantities.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { name: "Pork", img: "/poultry2.jpg" },
            { name: "Poultry", img: "/chicken.jpeg" },
            { name: "Beef", img: "/beef.jpeg" },
            { name: "Fish", img: "/fish.jpeg" },
            { name: "Eggs", img: "/eggs.jpeg" },
            { name: "Pork", img: "/poultry2.jpg" },
          ].map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden shadow-lg group"
            >
              <Image
                src={product.img}
                alt={product.name}
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-emerald-600/60 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-white">
                  {product.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 4. Why Choose Us */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-700 to-emerald-500 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">Why Choose Us</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Quality Guaranteed",
              desc: "We prioritize hygiene, freshness, and international standards.",
            },
            {
              title: "Sustainable Farming",
              desc: "Eco-friendly practices that respect animals and the environment.",
            },
            {
              title: "Trusted by Many",
              desc: "Supplying families, restaurants, and businesses across Cameroon.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 bg-white/10 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <h3 className="text-2xl font-semibold mb-4">{item.title}</h3>
              <p className="text-lg opacity-90">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 5. Eating Natural & Healthy */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Eating Natural & Healthy
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              We believe that food should be as natural as possible. Our animals
              are fed with nutrient-rich, balanced diets free from harmful
              additives, ensuring that every meal you enjoy is both delicious
              and healthy.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              This commitment to natural farming means you can trust our meat to
              nourish your family with the goodness of farm-fresh produce.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/beef.jpeg"
              alt="Natural Food"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* 6. Veterinary Care */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="rounded-3xl overflow-hidden shadow-lg"
          >
            <Image
              src="/veterinarian.jpg"
              alt="Veterinary Care"
              width={600}
              height={400}
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Veterinary Care</h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our animals are cared for by professional veterinarians who ensure
              their health and wellbeing at every stage. From vaccinations to
              preventive care, every measure is taken to raise strong and
              healthy livestock.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Regular check-ups and high veterinary standards guarantee that the
              meat you consume is safe, nutritious, and of the best quality.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 7. Gallery */}
      <section className="py-20 px-6 bg-neutral-100">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Farm Life</h2>
          <p className="text-lg text-gray-600">
            A glimpse into our farms, farmers, and fresh produce.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            "farm1.jpg",
            "farm2.jpg",
            "farm3.jpg",
            "farm4.jpg",
            "farm5.jpg",
            "farm6.jpg",
          ].map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="rounded-2xl overflow-hidden shadow-md group"
            >
              <Image
                src={`/${img}`}
                alt="Farm"
                width={400}
                height={300}
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8. Testimonials */}
      <section className="py-30 px-6 bg-gradient-to-r from-emerald-700 to-emerald-600 text-white">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-4xl font-bold mb-6">What Our Clients Say</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              name: "Restaurant Owner - Douala",
              text: "Their pork and poultry supply is always fresh and reliable. It has boosted my business greatly.",
            },
            {
              name: "Family Customer - Yaoundé",
              text: "We trust them for healthy beef and fish for our home. Quality is always consistent.",
            },
            {
              name: "Distributor - Bafoussam",
              text: "Professional service, bulk delivery on time, and meat that my clients love. Highly recommend.",
            },
          ].map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/10 p-8 rounded-2xl shadow-lg backdrop-blur-md"
            >
              <p className="italic mb-4">“{t.text}”</p>
              <h4 className="font-semibold">{t.name}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 9. Contact / CTA */}
      <section className="py-40 bg-white text-emerald-700 text-center">
        <h2 className="text-4xl font-bold mb-6">Partner With Us</h2>
        <p className="max-w-2xl mx-auto text-lg mb-10 opacity-90">
          Looking for bulk meat supply or fresh farm products? Contact us today
          and let’s build a sustainable food future together.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-6">
          <a
            href="tel:+237XXXXXXXXX"
            className="px-8 py-4 bg-white text-emerald-700 font-semibold rounded-2xl shadow-lg hover:bg-gray-100 transition"
          >
            Call Us
          </a>
          <a
            href="https://wa.me/237XXXXXXXXX"
            target="_blank"
            className="px-8 py-4 bg-emerald-700 hover:bg-emerald-700-600 text-white font-semibold rounded-2xl shadow-lg transition"
          >
            WhatsApp Us
          </a>
          <a
            href="mailto:info@farm.com"
            className="px-8 py-4 bg-white/10 hover:bg-white/20 font-semibold rounded-2xl shadow-lg transition"
          >
            Email Us
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
