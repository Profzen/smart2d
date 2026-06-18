# SMART2D Services - Plan d'implémentation et Répartition des tâches

Date : 18 juin 2026  
Statut : Document de distribution équipe (Aziz & Marius)  
Objectif : Découper la finalisation de la refonte du site en tâches autonomes, documentées, validables et compatibles avec un travail en parallèle.

---

## 1. Règles de travail obligatoires

### 1.1 Hygiène Git avant toute tâche

Chaque tâche doit démarrer avec :

```bash
git switch develop
git fetch origin
git pull --ff-only origin develop
git switch -c <nom>/<description-courte>
# Exemples : aziz/hero-ancres ou marius/textes-accueil
```

Règles :
- `main` est réservé aux versions ultra-stables (production).
- Tous les développements se font sur des branches issues de `develop`.
- Une branche = une tâche ou un petit lot cohérent.
- Ne pas modifier des fichiers hors périmètre de la tâche.

### 1.2 Validation minimale par PR (Pull Request)

**Interface & Technique (Aziz) :**
```bash
npm run lint
npm run build
```
- Vérification visuelle sur mobile (< 768px), tablette, desktop, grand écran.
- Vérification des erreurs de console.

**Contenu (Marius) :**
- Relecture orthographique et syntaxique.
- Vérification stricte de la conformité avec le fichier `ct.txt` (contenu du site v4).
- Vérification des informations de l'entreprise (coordonnées, "30 ans d'expérience").

**Validation Croisée :**
- Aziz valide les PRs de Marius (pour s'assurer qu'aucune structure UI n'est cassée).
- Marius valide les PRs d'Aziz (pour s'assurer que le rendu du texte et le sens sont respectés).

---

## 2. État actuel vérifié

### 2.1 UI/UX et Technique (Aziz)
- **Framework** : Next.js 16 (App Router), React 19, Tailwind CSS v4, Framer Motion.
- **Pages** : Structure et routage des pages principales et internes fonctionnels.
- **Formulaire de contact** : Actuellement simulé avec un `setTimeout`. L'envoi backend réel est manquant.
- **SEO** : Meta Title et Description doivent être mis à jour suite aux évolutions du CDC v1.2.
- **Images Hero** : Lourdes (1 à 1.5 Mo) et non optimisées (`images.unoptimized: true`).
- **Thème** : Palette SMART2D (Rouge, Anthracite, Crème, Navy) configurée dans `app/globals.css`.

### 2.2 Contenu et Informations métier (Marius)
- **Source de vérité** : `ct.txt` (contenu du site mis à jour v4) et `cdc.txt` (cahier des charges v1.2).
- **Baseline et Cibles** : SÉCURISER • OPTIMISER • MIGRER • DIGITALISER. Cibles : Banques, institutions, télécoms.
- **Nouveaux Ajouts** : Intégration de "OSCAR Academy" et du domaine "Intelligence Artificielle & Automatisation".
- **Contradiction résolue** : Le CDC (cahier des charges) et le `ct.txt` (contenu du site) confirment **"Plus de 30 ans d'expertise Oracle"**.
- **Validation légale** : Le statut "ORACLE PARTNER" est confirmé et utilisable.

---

## 3. Découpage global et dépendances

| Bloc | Priorité | Responsable | Peut être pris seul | Dépend de | Impact principal |
|---|---:|---|---|---|---|
| A. SEO et Meta | 1 | Aziz | Oui | Aucun | Référencement Google |
| B. Contenus de Base | 1 | Marius | Oui | Aucun | Exactitude des offres |
| C. Nouvelles Offres | 1 | Marius | Oui | B | IA & OSCAR Academy |
| D. Fonctionnalités | 1 | Aziz | Oui | Aucun | Formulaire de contact |
| E. Améliorations UI/UX | 2 | Aziz | Partiel | B, C | Navigation & Design |
| F. Déploiement & Build | 3 | Aziz | Non | A, D, E | Mise en production |

---

## 4. Tableau de répartition des tâches

### 4.1 Tâches Contenu (Marius) — `marius/*`

