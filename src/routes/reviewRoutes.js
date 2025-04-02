//*CAMADA DE ROTAS, VAI DEFINIR OS ENDPOINTS PARA ACESSAR AS INFORMAÇÕES 

const express = require('express');
const reviewController = require('../controllers/reviewController');

const router = express.Router();


router.get('/', reviewController.getAll);
router.post('/', reviewController.addReview);
router.get('/:id', reviewController.getReviewById);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;