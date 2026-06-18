# SMART Transfert - Plan d'implémentation final

Date : 21 mai 2026  
Statut : document de distribution équipe  
Objectif : découper les changements de l'application en tâches autonomes, documentées, validables et compatibles avec un travail en parallèle.

---

## 1. Règles de travail obligatoires

### 1.1 Hygiène Git avant toute tâche

Chaque tâche doit démarrer avec :

```bash
git rev-parse --show-toplevel
git branch --show-current
git status --short --untracked-files=all
git switch develop
git fetch origin
git pull --ff-only origin develop
git switch -c <type>/<ticket>-<description-courte>
git status --short --untracked-files=all
```

Règle :

- si le working tree n'est pas propre, arrêter ;
- si le pull/rebase échoue, arrêter ;
- une branche = une tâche ou un petit lot cohérent ;
- ne pas modifier des fichiers hors périmètre ;
- pas de payload frontend inventé sans contrat backend.

### 1.2 Contrat API avant code

Tout lot qui touche frontend + backend doit livrer :

- schéma request ;
- schéma response ;
- erreurs attendues ;
- exemple JSON de succès ;
- exemple JSON d'erreur ;
- test backend du contrat ;
- client frontend aligné ;
- mock MSW aligné ;
- documentation dans `docs/api/SMART_TRANSFERT_API_CONTRACT.md` ;
- export OpenAPI si endpoint backend modifié.

Objectif : éviter les divergences de payload frontend/backend.

### 1.3 Validation minimale par PR

Backend :

```bash
.venv\Scripts\python.exe -m pytest <tests ciblés> -q
.venv\Scripts\python.exe scripts\export_openapi.py
git diff --check
```

Frontend :

```bash
pnpm exec tsc --noEmit --pretty false
pnpm vitest run <tests ciblés>
pnpm build
git diff --check
```

Documentation :

- vérifier que les exemples JSON correspondent aux tests ;
- préciser les champs ajoutés, supprimés ou legacy ;
- mettre à jour les mocks si le frontend est concerné.

---

## 2. État actuel vérifié

### 2.1 Backend existant utile

- `audit_logs` existe déjà, mais doit être élargi.
- `AuditService` existe déjà avec masquage de données sensibles.
- `providers` existe avec `environment = simulated | sandbox | production`.
- Des providers simulés existent déjà : RIA, MoneyGram, NAFA, Kori, Transfast, etc.
- `deposits` et `withdrawals` utilisent encore `provider_reference_number`, champ à rendre legacy.
- `customers` et `beneficiaries` ont déjà prénom/nom séparés, mais pas encore une normalisation complète de recherche.
- `api_transactions` existe déjà pour tracer les appels API prestataires.
- `etl_export_jobs` existe déjà pour l'ETL.
- Aucune vraie table générale `app_settings` n'a été confirmée dans les modèles backend ; si une table de configuration existe en base, il faudra l'harmoniser.

### 2.2 Frontend existant utile

- Clients API déjà présents dans `lib/api/*`.
- Mocks MSW déjà présents dans `mocks/handlers/*`.
- Tests frontend déjà présents pour transferts, retraits, dépôts, rapports, recherche, dashboard.
- Des reçus imprimables existent déjà pour dépôt, retrait et rapport.
- Attention : avant de commencer une nouvelle branche frontend, vérifier que les travaux en cours sur le détail retrait sont terminés, commités ou stashed.

---

## 3. Découpage global et dépendances

