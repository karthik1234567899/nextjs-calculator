import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: "400"
});

export const metadata: Metadata = {
  title: "Calculator App",
  description: "A user-friendly calculator app is designed to make calculations quick and easy. With a clean interface and intuitive layout, users can perform basic arithmetic operations, from simple addition to complex equations, with just a few taps.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
