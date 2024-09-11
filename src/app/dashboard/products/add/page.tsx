"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { addProduct } from "../../../../services/product";
import { useRouter } from "next/navigation";

type ProductFormInputs = {
  title: string;
  description: string;
  price: number;
  rating: number;
  image: string; // URL of the image
};

const CreateProductForm = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductFormInputs>();

  const onSubmit: SubmitHandler<ProductFormInputs> = async (data) => {
    try {
      const newProduct = await addProduct(data);
      if (newProduct) {
        console.log(newProduct);
        router.push("/dashboard/products");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg flex flex-col w-[100vw] ml-[100px] mx-auto bg-white p-6 rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Create Product</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Title */}
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            {...register("title", { required: "Title is required" })}
            placeholder="Enter product title"
            className={`w-full px-4 py-2 border ${
              errors.title ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>
          )}
        </div>

        {/* Description */}
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-gray-700 font-bold mb-2"
          >
            Description
          </label>
          <textarea
            id="description"
            {...register("description", {
              required: "Description is required",
            })}
            placeholder="Enter product description"
            className={`w-full px-4 py-2 border ${
              errors.description ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            rows={4}
          />
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="price" className="block text-gray-700 font-bold mb-2">
            Price ($)
          </label>
          <input
            type="number"
            id="price"
            {...register("price", { required: "Price is required" })}
            placeholder="Enter product price"
            className={`w-full px-4 py-2 border ${
              errors.price ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.price && (
            <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>
          )}
        </div>

        {/* Rating */}
        <div className="mb-4">
          <label
            htmlFor="rating"
            className="block text-gray-700 font-bold mb-2"
          >
            Rating
          </label>
          <input
            type="number"
            id="rating"
            {...register("rating", {
              required: "Rating is required",
              min: { value: 0, message: "Rating cannot be negative" },
              max: { value: 5, message: "Rating cannot exceed 5" },
            })}
            placeholder="Enter product rating (0-5)"
            className={`w-full px-4 py-2 border ${
              errors.rating ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
            step="0.1"
            min="0"
            max="5"
          />
          {errors.rating && (
            <p className="text-red-500 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Image URL */}
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700 font-bold mb-2">
            Image URL
          </label>
          <input
            type="url"
            id="image"
            {...register("image", { required: "Image URL is required" })}
            placeholder="Enter product image URL"
            className={`w-full px-4 py-2 border ${
              errors.image ? "border-red-500" : "border-gray-300"
            } rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500`}
          />
          {errors.image && (
            <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProductForm;
