# Refonte visuelle du portfolio — Design

Date : 2026-07-09

## Contexte

Le portfolio actuel (React + Vite + TailwindCSS + Framer Motion, dans `C:\Users\ESHU\portfolio-soc\`) ne convenait plus visuellement à KHEN. Inspiration retenue : https://kupczak.me/ (analysé via son vrai code source HTML/CSS, pas de capture d'écran disponible).

Base technique conservée telle quelle : React, Vite, TailwindCSS, Framer Motion. Seuls les couleurs, la police, et certains éléments visuels changent.

## 1. Couleurs (`tailwind.config.js`)

- Token `accent` (actuellement vert `#00ff41`) → **cyan `#00e5ff`**. Devient la couleur principale : boutons, liens, halos, bordures décoratives, section Compétences, section Projets.
- Nouveau token `accent-violet: #8b5cf6` → réservé exclusivement à la nouvelle section "Parcours" (voir §4). Représente le passé développeur de KHEN, en opposition/complément au cyan qui représente le domaine SOC.
- `bg` (`#0a0a0f`), `surface` (`#0d1117`), `elevated` (`#161b22`), `divider` (`#21262d`) : **inchangés**, déjà assez sombres.
- `critical` (`#f85149`), `high` (`#e3b341`), `medium` (`#3fb950`), `info` (`#58a6ff`) : **inchangés** — ce sont des couleurs de gravité MITRE fonctionnelles utilisées dans `Projects.jsx` et `Stack.jsx`, pas des couleurs décoratives de marque. Ne pas les fusionner avec le système cyan/violet.

Justification du choix cyan/violet : demandé explicitement par KHEN comme évocation "IA / robotique", en écartant l'orange du site de référence.

## 2. Typographie

- `font-display` et `font-sans` (actuellement Barlow Condensed + Inter) → **Poppins** partout (titres et texte courant).
- `font-mono` (JetBrains Mono) : **inchangé**, réservé aux commandes affichées dans les cartes projets dépliées — contrainte de lisibilité, pas de choix esthétique.

## 3. Bannière d'accueil (`Hero.jsx`)

- Fond actuel uni → dégradé sombre teinté cyan (`bg #0a0a0f` → une teinte intermédiaire cyan sourdine → retour sombre), avec un voile noir semi-transparent par-dessus pour garantir la lisibilité du texte (même principe que le site de référence, qui utilise `rgba(0,0,0,0.6)`).
- L'effet machine à écrire existant est conservé tel quel, seule la couleur d'accent change (vert → cyan).

## 4. Nouvelle section « Parcours » (nouveau composant, entre `About.jsx` et `Stack.jsx`)

- Frise verticale avec connecteurs en forme de flèche triangulaire entre chaque étape (inspiré de `.experience-item::before` du site de référence).
- Contenu — **repris tel quel des `KEY_POINTS` déjà présents dans `About.jsx`**, pas de nouvelle information inventée :
  1. Formation initiale — Développement logiciel
  2. Reconversion — Cybersécurité SOC
  3. Lab construit — VirtualBox + Wazuh + Active Directory + Kali
  4. Statut actuel — Recherche de premier poste SOC Junior
- Dégradé de couleur violet → cyan appliqué progressivement le long de la frise (étape 1 = violet, étape 4 = cyan), pour représenter visuellement la transition dev → SOC.
- Animation d'entrée en cascade au défilement (Framer Motion, `stagger`), cohérent avec le reste du site.

## 5. Section Compétences (`Stack.jsx`) — 12 outils

- Passage d'un affichage en grille rectangulaire à des **cartes rondes** (cercles de 220px), inspiré des `.skill-card` du site de référence.
- Une seule couleur de bordure : **cyan**, sur les 12 cartes — abandon du système actuel à 5 couleurs (`accent`/`info`/`critical`/`high`/`medium` par outil), car les 12 outils appartiennent tous au même domaine (labo SOC), aucune catégorisation dev/SOC réelle ne les distingue.
- Effet au survol : agrandissement léger (`scale`) + légère rotation + halo lumineux cyan, repris du site de référence.
- Animation d'entrée en cascade déjà présente dans le code (`container`/`item` variants), conservée.

## 6. Section Projets (`Projects.jsx`) — 5 cartes accordéon

- **Aucun changement structurel.** Le comportement de dépliage/repliage reste identique.
- Seule la couleur décorative (actuellement `text-accent`/liens) passe de vert à cyan.
- Les couleurs de gravité MITRE (`critical`/`high`/`medium`) restent inchangées — ce sont des informations réelles sur la sévérité de chaque technique, pas de la décoration.

## 7. Animations

- Aucune nouvelle dépendance : le site utilise déjà Framer Motion (contrairement au site de référence qui utilise la bibliothèque AOS). Le même effet visuel (fondu + léger déplacement à l'entrée dans l'écran) est obtenu en réutilisant les variantes déjà en place dans `About.jsx`/`Stack.jsx`/`Projects.jsx`.
- Vérification faite sur le vrai code : `Hero.jsx` et `Contact.jsx` ont déjà une animation Framer Motion. Seul `Footer.jsx` n'en a aucune — c'est le seul fichier à compléter.

## 8. Détails techniques supplémentaires trouvés en relisant le code

- `src/index.css` contient des couleurs vertes codées en dur (pas via les tokens Tailwind) à corriger en cyan :
  - `::-webkit-scrollbar-thumb:hover { background: #00ff41; }` → `#00e5ff`
  - `.hero-grid` (grille de fond de la bannière) : `rgba(0,255,65,0.02)` → `rgba(0,229,255,0.02)`
  - `.name-glow` (halo derrière le prénom) : `rgba(0, 255, 65, 0.35)` → `rgba(0, 229, 255, 0.35)`
  - `body { font-family: 'Inter', ... }` → `'Poppins', system-ui, sans-serif`
- `index.html` charge actuellement Barlow Condensed + Inter + JetBrains Mono depuis Google Fonts — remplacer par Poppins + JetBrains Mono.
- `Navbar.jsx` a une liste de liens `#about #stack #projects #contact` — ajouter un lien `#parcours` entre "À propos" et "Stack" pour pointer vers la nouvelle section.
- `App.jsx` assemble les sections dans l'ordre — insérer le nouveau composant Parcours entre `<About />` et `<Stack />`, avec son propre `divider-line` de séparation comme les autres sections.

## Hors périmètre

- Le style "cartes accordéon" de la section Projets n'est pas remplacé par des cartes classiques avec image/icône (choix explicite de KHEN de garder l'accordéon façon console SIEM).
- Le déploiement (Formspree, GitHub, Vercel) n'est pas traité ici — reste une tâche séparée déjà identifiée dans le fichier de reprise du labo.
