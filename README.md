
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Recharts-3-FF6B6B?style=for-the-badge&logo=chartdotjs" alt="Recharts" />
</p>

<h1 align="center">B2B Интерактивный Кабинет</h1>

<p align="center">
  <b>Современный B2B-портал с динамическим переключением ролей на Next.js 16, React 19, TypeScript 5 и Tailwind CSS v4.</b>
</p>

<p align="center">
  Динамическая смена ролей • Интерактивная аналитика • Управление заказами • Полный адаптив
</p>

<p align="center">
  <sub>Переключайтесь между ролями <b>Клиент</b> и <b>Менеджер</b> — метрики, графики и данные подстраиваются мгновенно.</sub>
</p>

<p align="center">
  <a href="#✨-функционал">Функционал</a> •
  <a href="#🚀-демо">Демо</a> •
  <a href="#🛠-стек-технологий">Стек</a> •
  <a href="#📁-структура-проекта">Структура</a> •
  <a href="#💻-запуск-локально">Запуск</a>
</p>

---

## ✨ Функционал

### 🔄 Динамическое переключение ролей
Переключайтесь между **Клиент** и **Менеджер** через сегментированный контрол в шапке. KPI-метрики, графики и финансы перестраиваются мгновенно.

| Вид Клиента | Вид Менеджера |
|---|---|
| Мои заказы: 24 | Продажи: 4.2M ₽ |
| Сумма закупок: 1 250 000 ₽ | Новые клиенты: 12 |
| Средний чек: 52 000 ₽ | Конверсия: 22% |
| Ожидают отгрузки: 8 | Проблемные сделки: 2 |

### 📊 Интерактивная аналитика
- **AreaChart** — график динамики продаж/закупок за 6 месяцев
- 4 карточки KPI с индикаторами роста/падения
- Таблица топ-товаров с детальной разбивкой
- Построен на **Recharts** — адаптивно, анимированно, интерактивно

### 📦 Управление заказами
- **Форма создания заказа** — контрагент, товар, количество, способ доставки
- Симуляция отправки с лоадером и toast-уведомлениями
- **Фильтрация по статусу** — Все / Новый / В работе / Завершён
- Аккуратная таблица с данными, зависящими от роли

### ⚙️ Настройки
Много-табовая страница настроек:
- **Профиль компании** — название, email, телефон, адрес
- **Реквизиты** — ИНН, КПП, ОКПО, банковские счета
- **Договоры** — сервисные контракты со скачиванием/просмотром PDF
- **Уведомления** — вкл/выкл email, SMS, push, коммерческие предложения

### 📱 Полный адаптив
- **Десктоп** — фиксированный сайдбар
- **Планшет** — сжатый сайдбар с иконками
- **Мобильные** — выезжающее меню с затемнением фона
- **UltraWide** — контент с ограничением по ширине

### 🔔 Умные уведомления
Колокольчик в шапке с выпадающим списком уведомлений:
- Новый заказ
- Изменение статуса заказа
- Пополнение баланса

---

## 🚀 Демо

<p align="center">
  <img src="b2b_dashboard_screen.png" alt="B2B Dashboard — общий вид" width="800" style="border-radius: 8px; border: 1px solid #e4e4e7;" />
</p>

---

## 🛠 Стек технологий

| Категория | Технология |
|---|---|
| **Фреймворк** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Библиотека** | [React 19](https://react.dev/) |
| **Язык** | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| **Стилизация** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Графики** | [Recharts 3](https://recharts.org/) |
| **Иконки** | [Lucide React](https://lucide.dev/) |
| **Уведомления** | [react-hot-toast](https://react-hot-toast.com/) |
| **Шрифты** | Geist (через `next/font/google`) |
| **Управление состоянием** | React Context API |
| **Линтинг** | ESLint 9 + `eslint-config-next` |

---

## 📁 Структура проекта

```
b2b-dashboard/
├── app/
│   ├── layout.tsx              # Корневой layout — шрифты, сайдбар, хедер, провайдеры
│   ├── page.tsx                # Главная — KPI метрики + таблица заказов
│   ├── globals.css             # Tailwind CSS v4
│   ├── analytics/
│   │   └── page.tsx            # /analytics — графики, метрики, топ товаров
│   ├── orders/
│   │   └── page.tsx            # /orders — форма + список заказов
│   ├── settings/
│   │   └── page.tsx            # /settings — табы: профиль, реквизиты, договоры, уведомления
│   ├── components/
│   │   ├── index.ts            # Barrel exports
│   │   ├── Header.tsx          # Поиск, уведомления, переключатель ролей
│   │   └── Sidebar.tsx         # Навигация (десктоп + мобильное меню)
│   └── contexts/
│       ├── RoleContext.tsx      # Состояние роли (client / manager)
│       └── MobileMenuContext.tsx # Состояние мобильного меню
├── src/
│   └── data/
│       └── mockData.ts         # Мок-данные — метрики, заказы, типы
├── public/                     # Статика
├── next.config.ts              # Конфиг Next.js
├── tsconfig.json               # Конфиг TypeScript
└── package.json
```

---

## 💻 Запуск локально

### Требования

- Node.js 18+
- npm

### Установка

```bash
# Клонировать репозиторий
git clone https://github.com/lazmaksim2019-ops/b2b-dashboard.git

# Перейти в папку проекта
cd b2b-dashboard

# Установить зависимости
npm install

# Запустить dev-сервер
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000) в браузере.

### Сборка для продакшена

```bash
npm run build
npm start
```

### Проверка кода

```bash
npm run lint
```

---

## 📄 Лицензия

Проект распространяется под лицензией [MIT](LICENSE).

---

<p align="center">
  Сделано с ❤️ — <a href="https://github.com/lazmaksim2019-ops">Максим Лаз</a>
</p>
