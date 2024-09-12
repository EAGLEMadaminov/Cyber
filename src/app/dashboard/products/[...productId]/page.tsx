"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getProduct, deleteProduct } from "../../../../services/product";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Product } from "../../../../types/product";
import { toast } from "react-toastify";
import axios from "axios";

const SingleProductPage = () => {
  const [product, setProduct] = useState<Partial<Product>>({});
  const { productId } = useParams();
  const router = useRouter();
  const id = productId ? Number(productId) : NaN;

  useEffect(() => {
    if (isNaN(id)) return;
    async function getProductById() {
      try {
        const product = await getProduct(id);
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    }
    getProductById();
  }, [id]);

  const deleteProductById = async () => {
    try {
      await deleteProduct(id);
      toast.success("Post has deleted succesfully");
      router.push("/dashboard/products");
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errorMessage = error.response?.data?.message || error.message;
        toast.error(errorMessage);
      } else {
        toast.error("An unexpected error occurred.");
      }
      console.log(error);
    }
  };
  return (
    <div className="max-w-sm mx-auto ml-10 bg-white rounded-lg shadow-md overflow-hidden">
      <Image
        width={100}
        height={100}
        src={
          product?.images && product?.images?.length > 0
            ? product.images[0]
            : ""
        }
        alt={product?.title ? product.title : "product "}
        className="h-48 w-full object-cover"
      />
      <div className="p-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          {product.title}
        </h2>
        <p className="text-gray-600 mt-2">{product.description}</p>

        <div className="mt-4">
          <span className="text-gray-700">Brand:</span>
          <span className="ml-2 text-gray-900 font-bold">{product.brand}</span>
        </div>
        <div className="mt-2">
          <span className="text-gray-700">Category:</span>
          <span className="ml-2 text-gray-900 font-bold capitalize">
            {product.category}
          </span>
        </div>
        <div className="mt-2 flex items-center">
          <span className="text-xl font-semibold text-gray-900">
            ${product.price}
          </span>
        </div>
        <div className="flex gap-4">
          <button
            className="mt-6 w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300"
            onClick={() =>
              router.push(`/dashboard/products/edit/${product.id}`)
            }
          >
            Update
          </button>
          <button
            className="mt-6 w-full bg-rose-600 text-white font-bold py-2 px-4 rounded hover:bg-rose-700 transition duration-300"
            onClick={deleteProductById}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleProductPage;