| Bloc | Priorité | Peut être pris seul | Dépend de | Impact principal |
|---|---:|---|---|---|
| A. Audit technique de l'existant | 1 | Oui | Aucun | Clarifier ce qui existe vraiment |
| B. Contrats et documentation API | 1 | Oui | A | Empêcher divergences payload |
| C. Références prestataires | 1 | Partiel | A/B | Socle retrait/émission |
| D. Simulation prestataires | 2 | Oui après B | B/C partiel | Démo complète |
| E. Émission refondue | 3 | Non | C/D/G | Flux émission final |
| F. Retrait dynamique | 3 | Non | C/D/B | Flux retrait final |
| G. Données personnes | 2 | Oui | A | Clients, bénéficiaires, documents |
| H. Recherche SMART Transfert | 4 | Non | C/G/J | Recherche interne |
| I. Sessions guichet | 3 | Oui | A/J | Fermeture caisse |
| J. Audit élargi | 2 | Oui | A | Traçabilité globale |
| K. Rapports Excel | 4 | Non | I/J/H | Rapport final |
| L. Rôles, scopes, délégations | 3 | Partiel | A/J | Accès et périmètres |
| M. Réconciliation prestataire | 4 | Non | C/D/J | Cas réseau ambigus |
| N. UI/UX finalisation | 5 | Oui | Selon écran | Lisibilité, thèmes, reçus |

---

## 4. Lots très découpés

Chaque lot ci-dessous est conçu pour être choisi par une personne sans trop empiéter sur les autres.

---

## A. Audit technique de l'existant

### A1. Audit des modèles backend existants

Objectif : produire un état réel des tables actuelles.

À vérifier :

- `providers`
- `deposits`
- `withdrawals`
- `customers`
- `beneficiaries`
- `cashiers`
- `audit_logs`
- `api_transactions`
- `etl_export_jobs`
- table de configuration existante ou non

Livrable :

- `docs/implementation/audit_schema_existant.md`
- liste des tables existantes ;
- champs déjà disponibles ;
- champs manquants ;
- champs à garder en legacy.

Validation :

- lecture modèles SQLAlchemy ;
- lecture migrations Alembic ;
- aucune modification fonctionnelle.

Conflit faible : oui.

### A2. Audit des contrats API existants

Objectif : identifier les endpoints déjà disponibles et les divergences entre docs, backend, frontend et mocks.

À vérifier :

- `docs/api/SMART_TRANSFERT_API_CONTRACT.md`
- `docs/api/openapi.snapshot.json`
- `lib/api/*`
- `mocks/handlers/*`
- tests API frontend/backend

Livrable :

- `docs/implementation/audit_contrats_api.md`
- tableau endpoint / backend / frontend / mock / statut.

Conflit faible : oui.

### A3. Audit des audits existants

Objectif : vérifier si `audit_logs` suffit ou non.

À vérifier :

- `app/models/audit_log.py`
- `app/services/audit_service.py`
- `app/utils/audit.py`
- tests audit existants

Livrable :

- champs actuels ;
- champs manquants ;
- événements déjà audités ;
- événements non audités.

Conclusion attendue :

- `audit_logs` est conservée ;
- elle sera élargie ;
- une vue `v_audit_events` sera ajoutée plus tard pour lecture.

Conflit faible : oui.

---

## B. Documentation et contrats API

### B1. Créer la règle de contrat API projet

Objectif : imposer une méthode commune avant toute modification frontend/backend.

Livrable :

- `docs/implementation/API_CONTRACT_RULES.md`

Contenu :

- aucun payload inventé ;
- exemple request/response obligatoire ;
- mock MSW obligatoire pour frontend ;
- export OpenAPI obligatoire pour backend ;
- test backend + test frontend client API ;
- règle de compatibilité legacy.

Conflit faible : oui.

### B2. Créer le catalogue des statuts métier

Objectif : uniformiser les statuts dépôts, retraits, prestataires, rapports et réconciliation.

Livrable :

- `docs/implementation/STATUS_CATALOG.md`

À couvrir :

- `pending`
- `processing`
- `available`
- `completed`
- `failed`
- `rejected`
- `cancelled`
- `refunded`
- `compliance_hold`
- `provider_pending_reconciliation`
- `duplicate_blocked`

Conflit faible : oui.

### B3. Créer le catalogue des références prestataires

Objectif : documenter chaque référence selon son usage.

Livrable :

- `docs/implementation/PROVIDER_REFERENCES.md`

À couvrir :

