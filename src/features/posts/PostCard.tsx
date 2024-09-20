import React from "react";
import Image from "next/image";
import Like from "../../images/LikeIcon.svg";
import DisLikeIcon from "../../images/DislikeIcon.svg";

type Post = {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
};

const PostCard = ({ post }: { post: Post }) => {
  return (
    <div className="max-w-lg mx-auto my-6 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Title */}
      <div className="p-4 bg-blue-100">
        <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
      </div>

      {/* Post Body */}
      <div className="p-6">
        <p className="text-gray-700 mb-4">{post.body}</p>

        {/* Post Stats */}
        <div className="flex justify-between items-center mt-4 text-gray-600">
          <div>
            <span className="font-semibold">Views:</span> {post.views}
          </div>
          <div className="flex space-x-4 gap-2">
            <div className="flex items-center space-x-1 gap-1">
              <Image src={Like} width={24} height={24} alt="Like icon" />
              <span>{post.reactions.likes}</span>
            </div>
            <div className="flex items-center space-x-2 gap-1">
              <Image src={DisLikeIcon} width={24} height={24} alt="" />
              <span>{post.reactions.dislikes}</span>
            </div>
          </div>
        </div>

        {/* Post Footer */}
        <div className="mt-6">
          <p className="text-sm text-gray-500">
            <span className="font-semibold">Posted by User:</span> {post.userId}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
