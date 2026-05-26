import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import { RoleProvider } from "./contexts/RoleContext";
import MobileMenuProvider from "./contexts/MobileMenuContext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "B2B-Кабинет",
  description: "B2B-Кабинет application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex bg-gray-50 text-gray-900">
        <RoleProvider>
          <MobileMenuProvider>
            <Sidebar />
            <div className="hidden md:block md:w-64 shrink-0" />
            
            <div className="flex-1 flex flex-col min-w-0">
              <Header />
              <main className="flex-1 p-4 md:p-6 overflow-y-auto">
                {children}
              </main>
            </div>
          </MobileMenuProvider>
        </RoleProvider>
      </body>
    </html>
  );
}
