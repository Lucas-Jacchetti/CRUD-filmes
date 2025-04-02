//*CONTROLLER, RECEBE A REQUEST, INTERAGE COM A CAMADA DE SERVIÇOS E MANDA UMA REPSOSTA

const filmServices = require('../services/filmServices');

const getAll = async (req, res) => {  //passa uma request e response como parametro
    try{ //tenta
    const film = await filmServices.getAll(); //armazena os filmes em uma constante 'film'
    res.json(film); //se der tudo certo, reposponde no formato json os filmes armazenados
    }
    catch (error){
        res.status(500).json({error: 'Falha na busca de usuários'}); //caso de algo errado, aponta um erro interno do server
    }
};

const addFilm = async (req, res) => {  //passa uma request e response como parametro
    try{ //tenta
    const film = await filmServices.addFilm(req.body); //armazena o novo filme em uma constante 'film'
    res.status(201).json(film); //coloca um starus de sucesso se der certo, e retorna um json com o 'film'  
    }
    catch (error){
        console.log (error);
        res.status(400).json({error: 'Falha ao adicionar novo filme'}); 
    }
};

const getFilmById = async (req, res) => {
    try{
        const film = await filmServices.getFilmById(req.params.id);
        if (film) { //caso o (id do) filme exista
            res.json(film);
        } else{
            res.status(404).json({error: 'Filme não encontrado'});
        }
    }
    catch (error){
        console.log(error);
        res.status(500).json({error: 'Erro interno'});
    }
};

const updateFilm = async (req, res) => {
    try {
        const updatedFilm = await filmServices.updateFilm(req.params.id, req.body); //passa tanto o id qunto o body (em json)
        res.json(updatedFilm);
    } 
    catch (error) {
        res.status(400).json({ error: 'O servidor não pôde processar a requisição' });
    }
};

const deleteFilm = async (req, res) => {
    try{
        await filmServices.deleteFilm(req.params.id);
        res.status(204).send(); //status 204 (no content) indicando que não há nada ali e a operação foi bem sucedida
    }
    catch (error){
        res.status(400).json({ error: 'O servidor não pôde processar a requisição' })
    }
}

module.exports = {
    getAll,
    addFilm,
    getFilmById,
    updateFilm,
    deleteFilm,
};