| ID | Tâche | Résultat attendu | Fichiers probables | Risque conflit |
|---|---|---|---|---|
| B1 | Textes Accueil | H1, baseline, cibles, 5 raisons conformes au `ct.txt` (contenu du site) | `app/page.tsx`, `sections/*` | Moyen |
| B2 | Ajout IA & Automatisation | Nouvelle carte dans "Expertises" et section "Services" | `app/services/services-content.tsx`, `sections/expertise.tsx` | Moyen |
| B3 | Mise à jour Footer | Texte de description du footer + coordonnées | `components/layout/footer.tsx` | Faible |
| C1 | Ajout Solutions dans "À propos" | Sections OSCAR, Smart Transfert et OSCAR Academy ajoutées | `app/a-propos/about-content.tsx` | Moyen |
| C2 | Ajout OSCAR Academy | Présentation dans les pages "Solutions" et "Support" | `solutions-content.tsx`, `support-formation-content.tsx` | Moyen |

### 4.2 Tâches UI/UX et Techniques (Aziz) — `aziz/*`

| ID | Tâche | Résultat attendu | Fichiers probables | Risque conflit |
|---|---|---|---|---|
| A1 | Intégration Meta SEO (v1.2) | Title et Description sur toutes les routes selon `ct.txt` (contenu du site) | `app/**/page.tsx` ou `layout.tsx` | Faible |
| D1 | Formulaire fonctionnel | Implémenter le backend d'envoi du formulaire (et ajout champs IA/OSCAR Academy) | `app/contact/contact-content.tsx`, `/api/` | Faible |
| E1 | Ancres Hero | Liens intra-page dans le Hero Accueil (style Oracle) | `components/sections/hero.tsx` | Moyen |
| E2 | Responsive design final | Affichage clean sur tous les breakpoints | Tous les composants UI | Élevé |
| F1 | Optimisation images Hero | Images compressées manuellement pour cPanel | `public/images/hero/*` | Faible |
| F2 | Audit Lighthouse & Build | Build OK, score optimal de performance/accessibilité | Code source | Faible |

---

## 5. Lots très découpés (Détail de l'implémentation)

### Lot A. SEO et Meta (Aziz)
**Objectif :** Assurer le référencement de chaque page avec les nouvelles balises (Banques, Télécoms, OSCAR Academy).
- **Action :** Exporter les objets `metadata` dans chaque fichier `page.tsx` en utilisant les valeurs strictes du fichier `ct.txt` (contenu du site, section SEO).

### Lot B. Contenus de Base (Marius)
**Objectif :** Garantir que le discours de marque intègre les nouvelles directives.
- **Action :** Reprendre `ct.txt` (contenu du site) et injecter la baseline SÉCURISER • OPTIMISER • MIGRER • DIGITALISER. 
- **Action :** Créer la section pour le domaine "Intelligence Artificielle & Automatisation".

### Lot C. Nouvelles Offres : OSCAR Academy et Solutions (Marius)
**Objectif :** Compléter l'offre de services avec la dimension Academy.
- **Action :** Créer les blocs visuels pour présenter OSCAR, Smart Transfert ET OSCAR Academy dans la page "À propos", "Solutions" et "Support & Formation".

### Lot D. Formulaire de contact (Aziz)
**Objectif :** Rendre le site opérationnel commercialement.
- **Action :** Retirer le `setTimeout` du `handleSubmit`. Créer une route API Next.js (`app/api/contact/route.ts`). Mettre à jour le select "Type de demande" pour inclure IA et OSCAR Academy.

### Lot E. Améliorations UI/UX (Aziz)
**Objectif :** Faciliter la navigation et parfaire le rendu.
- **Action :** Ajouter une barre de liens d'ancrage sous le Hero (Slide) qui scrolle doucement vers les sections. Repasser sur le responsive mobile/tablette.

---

## 6. Proposition de choix initial

Pour commencer sans conflit dès aujourd'hui :
1. **Marius** prend **B1** (Textes Accueil) ou **B2** (Ajout IA).
2. **Aziz** prend **A1** (Meta SEO) ou **D1** (Formulaire de contact).

## 7. Validation attendue avant de merger la PR

Chaque développeur devra valider ces critères sur sa Pull Request :
- [ ] La branche part bien de `develop`.
- [ ] Le build local passe (`npm run build`).
- [ ] La vue mobile ne présente pas de débordement horizontal.
- [ ] Le texte respecte la casse et l'orthographe (Marius).
- [ ] Les couleurs utilisées proviennent bien des tokens CSS SMART2D (Aziz).
- [ ] L'autre membre de l'équipe a approuvé les changements.