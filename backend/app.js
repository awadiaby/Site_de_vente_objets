// importer express
const express = require('express');

const bodyParser = require('body-parser');

// importer notre modèles de données 
//const Things = require('./models/Things'); // notre chémin

const mongoose = require('mongoose');

const stuffRoutes = require('./routes/stuff');

// connection a la bases de données 
mongoose.connect('mongodb+srv://awafullstack:adjalove@cluster0.hbumk.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));
  
// const app pour nos code express

const app = express();

// middleware générale qui sera appliquées a toute nos route avant la route 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // l'origine qui peut aceder à notre Header ses tout le nomde (*)
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoyer des réquêtes avec les différents méthode
    next(); // pour passer l'exécution au middleware d'aaprès
  });


// un nouveau middleware qui traite les données POST

app.use(bodyParser.json());

app.use('/api/stuff', stuffRoutes);

module.exports = app;