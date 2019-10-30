const express = require('express');
const postagensController = require('../controllers/postagens')
const router = express.Router();

router.get('/', async (req, res) => {
  const postagens = await postagensController.get();
  res.send(postagens);
});

router.post('/', async (req, res) => {
  await postagensController.create(req.body);
  res.send('Adicionado com sucesso');
});

router.get('/:id', async (req, res) => {
  const id = req.params.id;
  const postagem = await postagensController.getPorId(id);
  res.send(postagem);
});

router.put('/:id', async (req, res) => {
  const id = req.params.id;
  await postagensController.update(id, req.body);
  res.send('Alterado com sucesso')
});

router.delete('/:id', async (req, res) => {
  const id = req.params.id;
  await postagensController.delete(id);
  res.send('Deletado com sucesso');
});

module.exports = router;