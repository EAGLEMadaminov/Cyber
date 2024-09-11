"use client";
import React, { useState, useEffect } from "react";
import { getAllPosts } from "../../../services/posts";
import PostCard from "../../../features/posts/PostCard";

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function getAll() {
      try {
        let data = await getAllPosts();
        if (data) {
          setPosts(data.posts);
        }
      } catch (error) {
        console.log(error);
      }
    }
    getAll();
  }, []);
  return (
    <div>
      <div className="flex gap-2 flex-wrap">
        {posts.map((post) => {
          return <PostCard post={post} key={post.id} />;
        })}
      </div>
    </div>
  );
};

export default Posts;
