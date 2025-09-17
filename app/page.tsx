// app/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../data/products";
import { ReactNode } from "react"; // Import ReactNode for typing
import { ShieldCheck, Wrench, Trophy } from "lucide-react"; // Import icons for features

// Define the props type for FeatureCard
type FeatureCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
};

const FeatureCard = ({ icon, title, children }: FeatureCardProps) => (
  <motion.div
    className="bg-white p-6 rounded-lg shadow-lg text-center"
    whileHover={{ y: -5, scale: 1.02 }}
  >
    <div className="flex justify-center items-center mb-4 text-brand-green-light">
      {" "}
      {/* ✨ Updated */}
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-600">{children}</p>
  </motion.div>
);

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[80vh] w-full flex items-center justify-center text-white">
        <Image
          src="/images/sdp-img-2.png"
          alt="Heavy machinery"
          fill
          className="object-cover brightness-50"
          priority
        />
        <motion.div
          className="relative z-10 text-center p-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg">
            Engineering the Future of Stone Processing
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 drop-shadow-md">
            Radhika Machineries delivers precision, durability, and unmatched
            performance in every machine we build.
          </p>
          <Link
            href="/products"
            className="bg-brand-green-light text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-brand-green-dark transition-all duration-300 transform hover:scale-105" // ✨ Updated
          >
            Explore Our Machines
          </Link>
        </motion.div>
      </section>

      {/* Featured Products Section */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-green-dark">
            {" "}
            {/* ✨ Updated */}
            Our Flagship Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                // ✨ Added a border effect on hover for a premium feel
                className="bg-white rounded-lg shadow-lg overflow-hidden group border-b-4 border-transparent hover:border-brand-green-light transition-colors duration-300"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="relative h-60 w-full overflow-hidden">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 text-dark-gray">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {product.shortDescription}
                  </p>
                  {/* ✨ Updated Link to be a more prominent button */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-auto inline-block text-center bg-brand-green-dark text-white font-semibold py-2 px-4 rounded-lg hover:bg-brand-green-light transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* "Why Choose Us" Section */}
      {/* ✨ Changed background for better section separation */}
      <section className="py-20 bg-light-gray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-brand-green-dark">
            {" "}
            {/* ✨ Updated */}
            Why Radhika Machineries?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard icon={<Trophy size={48} />} title="Industry Leaders">
              Decades of experience in designing and manufacturing
              high-performance stone processing machinery.
            </FeatureCard>
            <FeatureCard
              icon={<ShieldCheck size={48} />}
              title="Unmatched Durability"
            >
              Our machines are built with the highest quality materials to
              withstand the toughest industrial environments.
            </FeatureCard>
            <FeatureCard icon={<Wrench size={48} />} title="Expert Support">
              Comprehensive after-sales support and service to ensure your
              operations run smoothly without interruption.
            </FeatureCard>
          </div>
        </div>
      </section>

      {/* Mini Contact Form Section */}
      <section className="py-20 bg-gradient-to-br from-brand-green-dark to-brand-green-deeper text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Have a Project in Mind?</h2>
          <p className="max-w-2xl mx-auto mb-8 text-gray-300">
            Let&apos;s talk about how Radhika Machineries can help you achieve
            your production goals. Get in touch with our experts today.
          </p>
          <div className="max-w-xl mx-auto">
            <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded bg-medium-gray border-gray-600 focus:ring-brand-green-light focus:border-brand-green-light" // ✨ Updated
              />
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded bg-medium-gray border-gray-600 focus:ring-brand-green-light focus:border-brand-green-light" // ✨ Updated
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="md:col-span-2 p-3 rounded bg-medium-gray border-gray-600 focus:ring-brand-green-light focus:border-brand-green-light" // ✨ Updated
              />
              <button
                type="submit"
                className="md:col-span-2 bg-brand-green-light text-white font-bold py-3 px-8 rounded-full hover:bg-brand-green-dark transition-colors" // ✨ Updated
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
