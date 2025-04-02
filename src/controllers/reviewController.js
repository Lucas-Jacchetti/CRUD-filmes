//*CONTROLLER, RECEBE A REQUEST, INTERAGE COM A CAMADA DE SERVIÇOS E MANDA UMA REPSOSTA

const reviewServices = require('../services/reviewServices');

const getAll = async (req, res) => {  
    try{ 
    const review = await reviewServices.getAll();
    res.json(review); 
    }
    catch (error){
        res.status(500).json({error: 'Falha na busca por review'}); 
    }
};

const addReview = async (req, res) => {  
    try{ 
    const review = await reviewServices.addReview(req.body); 
    res.status(201).json(review);   
    }
    catch (error){
        console.log (error);
        res.status(400).json({error: 'Falha ao adicionar uma nova review'}); 
    }
};

const getReviewById = async (req, res) => {
    try{
        const review = await reviewServices.getReviewById(req.params.id);
        if (review) { 
            res.json(review);
        } else{
            res.status(404).json({error: 'Review não encontrado'});
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({error: 'Erro interno'});
    }
};

const updateReview = async (req, res) => {
    try {
        const updatedReview = await reviewServices.updateReview(req.params.id, req.body);
        res.json(updatedReview);
    } 
    catch (error) {
        res.status(400).json({ error: 'O servidor não pôde processar a requisição' });
    }
};

const deleteReview = async (req, res) => {
    try{
        await reviewServices.deleteReview(req.params.id);
        res.status(204).send(); 
    }
    catch (error){
        res.status(400).json({ error: 'O servidor não pôde processar a requisição' })
    }
}

module.exports = {
    getAll,
    addReview,
    getReviewById,
    updateReview,
    deleteReview,
};