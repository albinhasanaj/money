import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Money BRO",
  description: "Money BRO",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex flex-col items-center min-h-screen w-full bg-[#D1D1D1] transition-colors duration-500 dark:bg-[#121212]">
          <Navbar />
          {children}
          <Toaster />
        </main>
      </body>
    </html>
  );
}
