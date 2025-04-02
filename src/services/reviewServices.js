//*CAMADA DE SERVIÇOS, QUE VÃO INTERAGIR COM O PRISMA

const prisma = require('../prisma/prismaClient');


const getAll = async () => {
    return await prisma.reviews.findMany(); 
};

//adicionar review
const addReview = async (data) => { 
    return await prisma.reviews.create( {data} );
};

//retorna por id
const getReviewById = async (id) => {  
    return await prisma.reviews.findUnique({where: {id: parseInt(id)}});
};

//faz o update
const updateReview = async (id, data) => {
    return await prisma.reviews.update({where: {id: parseInt(id)}, data});
};

//deleta por id
const deleteReview = async (id) => {
    return await prisma.reviews.delete({where: {id: parseInt(id)}});
}

module.exports = {
    getAll,
    addReview,
    getReviewById,
    updateReview,
    deleteReview,
};