# Procédure de déploiement cPanel - SMART2D

Ce document décrit la procédure interne de déploiement d'une mise à jour du site Next.js sur notre environnement cPanel.

## 1. Sauvegarde (Backup)
1. Ouvrir le Terminal dans cPanel (ou se connecter via SSH).
2. Se déplacer dans le répertoire parent de l'application.
3. Créer une archive complète du répertoire de l'application :
   ```bash
   tar -czvf backup_smart2d_$(date +%Y%m%d).tar.gz chemin/vers/application
   ```
4. Conserver cette archive par sécurité avant toute manipulation.

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

### Option 1 : Compilation sur le serveur (Recommandée)
Dans le terminal cPanel, exécuter les commandes suivantes pour mettre à jour les dépendances et recompiler l'application :
1. Installation propre des dépendances :
   ```bash
   npm ci
   ```
2. Lancement du build de production :
   ```bash
   npm run build
   ```
*Note : Si la commande `npm run build` échoue (ex: erreur OOM due aux limites de RAM du cPanel), passez à l'Option 2.*

### Option 2 : Compilation locale (Alternative)
Si le serveur n'a pas assez de RAM pour compiler l'application :
1. Sur votre machine locale, assurez-vous d'être sur la branche `develop` à jour et lancez la compilation :
   ```bash
   npm ci
   npm run build
   ```
2. Compressez les dossiers `.next/` et `public/` générés localement en `.zip`.
3. Dans le Gestionnaire de fichiers cPanel, supprimez les anciens dossiers `.next/` et `public/` du serveur.
4. Uploadez votre archive `.zip` sur le serveur et extrayez-la pour remplacer les anciens dossiers.

## 4. Redémarrage de l'application
1. Dans cPanel, ouvrir l'outil "Setup Node.js App".
2. Sélectionner l'application SMART2D.
3. Cliquer sur le bouton "Restart".
4. Vider le cache du navigateur web et vérifier la prise en compte de la mise à jour en production.
