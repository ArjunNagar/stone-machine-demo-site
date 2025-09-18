// app/products/[slug]/page.tsx

import { products } from "../../../data/products";
import { notFound } from "next/navigation";
import ProductDetailsClient from "./components/ProductDetailsClient";

// Define the type for the page's props
type ProductDetailPageProps = {
  // This type correctly describes the resolved shape of params
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

// ✨ FIX: Changed to an 'async' function
export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  // ✨ FIX: Added 'await' before accessing params
  const { slug } = await params;
  const product = products.find((p) => p.slug === slug);

  // If no product is found, show a 404 page
  if (!product) {
    notFound();
  }

  // Pass the server-fetched product data as a prop to the client component
  return <ProductDetailsClient product={product} />;
}
