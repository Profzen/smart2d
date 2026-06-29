# Plan d'Implémentation des Correctifs UI/UX et Contenus

Ce document détaille la stratégie et les étapes validées pour réaliser l'ensemble des correctifs demandés.

## Stratégie de Branches

Le travail est divisé en 3 branches distinctes pour une meilleure organisation.

### 1. Branche : `aziz/ui-global-improvements` (UI et Navigation globale)
*   **Bouton Retour en haut (Scroll-to-top)** : Ajout d'une flèche discrète en bas à droite de l'écran qui apparaît uniquement après avoir dépassé la section Hero, permettant de remonter d'un clic.
*   **Indicateur de page active** : Modification du composant `header.tsx` pour détecter la route courante et styliser le lien actif (texte en couleur rouge `--smart2d-red` avec un petit trait souligné).
*   **Lisibilité des cartes (Cards)** : Modification des classes CSS sur les descriptions des cartes pour améliorer le contraste (texte assombri et légère augmentation de l'épaisseur de la police `font-medium`) de manière harmonisée sur :
    *   Page Accueil (Expertises)
    *   Page Services
    *   Page Support & Formation
    *   Page Oracle & Infrastructure

### 2. Branche : `aziz/hero-anchors-refonte` (Hero et Ancres)
*   **Ancres horizontales** : Alignement de tous les boutons d'ancre sur une seule ligne horizontale et léger décalage vers le haut (vers la barre de navigation).
*   **Ancres sur Mobile** : Implémentation d'un mini-carrousel défilant automatiquement (toutes les 2 secondes) pour les ancres sur les petits écrans.
*   **Boutons Hero fixes** : Sortie des boutons "Demander un diagnostic..." et "Découvrir nos expertises" de la boucle du carrousel afin qu'ils restent figés pendant que l'image de fond et le texte de la slide défilent.
*   **Nouvelles Slides (Accueil)** : Ajout de 2 nouvelles slides au composant Hero de l'accueil pour OSCAR et Smart Transfert, en utilisant les images existantes et en rédigeant des descriptions courtes.

### 3. Branche : `marius/contenu-ajouts` (Nouveaux contenus spécifiques)
*   **Oracle Forms et APEX** : Ajout d'une nouvelle case dans la section d'expertise de l'accueil avec la description : "Développement, migration et modernisation de vos applications métiers avec Oracle Forms et APEX pour des interfaces performantes et sécurisées."
*   **WhatsApp (Page Contact)** : Intégration de l'icône WhatsApp et du lien direct `https://wa.me/22893375155` sous l'adresse physique dans le composant `contact-content.tsx`.

### 4. Branche : `aziz/hero-images-optimisation` (Visuels du Hero)
*   **Génération d'images** : Création de 4 nouvelles images hyper réalistes mettant en scène des experts IT et business noirs/métis.
*   **Optimisation WebP** : Conversion des 4 images générées (.png vers .webp) avec `sharp` pour garantir des performances optimales.
*   **Mapping contextuel** : Assignation de chaque image à la slide appropriée (ex: datacenter pour Oracle, cybersécurité pour Audit).
*   **Logique d'alternance** : Garantie absolue qu'aucune image n'est utilisée de manière consécutive dans le carrousel des 13 slides.

## Plan de Vérification

1.  **Tests Visuels (Desktop & Mobile)** : Vérification du responsive des nouvelles ancres, du bouton scroll-to-top, et de la lisibilité des cartes.
2.  **Tests d'Interaction** : Vérification du lien WhatsApp, du clic sur les ancres, du carrousel mobile, et de la fixité des boutons du Hero.
3.  **Build** : Build local (`npm run build`) validé sans erreur avant toute création de PR ou fusion vers `develop`.