- `SMART_REFERENCE`
- `PROVIDER_TRANSACTION_ID`
- `PROVIDER_ORDER_NUMBER`
- `RIA_PIN`
- `WU_MTCN`
- `MONEYGRAM_REFERENCE`
- `TRANSFAST_CONTROL_NUMBER`
- `NAFA_PICKUP_CODE`
- `KORI_PICKUP_CODE`

Conflit faible : oui.

---

## C. Socle références prestataires

### C1. Migration `provider_reference_configs`

Objectif : définir les types de références par prestataire.

Backend probable :

- `app/models/provider_reference_config.py`
- `app/schemas/provider_reference_config.py`
- migration Alembic

Champs :

- `provider_id`
- `reference_type`
- `reference_label`
- `purpose`
- `required_for_payout`
- `required_for_tracking`
- `required_for_receipt`
- `format_regex`
- `min_length`
- `max_length`
- `is_sensitive`
- `display_mask`
- `is_active`

Tests :

- création modèle ;
- seed minimal ;
- contrainte unique `provider_id + reference_type + purpose`.

Dépend de : A1, B3.  
Conflit moyen : migrations.

### C2. Migration `provider_form_fields`

Objectif : permettre au backend de piloter les formulaires dynamiques.

Champs :

- `provider_id`
- `operation_type`
- `field_name`
- `field_label`
- `field_type`
- `required`
- `validation_level`
- `options`
- `min_length`
- `max_length`
- `regex`
- `display_order`
- `is_active`

Operations :

- `quote`
- `emission`
- `payout_lookup`
- `payout_confirm`
- `tracking`

Dépend de : C1.  
Conflit moyen : migrations.

### C3. Migration `operation_references`

Objectif : remplacer progressivement `provider_reference_number`.

Champs :

- `operation_type`
- `operation_id`
- `provider_id`
- `reference_type`
- `reference_label`
- `reference_value_encrypted`
- `reference_value_hash`
- `reference_last4`
- `is_for_payout`
- `is_for_tracking`
- `is_sensitive`
- `created_at`

Règle :

- ne pas supprimer `provider_reference_number` au début ;
- le marquer legacy ;
- l'alimenter temporairement pour compatibilité.

Dépend de : B3, C1.  
Conflit moyen : migrations.

### C4. Backfill legacy `provider_reference_number`

Objectif : créer des `operation_references` depuis les données existantes.

Source :

- `deposits.provider_reference_number`
- `withdrawals.provider_reference_number`
- `provider_transaction_id`
- `reference_number`

Livrable :

- script ou migration idempotente ;
- tests sur données existantes.

Dépend de : C3.  
Conflit moyen.

### C5. Service backend de résolution de références

Objectif : centraliser lookup/hash/masquage.

Backend probable :

- `app/services/operation_reference_service.py`
- `app/utils/reference_masking.py`

Fonctions :

- créer référence ;
- hasher référence ;
- masquer référence ;
- rechercher par provider + type + value ;
- vérifier unicité ;
- retourner label frontend.

Dépend de : C3.  
Conflit faible.

### C6. Endpoint de configuration retrait prestataire

Endpoint :

```http
GET /api/v1/providers/{provider_id}/payout-form-config
```

Réponse :

```json
{
  "provider_id": 1,
  "provider_name": "RIA",
  "reference_type": "RIA_PIN",
  "reference_label": "PIN RIA",
  "fields": [
    {
      "name": "reference_value",
      "label": "PIN RIA",
      "type": "text",
      "required": true,
      "validation_level": "soft"
    }
  ]
}
```

À documenter :

- contrat API ;
- OpenAPI ;
- test backend ;
- client frontend plus tard.

Dépend de : C1/C2.  
Conflit faible.

---

## D. Simulation prestataires

### D1. Contrat unique de simulation

Objectif : la simulation locale doit ressembler à une vraie réponse API.

Contrat :

