# Déploiement cPanel : Mise à jour SMART2D

Ce document décrit la procédure stricte pour déployer une mise à jour du site Next.js sur cPanel, où une version est déjà existante.

## 1. 🛡️ Sauvegarde (Backup) - OBLIGATOIRE
*Ne jamais écraser la version en production sans copie de sécurité.*
1. Connectez-vous au **cPanel** > **Gestionnaire de fichiers**.
2. Allez dans le dossier racine de l'application (ex: `smart2d-app/` ou `public_html/`).
3. Sélectionnez tous les fichiers et dossiers actuels, puis cliquez sur **Compresser** (format `.zip`).
4. Nommez l'archive `backup_smart2d_YYYYMMDD.zip` et téléchargez-la sur votre ordinateur.

## 2. ⚙️ Préparation du Build (Local)
Sur votre machine de développement :
1. Assurez-vous d'être sur la branche `develop` à jour :
   ```bash
   git checkout develop
   git pull origin develop
   ```
2. Installez les dépendances propres et lancez la compilation :
   ```bash
   npm ci
   npm run build
   ```
3. Préparez un dossier d'envoi. Vous n'aurez besoin d'envoyer **que** les éléments suivants :
   - Le dossier `.next/` (contient l'application compilée)
   - Le dossier `public/` (contient les nouvelles images et favicons)
   - Le fichier `package.json` et `package-lock.json`
   - *(Optionnel)* Le fichier `.env` s'il y a eu de nouvelles variables.

## 3. 🚀 Déploiement (cPanel)
1. Dans le **Gestionnaire de fichiers** cPanel, supprimez l'ancien dossier `.next/` et l'ancien dossier `public/` du serveur.
2. Uploadez vos nouveaux dossiers `.next/` et `public/` (il est conseillé de les zipper localement, de les uploader, puis d'utiliser l'outil **Extraire** de cPanel pour gagner du temps).
3. Remplacez le fichier `package.json` par le nouveau.
4. *Note : Ne supprimez pas le dossier `node_modules/` du serveur s'il n'y a pas eu de gros changements de dépendances. Sinon, supprimez-le et relancez l'installation des dépendances depuis l'interface cPanel.*

## 4. 🔄 Redémarrage
1. Dans cPanel, allez dans **Setup Node.js App** (ou l'outil équivalent que vous utilisez).
2. Sélectionnez votre application SMART2D.
3. Cliquez sur le bouton **Restart** (Redémarrer).
4. Videz le cache de votre navigateur et vérifiez que le site en production est à jour (Vérifiez les logos et le scroll horizontal).
