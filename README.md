# TechSpark — School Innovation Hackathon

Official website for **TechSpark**, a school-level innovation hackathon organized by **Birla Institute of Applied Sciences** in collaboration with **Coding Blocks**.

> Think it. Build it. Bring it to life.

---

## What is TechSpark

TechSpark gives school students 7 days to pick a real problem, choose a technology track, and ship a working prototype. Teams present their build to a judging panel in a college-hackathon-style demo round.

Three tracks — Web Development, Android App, and AI & Innovation.

---

## Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — page animations
- **Lucide React** — icons
- **Urbanist** — font (Google Fonts via next/font)

---

## Running locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Project structure

```
src/
├── app/
│   ├── layout.tsx        # Root layout, font, metadata
│   ├── page.tsx          # Section composition
│   └── globals.css       # Design tokens, utility classes
└── components/
    ├── Navbar.tsx
    ├── DynamicGradient.tsx
    ├── ThemeProvider.tsx
    ├── LoadingScreen.tsx
    └── sections/
        ├── HeroSection.tsx
        ├── AboutSection.tsx
        ├── ThemesSection.tsx
        ├── WhyParticipateSection.tsx
        ├── PrizesSection.tsx
        ├── ScheduleSection.tsx
        ├── SponsorsSection.tsx
        ├── VenueSection.tsx
        ├── FAQSection.tsx
        ├── ContactSection.tsx
        ├── CTASection.tsx
        └── FooterSection.tsx
```
