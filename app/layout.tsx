import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Learn more about Ableton - maker of Live and Push | Ableton",
  description:
    "Ableton is a Berlin-based company that makes Live and Push - software and hardware for creating, producing and performing music. Learn more about Ableton.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-[#F3F3F3] ${montserrat.className}`}>{children}</body>
    </html>
  );
}
