
<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.2-black?style=for-the-badge&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/TypeScript-5-3178C6?style=for-the-badge&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?style=for-the-badge&logo=tailwindcss" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Recharts-3-FF6B6B?style=for-the-badge&logo=chartdotjs" alt="Recharts" />
</p>

<h1 align="center">B2B Interactive Dashboard</h1>

<p align="center">
  <b>A modern, role-based B2B client portal built with Next.js 16, React 19, TypeScript 5, and Tailwind CSS v4.</b>
</p>

<p align="center">
  Dynamic role switching • Interactive analytics • Order management • Fully responsive
</p>

<p align="center">
  <sub>Built for the B2B segment — switch between <b>Client</b> and <b>Manager</b> roles to see role-specific KPIs, charts, and data.</sub>
</p>

<p align="center">
  <a href="#✨-features">Features</a> •
  <a href="#🚀-demo">Demo</a> •
  <a href="#🛠-tech-stack">Tech Stack</a> •
  <a href="#📁-project-structure">Structure</a> •
  <a href="#💻-getting-started">Getting Started</a>
</p>

---

## ✨ Features

### 🔄 Dynamic Role Switching
Toggle between **Client** and **Manager** roles via a segmented control in the header. The entire UI — KPI metrics, charts, and financial indicators — rebuilds instantly based on the active role.

| Client View | Manager View |
|---|---|
| My Orders: 24 | Total Sales: 4.2M ₽ |
| Total Purchases: 1,250,000 ₽ | New Clients: 12 |
| Average Check: 52,000 ₽ | Order Conversion: 22% |
| Awaiting Shipment: 8 | Problem Deals: 2 |

### 📊 Interactive Analytics
- **AreaChart** visualization of sales/purchases trends over 6 months
- 4 KPI metric cards with positive/negative change indicators
- Top Products table with detailed breakdown
- Built with **Recharts** — responsive, animated, and interactive

### 📦 Order Management
- **Order creation form** with fields for counterparty, item, quantity, and delivery method
- Simulated submission with loading state and toast notifications
- **Status filtering** — filter orders by All / New / In Progress / Completed
- Clean table layout with role-aware data display

### ⚙️ Settings Panel
Multi-tab settings page:
- **Company Profile** — name, email, phone, address
- **Requisites** — INN, KPP, OKPO, bank account details
- **Agreements** — service contracts with PDF download/view
- **Notifications** — toggle email, SMS, push, and commercial offers

### 📱 Fully Responsive
- **Desktop** — fixed sidebar navigation
- **Tablet** — collapsed sidebar with icons
- **Mobile** — hamburger menu overlay with backdrop
- **Ultrawide** — centered content with max-width constraints
- Optimized for all screen sizes with Tailwind's responsive utilities

### 🔔 Smart Notifications
Header bell icon with a dropdown menu of mock notifications:
- New order placed
- Order status changed
- Balance top-up

---

## 🚀 Demo

<p align="center">
  <i>Screenshots coming soon</i>
</p>

| Role Switcher | Analytics Chart | Orders |
|---|---|---|
| Toggle between Client/Manager roles | Interactive sales trend chart | Order table with status filters |

<!-- 
TODO: Add screenshots
![Dashboard Overview](path/to/screenshot1.png)
![Analytics Page](path/to/screenshot2.png)
![Orders Page](path/to/screenshot3.png)
-->

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router, Turbopack) |
| **UI Library** | [React 19](https://react.dev/) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (strict mode) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) |
| **Charts** | [Recharts 3](https://recharts.org/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Notifications** | [react-hot-toast](https://react-hot-toast.com/) |
| **Fonts** | Geist (via `next/font/google`) |
| **State Management** | React Context API |
| **Linting** | ESLint 9 with `eslint-config-next` |

---

## 📁 Project Structure

```
b2b-dashboard/
├── app/
│   ├── layout.tsx              # Root layout — fonts, sidebar, header, providers
│   ├── page.tsx                # Homepage — role-based KPIs + orders table
│   ├── globals.css             # Tailwind CSS v4 imports
│   ├── analytics/
│   │   └── page.tsx            # /analytics — charts, metrics, top products
│   ├── orders/
│   │   └── page.tsx            # /orders — order form + orders list
│   ├── settings/
│   │   └── page.tsx            # /settings — tabs: profile, requisites, agreements, notifications
│   ├── components/
│   │   ├── index.ts            # Barrel exports
│   │   ├── Header.tsx          # Search, bell notifications, role switcher
│   │   └── Sidebar.tsx         # Navigation sidebar (desktop + mobile overlay)
│   └── contexts/
│       ├── RoleContext.tsx      # Role state (client / manager)
│       └── MobileMenuContext.tsx # Mobile sidebar toggle state
├── src/
│   └── data/
│       └── mockData.ts         # Mock data — metrics, orders, types
├── public/                     # Static assets
├── next.config.ts              # Next.js configuration
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript configuration
└── package.json
```

---

## 💻 Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/lazmaksim2019-ops/b2b-dashboard.git

# Navigate to the project
cd b2b-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/lazmaksim2019-ops">Maksim Laz</a>
</p>
