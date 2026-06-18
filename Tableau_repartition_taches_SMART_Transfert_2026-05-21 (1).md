# SMART Transfert - Tableau de répartition des tâches

Date : 21 mai 2026  
Objectif : permettre à chaque membre de l'équipe de choisir une tâche sans empiéter inutilement sur le travail des autres.

## Règles de choix

- Une personne choisit une tâche et annonce la branche prévue.
- Une tâche = une branche = une PR.
- Ne pas prendre deux tâches qui touchent les mêmes migrations ou les mêmes écrans sans coordination.
- Les tâches `Disponible maintenant = Oui` peuvent commencer immédiatement.
- Les tâches `Bloquante = Oui` doivent être terminées avant plusieurs autres lots.
- Toute tâche API doit mettre à jour docs, tests, OpenAPI et mocks si frontend concerné.

## Tâches disponibles immédiatement

| ID | Tâche | Résultat attendu | Compétence utile | Fichiers probables | Disponible maintenant | Risque conflit |
|---|---|---|---|---|---|---|
| A1 | Audit modèles backend existants | Rapport des tables/champs existants et manquants | Backend / SQLAlchemy | `app/models/*`, `alembic/versions/*` | Oui | Faible |
| A2 | Audit contrats API existants | Tableau backend/frontend/mock/docs par endpoint | Backend + Frontend | `docs/api/*`, `lib/api/*`, `mocks/handlers/*` | Oui | Faible |
| A3 | Audit audit logs existants | Rapport sur `audit_logs`, `AuditService`, champs manquants | Backend / audit | `app/models/audit_log.py`, `app/services/audit_service.py`, `app/utils/audit.py` | Oui | Faible |
| B1 | Règle contrat API projet | Document de règle anti-divergence payload | Documentation technique | `docs/implementation/API_CONTRACT_RULES.md` | Oui | Faible |
| B2 | Catalogue statuts métier | Liste statuts dépôts/retraits/provider/rapport | Backend + Produit | `docs/implementation/STATUS_CATALOG.md` | Oui | Faible |
| B3 | Catalogue références prestataires | Liste références type RIA_PIN, MTCN, etc. | Produit + Backend | `docs/implementation/PROVIDER_REFERENCES.md` | Oui | Faible |
| L1 | Matrice rôles/permissions | Rôles, permissions, périmètres | Produit + sécurité | `docs/implementation/ROLE_PERMISSION_MATRIX.md` | Oui | Faible |
| N3 | Analyse UI/UX thème et lisibilité | Recommandations thème, densité, reçus | Frontend / UI | `docs/implementation/UI_UX_REVIEW.md` | Oui | Faible |

## Tâches backend socle à prendre après les audits

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| C1 | Migration `provider_reference_configs` | Table configs références prestataires | A1, B3 | `app/models`, `app/schemas`, `alembic/versions` | Moyen |
| C2 | Migration `provider_form_fields` | Table champs dynamiques provider | C1 | `app/models`, `app/schemas`, `alembic/versions` | Moyen |
| C3 | Migration `operation_references` | Table références typées opérations | C1, B3 | `app/models`, `alembic/versions` | Moyen |
| C4 | Backfill legacy references | Script/migration depuis `provider_reference_number` | C3 | `alembic/versions`, scripts éventuels | Moyen |
| C5 | Service références | Hash, masquage, lookup référence | C3 | `app/services/operation_reference_service.py` | Faible |
| C6 | Endpoint config retrait | `GET /providers/{id}/payout-form-config` | C1, C2 | `app/api/v1/providers.py`, schemas, docs | Moyen |
| J1 | Extension `audit_logs` | Champs audit étendus | A3 | `audit_log.py`, migration | Moyen |
| J2 | `AuditService` élargi | Helpers audit par domaine | J1 | `audit_service.py`, `utils/audit.py` | Moyen |

## Tâches simulation prestataires

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Peut être pris seul |
|---|---|---|---|---|---|
| D1 | Contrat unique simulation | Schéma commun de simulation | B1, B3 | docs + schemas | Oui |
| D2 | Simulateur RIA | Génération `RIA_PIN` + order number simulé | D1, C1 | `app/services/providers/ria.py` ou simulateur | Oui |
| D3 | Simulateur MoneyGram | Génération référence MoneyGram 8 chiffres | D1, C1 | provider MoneyGram | Oui |
| D4 | Simulateur Western Union | Génération MTCN 10 chiffres | D1, C1 | provider WU à créer si absent | Oui |
| D5 | Simulateurs Transfast/NAFA/Kori | Codes pickup simulés + statut production incomplet | D1, C1 | providers concernés | Oui |

## Tâches données personnes

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| G1 | Normalisation noms | `normalized_first_name`, `normalized_last_name`, `normalized_full_name` | A1 | `customers`, `beneficiaries`, services | Moyen |
| G2 | Téléphone E.164 | Indicatif + national + E.164 | A1 | models/schemas customers/beneficiaries + frontend plus tard | Moyen |
| G3 | `identity_documents` | Table documents identité sécurisée | A1 | models/schemas/migration | Moyen |

