import type { Metadata } from "next";

import "./globals.css";
import Provider from "@/Provider";




export const metadata: Metadata = {
  title: "Grocery Wallah | 10 minutes Grocery Delivery App",
  description: "grocery Wallah | 10 minutes Grocery Delivery App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="w-full min-h-[200vh] bg-linear-to-b from-blue-200 to-white"
      >
        <Provider>{children}</Provider>
        
      </body>
    </html>
  );
}
