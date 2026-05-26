export interface Metric {
  label: string;
  value: string | number;
  change?: string;
  isPositive?: boolean;
}

export interface Order {
  id: string;
  customer: string;
  item: string;
  quantity: number;
  status: "Новый" | "В работе" | "Завершен";
  date: string;
}

export const clientMetrics: Metric[] = [
  { label: "Мои заказы", value: "24", change: "+12%", isPositive: true },
  { label: "Общая сумма закупок", value: "1 250 000 ₽", change: "+8%", isPositive: true },
  { label: "Средний чек", value: "52 000 ₽", change: "+5%", isPositive: true },
  { label: "Ожидают отгрузки", value: "8", change: "+2", isPositive: true },
];

export const managerMetrics: Metric[] = [
  { label: "Всего продаж", value: "4.2 млн ₽", change: "+15%", isPositive: true },
  { label: "Новые клиенты", value: "12", change: "+30%", isPositive: true },
  { label: "Конверсия в заказ", value: "22%", change: "+3%", isPositive: true },
  { label: "Проблемные сделки", value: "2", change: "-1", isPositive: false },
];

export const orders: Order[] = [
  {
    id: "ORD-001",
    customer: "ООО «ТехноПартнер»",
    item: "Система охлаждения",
    quantity: 5,
    status: "Завершен",
    date: "2024-11-10",
  },
  {
    id: "ORD-002",
    customer: "ИП «Агат»",
    item: "Комплектующие для ПК",
    quantity: 20,
    status: "В работе",
    date: "2024-11-12",
  },
  {
    id: "ORD-003",
    customer: "ЗАО «Индустриал»",
    item: "Промышленный вентилятор",
    quantity: 2,
    status: "Новый",
    date: "2024-11-14",
  },
  {
    id: "ORD-004",
    customer: "МСЛ «Вектор»",
    item: "Система вентиляции",
    quantity: 1,
    status: "Новый",
    date: "2024-11-15",
  },
  {
    id: "ORD-005",
    customer: "ООО «Старт»",
    item: "Оборудование для серверной",
    quantity: 10,
    status: "В работе",
    date: "2024-11-16",
  },
];