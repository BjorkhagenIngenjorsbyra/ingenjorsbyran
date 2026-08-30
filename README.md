# ingenjorsbyran.com

Björkhagen Ingenjörsbyrå AB:s webbplats. Statisk sida byggd med Vite, React och Tailwind.

## Utveckling

```
npm install
npm run dev        # http://localhost:8080
npm run build      # dist/
npx vite preview   # förhandsvisa dist/
```

## Publicering

Varje push till `main` bygger sidan med GitHub Actions (`.github/workflows/pages.yml`) och publicerar `dist/`
på GitHub Pages under domänen i `public/CNAME`. Ingen annan tjänst är inblandad.

## Struktur

- `src/pages/Index.tsx` — startsidan (en mening, kontakt)
- `src/pages/Privacy.tsx` — personuppgiftspolicy
- `src/components/Header.tsx`, `Footer.tsx`, `Layout.tsx`
- `src/index.css` — färger och typsnitt (Montserrat, Petrol #0E6272)
