## Application Node.js avec Express et MongoDB

L'application est un tableau de bord interactif permettant d'ajouter, afficher et supprimer des données dans une base de données MongoDB. Le frontend est basé sur HTML, CSS et JavaScript, tandis que le backend est développé avec Node.js et Express. Les données sont stockées dans MongoDB à l'aide de Mongoose.
## Fonctionnalités

- Affichage des données depuis la base de données.
- Ajout de nouvelles données via une interface web.
- Suppression des données existantes.
- Architecture RESTful pour les endpoints API.

## Technologies utilisées

- **Backend**: Node.js, Express.js, Mongoose
- **Frontend**: HTML, CSS, JavaScript
- **Base de données**: MongoDB
- **Tests**: Jest, Supertest
- **Containerisation**: Docker
- **CI/CD**: GitHub Actions
- **Déploiement**: Docker Compose

## Installation

Pour installer et exécuter cette application localement, suivez ces étapes :

1. **Cloner le repository :**

   git clone https://github.com/ingridatemkeng/my-dashboard-app.git
   cd my-dashboard-app

2. **Installer les dépendances :**

npm install

3. **Configurer les variables d'environnement :**
Créez un fichier .env à la racine du projet avec les variables suivantes :

PORT=5000
MONGO_URL=mongodb://localhost:27017/my_dashboard

Assurez-vous d'avoir une instance MongoDB en cours d'exécution sur localhost:27017.

4. **Démarrer l'application en mode développement :**

npm run dev
L'application sera accessible à l'adresse http://localhost:5000.

## Configuration
# Variables d'environnement
- PORT: Port sur lequel le serveur Express écoute (par défaut 5000).
- MONGO_URL: URL de connexion à la base de données MongoDB.

# Structure du projet
- /server.js: Point d'entrée du serveur Express.
- /routes: Répertoire contenant les routes de l'API.
- /models: Modèles Mongoose pour les données.
- /public: Contient les fichiers statiques pour le frontend.

## Développement
Pendant le développement, utilisez npm run dev pour démarrer le serveur en mode de développement avec nodemon, qui redémarre automatiquement le serveur à chaque modification de fichier.

## Tests d'intégration
Les tests d'intégration sont implémentés avec Jest et Supertest pour tester les endpoints API. Pour exécuter les tests :
npm test

## Production
Pour la production, utilisez Docker pour containeriser l'application. Un Dockerfile multi-stage est fourni pour optimiser la taille de l'image Docker.

## Docker
1. **Construire l'image Docker :**

docker build -t ingrid265/my-dashboard-app:latest .

2. **Exécuter l'image Docker :**
docker run -p 5000:5000 ingrid265/my-dashboard-app

3. **Poussez l'Image vers Docker Hub**
Une fois connecté, vous pouvez pousser votre image vers Docker Hub en utilisant la commande docker push.

docker push ingrid265/my-dashboard-app:latest

## Docker Compose
Utilisez Docker Compose pour gérer l'application avec MongoDB en conteneur.
1. **Construire et démarrer les conteneurs :**
docker-compose up --build

2. **Arrêter et supprimer les conteneurs, réseaux, etc. :**
docker-compose down

## Contributions
Les contributions sous forme de pull requests sont les bienvenues. Assurez-vous de tester vos modifications et d'ajouter des tests si nécessaire.
#
Ce README.md fournit une vue d'ensemble détaillée de votre application Node.js avec toutes les instructions nécessaires pour l'installation, la configuration, le développement, et la mise en production. Vous pouvez personnaliser les sections en fonction des besoins spécifiques de votre projet.