## Tâches émission et retrait

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| E1 | Pays source fixe | Pays source non modifiable par guichetier | A1, config | backend + page émission | Moyen |
| E2 | Motif obligatoire | `transfer_reason` + option Autre | contrat émission | deposits, quote/transfer form | Moyen |
| E3 | Bénéficiaire enrichi | prénom, nom, téléphone, pays, ville obligatoires | G1, G2 idéalement | customers/beneficiaries + frontend | Moyen |
| E4 | Anti-doublon émission | Blocage 5 min configurable | config + deposits | service dépôt/idempotency | Faible |
| E5 | Reçu provisoire/final | Vérifier statut avant reçu final | M3 partiel | receipt + deposit flow | Moyen |
| F1 | Lookup retrait V2 backend | `POST /withdrawals/lookup` avec provider + reference_type | C5, C6 | withdrawals API/schema/tests | Moyen |
| F2 | Confirmation retrait V2 | confirm avec `payout_reference_id` et audit | F1, J1 | withdrawals API/service/tests | Moyen |
| F3 | Frontend choix prestataire retrait | Formulaire dynamique selon provider | C6 | payout/retrait page + API client | Moyen |
| F4 | Frontend confirmation retrait | Lookup/confirm V2 + erreurs + reçu | F1, F2, F3 | payout/retrait page/tests/mocks | Moyen |

## Tâches recherche, rôles et scopes

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| H1 | Contrat recherche interne | `POST /operations/search` documenté | B1, G1 | docs/schemas | Faible |
| H2 | `operation_search_index` | Table index recherche interne | C3, G1, G2 | models/migration | Moyen |
| H3 | Service recherche avec scopes | Recherche filtrée par droits | L2, H2 | services/API | Moyen |
| H4 | Frontend recherche SMART | Page recherche multi-critères | H1, H3 | `app/dashboard/search`, API client, mocks | Moyen |
| L2 | Tables permissions/scopes | rôles, permissions, scopes | L1, A1 | models/migrations/auth | Moyen |
| L3 | Délégations partenaires | Actions au nom d’un guichet sans partage compte | L2, J1 | models/API/audit | Moyen |

## Tâches guichet, rapports et exploitation

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| I1 | `cashier_sessions` | Table session caisse avec expected/declared/variance | A1 | models/migration | Moyen |
| I2 | `cashier_session_events` | Chronologie métier caisse | I1, J1 | models/migration | Moyen |
| I3 | Services session caisse | open/current/close | I1, I2 | API/services | Moyen |
| I4 | Alertes fermeture auto | 1h, 30m, 15m, 5m, 1m + fermeture 20h | I3 + config | jobs/services | Faible |
| I5 | Frontend fermeture guichet | UI ouverture/fermeture/déclaration caisse | I3, I4 | dashboard/session UI | Moyen |
| K1 | Clarifier rapport guichet/consolidé | Décision documentée | I1 | docs | Faible |
| K2 | `daily_reports` | Rapport officiel figé | I1, H2 | models/migration | Moyen |
| K3 | `daily_report_exports` | Archivage exports Excel | K2 | models/migration | Moyen |
| K4 | Génération Excel | Feuilles synthèse/dépôts/retraits/écarts | K2, K3 | services/reports | Faible |
| K5 | Frontend rapports Excel | Générer/télécharger/historique | K4, L2 | reports page/API | Moyen |

## Tâches audit et réconciliation

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| J3 | Vue `v_audit_events` | Lecture globale audit enrichie | J1 | migration/vue SQL | Faible |
| J4 | Frontend journal audit | Interface filtres audit | J3 | logs/audit pages | Faible |
| M1 | Décision technique réconciliation | Doc `api_transactions` vs jobs | A1 | docs | Faible |
| M2 | `provider_reconciliation_jobs` | Table jobs vérification provider | C3, J1 | models/migration | Moyen |
| M3 | Service vérification statut | Vérifier statut provider et mettre à jour opération | M2, simulateurs | services/API | Moyen |
| M4 | Bouton vérifier statut | Vérification avant impression reçu | M3 | frontend reçus/détails | Moyen |

## Tâches UI/UX et profils

| ID | Tâche | Résultat attendu | Dépend de | Fichiers probables | Risque conflit |
|---|---|---|---|---|---|
| N1 | `user_preferences` | Préférences thème/densité/langue | A1 | models/settings/frontend plus tard | Faible |
| N2 | `profile_settings` | Paramètres par profil/rôle | L1 | models/settings | Faible |
| N3 | Revue UI/UX thème | Plan de correction lisibilité | Aucun | docs/UI_UX_REVIEW.md | Faible |

## Tâches à éviter en parallèle sans coordination

- C1, C2, C3, G3, I1, I2, K2, K3, L2, M2 : toutes touchent migrations.
- F1 et F2 : même zone withdrawals backend.
- F3 et F4 : même zone retrait frontend.
- E1 à E5 : même zone émission/transfert frontend/backend.
- J1 et J2 : même service audit.
- H2 et H3 : même recherche backend.

## Proposition de choix initial

Pour commencer sans conflit :

1. Une personne prend A1.
2. Une personne prend A2.
3. Une personne prend A3.
4. Une personne prend B1/B2/B3.
5. Une personne prend L1.
6. Une personne prend N3.

Ensuite seulement, on lance les migrations C1/C2/C3 et les lots métier.

## Commande de départ recommandée pour chaque tâche

```bash
git switch develop
git fetch origin
git pull --ff-only origin develop
git switch -c docs/<ticket>-<description>
```

ou pour du backend :

```bash
git switch -c feat/<ticket>-backend-<description>
```

ou pour du frontend :

```bash
git switch -c feat/<ticket>-frontend-<description>
```

## Validation attendue avant PR

Chaque personne doit fournir :

- branche active ;
- fichiers modifiés ;
- tests exécutés ;
- résultat de `git diff --check` ;
- résumé fonctionnel ;
- risques ou dépendances restantes ;
- confirmation que les docs/payloads/mocks ont été mis à jour si concernés.
