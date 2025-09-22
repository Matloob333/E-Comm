import React from 'react';
import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import Navbar from '../components/Navbar';

export default function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="p-6 text-center">Product not found.</div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <Link to="/" className="mb-6 inline-block text-blue-600 hover:underline">← Back to Home</Link>
        <div className="flex flex-col md:flex-row gap-6">
          <img src={product.imageUrl} alt={product.name} className="md:w-1/2 object-contain" />
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
            <p className="text-xl font-semibold text-blue-600 mb-2">${product.discountPrice.toFixed(2)}</p>
            <p className="line-through text-gray-400 mb-4">${product.price.toFixed(2)}</p>
            <p>Detailed product description goes here.</p>
          </div>
        </div>
      </div>
    </>
  );
}
