"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../../services/product";
import { getAllTodos } from "../../services/todos";
import { getAllPosts } from "../../services/posts";
import { getAllUser } from "../../services/user";

export default function Home() {
  const [productsCount, setProductsCount] = useState(0);
  const [tososCount, setTodosCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [postCount, setPostsCount] = useState(0);

  useEffect(() => {
    async function getAll() {
      const products = await getProducts();
      const todos = await getAllTodos();
      const posts = await getAllPosts();
      const users = await getAllUser();
      setProductsCount(products?.total);
      setUsersCount(users?.total);
      setTodosCount(todos?.total);
      setPostsCount(posts?.total);
    }
    getAll();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-10">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-4xl">
        {/* Users Count */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Users</h2>
          <p className="text-4xl font-bold text-blue-500 mt-3">{usersCount}</p>
        </div>

        {/* Todos Count */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Todos</h2>
          <p className="text-4xl font-bold text-green-500 mt-3">{tososCount}</p>
        </div>

        {/* Products Count */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Products</h2>
          <p className="text-4xl font-bold text-purple-500 mt-3">
            {productsCount}
          </p>
        </div>

        {/* Posts Count */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h2 className="text-xl font-semibold text-gray-700">Posts</h2>
          <p className="text-4xl font-bold text-red-500 mt-3">{postCount}</p>
        </div>
      </div>
    </div>
  );
}
