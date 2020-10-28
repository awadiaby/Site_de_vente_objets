// importer express
const express = require('express');

// const app pour nos code express

const app = express();

// middleware générale qui sera appliquées a toute nos route avant la route 

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); // l'origine qui peut aceder à notre Header ses tout le nomde (*)
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'); //ajouter les headers mentionnés aux requêtes envoyées vers notre API
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS'); // envoyer des réquêtes avec les différents méthode
    next(); // pour passer l'exécution au middleware d'aaprès
  });

app.use('/api/stuff', (req, res, next) => {
    //une table stuff
    const stuff = [
      {
        _id: 'oeihfzeoi',
        title: 'Regarde objectifs',
        description: 'Les infos de mon premier objet',
        imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
        price: 4900 ,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'La classe accessoire ',
        description: 'Les infos de mon deuxième objet',
        imageUrl: 'https://www.emirablog.com/wp-content/uploads/2019/10/accessoire-mode.jpg',
        price: 2900,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Une histoire de Brillance ',
        description: 'Les infos de mon troisième objet',
        imageUrl: 'https://static.mmzstatic.com/wp-content/uploads/2012/09/anna-dello-russo-h-m.jpg',
        price: 3200,
        userId: 'qsomihvqios',
      },
      {
        _id: 'oeihfzeomoihi',
        title: 'Une histoire de Brillance ',
        description: 'Les infos de mon troisième objet',
        imageUrl: 'https://leandalivia.com/wp-content/uploads/2019/11/849bf18c89b5caa82af7a700b1048872-930x620.jpg',
        price: 3200,
        userId: 'qsomihvqios',
      },
    ];
    res.status(200).json(stuff);
  });

module.exports = app;