# VIZIO Consulting weboldal

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

Az űrlap alapállapotban a felhasználó levelezőprogramját nyitja meg, tehát nincs ál-beküldés. Online leadfogadáshoz állítsd a `contactEndpoint` értékét `/api/contact`-ra, és a Cloudflare Workerben add meg titokként a `LEAD_WEBHOOK_URL` változót. Ez lehet később e-mail-, CRM- vagy Google Sheets-webhook.

A `gaId` és `metaPixelId` kizárólag a megfelelő látogatói hozzájárulás után aktiválódik. A Search Console azonosító a `googleSiteVerification`, az időpontfoglaló a `bookingUrl`, a Google Business link pedig a `googleBusinessUrl` mezőben adható meg.

Konverziómérés teszteléséhez nyisd meg például az `/okoshitel?utm_source=test&utm_medium=manual&utm_campaign=qa` URL-t, majd ellenőrizd a böngésző fejlesztői eszközeiben a sessionStorage `vizio-campaign` bejegyzését és az űrlap rejtett mezőit.
