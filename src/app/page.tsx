"use client";

import { Provider } from "react-redux";
import store from "../rudex/index";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    let token = localStorage.getItem("access_token");
    if (!token) {
      router.push("/auth/sign-in");
    }
  });

  return (
    <Provider store={store}>
      <ToastContainer position="top-right" theme="light" autoClose={3000} />
    </Provider>
  );
}
