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

The project follows a scalable hybrid architecture, separating application composition (bootstrapping) from reusable modules such as providers, integrations, and UI components.

```
src/
├── app/                 # Application composition and setup (composition root)
│   ├── guards/          # Route guards
│   ├── providers/       # App-level provider composition (AppProviders)
│   ├── router.tsx       # Routing configuration
│   └── App.tsx          # App entry point
├── providers/           # Global providers (implementation) + domain hooks (useAuth, etc.)
│   ├── auth/            # Auth context/provider + hooks
│   ├── query/           # TanStack Query provider setup
│   └── ...              # Theme, i18n, feature flags, etc.
├── integrations/        # External integrations (Supabase client, API clients, 3rd parties)
│   ├── supabase/        # Supabase client & auth helpers
│   └── api/             # Other external API clients
├── assets/              # Static assets (images, icons)
├── layouts/             # Page layouts (Dashboard, Auth, etc.)
├── components/          # Shared UI components
│   ├── ui/              # Base UI elements (Buttons, Inputs, Modals)
│   ├── data-display/    # Tables, Cards, Badges
│   ├── feedback/        # Toasts, Spinners
│   └── forms/           # Form-specific components
├── pages/               # Page views (domain-driven)
│   ├── dashboard/       # Dashboard feature pages
│   ├── patients/        # Patients feature pages
│   └── ...
├── schemas/             # Zod validation schemas
├── hooks/               # Generic reusable hooks (useDebounce, useMediaQuery, etc.)
├── store/               # Global client state (Zustand)
├── lib/                 # Utilities and helpers
├── styles/              # Global styles & tokens
└── types/               # TypeScript type definitions
```

### Provider Pattern

- **`src/providers/`** contains the *implementation* of each provider (context, provider component, and domain hooks).
  - Example: `src/providers/auth/useAuth.ts`
- **`src/app/providers/`** is responsible only for *composing* providers at the application root.
  - Example: `src/app/providers/AppProviders.tsx`

Pages should consume domain hooks (e.g. `useAuth()`) and should not need to import provider components directly.

## 🛠 Key Technologies

- **Frontend**: React + TypeScript
- **Bundler**: Vite
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Validation**: Zod
- **Backend**: Supabase (Auth & Database)
- **Styling**: SCSS Modules + Global CSS Tokens

## 💻 Development Guidelines

### Adding a New Page
1. Create the page component in `src/pages/<domain>/<PageName>.tsx`.
2. Add the route to `src/app/router.tsx`.

### Providers & Context
- Implement provider modules under `src/providers/<name>/` (context, provider component, hooks).
- Compose all app-level providers in `src/app/providers/AppProviders.tsx`.
- Prefer importing hooks from `src/providers/...` in pages (e.g. `useAuth`) rather than importing providers.

### Integrations
- Place external clients and third-party adapters under `src/integrations/`.
- Keep integration modules focused on wiring/configuration (clients, auth helpers, API wrappers).
- Domain logic should live closer to pages/modules and consume integrations via clean interfaces.

### State Management
- Use **TanStack Query** for server state (data retrieval, caching, invalidation).
- Use **Zustand** for global client state that changes frequently (UI state, cross-page client state).
- Use **Context** for cross-cutting concerns and dependency injection that should be available app-wide (Auth session/access, theme, i18n, feature flags).

### Validation
- Define all validation schemas in `src/schemas/`.
- Use **Zod** for schema definition and inference.

## 🔐 Environment Variables

Copy `.env.example` to `.env` and fill in your Supabase credentials:

```bash
VITE_SUPABASE_PROJECT_ID=
VITE_SUPABASE_PUBLISHABLE_KEY=
VITE_SUPABASE_URL=
```
