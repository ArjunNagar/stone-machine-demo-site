// app/products/page.tsx

"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { products } from "../../data/products";

// 1. Define the type for a single product object
type Product = {
  id: number;
  slug: string;
  name: string;
  category: string;
  image: string;
  shortDescription: string;
  // Add other fields if you need them inside the card
};

// 2. Define the type for the component's props
type ProductCardProps = {
  product: Product;
  index: number;
};

// 3. Apply the types to the component's props
const ProductCard = ({ product, index }: ProductCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg overflow-hidden group flex flex-col"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <div className="relative w-full h-56 overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          fill // <-- Updated prop
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110" // <-- Updated prop
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-sm text-gray-500 mb-1">{product.category}</p>
        <h3 className="text-xl font-bold text-dark-gray mb-3">
          {product.name}
        </h3>
        <p className="text-gray-600 mb-4 flex-grow">
          {product.shortDescription}
        </p>
        <Link
          href={`/products/${product.slug}`}
          className="mt-auto inline-block text-center bg-dark-gray text-white font-semibold py-2 px-4 rounded-lg hover:bg-medium-gray transition-colors duration-300"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default function ProductsPage() {
  return (
    <div className="bg-light-gray">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <h1 className="text-4xl font-extrabold text-center text-dark-gray mb-4">
            Our Machinery
          </h1>
          <p className="text-lg text-center text-gray-600 max-w-3xl mx-auto mb-12">
            Explore our extensive range of high-quality stone processing
            machinery, engineered for performance and reliability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