```json
{
  "provider_id": 1,
  "provider_code": "RIA",
  "simulation_id": "SIM-...",
  "send_amount": 100000,
  "send_currency": "XOF",
  "receive_amount": 95000,
  "receive_currency": "XOF",
  "exchange_rate": 1,
  "provider_fee": 0,
  "local_fee": 1000,
  "tax_amount": 180,
  "total_to_pay": 101180,
  "references": [
    {
      "type": "RIA_PIN",
      "label": "PIN RIA",
      "value": "12345678",
      "is_for_payout": true,
      "is_sensitive": true
    }
  ],
  "expires_at": "..."
}
```

Dépend de : B3.  
Conflit faible.

### D2. Simulateur RIA

Objectif : générer PIN RIA simulé.

À livrer :

- référence `RIA_PIN` ;
- `provider_order_number` simulé ;
- statut simulé.

Dépend de : D1/C1.  
Peut être pris seul : oui.

### D3. Simulateur MoneyGram

Objectif : générer référence MoneyGram simulée.

À livrer :

- `MONEYGRAM_REFERENCE` 8 chiffres ;
- `provider_transaction_id` ;
- `provider_order_number` si utile.

Dépend de : D1/C1.  
Peut être pris seul : oui.

### D4. Simulateur Western Union

Objectif : générer MTCN simulé.

À livrer :

- `WU_MTCN` 10 chiffres ;
- statut simulé.

Dépend de : D1/C1.  
Peut être pris seul : oui.

### D5. Simulateurs Transfast, NAFA, Kori

Objectif : logique spéciale simulation, non considérée comme vérité production.

À livrer :

- `TRANSFAST_CONTROL_NUMBER`
- `NAFA_PICKUP_CODE`
- `KORI_PICKUP_CODE`
- statut de configuration production incomplet.

Dépend de : D1/C1.  
Peut être pris seul : oui.

---

## E. Émission refondue

### E1. Pays source fixe

Objectif : empêcher le choix libre du pays source par guichetier.

Backend :

- source depuis configuration système ou agence ;
- fallback `TGO`.

Frontend :

- afficher pays source en lecture seule ;
- ne pas envoyer une valeur modifiable non validée.

Dépend de : A1, config existante.  
Conflit moyen avec page transfert.

### E2. Motif transfert obligatoire

Objectif : ajouter motif obligatoire.

Champs :

- `transfer_reason`
- `transfer_reason_other`

Motifs proposés :

- famille
- études
- santé
- commerce
- aide personnelle
- autre

Backend :

- validation ;
- stockage sur `deposits`.

Frontend :

- select obligatoire ;
- champ texte si `autre`.

Dépend de : contrat API émission.  
Conflit moyen.

### E3. Bénéficiaire enrichi

Objectif : exiger prénom, nom, téléphone, pays, ville.

À aligner :

- schémas backend ;
- validations frontend ;
- mocks ;
- tests.

Dépend de : G1/G2 idéalement.  
Conflit moyen.

### E4. Anti-doublon émission

Objectif : bloquer opération identique pendant délai configurable.

Clé MVP :

```text
cashier_id + beneficiary_id ou fingerprint bénéficiaire + amount + provider_id
```

Backend :

- service fingerprint ;
- délai configurable ;
- erreur 409 propre.

Frontend :

- message métier ;
- pas de message technique.

Dépend de : config + deposits.  
Conflit faible.

### E5. Reçu provisoire/final émission

Objectif : ne pas imprimer un reçu final si le statut prestataire est incertain.

À livrer :

- statut `provider_pending_reconciliation` ;
- bouton `Vérifier statut` ;
- re-check avant impression ;
- reçu provisoire marqué clairement.

Dépend de : M1/M2 partiel.  
Conflit moyen.

---

## F. Retrait dynamique

### F1. Backend lookup retrait V2

Endpoint :

```http
POST /api/v1/withdrawals/lookup
```

Request :

```json
{
  "provider_id": 1,
  "reference_type": "RIA_PIN",
  "reference_value": "12345678",
  "receiver_identity": {
    "id_type": "PASSPORT",
    "id_number": "A123456",
    "id_country": "TGO"
  }
}
```

Response :

