const { post, get, getone } = require("../service/publicacao-service");


//CRIAR UMA PUBLICAÇÃO NOVA
const create = async (req, res, next) => {
    const namePubli = req.body.name;
    const descriptionPubli = req.body.description;

    const newPubli = await post(namePubli, descriptionPubli);
    res.json(newPubli);
}

//GET PARA TODAS AS PUBLICAÇOES
const getAll = async (req, res, next) => {
    const publis = await get();
    res.json(publis);
}

//GET PARA PEGAR APENAS UMA PUBLICAÇÃO
const getOne = async (req, res, next) => {
    const userId = await req.params.id;

    if(await getone(userId) == false){
        res.json('Publicação não encontrada')
    }else{
        const user = await getone(userId);
        res.json(user);
    }
};

module.exports = {create, getAll, getOne};