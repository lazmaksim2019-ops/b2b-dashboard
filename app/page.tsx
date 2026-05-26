'use client';

import React, { useState } from "react";
import { useRole } from "./contexts/RoleContext";
import { clientMetrics, managerMetrics, orders } from "../src/data/mockData";

interface OrderStatusFilter {
  label: string;
  value: string;
}

const statusFilters: OrderStatusFilter[] = [
  { label: "Все", value: "" },
  { label: "Новый", value: "Новый" },
  { label: "В работе", value: "В работе" },
  { label: "Завершен", value: "Завершен" },
];

export default function HomePage() {
  const { role } = useRole();
  const [statusFilter, setStatusFilter] = useState<OrderStatusFilter>(statusFilters[0]);

  const filteredOrders = statusFilter.value
    ? orders.filter((order) => order.status === statusFilter.value)
    : orders;

  return (
    <>
      {/* Метрики */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {role === "client"
          ? clientMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
              >
                <div className="flex flex-col items-start">
                  <h3 className="text-sm font-medium text-zinc-600 mb-2">{metric.label}</h3>
                  <p className="text-2xl font-bold sm:text-3xl text-zinc-800">{metric.value}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${metric.isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))
          : managerMetrics.map((metric, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
              >
                <div className="flex flex-col items-start">
                  <h3 className="text-sm font-medium text-zinc-600 mb-2">{metric.label}</h3>
                  <p className="text-2xl font-bold text-zinc-800">{metric.value}</p>
                  <span className={`text-xs px-2 py-1 rounded-full ${metric.isPositive ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
                    {metric.change}
                  </span>
                </div>
              </div>
            ))
        }
      </div>

      {/* Таблица заказов */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold mb-4">Последние операции</h3>
          <select
            value={statusFilter.value}
            onChange={(e) => setStatusFilter(statusFilters.find((f) => f.value === e.target.value)!)}
            className="px-3 py-1 border border-zinc-300 rounded-md text-sm"
          >
            {statusFilters.map((filter) => (
              <option key={filter.value ?? "all"} value={filter.value}>
                {filter.label}
              </option>
            ))}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-100">
              <tr>
                <th className="px--py-2 text-left text-sm font-medium text-zinc-600">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Контрагент</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Товар</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600 hidden sm:table-cell">Кол-во</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Статус</th>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order) => (
                <tr key={order.id} className="border-b border-zinc-200 hover:bg-zinc-50">
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.customer}</td>
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.item}</td>
                  <td className="px-4 py-2 text-sm text-zinc-600 hidden sm:table-cell">{order.quantity}</td>
                  <td className="px-4 py-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      order.status === "Новый"
                        ? "bg-new text-new"
                        : order.status === "В работе"
                        ? "bg-warning text-warning"
                        : "bg-completed text-completed"
                    }`}>
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}