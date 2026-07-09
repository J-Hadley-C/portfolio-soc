# Refonte visuelle du portfolio — Plan d'implémentation

> **Pour un exécutant automatisé :** utiliser superpowers:subagent-driven-development (recommandé) ou superpowers:executing-plans pour exécuter ce plan tâche par tâche. Les étapes utilisent la syntaxe case à cocher (`- [ ]`).

**Objectif :** Recolorer et enrichir visuellement le portfolio existant (cyan/violet façon "IA", police Poppins, nouvelle section Parcours, cartes de compétences rondes) sans changer la base technique (React + Vite + TailwindCSS + Framer Motion).

**Architecture :** Modification de fichiers existants (tokens Tailwind, composants React) + un seul nouveau composant (`Parcours.jsx`). Aucune nouvelle dépendance npm.

**Stack technique :** React 18, Vite, TailwindCSS v3, Framer Motion (déjà installés).

**Écart par rapport au modèle standard de ce guide :** ce projet n'a **ni suite de tests automatisés, ni linter** (confirmé dans `C:\Users\ESHU\portfolio-soc\CLAUDE.md`). Il n'y a donc pas d'étape "écrire un test qui échoue". Chaque tâche est à la place vérifiée par : `npm run build` (aucune erreur de compilation) puis vérification visuelle dans le navigateur via `npm run dev` — conformément à la règle du projet racine (`C:\Users\ESHU\CLAUDE.md`) qui impose de tester dans le navigateur avant de considérer un changement d'interface terminé.

Référence design : `docs/superpowers/specs/2026-07-09-refonte-visuelle-design.md`

---

### Task 0 : Initialiser le dépôt git local

Le dossier `portfolio-soc` n'est pas encore un dépôt git. Sans ça, impossible de committer au fur et à mesure. Cette tâche pose juste la base — ne pousse rien sur GitHub (ça reste une tâche séparée, déjà connue, quand KHEN sera prêt à déployer).

**Fichiers :**
- Aucun fichier créé/modifié — juste initialisation git

- [ ] **Étape 1 : Initialiser le dépôt**

Terminal : PowerShell, machine ESHU (hôte Windows), dans `C:\Users\ESHU\portfolio-soc\`

Run: `git init`
Résultat attendu : `Initialized empty Git repository in C:/Users/ESHU/portfolio-soc/.git/`

- [ ] **Étape 2 : Premier commit de référence (état actuel avant refonte)**

Run:
```bash
git add -A
git commit -m "chore: commit initial avant refonte visuelle"
```
Résultat attendu : un commit listant tous les fichiers du projet (le `.gitignore` existant exclut déjà `node_modules`, `dist`, `.env*`)

---

### Task 1 : Couleurs et police — fondations Tailwind

**Fichiers :**
- Modifier : `tailwind.config.js`
- Modifier : `index.html:10-12`
- Modifier : `src/index.css:13-25,27-44`

- [ ] **Étape 1 : Remplacer les couleurs et polices dans `tailwind.config.js`**

Remplacer tout le bloc `colors` et `fontFamily` :

```js
      colors: {
        bg: '#0a0a0f',
        surface: '#0d1117',
        elevated: '#161b22',
        divider: '#21262d',
        accent: {
          DEFAULT: '#00e5ff',
          dim: '#062a30',
          muted: '#0e7490',
        },
        'accent-violet': {
          DEFAULT: '#8b5cf6',
          dim: '#1e1b3a',
          muted: '#6d28d9',
        },
        critical: '#f85149',
        high: '#e3b341',
        medium: '#3fb950',
        info: '#58a6ff',
      },
      fontFamily: {
        display: ['Poppins', 'sans-serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Consolas', 'monospace'],
      },
```

Le reste du fichier (`fontSize`, `animation`, `keyframes`, `plugins`) ne change pas.

- [ ] **Étape 2 : Changer la police chargée dans `index.html`**

Remplacer la ligne 12 :

```html
    <link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;600;700;800&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

par :

```html
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet" />
```

- [ ] **Étape 3 : Corriger les couleurs vertes codées en dur dans `src/index.css`**

