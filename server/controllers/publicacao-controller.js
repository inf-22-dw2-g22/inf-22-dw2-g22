const { post, get, put, allPubli, deleteOne, getUser} = require("../service/publicacao-service");
const config = require('../service/config-service');


//CRIAR UMA PUBLICAÇÃO NOVA
const create = async (req, res, next) => {
    const namePubli = req.body.name;
    const descriptionPubli = req.body.description;
    const apiKey = await req.get(config.API_KEY_HEADER);

    if(await getUser(apiKey)){
        const newPubli = await post(namePubli, descriptionPubli, apiKey);
        res.json(newPubli);
    }else{
        res.json('ApiKey inválida');
    }
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
    const apiKey = await req.get(config.API_KEY_HEADER);

    if(await allPubli(userID) == false){
        res.json('Publicação não encontrada')
    }else{
        const publis = await allPubli(userID);
        res.json(publis);
    }
};

//EDITAR UMA PUBLICAÇÃO
const update = async (req, res, next) => {
    const apiKey = await req.get(config.API_KEY_HEADER);
    const publiId = await req.params.id;
    const namePubli = await req.body.name;
    const descriptionPubli = await req.body.description;

    if(await put(apiKey, publiId, namePubli, descriptionPubli)){
        res.status(200).json({ message: 'Publicação atualizada com sucesso!'});
    }else{
        res.status(401).json({ message: 'Publicação não encontrada ou não tem permissão para editar.'})
    }
 
};

//DELETAR UMA PUBLICAÇÃO
const del = async (req, res, next) => {
    const apiKey = await req.get(config.API_KEY_HEADER);
    const publiId = await req.params.id;


    if(await deleteOne(publiId, apiKey)){
        res.status(200).json({ message: 'Publicação deletada com sucesso!'});
    }else{
        res.status(401).json({ message: 'Publicação não encontrada ou não tem permissão para deletar.'});
    }

};

/*
    if(await getUser(apiKey != null)){

    }else{
        res.json('ApiKey inválida'); 
    }

*/

module.exports = {create, getAll, getAllPubli, update, del};