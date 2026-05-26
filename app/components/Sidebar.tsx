'use client';

import { Home, ShoppingBag, BarChart3, Settings, X } from "lucide-react";
import { useMobileMenu } from "../contexts/MobileMenuContext";

interface NavItem {
  path: string;
  label: string;
  icon: React.ReactNode;
}

export default function Sidebar() {
  const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
  const navItems: NavItem[] = [
    { path: "/", label: "Главная", icon: <Home /> },
    { path: "/orders", label: "Заказы", icon: <ShoppingBag /> },
    { path: "/analytics", label: "Аналитика", icon: <BarChart3 /> },
    { path: "/settings", label: "Настройки", icon: <Settings /> },
  ];

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0 bg-white border-r border-gray-200 z-20">
        <div className="p-6 flex items-center gap-2">
          <h1 className="text-xl font-bold text-zinc-800">B2B-Кабинет</h1>
        </div>
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {navItems.map((item) => (
            <a
              key={item.path}
              href={item.path}
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-black/40 z-40" onClick={closeMobileMenu} />
      )}

      {isMobileMenuOpen ? (
        <div className="md:hidden fixed inset-y-0 left-0 w-64 bg-white shadow-xl h-full p-5 flex flex-col z-50">
          <button onClick={closeMobileMenu} className="absolute top-4 right-4 text-zinc-600 hover:text-zinc-900">
            <X className="w-5 h-5" />
          </button>
          <nav className="flex-1 mt-6 space-y-1 overflow-y-auto">
            {navItems.map((item) => (
              <a
                key={item.path}
                href={item.path}
                className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md transition-colors duration-200 text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
              >
                {item.icon}
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}