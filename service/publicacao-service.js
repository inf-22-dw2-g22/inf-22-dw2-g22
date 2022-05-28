const Publicacao = require('../models/publicacao-model');
const User = require('../models/user-model');

//BUSCAR POR UM UTILIZADOR
async function getUser(apiKey){
    const user = await User.findOne({ where: {apiKey: `${apiKey}`}});
    return user;
}

//CRIAR UMA PUBLICAÇÃO NOVA
async function post(namePubli, descriptionPubli, apiKey){
    const user = await getUser(apiKey);
    const userID = user.id;
    const publicacao = await Publicacao.create({
        name: `${namePubli}`,
        description: `${descriptionPubli}`,
        userId: `${userID}`
    })
    return publicacao;
};

//GET PARA TODAS AS PUBLICAÇOES
async function get(){
    const publis = await Publicacao.findAll();
    if(publis.length === 0){
        return false;
    }else{
        return publis;
    }
};

//GET TODAS PUBLICAÇÕES DE UM USER
async function allPubli(userID){
    const publis = await Publicacao.findAll({ where: {userId: `${userID}`}});
    if(publis.length === 0){
        return false;
    }else{
        return publis;
    }
};

//GET PARA PEGAR APENAS UMA PUBLICAÇÃO
/*
async function getone(publiId){
    const publi = await Publicacao.findOne({ where: {id: `${publiId}`}});
    if(publi != null){
        return publi;
    }else{
        return false;
    }
};
*/
module.exports = {post, get, allPubli};