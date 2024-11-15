const express = require('express');
const router = express.Router();
const { File } = require('../models');
const { sequelize } = require('../models');

router.post('/', async (req, res) => {
  const { peso, tipo, cantidad } = req.body;
  const file = await File.create({ peso, tipo, cantidad });
  res.status(201).json(file);
});

router.get('/', async (req, res) => {
  const files = await File.findAll();
  res.json(files);
});

router.put('/:id', async (req, res) => {
  const { id } = req.params;
  const { peso, tipo, cantidad } = req.body;
  await File.update({ peso, tipo, cantidad }, { where: { id } });
  res.status(200).json({ message: 'Archivo actualizado' });
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  await File.destroy({ where: { id } });
  res.status(200).json({ message: 'Archivo eliminado' });
});

router.get('/totals', async (req, res) => {
  const totals = await File.findAll({
    attributes: [
      [sequelize.fn('SUM', sequelize.col('peso')), 'peso_total'],
      [sequelize.fn('SUM', sequelize.col('cantidad')), 'cantidad_total']
    ]
  });
  res.json(totals[0]);
});


module.exports = router;
