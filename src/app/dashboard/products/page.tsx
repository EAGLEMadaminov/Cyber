"use client";
import React, { useEffect, useState } from "react";
import { getProducts, getCategories } from "../../../services/product";
import axios from "axios";
import { useRouter } from "next/navigation";
axios.defaults.baseURL = "https://dummyjson.com/products";
import Image from "next/image";
import { Product } from "../../../types/product";

const ProductList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCateGories] = useState<string[]>([]);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productData = await getProducts();
        setProducts(productData.products);
      } catch (err) {
        setError("Failed to fetch products");
        console.error(err);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    async function getCateGoryList() {
      try {
        const data = await getCategories();
        if (data) {
          setCateGories(data);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getCateGoryList();
  }, []);

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    try {
      const { data } = await axios.get(`/search?q=${e.target.value}`);
      if (data) {
        setProducts(data.products);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  const onCategoryChange = async (value: string) => {
    try {
      const { data } = await axios.get(`/category/${value}`);
      if (data) {
        console.log(data);
        setProducts(data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row items-center justify-between bg-gray-100 p-4 rounded-md shadow-md mb-6">
        {/* Search Input */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <input
            type="text"
            value={searchTerm}
            onChange={handleSearch}
            placeholder="Search products..."
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Category Select */}
        <div className="w-full md:w-1/3 mb-4 md:mb-0">
          <select
            onChange={(e) => onCategoryChange(e.target.value)}
            className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Create Button */}
        <div className="w-full md:w-1/3 flex justify-end">
          <button
            onClick={() => router.push("/dashboard/products/add")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Product
          </button>
        </div>
      </div>
      <h1 className="text-3xl font-semibold text-center mb-8">Products</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            onClick={() => router.push(`/dashboard/products/${product.id}`)}
            className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
          >
            <Image
              width={100}
              height={100}
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
