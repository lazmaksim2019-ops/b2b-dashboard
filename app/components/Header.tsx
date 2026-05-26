'use client';

import { Search, Bell, User, Menu } from "lucide-react";
import { useRole } from "../contexts/RoleContext";
import { useMobileMenu } from "../contexts/MobileMenuContext";
import { useState } from "react";

interface HeaderProps {
  title?: string;
}

export default function Header({ title }: HeaderProps) {
  const { role, setRole } = useRole();
  const { isMobileMenuOpen, toggleMobileMenu } = useMobileMenu();
  const [showRoleSwitcher, setShowRoleSwitcher] = useState(false);
  const [showBellDropdown, setShowBellDropdown] = useState(false);

  const handleRoleClick = (newRole: "client" | "manager") => {
    setRole(newRole);
    setShowRoleSwitcher(false);
  };

  const notifications = [
    { id: 1, text: "Новый заказ ORD-006 успешно создан" },
    { id: 2, text: "Менеджер изменил статус вашего заказа" },
    { id: 3, text: "Система: ваш баланс пополнен" },
  ];

  return (
    <header className="sticky top-0 left-0 right-0 h-16 bg-white border-b border-zinc-200 z-30 flex items-center justify-between px-4 sm:px-6 shadow-sm">
      {/* Левая часть: иконка меню (только мобильная) */}
      <div className="flex items-center">
        <button
          onClick={toggleMobileMenu}
          className="block md:hidden mr-4 w-8 h-8 flex items-center justify-center text-zinc-600 hover:text-zinc-900"
        >
          <Menu className="w-5 h-5" />
        </button>
        <h2 className="text-lg font-bold text-zinc-800 sm:text-xl">{title ?? "B2B-Кабинет"}</h2>
      </div>

      {/* Центр: строка поиска */}
      <div className="hidden sm:flex flex-1 max-w-md mx-4 relative">
        <input
          type="text"
          placeholder="Поиск..."
          className="w-full px-4 py-2 pl-10 text-sm border border-zinc-300 rounded-full focus:outline-none focus:ring-2 focus:ring-zinc-500 bg-zinc-50 transition-all"
        />
        <Search className="absolute left-3 top-2.5 w-4 h-4 text-zinc-400" />
      </div>

      {/* Правая часть: уведомления и профиль */}
      <div className="flex items-center gap-4">
        {/* Иконка уведомлений с выпадающим списком */}
        <div className="relative">
          <button
            onClick={() => setShowBellDropdown(!showBellDropdown)}
            className="relative p-2 text-zinc-600 hover:text-zinc-900 transition-transform hover:scale-110"
          >
            <Bell className="w-5 h-5" />
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full animate-pulse"></span>
          </button>

          {showBellDropdown && (
            <div className="absolute right-0 top-10 w-72 bg-white border border-zinc-200 rounded-md shadow-lg z-50 opacity-0 transform translate-y-2 transition-all duration-200 enter-opacity-100 enter-transform">
              <div className="p-3 text-xs text-zinc-500 font-medium bg-zinc-50 rounded-md mb-2">
                Уведомления
              </div>
              {notifications.map((notification) => (
                <div
                  key={notification.id}
                  className="px-4 py-3 border-b border-zinc-100 hover:bg-zinc-50 transition-colors cursor-pointer"
                >
                  <div className="text-sm text-zinc-700">{notification.text}</div>
                  <div className="text-xs text-zinc-500 mt-1">2 часа назад</div>
                </div>
              ))}
              <button className="w-full px-4 py-2 text-sm text-zinc-600 hover:text-zinc-900 hover:bg-zinc-50 transition-colors">
                Отметить все как прочитанные
              </button>
            </div>
          )}
        </div>

        {/* Блок профиля с переключением ролей (Segmented Control) */}
        <div className="relative">
          <div className="bg-gray-100 p-1 rounded-full flex items-center transition-all">
            <button
              onClick={() => handleRoleClick("client")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                role === "client"
                  ? "bg-white shadow-sm text-blue-600 transform scale-105"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
              }`}
            >
              Клиент
            </button>
            <button
              onClick={() => handleRoleClick("manager")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                role === "manager"
                  ? "bg-white shadow-sm text-blue-600 transform scale-105"
                  : "text-gray-500 hover:text-gray-700 hover:bg-white/50"
              }`}
            >
              Менеджер
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}