Remplacer la ligne 16 :
```css
  font-family: 'Inter', system-ui, sans-serif;
```
par :
```css
  font-family: 'Poppins', system-ui, sans-serif;
```

Remplacer la ligne 25 :
```css
::-webkit-scrollbar-thumb:hover { background: #00ff41; }
```
par :
```css
::-webkit-scrollbar-thumb:hover { background: #00e5ff; }
```

Remplacer les lignes 29-31 (`.hero-grid`) :
```css
.hero-grid {
  background-image:
    linear-gradient(rgba(0,255,65,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,255,65,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}
```
par :
```css
.hero-grid {
  background-image:
    linear-gradient(rgba(0,229,255,0.02) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,229,255,0.02) 1px, transparent 1px);
  background-size: 60px 60px;
}
```

Remplacer la ligne 43 (`.name-glow`) :
```css
  text-shadow: 0 0 40px rgba(0, 255, 65, 0.35);
```
par :
```css
  text-shadow: 0 0 40px rgba(0, 229, 255, 0.35);
```

- [ ] **Étape 4 : Vérifier**

Terminal : PowerShell, machine ESHU, dans `C:\Users\ESHU\portfolio-soc\`

Run: `npm run build`
Résultat attendu : `✓ built in ...` sans erreur.

Puis (si le serveur de dev tourne encore, sinon `npm run dev`) : ouvrir `http://localhost:5173/` et vérifier que le texte, la barre de défilement au survol et le halo derrière le prénom sont maintenant cyan (plus vert).

- [ ] **Étape 5 : Commit**

```bash
git add tailwind.config.js index.html src/index.css
git commit -m "style: remplacer le vert par le cyan et passer a la police Poppins"
```

---

### Task 2 : Fond en dégradé sur la bannière d'accueil

**Fichiers :**
- Modifier : `src/components/Hero.jsx:59-63`

- [ ] **Étape 1 : Ajouter le dégradé de fond**

Remplacer les lignes 59-63 :

```jsx
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,255,65,0.04) 0%, transparent 65%)' }}
      />
```

par :

```jsx
    <section id="home" className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-grid">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'linear-gradient(135deg, #0a0a0f 0%, #0a2a33 55%, #0a0a0f 100%)' }}
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 55% at 50% 45%, rgba(0,229,255,0.06) 0%, transparent 65%)' }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />
```

(Le voile noir semi-transparent `bg-black/60` garantit que le texte reste lisible par-dessus le dégradé, comme sur le site de référence.)

- [ ] **Étape 2 : Vérifier**

Run: `npm run build` → doit réussir sans erreur.

Puis dans le navigateur (`http://localhost:5173/`) : la bannière d'accueil doit afficher un dégradé sombre teinté de cyan au lieu du fond uni, avec le texte toujours parfaitement lisible.

- [ ] **Étape 3 : Commit**

```bash
git add src/components/Hero.jsx
git commit -m "style: degrade de fond cyan sur la banniere d'accueil"
```

---

### Task 3 : Nouvelle section « Parcours »

**Fichiers :**
- Créer : `src/components/Parcours.jsx`
- Modifier : `src/App.jsx:1-27`
- Modifier : `src/components/Navbar.jsx:4-9`

- [ ] **Étape 1 : Créer le composant `Parcours.jsx`**

Contenu repris tel quel des `KEY_POINTS` déjà présents dans `About.jsx` — aucune information inventée.

