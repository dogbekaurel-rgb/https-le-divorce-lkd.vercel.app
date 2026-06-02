# Issue #1 — Documentation, configuration et structure initiale

Description

Ce ticket rassemble les tâches initiales nécessaires pour mettre en place le projet "Le Divorce – LKD" en tant qu'application Next.js déployable sur Vercel. L'objectif est d'avoir une base de site fonctionnelle, des configurations de qualité, et une structure claire pour développer les fonctionnalités artistiques.

Checklist

- [x] Ajouter README.md (présent)
- [x] Ajouter package.json avec dépendances et scripts (présent)
- [x] Configurer Next.js (next.config.js) (présent)
- [x] Configurer Tailwind CSS et PostCSS (present)
- [x] Ajouter .gitignore, .env.example, LICENSE (présent)
- [x] Ajouter CI workflow (GitHub Actions) (présent)
- [x] Créer structure de dossiers (src/, public/) et placeholders (présent)
- [x] Ajouter layout, page d'accueil et composants Header/Footer (présent)

Tâches restantes / suggestions

- [ ] Implémenter la galerie immersive (composant et stockage média)
- [ ] Intégrer le lecteur vidéo (support VTT, adaptive streaming)
- [ ] Ajouter pages: galerie, portfolio, presse, contact
- [ ] Configurer analytics et tracking (mettre NEXT_PUBLIC_ANALYTICS_ID)
- [ ] Ajouter tests unitaires et e2e
- [ ] Ajouter Licence détaillée si besoin (ou changer la licence actuelle)

Notes

- Déploiement: connecté à Vercel via vercel.json. Assurez-vous d'ajouter les variables d'environnement dans le projet Vercel.
- Pour le développement local : `npm install` puis `npm run dev`.
