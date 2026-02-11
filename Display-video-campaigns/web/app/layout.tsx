import type { Metadata } from "next";
import Sidebar from "@/components/Sidebar";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campaign Manager",
  description: "Display & Video Campaign Manager",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="flex">
          <Sidebar />
          <main className="ml-48 flex-1 min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 py-6">
              {children}
            </div>
          </main>
        </div>
      </body>
    </html>
  );
}
