# Nobox Playground (React Web)

This is a **React Web** application built with **Vite**, **TypeScript**, and **pnpm**, designed to integrate with **Supabase**.

## 🚀 Getting Started

### Prerequisites
- Node.js (Latest LTS recommended)
- pnpm

### Installation
```bash
pnpm install
```

### Development
```bash
pnpm dev
```

### Build
```bash
pnpm build
```

## 🏗 Architecture & Project Structure

The project follows a scalable hybrid architecture, separating concerns by domain and technical function.

```
src/
├── app/                 # Application configuration and setup
│   ├── guards/          # Route guards
│   ├── providers/       # Global providers (Auth, Query)
│   ├── router.tsx       # Routing configuration
│   └── App.tsx          # App entry point
├── assets/              # Static assets (images, icons)
├── layouts/             # Page layouts (Dashboard, Auth, etc.)
├── components/          # Shared UI components
│   ├── ui/              # Base UI elements (Buttons, Inputs, Modals)
│   ├── data-display/    # Tables, Cards, Badges
│   ├── feedback/        # Toasts, Spinners
│   └── forms/           # Form-specific components
├── pages/               # Page views (Domain-driven)
│   ├── dashboard/       # Dashboard feature pages
│   ├── patients/        # Patients feature pages
│   └── ...
├── services/            # API & External services
│   ├── supabase/        # Supabase client & auth helpers
│   └── api/             # Other external API clients
├── schemas/             # Zod validation schemas
├── hooks/               # Custom React hooks
├── store/               # Global state (Zustand)
├── lib/                 # Utilities and helpers
├── styles/              # Global styles & tokens
└── types/               # TypeScript type definitions
```

## 🛠 Key Technologies

-   **Frontend**: React + TypeScript
-   **Bundler**: Vite
-   **State Management**: Zustand
-   **Data Fetching**: TanStack Query (React Query)
-   **Validation**: Zod
-   **Backend**: Supabase (Auth & Database)
-   **Styling**: SCSS Modules + Global CSS Tokens

## 💻 Development Guidelines

### Adding a New Page
1.  Create the page component in `src/pages/<domain>/<PageName>.tsx`.
2.  Add the route to `src/app/router.tsx`.

### State Management
-   Use **TanStack Query** for server state (data retrieval).
-   Use **Zustand** for complex global client state (e.g., Auth, UI settings).
-   Use **React State** for local component state.

### Validation
-   Define all validation schemas in `src/schemas/`.
-   Use **Zod** for schema definition and inference.

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
VITE_SUPABASE_URL=your_project_url
VITE_SUPABASE_ANON_KEY=your_anon_key
```
