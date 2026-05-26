'use client';

import React, { useState } from "react";
import { useRole } from "../contexts/RoleContext";
import toast, { Toaster } from "react-hot-toast";
import { orders } from "../../src/data/mockData";

interface OrderForm {
  counterparty: string;
  itemId: string;
  quantity: string;
  deliveryMethod: string;
}

export default function OrdersPage() {
  const { role } = useRole();
  const [formData, setFormData] = useState<OrderForm>({
    counterparty: "",
    itemId: "",
    quantity: "",
    deliveryMethod: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Симуляция отправки
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast.success("Заказ успешно создан!");
    setFormData({ counterparty: "", itemId: "", quantity: "", deliveryMethod: "" });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const isFormValid =
    formData.counterparty.trim() !== "" &&
    formData.itemId.trim() !== "" &&
    formData.quantity.trim() !== "" &&
    formData.deliveryMethod.trim() !== "";

  return (
    <>
      <h1 className="text-3xl font-bold mb-6">Быстрый заказ для B2B</h1>

      <div className="max-w-2xl mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Контрагент/Юрлицо *
              </label>
              <input
                type="text"
                name="counterparty"
                value={formData.counterparty}
                onChange={handleChange}
                className="px-4 py-2 block w-full border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-500 focus:outline-none"
                placeholder="Введите название компании"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Артикул товара *
              </label>
              <input
                type="text"
                name="itemId"
                value={formData.itemId}
                onChange={handleChange}
                className="px-4 py-2 block w-full border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-500 focus:outline-none"
                placeholder="Например: CPU-INTEL-i9"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Количество *
              </label>
              <input
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                className="px-4 py-2 block w-full border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-500 focus:outline-none"
                placeholder="0"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-700 mb-2">
                Способ доставки *
              </label>
              <select
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleChange}
                className="px-4 py-2 block w-full border border-zinc-300 rounded-md focus:ring-2 focus:ring-zinc-500 focus:outline-none bg-white"
              >
                <option value="">Выберите способ</option>
                <option value="courier">Курьером</option>
                <option value="pickup">Самовывоз</option>
                <option value="post">Почтой</option>
              </select>
            </div>
          </div>

          <div className="pt-6 flex justify-end">
            <button
              type="submit"
              disabled={!isFormValid || isSubmitting}
              className={`px-8 py-3 rounded-md ${isSubmitting ? "bg-zinc-400 text-white cursor-wait" : isFormValid ? "bg-zinc-800 text-white hover:bg-zinc-900" : "bg-zinc-300 text-white cursor-not-allowed"}`}
            >
              {isSubmitting ? "Отправка..." : "Оформить заказ"}
            </button>
          </div>
        </form>

        {/* Toaster для уведомлений */}
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 4000,
            style: { background: "#363636", color: "#fff" },
            success: { duration: 5000, style: { background: "#10b981" } },
          }}
        />
      </div>

      {/* Список заказов */}
      <div className="mt-12">
        <h2 className="text-xl font-bold mb-4">Последние заказы</h2>
        <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">ID</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Контрагент</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Товар</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Кол-во</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Статус</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Дата</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order.id} className="border-b border-zinc-200 hover:bg-zinc-50">
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.id}</td>
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.customer}</td>
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.item}</td>
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.quantity}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${order.status === "Новый" ? "bg-blue-100 text-blue-800" : order.status === "В работе" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 text-sm text-zinc-600">{order.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}