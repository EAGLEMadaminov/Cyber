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
    <article className="max-w-lg mx-auto my-6 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden">
      {/* Header for the post title */}
      <header className="p-4 bg-blue-100">
        <h2 className="text-xl font-bold text-gray-900">{post.title}</h2>
      </header>

      {/* Main section for the post body and stats */}
      <section className="p-6">
        {/* Displaying the body of the post */}
        <p className="text-gray-700 mb-4">{post.body}</p>

        {/* Post statistics: Views, Likes, Dislikes */}
        <div className="flex justify-between items-center mt-4 text-gray-600">
          {/* Views count */}
          <p>
            <strong>Views:</strong> {post.views}
          </p>

          {/* Likes and dislikes with icons */}
          <aside className="flex space-x-4">
            {/* Likes */}
            <figure className="flex items-center">
              <Image src={Like} width={24} height={24} alt="Like icon" />
              <figcaption className="ml-1">{post.reactions.likes}</figcaption>
            </figure>
            {/* Dislikes */}
            <figure className="flex items-center">
              <Image
                src={DisLikeIcon}
                width={24}
                height={24}
                alt="Dislike icon"
              />
              <figcaption className="ml-1">
                {post.reactions.dislikes}
              </figcaption>
            </figure>
          </aside>
        </div>

        {/* Post footer displaying the user ID */}
        <footer className="mt-6">
          <p className="text-sm text-gray-500">
            <strong>Posted by User:</strong> {post.userId}
          </p>
        </footer>
      </section>
    </article>
  );
};

export default PostCard;
