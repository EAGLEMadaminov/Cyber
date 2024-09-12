export interface Post {
  id: number;
  title: string;
  body: string;
  reactions: {
    likes: number;
    dislikes: number;
  };
  views: number;
  userId: number;
}

export interface PostsResponse {
  total: number; // Total number of products
  posts: Post[]; // Array of products
}
