# Edi Codes Connect

Portfolio professionnel de Edi Sokenou construit avec React, Tailwind et Supabase.

## Prérequis

- Node.js 18+
- npm 9+

## Installation

```bash
git clone <votre-url>
cd edi-codes-connect
npm install
```

## Scripts disponibles

| Commande        | Description                                    |
|-----------------|------------------------------------------------|
| `npm run dev`   | lance le serveur Vite avec rechargement        |
| `npm run build` | génère la version de production dans `dist/`   |
| `npm run preview` | prévisualise la build localement             |

## Technologies principales

- Vite + React 18 + TypeScript
- TailwindCSS & composants shadcn/ui
- Supabase (contenu dynamique + formulaires)

## Structure clé

- `src/pages` — pages publiques (Accueil, Services, Projets, Contact…)
- `src/components` — composants partagés (Header, Footer, UI…)
- `src/lib/supabaseClient.ts` — initialisation du SDK Supabase
- `public/` — assets statiques (favicon, manifest…)

## Déploiement

1. Construire : `npm run build`
2. Déployer le dossier `dist/` sur Vercel, Netlify, OVH ou le serveur de votre choix.

## Contribution

Les PR sont les bienvenues. Merci de respecter les conventions TypeScript/Tailwind, d’écrire un code clair et de tester avant de soumettre.
