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

// DELETE a data entry by id
router.delete('/:id', async (req, res) => {
    try {
      const data = await Data.findById(req.params.id);
      if (data == null) {
        return res.status(404).json({ message: 'Cannot find data' });
      }
  
      await data.remove();
      res.json({ message: 'Data deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
module.exports = router;
