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
    if(await get()){
        const publis = await get();
        res.json(publis);
    }else{
        res.json('Não tem publicações criada');
    }
}

//GET PARA PEGAR APENAS UMA PUBLICAÇÃO
const getOne = async (req, res, next) => {
    const publiId = await req.params.id;

    if(await getone(publiId) == false){
        res.json('Publicação não encontrada')
    }else{
        const publi = await getone(publiId);
        res.json(publi);
    }
};

module.exports = {create, getAll, getOne};