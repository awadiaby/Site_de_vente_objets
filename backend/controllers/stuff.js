const Thing = require('../models/Things');


exports.createThing = (req, res, next) => {
    delete req.body._id; // retirer le champ id
    const things = new Things({
      title: req.body.title,
      description: req.body.description,
      imageUrl: req.body.imageUrl,
      price: req.body.price,
      userId: req.body.userId
    });
   things.save() // enregistrer la methode dans la bases 
   .then(() => res.status(201).json({ message: 'Objet enrégistré !'})) // envoyer une réponse à la frontend
   .catch(error => res.status(400).json({error})); 
};

exports.modifyThing = (req, res, next) => {
  const thing = new Thing({
    _id: req.params.id,
    title: req.body.title,
    description: req.body.description,
    imageUrl: req.body.imageUrl,
    price: req.body.price,
    userId: req.body.userId
  });
    Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id }) // mettre à jour un objet 
      .then(() => res.status(200).json({ message: 'Objet modifié !'}))
      .catch(error => res.status(400).json({ error }));
  };

exports.deleteThing = (req, res, next) => {
    Thing.deleteOne({ _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Objet supprimé !'}))
      .catch(error => res.status(400).json({ error }));
  };
 
  
  // recuperer une seule données
exports.getOnThing = (req, res, next) => {
    Thing.findOne({ _id: req.params.id })
      .then(things => res.status(200).json(things))
      .catch(error => res.status(404).json({ error }));
  };
  
  
  // recuperer tout les données 
  exports.getAllThing =  (req, res, next) => {
    Thing.find()
      .then(things => res.status(200).json(things))
      .catch(error => res.status(400).json({ error }));
  };