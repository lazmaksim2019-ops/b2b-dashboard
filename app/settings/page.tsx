'use client';

import React, { useState } from "react";

const tabs = [
  { id: "company", label: "Профиль компании" },
  { id: "requisites", label: "Реквизиты (ИНН/КПП)" },
  { id: "agreements", label: "Договоры" },
  { id: "notifications", label: "Уведомления" },
];

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  const [companyName, setCompanyName] = useState("ABC Corporation");
  const [email, setEmail] = useState("info@abc.com");
  const [phone, setPhone] = useState("+1-234-567-89-00");
  const [address, setAddress] = useState("123 Business Ave, Suite 100, New York, NY 10001");
  const [inn, setInn] = useState("1234567890");
  const [kpp, setKpp] = useState("123456789");
  const [okpo, setOkpo] = useState("12345678");
  const [currentAccount, setCurrentAccount] = useState("40702810912345678901");
  const [correspondentAccount, setCorrespondentAccount] = useState("30101810145250000974");
  const [bank, setBank] = useState("Joint Stock Company Gazprombank");

  const renderTabContent = () => {
    switch (activeTab) {
      case "company":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Название компании</label>
              <input
                type="text"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Телефон</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Адрес</label>
              <textarea
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>
        );
      case "requisites":
        return (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">ИНН (Идентификационный номер налогоплательщика)</label>
              <input
                type="text"
                value={inn}
                onChange={(e) => setInn(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">КПП (Код причины постановки на учет)</label>
              <input
                type="text"
                value={kpp}
                onChange={(e) => setKpp(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">ОКПО (Общероссийский классификатор предприятий)</label>
              <input
                type="text"
                value={okpo}
                onChange={(e) => setOkpo(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Расчетный счет</label>
              <input
                type="text"
                value={currentAccount}
                onChange={(e) => setCurrentAccount(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Корреспондентский счет</label>
              <input
                type="text"
                value={correspondentAccount}
                onChange={(e) => setCorrespondentAccount(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-1">Банк</label>
              <input
                type="text"
                value={bank}
                onChange={(e) => setBank(e.target.value)}
                className="w-full px-3 py-2 border border-zinc-300 rounded-md focus:outline-none focus:ring-2 focus:ring-zinc-500"
              />
            </div>
          </div>
        );
      case "agreements":
        return (
          <div className="space-y-4">
            <div className="bg-white p-4 rounded-lg border border-zinc-200">
              <h3 className="text-lg font-bold mb-2">Договор оказания услуг</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Последнее обновление: 1 января 2024 г.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-900">
                  Скачать PDF
                </button>
                <button className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-900">
                  View Online
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-lg border border-zinc-200">
              <h3 className="text-lg font-bold mb-2">Соглашение о конфиденциальности</h3>
              <p className="text-sm text-zinc-600 mb-4">
                Последнее обновление: 15 декабря 2023 г.
              </p>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-900">
                  Скачать PDF
                </button>
                <button className="px-4 py-2 bg-zinc-800 text-white rounded-md hover:bg-zinc-900">
                  View Online
                </button>
              </div>
            </div>
          </div>
        );
      case "notifications":
        return (
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700">Email уведомления</span>
              <div className="relative inline-block ms-2">
                <input type="checkbox" className="checkbox" defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700">SMS уведомления</span>
              <div className="relative inline-block ms-2">
                <input type="checkbox" className="checkbox" defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700">Push-уведомления</span>
              <div className="relative inline-block ms-2">
                <input type="checkbox" className="checkbox" defaultChecked />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium text-zinc-700">Коммерческие предложения</span>
              <div className="relative inline-block ms-2">
                <input type="checkbox" className="checkbox" />
              </div>
            </div>
          </div>
        );
      default:
        return <div>Unknown tab</div>;
    }
  };

  return (
    <>
      <h1 className="text-2xl font-bold mb-6">Настройки</h1>
      <div className="max-w-3xl">
        <div className="border-b border-zinc-200 mb-6">
          <nav className="-mb-1 flex flex-wrap">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-1 px-3 text-sm font-medium border-b-2 ${
                  activeTab === tab.id
                    ? "border-zinc-800 text-zinc-900"
                    : "border-transparent text-zinc-600 hover:text-zinc-800"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>
        <div className="space-y-4">{renderTabContent()}</div>
      </div>
    </>
  );
}