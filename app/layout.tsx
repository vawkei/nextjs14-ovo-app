import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderComponent } from "@/components/header/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <HeaderComponent />
        <div className="w-full max-w-7xl mx-auto mt-24">{children}</div>
      </body>
    </html>
  );
}
