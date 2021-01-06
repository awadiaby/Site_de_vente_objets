const express = require('express');
const router = express.Router();

// importer notre modèles de données 
const stuffCtrl = require('../controllers/stuff'); // notre chémin

// Traiter les rêquetes post 
router.post('/', stuffCtrl.createThing);

 // Récuperer les Things spécifiques
 router.get('/:id', stuffCtrl.getOnThing);
  
  // recuperer une données puis modifier la données et valider 
  router.put('/:id', stuffCtrl.modifyThing);
  
  // Route pour la suppression d'un objets 
  router.delete('/:id', stuffCtrl.deleteThing);
  
   // recuperer les données dynamiquement à partir du frontend
   router.use('/',stuffCtrl.getAllThing);

  module.exports = router;
  