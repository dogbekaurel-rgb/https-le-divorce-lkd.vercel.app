# Issue: Production checklist / post-merge

Objectif

Lister les étapes nécessaires pour passer de la branche `develop` fusionnée vers `main` à un site déployé et stable en production sur Vercel.

Checklist de pré‑production

- [ ] Revue de code intégrale (vérifier fichiers ajoutés et changements)
- [ ] Lancer les checks CI (build + lint) et corriger les erreurs : `npm run build && npm run lint`
- [ ] Tester localement (Node 18+)
  - `git checkout develop` ou `git checkout main` après merge
  - `npm ci && npm run dev`
  - Tester manuellement : /, /gallery, /portfolio, /contact, /bande-annonce
- [ ] Remplacer tous les médias placeholders par les fichiers finaux dans `public/images` et `public/videos`
- [ ] Vérifier le lecteur vidéo (formats, pistes de sous-titres, et compatibilité mobile)
- [ ] Ajouter/mettre à jour les variables d'environnement sur Vercel (ex : NEXT_PUBLIC_API_URL, NEXT_PUBLIC_ANALYTICS_ID)
- [ ] Configurer les secrets (API keys, services tiers) dans le dashboard Vercel
- [ ] Vérifier sitemap.xml et meta tags (SEO)
- [ ] Ajouter analytics et trackers (si nécessaire) avec respect de la vie privée
- [ ] Exécuter tests automatisés (unit, e2e) si présents
- [ ] Documenter les étapes de rollback et contact de responsable déploiement

Checklist post‑merge / déploiement

- [ ] Valider la preview URL générée par Vercel (PR preview)
- [ ] Tester la page de production après déploiement (vérifier erreurs console et performance)
- [ ] Vérifier les logs et erreurs Sentry/monitoring (si configuré)
- [ ] Informer l’équipe (Slack / email) du déploiement et du lien de production
- [ ] Marquer la milestone / fermer les issues liées

Notes

- En cas d'urgence, suivre la procédure de rollback définie dans la documentation d'équipe.
- Assigner cette issue à l'ingénieur en charge du déploiement et aux reviewers.
