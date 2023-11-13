# Test The Bradery
  Projet de Paiement en Ligne

## Description
Ce projet a été réalisé dans le cadre du test technique pour le poste de Fullstack Developer chez The Bradery. L'objectif était de développer une petite application de paiement avec les fonctionnalités suivantes:

- Ajout de produits au panier en respectant la limite de stock disponible.
- Passage à la page de paiement et finalisation de la commande.
- Enregistrement des commandes dans la base de données avec mise à jour du stock.
- **Fonctionnalité Bonus:** Authentification des utilisateurs.

## Technologies utilisées
- Frontend: React Native
- Backend: Express
- Base de données: MongoDB

## Structure du projet
- `/client`: Contient le code source du frontend.
- `/server`: Contient le code source du backend.
- `database.js`: Script pour la configuration de la base de données.

## Installation

1. Clonez le projet : `git clone https://github.com/LBrzr/test_the_bradery.git`
2. Accédez au répertoire du projet : `cd test_the_bradery`
3. Installez les dépendances pour le frontend : `cd client && npm install`
4. Revenez au répertoire principal : `cd ..`
5. Installez les dépendances pour le backend : `cd server && npm install`
6. Exécutez le script d'automatisation pour configurer la base de données : `node server/automation/database.js`
7. Revenez au répertoire principal : `cd ..`
8. Lancez le frontend : `cd client && npm start`
9. Dans un autre terminal, lancez le backend : `cd server && npm start`

Assurez-vous que les ports 8081 (frontend) et 8088 (backend) ne sont pas utilisés.

## Fonctionnalités bonus (optionnel)
- Authentification des utilisateurs.

## Raisonnement

Lors de la réalisation de ce projet, j'ai pris plusieurs décisions et suivi une approche spécifique pour garantir la qualité et la fonctionnalité du code.

### Choix Technologiques

J'ai choisi d'utiliser React Native pour le frontend en raison de sa flexibilité et de sa facilité de développement d'applications mobiles multiplateformes. Du côté du backend, Express a été sélectionné en raison de sa légèreté et de sa rapidité.

La base de données MongoDB a été privilégiée pour sa facilité d'intégration avec Node.js et son extensibilité.

### Gestion des Stocks

La gestion des stocks a été implémentée en tenant compte des conditions de course possibles. Lors de la creation d'une commande, seul sont pris en compte les lines de commandes dont les produits on suffisamment de stock. Les autres sont signaler dans un message comme étant en rupture. De plus, l'ajout au panier d'un produit n'ayant plus de stock n'est pas permis. 

### Authentification

La fonctionnalité d'authentification a été ajoutée en bonus pour renforcer la sécurité et personnaliser l'expérience utilisateur. J'ai utilisé les bonnes pratiques de sécurité pour stocker les mots de passe de manière sécurisée.

### Structure du Projet

La structure du projet a été organisée de manière à séparer clairement le frontend et le backend. Le script d'automatisation de la base de données est placé dans le répertoire `server/automation/`.

Ces choix ont été guidés par la recherche d'une solution efficace et bien structurée pour répondre aux exigences du test technique.

## Auteur
Leandre AKAKPO.

N'hésitez pas à me contacter pour toute question ou clarification.
