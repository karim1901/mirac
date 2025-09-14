import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MiracShop",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/asc192.png" />
      </head>
      <body className={`${inter.className} select-none`  }>
        <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
