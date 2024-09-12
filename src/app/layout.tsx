"use client";
import SideBar from "../components/SideBar";
import { usePathname } from "next/navigation";
import { Provider } from "react-redux";
import store from "../rudex";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  return (
    <html lang="en">
      <body className="flex">
        <Provider store={store}>
          {!pathname.includes("auth") && <SideBar />}
          <div className={`${!pathname.includes("auth") ? "ml-[250px]" : ""}`}>
            {children}
            <ToastContainer
              position="top-right"
              theme="light"
              autoClose={3000}
            />
          </div>
        </Provider>
      </body>
    </html>
  );
}
