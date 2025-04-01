//*CAMADA DE ROTAS, VAI DEFINIR OS ENDPOINTS PARA ACESSAR AS INFORMAÇÕES 

const express = require('express');
const filmController = require('../controllers/filmController');

const router = express.Router();


router.get('/', filmController.getAll);
router.post('/', filmController.addFilm);
router.get('/:id', filmController.getFilmById);
router.put('/:id', filmController.updateFilm);
router.delete('/:id', filmController.deleteFilm);

module.exports = router;