"use client";
import React, { useEffect, useState } from "react";
import { getProducts } from "../../services/product";

// Call your getProducts function
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <img
              className="w-full h-64 object-cover"
              src={product.thumbnail}
              alt={product.title}
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
              <p className="text-gray-600 text-sm mb-4">
                {product.description}
              </p>
              <div className="flex justify-between items-center mb-4">
                <span className="text-lg font-bold text-green-600">
                  ${product.price}
                </span>
                <span className="bg-yellow-400 text-white px-2 py-1 rounded">
                  ⭐ {product.rating}
                </span>
              </div>
              <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
