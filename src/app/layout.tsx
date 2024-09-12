"use client";
import SideBar from "../components/SideBar";
import { usePathname } from "next/navigation";
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
        {!pathname.includes("auth") && <SideBar />}
        <div className={`${!pathname.includes("auth") ? "ml-[250px]" : ""}`}>
          {children}
        </div>
      </body>
    </html>
  );
}
