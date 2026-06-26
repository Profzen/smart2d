# 🧠 MÉMOIRE DU PROJET — SMART2D Services Website

> **Dernière mise à jour** : 26 juin 2026 (Déploiement Vercel, Configuration SMTP, Fix API Contact)  
> **Statut global** : Le dépôt a été initialisé sur GitHub et Gitea. Le déploiement sur Vercel est en place (l'erreur de lockfile pnpm a été résolue). L'API de contact a été sécurisée avec un fix pour la vérification des variables d'environnement SMTP.
> **Prochaines étapes immédiates** : Valider la PR `aziz/fix-contact-500` sur Gitea, fusionner dans `develop` et faire un redeploy Vercel pour tester les envois d'e-mails réels avec Google Workspace.
> **Branche d'intégration** : `develop` | **Dernière branche de travail** : `aziz/fix-contact-500`

---

## 📌 Résumé express (à lire en priorité)

Ce projet est la **refonte du site vitrine de SMART2D Services**, un cabinet de conseil IT spécialisé Oracle, basé à Lomé (Togo). Le site est construit en **Next.js 16 + React 19 + TypeScript + Tailwind CSS v4**. L'objectif est de créer une vitrine professionnelle, moderne, bilingue (FR/EN à terme), avec un positionnement **Oracle-first**.

**Documents de référence** :
- [`cdc.txt`](./cdc.txt) — Cahier des charges complet (v1.0, Mai 2026)
- [`ct.txt`](./ct.txt) — Contenus FR optimisés v3 (textes prêts à intégrer, SEO par page)
- [`Plan_Implementation_et_Taches_SMART2D.md`](./Plan_Implementation_et_Taches_SMART2D.md) — Organisation du travail, répartition des tâches et checklist par page
- [`up.txt`](./up.txt) — Fichier d'ajustements du CDC v1.0 vers v1.1

---

## 1. 🏢 Contexte de l'entreprise

| Élément | Détail |
|---|---|
| **Raison sociale** | SMART2D Services |
| **Positionnement** | Cabinet de conseil IT Oracle-first et infrastructures critiques |
| **Siège** | Hedzranawoe, Boulevard du Haho, Lomé - Togo |
| **Email** | contact@smart2dservices.com |
| **Tél. Togo** | +228 72 14 09 23 |
| **Tél. USA** | +1 732 439 2272 |
| **Expérience** | Plus de 30 ans d'expertise Oracle |
| **Mission** | Sécuriser, optimiser et moderniser les infrastructures critiques |
| **Vision** | Exploitation proactive, supervisée et intelligente des environnements IT |
| **Valeurs** | Expertise, Fiabilité, Sécurité, Proximité, Transmission, Innovation utile |

### Domaines d'expertise
- Oracle Database, RAC, Data Guard, RMAN, ASM, Grid Infrastructure
- WebLogic Server, Oracle Forms
- Cloud OCI (architecture, migration, sauvegarde, PRA/PCA)
- Bases de données : Oracle, MySQL, PostgreSQL, SQL Server
- Linux/Unix : Oracle Linux, Red Hat, AIX, Solaris
- Audit technique, sécurité et performance
- Supervision, MCO et automatisation
- Support et formation

### Solutions propriétaires
| Solution | Description |
|---|---|
| **OSCAR** | Plateforme d'observabilité, supervision et automatisation IT augmentée par l'IA |
| **Smart Transfert** | Plateforme de centralisation pour agences de transfert d'argent |

---

## 2. 🛠️ Stack technique

| Technologie | Version / Détail |
|---|---|
| **Framework** | Next.js 16.2.6 |
| **React** | 19 |
| **Langage** | TypeScript 5.7.3 |
| **Styles** | Tailwind CSS v4.2 (via `@tailwindcss/postcss`) |
| **Animations** | Framer Motion ^12.39.0 |
| **Composants UI** | shadcn/ui (basé sur Radix UI) |
| **Icônes** | Lucide React ^0.564.0 |
| **Typo** | Inter (Google Fonts, sans-serif) + Geist Mono |
| **Analytics** | Vercel Analytics (prod uniquement) |
| **Package manager** | npm (package-lock.json) + pnpm (pnpm-lock.yaml) |
| **Déploiement prévu** | cPanel (Node.js) ou export statique en secours |

### Configuration clé
- **`next.config.mjs`** : `typescript.ignoreBuildErrors: true`, `images.unoptimized: true`
- **`postcss.config.mjs`** : Utilise `@tailwindcss/postcss`
- **`tailwind.config.ts`** : Définit les couleurs brand, polices custom, animations
- **`app/globals.css`** : Design system SMART2D (variables CSS + Tailwind tokens) — **C'est le fichier actif**, pas `styles/globals.css`

### Commandes
```bash
npm run dev     # Serveur de développement
npm run build   # Build production
npm run start   # Serveur production
npm run lint    # ESLint
```

---

## 3. 🎨 Design system

### Palette de couleurs

| Token | Hex | Usage |
|---|---|---|
| `--smart2d-red` | `#EE3329` | Couleur principale (CTA, accents, logo) |
| `--smart2d-anthracite` | `#221E1F` | Textes, header, sections sombres institutionnelles |
| `--smart2d-cream` | `#F8F6F4` | Background principal |
| `--smart2d-warm-gray` | `#F0ECE8` | Background sections alternées |
| `--smart2d-navy` | `#17233A` | Sections Oracle/infra, hero background |
| `--smart2d-green` | `#2F6B4F` | Sécurité, disponibilité, Smart Transfert |

### Usage des couleurs dans le CSS
- Variables CSS natives dans `:root` de `app/globals.css`
- Mapping Tailwind dans le bloc `@theme inline` de `app/globals.css`
- Également défini dans `tailwind.config.ts` sous `smart2d.*`

### Typographie
- **Sans-serif** : Inter (`--font-inter`)
- **Monospace** : Geist Mono (`--font-geist-mono`)

### Patterns de design
- **Alternance de sections** : fond cream → warm-gray → anthracite → navy (rythme visuel)
- **Cards** : `bg-white rounded-xl p-6 shadow-sm border border-[#E5E0DC]` avec hover effects
- **Boutons primaires** : `bg-[#EE3329] text-white hover:bg-[#d62d24] shadow-lg shadow-[#EE3329]/25`
- **Boutons secondaires** : `bg-[#221E1F] text-white` ou `bg-[#17233A] text-white`
- **Labels catégories** : `text-[#EE3329] font-semibold text-sm uppercase tracking-wider`
- **Animations** : Framer Motion `whileInView` pour apparition au scroll
- **Icônes** : Lucide React (taille standard w-5/w-6, dans des carrés colorés)

### Logos
- **Header (avant scroll) & Footer** : Logo blanc `smart2d-logo-light.png`
- **Header (après scroll)** : Logo noir `smart2d-logo-dark.png`
- **Favicon** : Icone vectorielle `favicon.svg` (S2D) ultra-nette pour les onglets de navigateur.

Tous les logos sont désormais stockés localement dans `public/images/logo/` pour une totale indépendance du projet (plus de dépendance à Vercel Blob).

---

## 4. 📁 Architecture du projet

```
smart-2-d-website-build/
├── app/                          # Pages Next.js (App Router)
│   ├── layout.tsx                # Layout racine (Inter, Geist Mono, meta SEO)
│   ├── page.tsx                  # Page d'accueil (8 sections)
│   ├── globals.css               # ⭐ Design system actif (SMART2D tokens)
│   ├── a-propos/
│   │   ├── page.tsx              # Wrapper page
│   │   └── about-content.tsx     # Contenu complet
│   ├── oracle-infrastructure/
│   │   ├── page.tsx
│   │   └── oracle-infra-content.tsx
│   ├── services/
│   │   ├── page.tsx
│   │   └── services-content.tsx
│   ├── solutions/
│   │   ├── page.tsx
│   │   └── solutions-content.tsx
│   ├── support-formation/
│   │   ├── page.tsx
│   │   └── support-formation-content.tsx
│   └── contact/
│       ├── page.tsx
│       └── contact-content.tsx
├── components/
│   ├── layout/
│   │   ├── header.tsx            # Header fixe + scroll detection + menu mobile
│   │   └── footer.tsx            # Footer complet (liens, contact, brand)
│   ├── sections/                 # Sections de la page d'accueil
│   │   ├── hero.tsx              # Carrousel 7 slides avec autoplay
│   │   ├── positioning.tsx       # Positionnement SMART2D
│   │   ├── expertise.tsx         # 6 domaines d'expertise
│   │   ├── oracle-section.tsx    # Focus Oracle
│   │   ├── services-section.tsx  # Aperçu services (6 cards)
│   │   ├── solutions-section.tsx # OSCAR + Smart Transfert
│   │   ├── why-section.tsx       # Pourquoi SMART2D (5 raisons)
│   │   ├── cta-section.tsx       # Call-to-action final
│   │   └── trust-band.tsx        # ⚠️ Composant existant mais NON utilisé
│   ├── ui/                       # 57 composants shadcn/ui
│   └── theme-provider.tsx        # Provider next-themes (non utilisé actuellement)
├── hooks/
│   ├── use-mobile.ts
│   └── use-toast.ts
├── lib/
│   └── utils.ts                  # Utilitaire `cn()` (clsx + tailwind-merge)
├── public/
│   ├── images/hero/              # 9 images héro (1-1.5 Mo chacune)
│   ├── icon-*.png, icon.svg      # Favicons
│   └── placeholder-*             # Placeholders
├── styles/
│   └── globals.css               # ⚠️ Ancien fichier CSS (NON importé, ignoré)
├── cdc.txt                       # Cahier des charges v1.0
├── ct.txt                        # Contenus FR optimisés v3 (textes, SEO)
├── sprint.md                     # Organisation du travail v2.0 (Aziz/Marius)
├── up.txt                        # Ajustements à faire sur le CDC .docx
├── memoire.md                    # 👈 CE FICHIER
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.mjs
└── postcss.config.mjs
```

### Pattern des pages internes
Chaque page suit le même pattern :
1. `page.tsx` = wrapper simple qui importe Header + Content + Footer
2. `*-content.tsx` = composant "use client" qui contient toute la logique et le contenu

---

## 5. 📄 Détail des pages

### Page d'accueil (`/`)
**Fichier** : `app/page.tsx`  
**Structure** : Header → Hero → Positioning → Expertise → Oracle → Services → Solutions → Why → CTA → Footer

#### Hero (carrousel)
- 7 slides avec images locales (`/images/hero/*.png`)
- Autoplay 6s avec pause/play
- Navigation dots + flèches + compteur
- Barre de services en bas (6 liens Oracle-style)
- Fond navy `#17233A` avec overlay gradient

#### Sections de l'accueil
| Section | Background | Contenu |
|---|---|---|
| Positioning | Cream `#F8F6F4` | Texte de positionnement centré |
| Expertise | Warm-gray `#F0ECE8` | 6 cards (Oracle DB, Cloud OCI, BDD, Linux, Audit, MCO) |
| Oracle | Navy `#17233A` | Split layout : texte + grille 6 icônes |
| Services | Cream `#F8F6F4` | 6 cards cliquables + CTA |
| Solutions | Warm-gray `#F0ECE8` | 2 grandes cards (OSCAR + Smart Transfert) |
| Why SMART2D | Anthracite `#221E1F` | 5 raisons avec icônes |
| CTA | Gradient cream | Call-to-action centré |

### Pages internes

| Page | Route | Sections |
|---|---|---|
| **À propos** | `/a-propos` | Hero clair → Expérience (30+ ans) → Mission/Vision → Valeurs → Équipe → CTA |
| **Oracle & Infra** | `/oracle-infrastructure` | Hero navy → 6 domaines Oracle → Technologies → CTA |
| **Services** | `/services` | Hero clair → 7 services détaillés → Méthodologie (5 étapes) → CTA |
| **Solutions** | `/solutions` | Hero clair → OSCAR (navy) → Smart Transfert (cream) → CTA |
| **Support & Formation** | `/support-formation` | Hero clair → 6 prestations → 3 modes d'intervention → CTA |
| **Contact** | `/contact` | Hero clair → Formulaire + coordonnées |

---

## 6. 👥 Organisation du travail

### Équipe
| Personne | Rôle | Branches |
|---|---|---|
| **Aziz** | UI/UX, refonte visuelle, responsive, expérience utilisateur | `aziz/<tache>` (ex. `aziz/hero-ancres`, `aziz/seo-meta`) |
| **Marius** | Contenu, textes, informations métier | `marius/<tache>` (ex. `marius/textes-accueil`, `marius/ajout-oscar`) |

### Stratégie de branches

```
main                         ← Versions stables uniquement (production)
└── develop                  ← Branche d'intégration principale
    ├── aziz/<tache>         ← Branches de travail Aziz (UI/UX/technique)
    └── marius/<tache>       ← Branches de travail Marius (Contenu)
```

> **Règle clé** : `main` est réservé aux versions ultra-stables. Tous les merges courants se font sur `develop`. On ne merge `develop` → `main` qu'après validation complète.

### Convention de nommage des branches

Les branches portent le **nom de celui qui les crée** et décrivent **explicitement la tâche** (mais restent courtes) :

```bash
# Aziz (UI/UX/technique)
aziz/hero-ancres           # Ancres de navigation dans le hero
aziz/responsive-accueil    # Correction responsive page accueil
aziz/seo-meta              # Ajout des meta SEO par page
aziz/form-contact          # Formulaire de contact fonctionnel

# Marius (Contenu)
marius/textes-accueil      # Mise à jour des textes page accueil
marius/ajout-oscar         # Ajout section OSCAR dans À propos
marius/footer-update       # Mise à jour du footer
```

### Workflow Git
1. Toujours partir de `develop` à jour
2. Créer ou rejoindre sa branche dédiée (`nom/tache`)
3. Travailler et commiter régulièrement
4. Tests locaux (build, navigation, responsive, contenu)
5. Pull Request vers `develop`
6. **Validation croisée** : Aziz valide le contenu, Marius valide l'UI
7. Merge dans `develop`
8. **Merge `develop` → `main`** uniquement quand une version stable est validée

### Convention de commits
```
# Interface (Aziz)
feat(ui): update hero navigation
feat(ui): improve responsive layout
style(ui): harmonize page spacing

# Contenu (Marius)
content: update smart2d company information
content: add oscar section
fix(content): update years of experience
```

---

## 7. ⚠️ Incohérences et points d'attention identifiés

### Contradictions 20 ans vs 30 ans
✅ **Résolu** : Marius a officiellement tranché pour "20+ années" d'expérience, mis à jour dans la page "À propos" et le Hero. Le débat est clos.

### Points techniques à noter
| Élément | État | Détail |
|---|---|---|
| **`styles/globals.css`** | ⚠️ Orphelin | Fichier CSS avec thème shadcn/ui par défaut — **non importé**, seul `app/globals.css` est actif |
| **`trust-band.tsx`** | ⚠️ Non utilisé | Composant existant mais pas inclus dans aucune page |
| **`theme-provider.tsx`** | ⚠️ Non utilisé | Provider next-themes existe mais pas intégré dans le layout |
| **Logos hébergés externement** | ✅ Résolu | Les logos et la favicon ont été rapatriés en local dans `public/images/logo/` |
| **Images hero** | ℹ️ Lourdes | 1-1.5 Mo chacune, non optimisées (Next.js images unoptimized) |
| **Formulaire contact** | ℹ️ Simulé | `handleSubmit` fait un `setTimeout` — pas de vrai envoi backend |
| **Footer "30 ans"** | ✅ Correct | Conforme au CDC |
| **Bilingue FR/EN** | 🔲 Non implémenté | Prévu dans le CDC mais pas encore développé |
| **SEO par page** | 🔲 Partiel | Seul le layout racine a des meta, pas les pages internes |

---

## 8. 🎯 Roadmap fonctionnelle (selon le CDC)

### Phase 1 — Inclus au lancement
- [x] Refonte du site vitrine en FR
- [x] Accueil complet avec toutes les sections
- [x] Pages internes détaillées (Oracle, Services, Solutions, Support, Contact, À propos)
- [x] Formulaire de contact (structure)
- [x] Navigation responsive (header desktop + mobile)
- [x] Design system SMART2D
- [ ] Version anglaise (EN)
- [x] SEO complet par page (Tâche A1)
- [x] Formulaire fonctionnel (envoi réel) (Tâche D1)
- [x] Responsive finalisé (tous breakpoints) (Tâche E2)
- [ ] Harmonisation des espacements et typographies
- [ ] Tests d'affichage mobile/tablette/desktop
- [x] Ancres de navigation dans les Hero (style Oracle) (Tâche E1)
- [x] Build sans erreur + déploiement cPanel (Tâches F1/F2)

### Phase 2 — Ultérieur
- [ ] Démo OSCAR (vidéo/captures/parcours interactif)
- [ ] Blog
- [ ] Ressources/FAQ
- [ ] Espace client

---

## 9. 📐 Breakpoints de référence

| Format | Largeur | Classe Tailwind | Exigence |
|---|---|---|---|
| Mobile | < 768px | Par défaut | Navigation compacte, textes lisibles, boutons touchables |
| Tablette | 768–1279px | `md:` / `lg:` | Grilles adaptées, sections aérées |
| Desktop | 1280–1599px | `lg:` / `xl:` | Composition riche, largeur contrôlée |
| Grand écran | ≥ 1600px | `2xl:` | Pas de grandes zones vides |

Container max : `max-w-7xl` (80rem = 1280px)

---

## 10. 🔑 Règles de développement

### Conventions de code
1. **Composants** : "use client" uniquement quand nécessaire (hooks, events, animations)
2. **Styles** : Tailwind CSS inline (classes directement dans le JSX)
3. **Couleurs** : Toujours utiliser les variables SMART2D, jamais de couleurs "brutes" non documentées
4. **Animations** : Framer Motion `whileInView` avec `viewport={{ once: true }}`
5. **Icônes** : Lucide React uniquement
6. **Images** : Next.js `<Image>` component
7. **Liens** : Next.js `<Link>` component
8. **Utilitaire** : `cn()` de `lib/utils.ts` pour fusionner les classes conditionnellement
9. **Responsive** : Mobile-first, enrichir vers desktop

### Structure d'une section type
```tsx
"use client"
import { motion } from "framer-motion"

export function MySection() {
  return (
    <section className="py-20 lg:py-28 bg-[#F8F6F4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-[#EE3329] font-semibold text-sm uppercase tracking-wider mb-4">
            Label
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#221E1F]">
            Titre de section
          </h2>
        </motion.div>
        {/* Contenu */}
      </div>
    </section>
  )
}
```

### Structure d'une page interne type
```tsx
// app/ma-page/page.tsx
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MyContent } from "./my-content"

export default function MyPage() {
  return (
    <>
      <Header />
      <main><MyContent /></main>
      <Footer />
    </>
  )
}
```

---

## 11. 📊 Inventaire des assets

### Images Hero (`public/images/hero/`)
| Fichier | Taille | Slide |
|---|---|---|
| `oracle-database.png` | 1.2 Mo | Slide 1 — Oracle Database |
| `cloud-oci.png` | 1.1 Mo | Slide 2 — Cloud OCI |
| `linux-unix.png` | 1.1 Mo | Slide 3 — Linux/Unix |
| `security.png` | 1.1 Mo | Slide 4 — Sécurité IT |
| `high-availability.png` | 1.2 Mo | Slide 5 — Haute Disponibilité |
| `support-mco.png` | 1.4 Mo | Slide 6 — Support & MCO |
| `formation.png` | 1.4 Mo | Slide 7 — Formation |
| `slide-1.png` | 1.1 Mo | Non utilisé |
| `slide-2.png` | 1.3 Mo | Non utilisé |

### Screenshots de design (racine du projet)
Fichiers `.png` à la racine : `content.png`, `desktop-final.png`, `hero-new.png`, `mobile-final.png`, `mobile-hero.png`, `mobile-new.png`, `mobile.png`, `new-hero.png`, `oracle-hero.png`, `scrolled-header.png`, `scrolled.png`, `slide-next.png`, `top.png` — Ce sont des **captures d'écran de référence** pour le design, pas des assets du site.

---

## 12. 📝 Journal des modifications

### 26 juin 2026
- **Déploiement initial sur GitHub et Vercel** : 
  - Push complet de toutes les branches locales vers le nouveau dépôt GitHub distant (`Profzen/smart2d`).
  - Lancement des premiers builds Vercel.
- **Correction du build Vercel (Package Manager Conflict)** :
  - Suppression du fichier `pnpm-lock.yaml` sur `develop` car il entrait en conflit avec le flux de travail purement `npm` du projet. Vercel utilise désormais correctement `package-lock.json`.
- **Mise en place de l'environnement SMTP (Google Workspace)** :
  - Création d'un fichier `.env.local` type contenant les variables nécessaires à Nodemailer (`SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS`, `CONTACT_EMAIL`) pour communiquer via le SMTP de Google Workspace (port 465, App Password).
- **Correction de la route API de contact (Tâche D1 - Fix)** sur la branche `aziz/fix-contact-500` :
  - L'API `/api/contact/route.ts` retournait une erreur 500 silencieuse sur Vercel à cause de l'absence des variables d'environnement.
  - Ajout d'une vérification stricte : le backend rejette désormais la requête proprement et renvoie un message détaillé pour aider au débogage Vercel si `SMTP_USER` ou `SMTP_PASS` sont manquants.
  - Push de la branche sur GitHub et sur l'instance locale Gitea (`http://192.168.132.128:3000/Aziz/Smart2d-site.git`) pour création et validation de la PR vers `develop`.

### 24 juin 2026
- **Fusion et mise à jour de `develop`** : `develop` est désormais synchronisée à 100% avec les deux dernières PRs.
- **Correction du responsive & Scroll horizontal (Tâche E2)** (branche `aziz/responsive-fix`) :
  - Verrouillage global avec `overflow-x-hidden` sur la balise `<html>`.
  - Application de `flex-wrap` sur les contrôles du carrousel de l'accueil pour éviter le débordement sur petits écrans (< 340px).
  - Réduction de la largeur du badge Hero (`text-xs` et `flex-wrap`).
  - Réduction des paddings excessifs des boutons CTA sur mobile pour empêcher la cassure du viewport.
- **Rapatriement des logos en local & Création de Favicon (branche `aziz/local-logos-favicon`)** :
  - Téléchargement et intégration locale de `smart2d-logo-light.png` et `smart2d-logo-dark.png` dans `public/images/logo/`.
  - Mise à jour de `header.tsx` et `footer.tsx` pour éliminer la dépendance à Vercel Blob Storage.
  - Création d'une favicon vectorielle ultra-nette (`favicon.svg`) respectant la charte graphique et nettoyage du layout.
- **Documentation technique & Processus de Déploiement** :
  - Création du fichier de procédure `DEPLOIEMENT.md` détaillant étape par étape comment procéder aux mises à jour sur cPanel (Backups, commandes Git Terminal, plan de secours).
  - Suivi officiel du fichier `memoire.md` (retiré de `.gitignore`) afin qu'il soit poussé sur le repo distant comme source de vérité partagée.

### 23 juin 2026
- **Refonte visuelle de la page Solutions (OSCAR & Smart Transfert)** sur la branche `aziz/oscar-section-refonte` :
  - **Mise à jour du Layout** : Remplacement du fond sombre par un design clair, implémentation d'une grille asymétrique (5/7) et restructuration des fonctionnalités en grille 2x2.
  - **Traitement des Images (Rognage physique)** : Création et exécution de scripts de traitement d'image pour éliminer les "marges blanches" et zones transparentes directement incluses dans les fichiers PNG fournis (`oscar-app.png` et `oscar-dashboard.png`), évitant ainsi les rognages CSS hasardeux.
  - **Intégration UX Plein Écran** : Les captures d'écran (Application OSCAR, Dashboard OSCAR, Dashboard Smart Transfert) épousent parfaitement leur grille sans fond parasite, avec l'application directe de `rounded-2xl`, `shadow-xl`, et un effet dynamique d'agrandissement (`scale-1.03` à `1.10`) au survol.
  - **Nouveaux Assets** : Intégration et renommage de la capture "Smart t" en `smart-transfert-dashboard.png`, placée avant les fonctionnalités de Smart Transfert.
  - **Déploiement Git** : L'intégralité du travail (code + scripts + images lourdes) a été committée et pushée avec succès sur le serveur remote distant.

### 22 juin 2026
- **Recette de la branche `develop` et audit des contenus** :
  - Vérification complète de l'état d'avancement des contenus par rapport au fichier `ct.txt`.
  - Constat de l'incomplétude des tâches de Marius : la baseline de l'accueil (B1), le domaine IA & Automatisation (B2), les cibles du footer (B3) et l'OSCAR Academy (C2) ne sont pas présents dans le code source de `develop`, bien que la structure "Solutions" sur la page À propos ait été commencée (C1).
- **Mise à jour du Plan d'Implémentation** :
  - Réorganisation de l'échéancier avec des estimations de durées précises et un planning de 3 jours (Lundi 22 au Mercredi 24 Juin) pour atteindre l'objectif de livraison ce mercredi.
  - Ajout des temps passés pour les tâches terminées d'Aziz à des fins de cohérence.
  - Correction de coquilles de fusion dans le fichier de planification.
- **Vérification technique de la base de code** :
  - Installation propre des dépendances (`npm ci`) et exécution d'un build de production avec succès (`npm run build` OK).

### 19 juin 2026
- **Résolution de conflits Git** : Merge propre de `develop` dans la branche `aziz/ancres-hero` (Tâche E1), permettant de conserver à la fois le nouveau système d'ancres et les habillages visuels abstraits (`HeroDecoration`).
- **Tâche E2 terminée** : Finalisation du responsive design global sur la branche `aziz/responsive-final` :
  - Ajustement des ancres de navigation pour un affichage pleine largeur dynamique sur mobile (`flex-1 sm:flex-none`).
  - Correction de la grille de la section Solutions pour s'empiler sur une colonne sur petits écrans (`grid-cols-1 sm:grid-cols-2`).
  - Validation du responsive pré-existant sur les autres sections (A propos, Services, Contact).
  - Validation technique via build de production local avec succès.
- **Tâches F1 & F2 terminées** : Clôture de la phase technique (Aziz) sur la branche `aziz/optimisation-images` :
  - Audit d'accessibilité, SEO, de bonnes pratiques validé avec succès (F2).
  - Optimisation drastique des 7 lourdes images du composant Hero (conversion PNG vers WebP compressé). Poids total réduit de ~11 Mo à ~1.5 Mo (F1).
  - Suppression de deux slides non utilisées dans le dossier `public/images/hero/`.
  - Le build de production final passe avec succès. Code validé.
- **Correction UI (Menu)** : Suppression du lien textuel "Contact" dans le composant `header.tsx` (branche `aziz/fix-menu-header`) pour éviter le doublon avec le bouton "Nous contacter".
- **Début d'intégration du Contenu (Marius)** : Fusion de la branche `Marius/test_fusion` sur `develop` :
  - **Tâche C1 complétée** : Intégration complète de la section "Solutions" (OSCAR et Smart Transfert) au milieu de la page "À propos".
  - **Correction d'incohérence** : Harmonisation des années d'expérience à "20+ années" (au lieu de 30) suite à l'arbitrage.
  - **Mises à jour textuelles mineures** : Ajustements dans le `footer.tsx`, le composant `hero.tsx` et `why-section.tsx`.

### 18 juin 2026
- **Mise à jour du workflow Git** — Nouvelle stratégie de branches :
  - Ajout de la branche `develop` comme branche d'intégration principale
  - `main` réservé aux versions ultra-stables (production uniquement)
  - Convention de nommage des branches : `nom/tache-explicite` (ex. `aziz/hero-ancres`, `marius/textes-accueil`)
  - Mise à jour de `sprint.md` et `memoire.md` en conséquence
- **Tâche A1** : Intégration Meta SEO (v1.2) avec la mise en place des balises Title et Description sur toutes les routes selon le fichier `ct.txt`.
- **Tâche D1** : Implémentation du formulaire de contact fonctionnel avec création de la route API backend pour l'envoi et ajout des nouveaux champs de demande.
- **Tâche E1** : Création et intégration du système d'ancres de navigation intra-page (`HeroAnchors` style Oracle) en haut des sections Hero.
- **Correction UI (Header)** : Résolution du problème de lisibilité de la barre de navigation sur fond clair avec une détection dynamique des couleurs du Hero.
- **Amélioration UI (Hero)** : Création et ajout d'habillages visuels minimalistes (`HeroDecoration` avec grilles et halos) pour équilibrer l'espace à droite des sections Hero sur les pages secondaires.

### 17 juin 2026
- **Création du `memoire.md`** — Document initial avec contexte complet
- **Lecture complète du projet** — Tous les fichiers source analysés
- **Identification des incohérences** — Fichiers orphelins, composants non utilisés
- **Ajout du `cdc.txt`** par l'utilisateur — Cahier des charges v1.0
- **Ajout du `ct.txt`** par l'utilisateur — Contenus FR optimisés v3 (textes, SEO par page)
- **Correction `sprint.md`** par l'utilisateur — "Alaz" corrigé en "Aziz"
- **Réécriture complète du `sprint.md`** (v1 → v2.0) :
  - Formatage markdown propre avec tableaux et checkboxes
  - Checklist détaillée par page (statut ✅/🔲/⚠️ pour chaque élément)
  - Ajout des meta SEO par page (extraits du `ct.txt`)
  - Ajout des tâches techniques manquantes (formulaire fonctionnel, Lighthouse, bilingue, optimisation images)
  - Ajout des points de vigilance (logo Oracle, captures, mentions légales, Node.js cPanel)
  - Enrichissement des conventions de commits
  - Critères de fin de projet mis à jour avec checklist complète
- **Création de `up.txt`** — Fichier détaillant les mises à jour directes à apporter au CDC .docx (passant de v1.0 à v1.1).

---

## 13. 🗂️ Fichiers de contexte du projet

| Fichier | Rôle |
|---|---|
| **`memoire.md`** | 👈 Ce fichier — Contexte global, architecture, règles, avancement |
| **`cdc.txt`** | Cahier des charges officiel v1.0 — Source de vérité pour les fonctionnalités et le périmètre |
| **`ct.txt`** | Contenus FR optimisés v3 — Source de vérité pour les textes, SEO et contenus à intégrer |
| **`Plan_Implementation_et_Taches_SMART2D.md`** | Organisation du travail — Répartition, checklist par page, estimations et planning jour par jour |
| **`up.txt`** | Fichier de mise à jour listant les écarts entre le code actuel et le CDC pour mettre à jour le `.docx` |

> **Règle** : Ce fichier `memoire.md` doit être mis à jour après chaque session de travail significative. Il sert de point d'entrée pour toute nouvelle discussion.
