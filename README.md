# Winnie's Portfolio — Next.js Starter

A magazine-collage style portfolio for **Wenqing (Winnie) Li**, themed with University of Washington colors (Husky Purple `#4B2E83` + Metallic Gold `#B7A57A`). Built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

---

## Quick start

You need **Node.js 18.17+** installed. Check with `node -v`.

```bash
# 1. Open this folder in a terminal
cd winnie-portfolio

# 2. Install dependencies (takes ~1-2 minutes)
npm install

# 3. Run the dev server
npm run dev

# 4. Open http://localhost:3000 in your browser
```

That's it. Edit any file and the browser auto-refreshes.

---

## Project structure

```
winnie-portfolio/
├── app/
│   ├── layout.tsx              ← Root layout + metadata
│   ├── page.tsx                ← Homepage (assembles all sections)
│   ├── globals.css             ← Global styles + UW theme
│   ├── not-found.tsx           ← 404 page
│   └── projects/
│       └── [slug]/
│           └── page.tsx        ← Dynamic project detail page
│
├── components/
│   ├── Nav.tsx                 ← Sticky top nav with scroll behavior
│   ├── Hero.tsx                ← Hero section (magazine collage)
│   ├── Stats.tsx               ← 4 key numbers strip
│   ├── About.tsx               ← Bio + skill grid
│   ├── Projects.tsx            ← Filterable project grid
│   ├── Demo.tsx                ← Interactive AI demo (mock by default)
│   ├── Life.tsx                ← "The Stories Behind Me" collage
│   ├── Contact.tsx             ← CTA section
│   └── Footer.tsx
│
├── lib/
│   ├── projects.ts             ← Project data (add yours here!)
│   └── utils.ts
│
├── public/                     ← Static assets — put your portrait + resume here
│
├── tailwind.config.ts          ← UW colors defined as `husky` and `gold`
└── package.json
```

---

## What to customize before launching

### 1. Personal info (5 minutes)

- **`app/layout.tsx`** — Update the `metadata` block (your name, description, URL).
- **`components/Nav.tsx`** — Change `Winnie.` and the subtitle if you want a different name display.
- **`components/Hero.tsx`** — Update the headline, subhead, and personal description.
- **`components/Contact.tsx`** — Replace `mailto:` with your real email; update LinkedIn/GitHub URLs.

### 2. Your portrait (2 minutes)

- Add a high-res cutout-style portrait to `public/portrait.png`.
- Open `components/Hero.tsx` and replace the placeholder div (the one with `Replace with your portrait`) with:
  ```tsx
  <Image
    src="/portrait.png"
    alt="Winnie Li"
    width={300}
    height={400}
    className="rounded-xl object-cover"
  />
  ```
  Then add `import Image from "next/image";` to the top of the file.

### 3. Resume (1 minute)

- Drop your resume PDF at `public/resume.pdf`. The download button in the nav will work automatically.

### 4. Add your projects (~10 min per project)

- Open `lib/projects.ts` and add new entries to the `projects` array. Each project supports `when`, `why`, `what`, `how`, and `insights` for the detail page.
- The categories you can use: `"ml-ai"`, `"data-analytics"`, `"entrepreneurial"`, `"coursework"`.

### 5. Wire up the AI demo (your weekend project)

The demo at `components/Demo.tsx` currently uses `mockRecommend()` — a dummy function that returns fake recommendations. To make it real:

1. **Wrap your trained `model.pt` in FastAPI:**

   ```python
   # main.py
   from fastapi import FastAPI
   from fastapi.middleware.cors import CORSMiddleware
   from pydantic import BaseModel
   import torch

   app = FastAPI()
   app.add_middleware(
       CORSMiddleware,
       allow_origins=["*"],
       allow_methods=["*"],
       allow_headers=["*"],
   )

   model = torch.load("model.pt")
   model.eval()

   class Req(BaseModel):
       selected_ids: list[int]

   @app.post("/recommend")
   def recommend(req: Req):
       # ... your inference logic
       return {"recommendations": [...]}
   ```

2. **Push to HuggingFace Spaces** (free CPU inference) — choose the "Docker" runtime.

3. **Replace `mockRecommend()`** in `Demo.tsx`:

   ```ts
   async function recommend(selectedIds: number[]) {
     const r = await fetch("https://YOUR-SPACE.hf.space/recommend", {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ selected_ids: selectedIds }),
     });
     return (await r.json()).recommendations;
   }
   ```

---

## Deployment to Vercel (5 minutes, free)

1. Push this folder to a GitHub repo.
2. Go to [vercel.com](https://vercel.com) → New Project → Import your repo.
3. Click Deploy. Done — you get a `*.vercel.app` URL immediately.
4. (Optional) Buy a domain like `winnieli.dev` and connect it in Vercel's Domains tab (~$15/year).

---

## Tweaking the UW theme

All colors live in `tailwind.config.ts`. The two main palettes:

```ts
husky: { DEFAULT: "#4B2E83", ... 50–900 shades }
gold:  { DEFAULT: "#B7A57A", ... 50–900 shades }
```

Use them anywhere in Tailwind like `bg-husky`, `text-gold-100`, `border-husky-700`, etc.

---

## Tech notes

- **App Router** (Next 14) — modern data-flow, server components by default
- **Framer Motion** for tasteful entrance animations
- **Tailwind** for everything visual; no separate CSS files needed (except `globals.css`)
- **Single-page scroll homepage + dedicated project detail pages** — best of both worlds

---

## Performance checklist before launch

- [ ] Run `npm run build` locally — should finish with no errors
- [ ] Check Lighthouse score (target: 90+ on Performance, Accessibility, Best Practices, SEO)
- [ ] Add `og-image.png` (1200×630) to `public/` for nice LinkedIn/Twitter previews
- [ ] Test on mobile — the layout is responsive but always double-check on a real phone
- [ ] Make sure `resume.pdf` actually downloads from the nav button

---

## Need help?

Open `portfolio_plan_v2.md` in the parent folder for the full design rationale and roadmap.

Built for **Wenqing (Winnie) Li · UW Data Science** · 2026
🐾 Go Huskies.
