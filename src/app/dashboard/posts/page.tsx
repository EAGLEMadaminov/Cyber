"use client";
import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../../services/posts";
import { PostCard } from "../../../features";
import { Post } from "../../../types/post";
import { toast } from "react-toastify";

const Posts = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getAll() {
      setLoading(true);
      try {
        const data = await getAllPosts();
        if (data) {
          setPosts(data.posts);
        }
      } catch (error) {
        toast.error(error.data.message ? error.data.message : error.message);
      }
      setLoading(false);
    }
    getAll();
  }, []);
  return (
    <div>
      {loading ? (
        <p className="text-2xl text-center">Loading...</p>
      ) : (
        <div className="flex gap-2 flex-wrap">
          {posts.map((post) => {
            return <PostCard post={post} key={post.id} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
