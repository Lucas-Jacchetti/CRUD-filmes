//*TESTES PARA AS OPERAÇÕES DO CRUD (GET, POST, PUT, DELETE)

const request = require('supertest');
const app = require('../app'); // Import your Express app

describe('GET /films', () => { //especificar qual o método e qual endpoint
    it('Deve retornar os filmes', async () => { //mensagem da expectativa
        const res = await request(app).get('/films'); //guarda numa variavel 'res' a resposta
        expect(res.statusCode).toBe(200); //espera-se que o statusCode seja 200 (ok)
        expect(res.body).toBeInstanceOf(Array); //espera-se que a resposta seja um array (eu acho???)
    });
});


describe('POST /films', () => {
    it('Deve adicionar um filme', async () => {
    const res = await request(app).post('/users').send({ //adiciona valores de teste para serem testados
        "title": "O teste jest",
        "genre": "Test",
        "description": "Teste jest",
        "year": 2000,
        "director": "Jest Testador",
    });
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
    expect(res.body.title).toBe('O teste jest');
    });
});

describe('PUT /films/:id', () => {
    it('Deve atualizar um filme existente', async () => {
        const res = await request(app).put('/films/3').send({
        name: 'Nome alterado',
        });
        expect(res.statusCode).toBe(200);
        expect(res.body.name).toBe('Nome alterado');
    });
});

describe('DELETE /films/:id', () => {
    it('Deve deletar um usuário', async () => {
        const res = await request(app).delete('/films/3');
        expect(res.statusCode).toBe(204); 
    });
});    

