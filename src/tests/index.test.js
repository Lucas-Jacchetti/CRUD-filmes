//*TESTES PARA AS OPERAÇÕES DO CRUD (GET, POST, PUT, DELETE)

const request = require('supertest');
const app = require('../app'); //

describe('GET /films', () => { //especificar qual o método e qual endpoint
    it('Deve retornar os filmes', async () => { //mensagem da expectativa
        const res = await request(app).get('/films'); //guarda numa variavel 'res' a resposta
        expect(res.statusCode).toBe(200); //espera-se que o statusCode seja 200 (ok)
        expect(res.body).toBeInstanceOf(Array); //espera-se que a resposta seja um array (eu acho???)
    });
});


describe('POST /films', () => {
    it('Deve adicionar um filme', async () => {
    const uniqueTitle = `O teste jest ${Date.now()}`;
    const res = await request(app).post('/films').send({ //adiciona valores de teste para serem testados
        title: uniqueTitle,
        genre: 'Test',
        description: 'Teste jest',
        year: 2000,
        director: 'Jest Testador',
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe(uniqueTitle);
    });
});

describe('PUT /films/:id', () => {
    it('Deve atualizar um filme existente', async () => {
        const uniqueTitle = `O teste jest atualizado ${Date.now()}`;
        const createdFilmPut = await request(app).post('/films').send({
            title:  `O teste jest ${Date.now()}`, //cria um filme para ser deletado no teste
            genre: 'Suspense',
            description: 'Descrição',
            year: 1999,
            director: 'Diretor',
        });
        const res = await request(app).put(`/films/${createdFilmPut.body.id}`).send({
        title:  uniqueTitle,
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.title).toBe( uniqueTitle);
    });
});

describe('DELETE /films/:id', () => {
    it('Deve deletar um usuário', async () => {
        const uniqueTitle = `O teste jest ${Date.now()}`;
        const createdFilm = await request(app).post('/films').send({
            title: uniqueTitle, //cria um filme para ser deletado no teste
            genre: 'Suspense',
            description: 'Descrição',
            year: 1999,
            director: 'Diretor',
        });
        const res = await request(app).delete(`/films/${createdFilm.body.id}`);
        expect(res.statusCode).toBe(204);

    });
});    