```jsx
import { motion } from 'framer-motion'

const ETAPES = [
  { titre: 'Formation initiale', texte: 'Développement logiciel' },
  { titre: 'Reconversion', texte: 'Cybersécurité SOC' },
  { titre: 'Lab construit', texte: 'VirtualBox + Wazuh + Active Directory + Kali' },
  { titre: 'Statut actuel', texte: 'Recherche de premier poste SOC Junior' },
]

// Dégradé violet -> cyan appliqué étape par étape (0 = violet, dernière = cyan)
const COULEURS = ['#8b5cf6', '#7a6ee0', '#4aa3d8', '#00e5ff']

const item = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

export default function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 max-w-3xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
          Parcours
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 uppercase">
          De développeur à SOC
        </h2>
      </motion.div>

      <div className="relative">
        {ETAPES.map((etape, i) => (
          <motion.div
            key={etape.titre}
            variants={item}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: i * 0.1 }}
            className="relative bg-surface border border-divider p-6 mb-12 last:mb-0"
            style={{ borderTopColor: COULEURS[i], borderTopWidth: '3px' }}
          >
            {i > 0 && (
              <div
                className="absolute left-1/2 -translate-x-1/2 -top-8 w-0 h-0"
                style={{
                  borderLeft: '14px solid transparent',
                  borderRight: '14px solid transparent',
                  borderBottom: `14px solid ${COULEURS[i]}`,
                }}
              />
            )}
            <h3 className="font-display font-semibold text-lg text-zinc-100 mb-1">
              {etape.titre}
            </h3>
            <p className="text-sm text-zinc-400">{etape.texte}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
```

- [ ] **Étape 2 : Insérer la section dans `App.jsx`**

Remplacer tout le fichier :

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Parcours from './components/Parcours'
import Stack from './components/Stack'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <main>
        <Hero />
        <div className="divider-line" />
        <About />
        <div className="divider-line" />
        <Parcours />
        <div className="divider-line" />
        <Stack />
        <div className="divider-line" />
        <Projects />
        <div className="divider-line" />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
```

- [ ] **Étape 3 : Ajouter le lien dans `Navbar.jsx`**

Remplacer les lignes 4-9 :

```jsx
const LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]
```

par :

```jsx
const LINKS = [
  { href: '#about', label: 'À propos' },
  { href: '#parcours', label: 'Parcours' },
  { href: '#stack', label: 'Stack' },
  { href: '#projects', label: 'Projets' },
  { href: '#contact', label: 'Contact' },
]
```

- [ ] **Étape 4 : Vérifier**

Run: `npm run build` → doit réussir sans erreur.

Dans le navigateur : une nouvelle section « Parcours » doit apparaître entre "À propos" et "Stack", avec 4 blocs reliés par des flèches triangulaires, colorés en dégradé violet → cyan de haut en bas. Le lien "Parcours" doit apparaître dans le menu et faire défiler jusqu'à la section.

- [ ] **Étape 5 : Commit**

```bash
git add src/components/Parcours.jsx src/App.jsx src/components/Navbar.jsx
git commit -m "feat: ajouter la section Parcours entre A propos et Stack"
```

---

### Task 4 : Cartes de compétences rondes

**Fichiers :**
- Modifier : `src/components/Stack.jsx` (fichier complet)

- [ ] **Étape 1 : Remplacer le contenu de `Stack.jsx`**

```jsx
import { motion } from 'framer-motion'

const TOOLS = [
  { name: 'Wazuh SIEM 4.12.0', cat: 'SIEM' },
  { name: 'Windows Server 2022', cat: 'OS / Active Directory' },
  { name: 'Kali Linux', cat: 'OS Attaquant' },
  { name: 'Metasploit / msfvenom', cat: 'Exploitation' },
  { name: 'Nmap', cat: 'Reconnaissance' },
  { name: 'Wireshark / tshark', cat: 'Analyse réseau' },
  { name: 'Impacket', cat: 'Post-Exploitation' },
  { name: 'Docker / WSL2', cat: 'Infrastructure' },
  { name: 'VirtualBox', cat: 'Virtualisation' },
  { name: 'MITRE ATT&CK', cat: 'Framework' },
  { name: 'PowerShell', cat: 'Scripting Windows' },
  { name: 'Bash', cat: 'Scripting Linux' },
]

const container = {
  whileInView: { transition: { staggerChildren: 0.05 } },
  viewport: { once: true },
}
const item = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.35 },
}

