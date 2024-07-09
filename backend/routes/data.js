const express = require('express');
const router = express.Router();
const Data = require('../models/Data');

// GET all data
router.get('/', async (req, res) => {
  try {
    const data = await Data.find();
    res.json(data);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST new data
router.post('/', async (req, res) => {
  const data = new Data({
    name: req.body.name,
    value: req.body.value,
  });
  try {
    const newData = await data.save();
    res.status(201).json(newData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// DELETE /api/data/:id - Supprimer un élément par son ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
  
    try {
      const deletedData = await Data.findByIdAndDelete(id);
      if (!deletedData) {
        return res.status(404).json({ message: 'Données non trouvées' });
      }
      res.status(200).json({ message: 'Données supprimées avec succès', data: deletedData });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Erreur lors de la suppression des données' });
    }
  });

module.exports = router;