```json
{
  "available": true,
  "deposit_id": 30,
  "provider_id": 1,
  "reference_label": "PIN RIA",
  "receiver_full_name": "Nom Beneficiaire",
  "amount": 100000,
  "currency": "XOF",
  "status": "available"
}
```

Dépend de : C5/C6.  
Conflit moyen avec withdrawals.

### F2. Backend confirmation retrait V2

Endpoint :

```http
POST /api/v1/withdrawals/confirm
```

Doit :

- vérifier lookup préalable ou référence ;
- vérifier anti-doublon ;
- vérifier statut disponible ;
- créer retrait ;
- lier `payout_reference_id` ;
- auditer ;
- empêcher double retrait.

Dépend de : F1, J1.  
Conflit moyen.

### F3. Frontend choix prestataire retrait

Objectif : le retrait commence par prestataire.

Frontend :

- select prestataire ;
- chargement `/providers/{id}/payout-form-config` ;
- rendu dynamique des champs ;
- validation souple.

Dépend de : C6.  
Conflit moyen avec page payout/retrait.

### F4. Frontend confirmation retrait

Objectif : consommer lookup/confirm V2.

À livrer :

- état loading ;
- erreurs 404/403/409 propres ;
- reçu retrait ;
- bouton vérifier statut si nécessaire ;
- impression après confirmation.

Dépend de : F1/F2/F3.  
Conflit moyen.

---

## G. Données personnes, noms, téléphones, documents

### G1. Normalisation des noms

Objectif : mieux rechercher sans dépendre du `full_name`.

À ajouter :

- `normalized_first_name`
- `normalized_last_name`
- `normalized_full_name`
- fonction suppression accents/casse/espaces

Règle :

- `first_name`, `middle_name`, `last_name` = source structurée ;
- `full_name` = affichage/compatibilité ;
- `sender_full_name`, `receiver_full_name` dans opérations = snapshot historique.

Dépend de : A1.  
Conflit faible.

### G2. Téléphone international E.164

Objectif : supporter clients internationaux.

Backend :

- `phone_country_dial_code`
- `phone_national_number`
- `phone_e164`
- validation libphonenumber ou équivalent.

Frontend :

- indicatif + drapeau ;
- exemples par pays ;
- stockage E.164.

Dépend de : contrats customers/beneficiaries.  
Conflit moyen.

### G3. Table `identity_documents`

Objectif : normaliser les pièces d'identité.

Champs :

- `person_type`
- `person_id`
- `document_type`
- `document_number_hash`
- `document_last4`
- `issuing_country`
- `expiry_date`

Relations opérations :

- `deposits.sender_identity_document_id`
- `withdrawals.receiver_identity_document_id`

Dépend de : A1.  
Conflit moyen.

---

## H. Recherche SMART Transfert

### H1. Contrat recherche interne

Endpoint :

```http
POST /api/v1/operations/search
```

Request :

```json
{
  "query": "viagbo",
  "type": "all",
  "filters": {
    "status": "completed",
    "provider_id": 1,
    "date_from": "2026-05-01",
    "date_to": "2026-05-21"
  },
  "page": 1,
  "page_size": 20
}
```

Response :

```json
{
  "items": [
    {
      "operation_type": "deposit",
      "operation_id": 30,
      "reference_number": "DEP-...",
      "masked_provider_reference": "****1234",
      "sender_name": "...",
      "receiver_name": "...",
      "amount": 100000,
      "currency": "XOF",
      "status": "available",
      "created_at": "..."
    }
  ],
  "total": 1,
  "page": 1,
  "page_size": 20
}
```

Dépend de : B1/B3/G1.  
Conflit faible.

### H2. Backend `operation_search_index`

Objectif : recherche rapide et filtrable.

Champs :

- operation type/id ;
- références ;
- noms normalisés ;
- téléphone E.164 ;
- montant/devise ;
- statut ;
- provider ;
- branch/cashier ;
- dates.

Dépend de : C3/G1/G2.  
Conflit moyen.

