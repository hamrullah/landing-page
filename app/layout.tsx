import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "kcs landing page",
  description: "Event landing page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen w-full antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
