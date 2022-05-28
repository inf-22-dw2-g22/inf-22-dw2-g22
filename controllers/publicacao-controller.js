const { post, get, getone, allPubli } = require("../service/publicacao-service");
const config = require('../service/config-service');


//CRIAR UMA PUBLICAÇÃO NOVA
const create = async (req, res, next) => {
    const namePubli = req.body.name;
    const descriptionPubli = req.body.description;
    const apiKey = await req.get(config.API_KEY_HEADER);

    const newPubli = await post(namePubli, descriptionPubli, apiKey);
    res.json(newPubli);
};

//GET PARA TODAS AS PUBLICAÇOES
const getAll = async (req, res, next) => {
    if(await get()){
        const publis = await get();
        res.json(publis);
    }else{
        res.json('Não tem publicações criada');
    }
};

//GET TODAS PUBLICAÇÕES DE UM USER
const getAllPubli = async (req, res, next) => {
    const userID = await req.params.id;

    if(await allPubli(userID) == false){
        res.json('Publicação não encontrada')
    }else{
        const publis = await allPubli(userID);
        res.json(publis);
    }
};

module.exports = {create, getAll, getAllPubli};