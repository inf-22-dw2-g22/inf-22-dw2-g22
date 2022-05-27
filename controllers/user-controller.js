
const config = require('../service/config-service');
const {get, post, getone, put, deleteOne} = require('../service/user-service');

//CRIAR UM USUARIO NOVO
const create = async (req, res, next) => {
    const username = await req.body.username; 
    const password = await req.body.password;
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;
    const admin = await req.body.admin;
    const apiKey = await req.body.apiKey;
    
    const newUser = await post(username, password, firstName, lastName, admin, apiKey);
    res.json(newUser);
};

//GET PARA PEGAR TODOS USERS CRIADOS
const getAll = async (req, res, next) => {
    const users = await get();
    res.json(users);
};

//GET PARA PEGAR APENAS UM USER 
const getOne = async (req, res, next) => {
    const userId = await req.params.id;
    const apiKey = await req.get(config.API_KEY_HEADER);

    console.log('ID ->',userId);

    if(await getone(userId, apiKey) == false){
        res.json('Usuário não encontrado ou não tem permissão para fazer a pesquisa')
    }else{
        const user = await getone(userId, apiKey);
        res.json(user);
    }
};

//EDITAR UM USER
const update = async (req, res, next) =>{
    const apiKey = await req.get(config.API_KEY_HEADER);
    const userId = await req.params.id;
    const password = await req.body.password;
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;

    console.log('ID ->',userId);

    if(await put(apiKey, userId, password, firstName, lastName)){
        res.status(200).json({ message: 'Usuário atualizado com sucesso!'});
    }else{
        res.status(401).json({ message: 'Falha para atualizar usuário'})
    }
};

//DELETAR UM USER
const del = async (req, res, next) => {
    const apiKey = await req.get(config.API_KEY_HEADER);
    const userId = await req.params.id;


    if(await deleteOne(userId, apiKey)){
        res.status(200).json({ message: 'Usuário deletado com sucesso!'});
    }else{
        res.status(401).json({ message: 'Usuário não encontrado ou não tem permissão para deletar'});
    }

};

module.exports = {getAll, create, getOne, update, del};