### H3. Service de recherche avec scopes

Objectif : appliquer les droits.

Règles :

- guichetier : ses opérations ;
- superviseur agence : agence ;
- superviseur région/groupe : périmètre ;
- support/admin : selon permission.

Dépend de : L1/L2.  
Conflit moyen.

### H4. Frontend recherche SMART Transfert

Objectif : page de recherche interne complète.

À livrer :

- champ principal ;
- filtres ;
- résultats paginés ;
- masquage références sensibles ;
- accès détail ;
- message si recherche trop large.

Dépend de : H1/H3.  
Conflit moyen.

---

## I. Sessions guichet et fermeture

### I1. Migration `cashier_sessions`

Champs :

- `cashier_id`
- `branch_id`
- `opened_at`
- `closed_at`
- `opening_cash_amount`
- `expected_cash_amount`
- `declared_cash_amount`
- `variance_amount`
- `status`
- `closed_by`

Justification :

- `expected_cash_amount` = calcul système ;
- `declared_cash_amount` = montant physique déclaré ;
- `variance_amount` = différence figée.

Conflit moyen : migration.

### I2. Migration `cashier_session_events`

Champs :

- `cashier_session_id`
- `event_type`
- `actor_type`
- `actor_id`
- `audit_log_id`
- `metadata`
- `created_at`

Acteurs :

- cashier ;
- supervisor ;
- admin ;
- system.

Conflit moyen : migration.

### I3. Services ouverture/fermeture caisse

Endpoints :

```http
POST /cashier-sessions/open
POST /cashier-sessions/close
GET /cashier-sessions/current
```

Dépend de : I1/I2/J1.  
Conflit faible.

### I4. Alertes fermeture automatique

Objectif :

- alerte 1h ;
- 30 min ;
- 15 min ;
- 5 min ;
- 1 min ;
- fermeture auto à 20h.

Dépend de : I1/I2 + configuration.  
Conflit faible.

### I5. Frontend fermeture guichet

Objectif :

- statut session ;
- bouton fermer ;
- déclaration caisse ;
- affichage écart ;
- alertes.

Dépend de : I3/I4.  
Conflit moyen.

---

## J. Audit élargi

### J1. Extension `audit_logs`

Conserver la table existante et ajouter :

- `actor_role`
- `target_reference`
- `scope_type`
- `scope_id`
- `severity`
- `metadata`
- `request_id`
- `source_module`
- `correlation_id`

Dépend de : A3.  
Conflit moyen : migration + service commun.

### J2. Mettre à jour `AuditService`

Objectif :

- supporter les nouveaux champs ;
- garder masquage sensible ;
- ajouter helpers par domaine.

Domaines :

- émission ;
- retrait ;
- recherche ;
- impression ;
- fermeture guichet ;
- rapport ;
- délégation ;
- configuration prestataire.

Dépend de : J1.  
Conflit moyen.

### J3. Vue `v_audit_events`

Objectif : lecture globale enrichie.

Source :

- `audit_logs`
- users/cashiers ;
- branches ;
- deposits ;
- withdrawals ;
- reports ;
- sessions.

Important :

- la vue n'est pas source de vérité ;
- elle sert à l'interface journal d'audit.

Dépend de : J1.  
Conflit faible.

### J4. Frontend journal d'audit

Objectif :

- filtres période ;
- acteur ;
- action ;
- cible ;
- agence ;
- gravité.

Dépend de : J3.  
Conflit faible.

---

## K. Rapports Excel final

### K1. Clarifier rapport guichet vs rapport consolidé

Décision :

- `cashier_sessions` = état de caisse ;
- `daily_reports` = rapport officiel ;
- `daily_report_exports` = fichier généré.

Dépend de : I1/I3.  
Conflit faible.

### K2. Migration `daily_reports`

Champs :

- `report_date`
- `scope_type`
- `scope_id`
- `generated_by`
- `generated_at`
- `status`
- `total_deposits`
- `total_withdrawals`
- `total_fees`
- `total_taxes`
- `total_cash_in`
- `total_cash_out`
- `variance_amount`

