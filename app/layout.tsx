import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { PlanetsStoreProvider } from "@/app/_store/storeProvider";
import { Navbar } from "@/app/_components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cbData SWAPI-App",
  description: "Created by GFX as task for cbData",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PlanetsStoreProvider>
          <Navbar />
          {children}
        </PlanetsStoreProvider>
      </body>
    </html>
  );
}
