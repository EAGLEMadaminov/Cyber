import { lazy } from "react";

export const PostCard = lazy(() => import("./posts/PostCard"));
export const TodoCard = lazy(() => import("./todos/TodoCard"));
export const AdminUser = lazy(() => import("./user/AdminUser"));