Dépend de : I1/H2.  
Conflit moyen.

### K3. Migration `daily_report_exports`

Champs :

- `report_id`
- `format`
- `file_path`
- `checksum`
- `generated_by`
- `generated_at`

Justification :

- archivage ;
- re-téléchargement exact ;
- preuve du fichier généré.

Dépend de : K2.  
Conflit moyen.

### K4. Génération Excel

Feuilles recommandées :

- Synthèse ;
- Dépôts ;
- Retraits ;
- Échecs / anomalies ;
- Écarts caisse ;
- Totaux par prestataire ;
- Totaux par devise.

Dépend de : K2/K3.  
Conflit faible.

### K5. Frontend rapports Excel

Objectif :

- générer rapport ;
- télécharger export ;
- voir historique ;
- filtrer par scope selon rôle.

Dépend de : K4/L2.  
Conflit moyen.

---

## L. Rôles, scopes et délégations

### L1. Clarifier rôles

Rôles cible :

- admin système ;
- administrateur client ;
- support client ;
- superviseur ;
- guichetier ;
- partenaire externe limité.

Livrable :

- `docs/implementation/ROLE_PERMISSION_MATRIX.md`

Conflit faible.

### L2. Tables permissions/scopes

À ajouter ou étendre :

- `roles`
- `permissions`
- `role_permissions`
- `user_roles`
- `user_scopes`

Scopes :

- cashier ;
- branch ;
- agency group ;
- region ;
- country.

Dépend de : A1.  
Conflit moyen.

### L3. Délégations partenaires externes

Objectif : permettre d'agir au nom d'un guichet sans partage de compte.

Table :

- `actor_user_id`
- `on_behalf_of_user_id`
- `on_behalf_of_branch_id`
- `valid_from`
- `valid_until`
- `approved_by`
- `status`
- `metadata`

Règle :

- le partenaire a son propre compte ;
- ses actions sont limitées ;
- l'audit garde l'acteur réel et le représenté.

Dépend de : L2/J1.  
Conflit moyen.

---

## M. Réconciliation prestataire

### M1. Décision technique finale

Constat :

- `api_transactions` existe déjà ;
- il trace les appels API ;
- il ne remplace pas une réconciliation métier.

Décision cible :

- `api_transactions` = journal des appels ;
- `provider_reconciliation_jobs` = orchestration métier de vérification.

Conflit faible.

### M2. Migration `provider_reconciliation_jobs`

Champs :

- `operation_type`
- `operation_id`
- `provider_id`
- `status`
- `attempt_count`
- `next_retry_at`
- `last_error`
- `last_checked_at`
- `created_at`

Option :

- ajouter `provider_reconciliation_items` seulement si un job batch contient plusieurs opérations.

Dépend de : C3/J1.  
Conflit moyen.

### M3. Service de vérification statut

Objectif :

- vérifier une opération incertaine ;
- mettre à jour provider_status ;
- créer audit ;
- déclencher reçu final si confirmé.

Dépend de : M2/D simulateurs.  
Conflit faible.

### M4. Bouton vérifier statut avant impression reçu

Objectif :

- depuis reçu émission ;
- depuis détail opération ;
- depuis support client.

Dépend de : M3/frontend reçu.  
Conflit moyen.

---

## N. UI/UX, thèmes, profils

### N1. Préférences utilisateur

Table possible :

- `user_preferences`
- `theme_mode`
- `theme_variant`
- `density`
- `language`

Priorité :

1. préférence utilisateur ;
2. préférence rôle/profil ;
3. préférence organisation/agence ;
4. défaut système.

Conflit faible.

### N2. Paramètres par profil

Table possible :

- `profile_settings`
- `profile_type`
- `theme_variant`
- `default_dashboard`
- `menu_layout`

Profils :

- cashier ;
- supervisor ;
- support ;
- admin.

Conflit faible.

### N3. Amélioration lisibilité et thème

Objectif :

