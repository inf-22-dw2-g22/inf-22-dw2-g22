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
    if(user != null){
        const userID = user.id;
        const publicacao = await Publicacao.create({
            name: `${namePubli}`,
            description: `${descriptionPubli}`,
            userId: `${userID}`
        })
        return publicacao;
    }else{
        return false;
    }
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

//VERIFICADOR SE É ADM
async function adm(apiKey){
    const user = await User.findOne({ where: {apiKey: `${apiKey}`}});
    if(user.admin === true){
        return true;
    }else{
        return false;
    }
};

//VERICADOR DE DONO DA PUBLICAÇÃO
async function userValidation(publiId, apiKey){
    const user = await User.findOne({ where: {apiKey: `${apiKey}`}});
    const publiOwner = await Publicacao.findOne({ where: {id: `${publiId}`,userId: `${user.id}`}});
    if(publiOwner != null){
        return user;
    }else{
        return false;
    }
};

//EDITAR UMA PUBLICAÇÃO
async function put(apiKey, publiId, namePubli, descriptionPubli){

    if(await userValidation(publiId, apiKey)){
        Publicacao.update(
            { 
                name: `${namePubli}`,
                description: `${descriptionPubli}`,
            },
            { where: {id: `${publiId}`}}
        )
        return true;
    }else{
        return false;
    }  
};

//DELETAR UMA PUBLICAÇÃO
async function deleteOne(publiId, apiKey){
    if(await adm(apiKey) === true){
        Publicacao.destroy({ where: { id: `${publiId}`}});
        return true;
    }else{
        if(await userValidation(publiId, apiKey)){
            Publicacao.destroy({ where: { id: `${publiId}`}});
            return true;
        }else{
            return false;
        }
    }
};
module.exports = {post, get, allPubli, put, deleteOne, getUser};