const Publicacao = require('../models/publicacao-model');


//CRIAR UMA PUBLICAÇÃO NOVA
async function post(namePubli, descriptionPubli){
    const publicacao = await Publicacao.create({
        name: `${namePubli}`,
        description: `${descriptionPubli}`,
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

//GET PARA PEGAR APENAS UMA PUBLICAÇÃO
async function getone(publiId){
    const publi = await Publicacao.findOne({ where: {id: `${publiId}`}});
    if(publi != null){
        return publi;
    }else{
        return false;
    }
};
module.exports = {post, get, getone};