- réduire contraste trop noir/trop blanc ;
- améliorer lisibilité formulaires ;
- cohérence reçus/rapports ;
- densité adaptée guichet.

Peut être pris en parallèle après stabilisation des écrans principaux.

---

## 5. Ordre recommandé des PR

### Vague 0 : préparation

1. A1 - Audit modèles backend
2. A2 - Audit contrats API
3. A3 - Audit audit logs
4. B1 - Règle contrat API
5. B2 - Catalogue statuts
6. B3 - Catalogue références

### Vague 1 : socle backend

1. C1 - `provider_reference_configs`
2. C2 - `provider_form_fields`
3. C3 - `operation_references`
4. C4 - backfill legacy references
5. C5 - service références
6. C6 - endpoint config retrait

### Vague 2 : données et audit

1. G1 - noms normalisés
2. G2 - téléphone E.164
3. G3 - `identity_documents`
4. J1 - extension `audit_logs`
5. J2 - `AuditService` élargi

### Vague 3 : simulation et flux

1. D1 - contrat simulation
2. D2/D3/D4/D5 - simulateurs prestataires
3. E1/E2/E3 - émission source/motif/bénéficiaire
4. F1/F2 - retrait backend V2
5. F3/F4 - retrait frontend dynamique

### Vague 4 : recherche et périmètres

1. L1 - matrice rôles
2. L2 - scopes/permissions
3. H1 - contrat recherche
4. H2/H3 - backend recherche
5. H4 - frontend recherche

### Vague 5 : exploitation

1. I1/I2/I3 - sessions guichet
2. I4/I5 - alertes et frontend fermeture
3. K1/K2/K3/K4/K5 - rapports Excel
4. M1/M2/M3/M4 - réconciliation
5. J3/J4 - vue et interface audit

### Vague 6 : finalisation

1. L3 - délégations partenaires
2. N1/N2/N3 - thèmes, profils, UI final
3. nettoyage legacy `provider_reference_number`
4. revue globale sécurité
5. revue globale documentation

---

## 6. Tâches parallélisables immédiatement

Ces tâches peuvent être choisies sans attendre beaucoup de code :

- A1 Audit modèles backend
- A2 Audit contrats API
- A3 Audit audit logs
- B1 Règle contrat API
- B2 Catalogue statuts
- B3 Catalogue références
- L1 Matrice rôles/permissions
- N3 Analyse UI/UX thème et lisibilité

Ces tâches doivent attendre le socle :

- retrait dynamique ;
- recherche SMART Transfert ;
- émission refondue complète ;
- rapports consolidés ;
- réconciliation prestataire.

---

## 7. Checklist pour chaque tâche

Avant développement :

- branche propre depuis `develop` ;
- périmètre écrit ;
- fichiers probables identifiés ;
- dépendances vérifiées ;
- contrat API écrit si endpoint concerné.

Pendant développement :

- pas de modification hors périmètre ;
- pas de payload inventé ;
- tests ajoutés avec le changement ;
- docs mises à jour en même temps.

Avant PR :

- tests ciblés verts ;
- build/tsc ou pytest selon dépôt ;
- `git diff --check` ;
- `git status --short --untracked-files=all` ;
- résumé clair ;
- risques restants indiqués.

---

## 8. Critères d'acceptation globaux

- Le retrait ne dépend plus d'un champ `provider_reference_number` ambigu.
- Le frontend ne connaît pas les règles internes des prestataires ; il lit une configuration backend.
- La simulation locale fonctionne pour tous les prestataires.
- La production réelle reste verrouillée pour les prestataires non documentés.
- La recherche prestataire et la recherche SMART Transfert sont séparées.
- Les noms, téléphones et documents sont normalisés pour recherche et conformité.
- Les audits sont complets, lisibles et exploitables.
- Les rapports Excel sont figés, traçables et reliés aux sessions.
- Les cas réseau ambigus peuvent être vérifiés sans créer de faux reçu final.
- Chaque PR met à jour contrat, tests, mocks et docs quand nécessaire.

