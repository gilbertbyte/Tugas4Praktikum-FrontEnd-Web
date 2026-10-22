This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

---

## Orion Nebula (Company Profile)

Website company profile dengan Next.js (App Router) + TypeScript.

Setup (`npx create-next-app@latest`): TypeScript (Yes), ESLint (Yes), Tailwind CSS (No), `src/` directory (No), App Router (Yes), React Compiler (Yes), import alias default `@/*`.

### Struktur Folder

```
orion-nebula/
├── app/
│   ├── layout.tsx            # Layout global (Navbar + Footer)
│   ├── globals.css           # Semua styling
│   ├── page.tsx              # Home
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   ├── missions/
│   │   ├── page.tsx          # Daftar mission
│   │   └── [slug]/page.tsx   # Detail mission (dynamic route)
│   ├── team/
│   │   ├── page.tsx          # Daftar tim
│   │   └── [slug]/page.tsx   # Profil anggota (dynamic route)
│   └── not-found.tsx
├── components/               # Navbar, Footer, Button, CallToAction, MissionCard, TeamCard, ContactForm
└── data/                     # missions.ts, team.ts, site.ts (link navigasi)
```

### Ketentuan yang Dipenuhi

1. Multi-halaman: Home, About, Missions, Team, Contact
2. Dynamic routing: `/missions/[slug]` dan `/team/[slug]`
3. Reusable components: folder `components/`
4. Navigasi memakai `<Link>` dari `next/link`
5. Active link styling: `Navbar.tsx` memakai `usePathname()`
6. Responsif: breakpoint 900px, 768px (menu hamburger), 600px
7. Struktur folder dipisah per fungsi (app, components, data)

### Catatan (karena `cacheComponents` aktif di `next.config.ts`)

- `new Date()` tidak boleh dipakai di Server Component, jadi tahun di footer ditulis langsung.
- Navbar memakai `usePathname()`, jadi dibungkus `<Suspense>` di `app/layout.tsx`.

Ganti data anggota tim di `data/team.ts` dengan anggota kelompokmu.
