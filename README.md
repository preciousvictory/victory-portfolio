# Victory Abiodun-Omoniyi — Personal Portfolio

A personal portfolio website for **Victory Abiodun-Omoniyi**, a Software Engineer specialising in React, Next.js, and blockchain-integrated web applications.

Built with **Next.js 15**, **Tailwind CSS**, and **Framer Motion** — mobile-first, dark-mode-ready, and fully animated.

---

## 🚀 Live Sections

| Section | Description |
|---|---|
| **Hero** | Animated introduction with typewriter title and floating badges |
| **About** | Short bio, skill tags, and categorised tech stack cards |
| **Experience** | Responsive timeline of professional roles (zigzag on desktop, single-column on mobile) |
| **Education** | Degree info plus collapsible certification grid |
| **Projects** | Tabbed gallery — Web Apps, IoT / Hardware, and Graphics Design |
| **Leadership** | Collapsible accordion of volunteer and community organisations |
| **Blog** | Article cards linking to Medium posts with real header image previews |
| **FAQ** | Scroll-into-view accordion with staggered animations |
| **Contact** | Email link + social icons (GitHub, LinkedIn, X/Twitter, Pinterest) |

---

## 🛠 Tech Stack

- **Framework** — [Next.js 15](https://nextjs.org) (App Router)
- **Styling** — [Tailwind CSS v4](https://tailwindcss.com)
- **Animations** — [Framer Motion](https://www.framer.com/motion/)
- **Icons** — [Lucide React](https://lucide.dev)
- **Theme** — [next-themes](https://github.com/pacocoursey/next-themes) (light / dark)
- **Language** — TypeScript

---

## ✨ Features

- 📱 **Fully responsive** — mobile hamburger nav, collapsible cards, single-column experience timeline
- 🌙 **Dark / Light mode** toggle
- 🎞 **Page loader** with progress bar animation on first visit
- 🃏 **Animated sections** — fade-in + slide-up on scroll via `AnimatedSection` wrapper
- 📰 **Blog image previews** — local WebP screenshots served from `/public/blog/`
- 🖼 **Project screenshots** — browser-chrome card previews with GoCartz live link
- 🏆 **Leadership accordion** — tap to expand on mobile, "View more" pagination

---

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router entry
├── components/
│   ├── sections/         # Page sections (Hero, About, Experience, …)
│   ├── ui/               # Reusable UI (Navbar, ThemeToggle, AnimatedSection)
│   └── Navbar.tsx        # Responsive nav with hamburger for mobile
├── data/
│   └── cv.ts             # All portfolio content — edit this to update the site
public/
├── blog/                 # Article header images (article-1.webp … article-7.webp)
├── images/               # Project screenshots (GoCartzp_Screenshot.png, Victory.jpg)
└── resume.pdf            # Downloadable CV
```

---

## 🏁 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**To update portfolio content**, edit `src/data/cv.ts` — it is the single source of truth for all text, links, skills, projects, articles, and FAQs.

---

## 📸 Adding Article Images

Save Medium article screenshots as WebP to `public/blog/article-N.webp` (e.g. `article-1.webp`), then add `image: "/blog/article-N.webp"` to the corresponding entry in `cv.ts`.

---

## 📦 Build & Deploy

```bash
npm run build   # production build
npm start       # start production server
```

Deploy on [Vercel](https://vercel.com) — push to GitHub, import the repo, and Vercel handles the rest.

---

## 📬 Contact

- **Email** — victoryexcel2018@gmail.com  
- **LinkedIn** — [victory-a-17a11b231](https://www.linkedin.com/in/victory-a-17a11b231/)  
- **GitHub** — [@preciousvictory](https://github.com/preciousvictory)