export default function Stack() {
  return (
    <section id="stack" className="py-24 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-accent mb-3">
          Stack technique
        </p>
        <h2 className="font-display font-bold text-4xl sm:text-5xl text-zinc-100 uppercase">
          Outils du lab
        </h2>
        <p className="text-zinc-500 mt-3 max-w-md">
          Utilisés en conditions réelles, pas en simulation.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-6"
      >
        {TOOLS.map(t => (
          <motion.div
            key={t.name}
            variants={item}
            className="w-[220px] h-[220px] rounded-full border-[3px] border-accent bg-surface
              flex flex-col items-center justify-center text-center p-5
              transition-transform duration-300 hover:scale-[1.08] hover:-rotate-2
              hover:shadow-[0_0_25px_rgba(0,229,255,0.5)]"
          >
            <span className="font-display font-bold text-sm leading-tight text-zinc-100 mb-1">
              {t.name}
            </span>
            <span className="text-xs text-zinc-500 uppercase tracking-wide">{t.cat}</span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
```

Remarque : le code couleur à 5 teintes (`accent`/`info`/`critical`/`high`/`medium`) est volontairement abandonné ici (décision du design §5) — bordure cyan unique sur les 12 cartes.

- [ ] **Étape 2 : Vérifier**

Run: `npm run build` → doit réussir sans erreur.

Dans le navigateur : la section "Stack technique" doit afficher 12 cercles cyan qui s'agrandissent et pivotent légèrement avec un halo lumineux au passage de la souris.

- [ ] **Étape 3 : Commit**

```bash
git add src/components/Stack.jsx
git commit -m "style: cartes de competences rondes avec bordure cyan"
```

---

### Task 5 : Animation sur le pied de page

**Fichiers :**
- Modifier : `src/components/Footer.jsx` (fichier complet)

- [ ] **Étape 1 : Ajouter l'animation Framer Motion**

Remplacer tout le fichier :

```jsx
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="border-t border-divider bg-surface">
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4"
      >
        <p className="text-xs text-zinc-600">
          CHERY Jean-Hadley — SOC Analyst Junior — 2026
        </p>
        <div className="flex items-center gap-6">
          <a
            href="https://www.linkedin.com/in/hadley-chery/?skipRedirect=true"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/j-Hadley-C"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-zinc-600 hover:text-accent transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:jhadleyc@mail.com"
            className="text-xs text-zinc-600 hover:text-accent transition-colors"
          >
            Email
          </a>
        </div>
      </motion.div>
    </footer>
  )
}
```

- [ ] **Étape 2 : Vérifier**

Run: `npm run build` → doit réussir sans erreur.

Dans le navigateur : descendre jusqu'en bas de la page, le pied de page doit apparaître en fondu au lieu d'être visible instantanément.

- [ ] **Étape 3 : Commit**

```bash
git add src/components/Footer.jsx
git commit -m "style: animation d'entree sur le pied de page"
```

---

### Task 6 : Vérification finale complète

**Fichiers :** aucun

- [ ] **Étape 1 : Build de production complet**

Run: `npm run build`
Résultat attendu : `✓ built in ...` sans aucune erreur ni avertissement bloquant.

- [ ] **Étape 2 : Revue visuelle complète dans le navigateur**

Run: `npm run dev`, ouvrir `http://localhost:5173/` et parcourir toute la page de haut en bas. Vérifier un par un :
- Bannière d'accueil : dégradé cyan visible, texte lisible, effet machine à écrire fonctionne
- Menu : lien "Parcours" présent et fonctionnel
- Section Parcours : 4 blocs avec flèches, dégradé violet → cyan visible
- Section Stack : 12 cercles cyan, effet de survol (agrandissement + rotation + halo)
- Section Projets : accordéon toujours fonctionnel (cliquer pour déplier/replier), couleur cyan sur les éléments décoratifs, couleurs de gravité (rouge/orange/vert) inchangées
- Section Contact : formulaire toujours utilisable
- Pied de page : apparaît en fondu au défilement

- [ ] **Étape 3 : Commit final si des ajustements ont été faits pendant la revue**

```bash
git add -A
git commit -m "fix: ajustements suite a la revue visuelle de la refonte"
```

(Ne committer que s'il y a effectivement eu des changements — sinon, passer cette étape.)
