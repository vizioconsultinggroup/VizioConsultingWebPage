# Vizio Consulting Group weboldal

Prémium, reszponzív Astro corporate weboldal. A kapcsolati alapadatok a `src/data/site.ts`, a csapat adatai a `src/data/team.ts` fájlban szerkeszthetők.

## Helyi fejlesztés

```bash
npm install
npm run dev
npm run build
```

A statikus build a `dist` mappába készül.

## Cloudflare Pages deploy

1. Töltsd fel a projektet GitHubra, majd a Cloudflare Dashboardban válaszd a **Workers & Pages → Create → Pages → Connect to Git** lehetőséget.
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node.js: 20 vagy újabb.
5. Élesítés előtt töltsd ki a `src/data/site.ts` hiányzó telefonszám, cím, foglalási URL és social értékeit, valamint a csapatadatokat.

## Űrlap és analitika

Az űrlap alapállapotban a felhasználó levelezőprogramját nyitja meg, tehát nincs ál-beküldés. Formspree vagy Cloudflare Pages Functions az `action` cseréjével kapcsolható be. A `gaId` és `metaPixelId` csak látogatói hozzájárulás után aktiválódik.
