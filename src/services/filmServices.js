//*CAMADA DE SERVIÇOS, QUE VÃO INTERAGIR COM O PRISMA

const prisma = require('../prisma/prismaClient'); //conecta com o prisma (eu acho???)


//retorna todos os filmes
const getAll = async () => {
    return await prisma.film.findMany({include: {review:true}}); 
};

//adicionar um novo filme
const addFilm = async (data) => { //passa as informações do filme como parâmetro
    return await prisma.film.create( {data} );
};

//retorna por id
const getFilmById = async (id) => { //passa o id do filme como parametro 
    return await prisma.film.findUnique({include: {review:true}, where: {id: parseInt(id)}}); //acha o filme em que o id for o id passado como parametro
};

//faz o update
const updateFilm = async (id, data) => {
    return await prisma.film.update({where: {id: parseInt(id)}, data});//acha o filme em que o id for o id passado como parametro e faz o update
};

//deleta por id
const deleteFilm = async (id) => {
    return await prisma.film.delete({where: {id: parseInt(id)}});
}

//exportando, ai outras partes da aplicação podem importar
module.exports = {
    getAll,
    addFilm,
    getFilmById,
    updateFilm,
    deleteFilm,
};