# Procédure de déploiement cPanel - SMART2D

Ce document décrit la procédure interne de déploiement d'une mise à jour du site Next.js sur notre environnement cPanel.

## 1. Sauvegarde (Backup)
1. Se connecter au cPanel, ouvrir le Gestionnaire de fichiers.
2. Aller dans le dossier racine de l'application.
3. Sélectionner tous les fichiers et dossiers actuels, puis les compresser en une archive .zip.
4. Nommer l'archive backup_smart2d_YYYYMMDD.zip et la conserver par sécurité.

## 2. Récupération des sources (Terminal cPanel)
1. Ouvrir le Terminal dans cPanel (ou se connecter via SSH).
2. Se déplacer dans le répertoire de l'application :
   ```bash
   cd chemin/vers/application
   ```
3. Récupérer les dernières modifications de la branche cible (develop) :
   ```bash
   git fetch origin
   git checkout develop
   git pull origin develop
   ```

## 3. Installation et Compilation
Dans le terminal cPanel, exécuter les commandes suivantes pour mettre à jour les dépendances et recompiler l'application :
1. Installation propre des dépendances :
   ```bash
   npm ci
   ```
2. Lancement du build de production :
   ```bash
   npm run build
   ```

*Note technique : Si la commande `npm run build` échoue (ex: erreur de mémoire/OOM), cela est dû aux limites de RAM imposées par le serveur cPanel. Dans ce seul cas, la compilation devra être effectuée en local, et le dossier `.next/` résultant transféré manuellement via le Gestionnaire de fichiers pour écraser l'ancien.*

## 4. Redémarrage de l'application
1. Dans cPanel, ouvrir l'outil "Setup Node.js App".
2. Sélectionner l'application SMART2D.
3. Cliquer sur le bouton "Restart".
4. Vider le cache du navigateur web et vérifier la prise en compte de la mise à jour en production.
