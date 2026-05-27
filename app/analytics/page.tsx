'use client';

import React from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer
} from "recharts";

const metrics = [
  { label: "Общий оборот", value: "1,250,000 ₽", change: "+15.4%" },
  { label: "Количество сделок", value: "124", change: "+8.2%" },
  { label: "Средний чек", value: "28,000 ₽", change: "+12.1%" },
  { label: "Новые клиенты", value: "32", change: "+5.6%" },
];

const chartData = [
  { month: "Янв", sales: 120, purchases: 85 },
  { month: "Фев", sales: 150, purchases: 92 },
  { month: "Мар", sales: 180, purchases: 110 },
  { month: "Апр", sales: 160, purchases: 105 },
  { month: "Май", sales: 200, purchases: 130 },
  { month: "Июн", sales: 220, purchases: 150 },
];

interface TooltipProps {
  active?: boolean;
  payload?: Array<{ value: number }>;
  label?: string;
}

function CustomTooltip({ active, payload, label }: TooltipProps) {
  if (active && payload && payload.length > 0) {
    const sales = payload[0].value;
    const purchases = payload[1].value;
    return (
      <div className="custom-tooltip" style={{ backgroundColor: "#fff", border: "1px solid #ccc", padding: "8px", borderRadius: "4px" }}>
        <p className="label" style={{ fontWeight: "bold", marginBottom: "4px" }}>{label}</p>
        <p className="sales" style={{ color: "#8884d8" }}>Продажи: {sales}</p>
        <p className="purchases" style={{ color: "#82ca9d" }}>Отгрузки: {purchases}</p>
      </div>
    );
  }
  return null;
}

export default function AnalyticsPage() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">Аналитика</h1>

      {/* Metrics cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200"
          >
            <div className="flex flex-col items-start">
              <h3 className="text-sm font-medium text-zinc-600 mb-2">{metric.label}</h3>
              <p className="text-2xl font-bold sm:text-3xl text-zinc-800">{metric.value}</p>
              <span className="text-xs px-2 py-1 rounded-full bg-green-100 text-green-800">
                {metric.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Area Chart */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200 mb-8">
        <h3 className="text-lg font-bold mb-4">Динамика продаж и закупок</h3>
        <div className="h-64 md:h-80">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={chartData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
              <defs>
                <linearGradient id="colorSales" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPurchases" x1={0} y1={0} x2={0} y2={1}>
                  <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" tickFormatter={(value) => `${value}`} />
              <YAxis />
              <CustomTooltip />
              <Legend />
              <Area type="monotone" dataKey="sales" stroke="#8884d8" fillOpacity={1} fill="url(#colorSales)" name="Продажи" />
              <Area type="monotone" dataKey="purchases" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPurchases)" name="Закупки" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top products table */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-zinc-200">
        <h3 className="text-lg font-bold mb-4">Топ товаров</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-100">
              <tr>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Товар</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Количество</th>
                <th className="px-4 py-2 text-left text-sm font-medium text-zinc-600">Выручка</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="px-4 py-2 text-sm text-zinc-600">Товар А</td>
                <td className="px-4 py-2 text-sm text-zinc-600">124</td>
                <td className="px-4 py-2 text-sm text-zinc-600">1,250,000 ₽</td>
              </tr>
              <tr className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="px-4 py-2 text-sm text-zinc-600">Товар Б</td>
                <td className="px-4 py-2 text-sm text-zinc-600">89</td>
                <td className="px-4 py-2 text-sm text-zinc-600">950,000 ₽</td>
              </tr>
              <tr className="border-b border-zinc-200 hover:bg-zinc-50">
                <td className="px-4 py-2 text-sm text-zinc-600">Товар В</td>
                <td className="px-4 py-2 text-sm text-zinc-600">63</td>
                <td className="px-4 py-2 text-sm text-zinc-600">720,000 ₽</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}