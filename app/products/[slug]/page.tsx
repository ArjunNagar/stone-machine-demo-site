// app/products/[slug]/page.tsx

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./components/ProductDetailsClient"; // Import the new client component

// Define the type for the page's props
type ProductDetailPageProps = {
  params: {
    slug: string;
  };
};

// This function runs on the server at build time
export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

// This is now a Server Component
export default function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = params;
  const product = products.find((p) => p.slug === slug);

  // If no product is found, show a 404 page
  if (!product) {
    notFound();
  }

  // Pass the server-fetched product data as a prop to the client component
  return <ProductDetailsClient product={product} />;
}
