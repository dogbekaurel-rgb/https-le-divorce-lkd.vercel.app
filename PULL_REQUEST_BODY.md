# Pull Request: feat: initial site structure, pages and project configuration

## Résumé

Cette PR propose la configuration initiale et la structure du projet « Le Divorce – LKD » :

- Ajout de la base Next.js et configurations (Next, Tailwind, PostCSS, ESLint, Prettier, vercel.json, LICENSE).
- Ajout de la page d’accueil, layout et composants de base (Header, Footer).
- Ajout des pages placeholders : /gallery, /portfolio, /contact, /bande-annonce.
- Composant VideoPlayer et sitemap.xml.
- CI workflow (GitHub Actions) et structure src/ + public/ avec placeholders.

## Fichiers clés ajoutés

- `package.json`, `next.config.js`, `tailwind.config.js`, `postcss.config.js`
- `src/app/layout.js`, `src/app/page.js`, `src/components/{Header,Footer,VideoPlayer}`
- `src/app/{gallery,portfolio,contact,bande-annonce}/page.js`
- `public/sitemap.xml`, `.env.example`, `.gitignore`, `LICENSE`, `.github/workflows/ci.yml`

## Checklist (à vérifier avant fusion)

- [ ] Exécution locale : `npm ci && npm run dev` (Node 18+)
- [ ] Variables d’environnement renseignées (Vercel)
- [ ] Tests manuels des pages principales (accueil, galerie, bande‑annonce, contact)
- [ ] Remplacement des médias placeholders (public/videos, public/images)
- [ ] Revue du contenu et de la licence

## Notes

- Branche source : `develop`
- Branche cible : `main`
- Commit récent sur develop : `2d572b7` (voir la branche `develop` pour le diff complet)
- Déploiement : projet prêt pour Vercel — ajoutez les variables d'environnement dans le dashboard Vercel avant le déploiement.

---

Merci de relire la PR, tester localement, et si tout est OK, fusionnez depuis l'interface GitHub (ou via gh CLI).
