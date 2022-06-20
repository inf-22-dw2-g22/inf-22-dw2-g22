const config = require('../service/config-service');
const {get, post, put, deleteOne, sigIn} = require('../service/user-service');
const jwt = require("jsonwebtoken"); /* permite me a utilizacao dos tokens*/

//CRIAR UM USUARIO NOVO
const create = async (req, res, next) => {
    const username = await req.body.username; 
    const password = await req.body.password;
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;

    
    const newUser = await post(username, password, firstName, lastName);
    res.json(newUser);
};

//GET PARA PEGAR TODOS USERS CRIADOS
const getAll = async (req, res, next) => {
    if(await get()){
        const users = await get();
        res.json(users);
    }else{
        res.json('Não tem usuários criado');
    }
};



//EDITAR UM USER
const update = async (req, res, next) =>{
    const userId = await req.body.id;
    const username = await req.body.username;
    const password = await req.body.password;
    const firstName = await req.body.firstName;
    const lastName = await req.body.lastName;
    

    if(await put(userId, username, password, firstName, lastName)){
        res.status(200).json({ message: 'Usuário atualizado com sucesso!'});
    }else{
        res.status(401).json({ message: 'Falha para atualizar usuário'})
    }
};

//DELETAR UM USER
const del = async (req, res, next) => {

    const userId = await req.params.id;


    if(await deleteOne(userId)){
        res.status(200).json({ message: 'Usuário deletado com sucesso!'});
    }else{
        res.status(401).json({ message: 'Usuário não encontrado ou não tem permissão para deletar'});
    }
};

//SIGN-IN
const login = async ( req, res, next) => {
    const username = await req.body.username;
    const password = await req.body.password;

    
    
    if(await sigIn(username, password) == false){
        console.log('FALSE')
        res.send({authenticated: false});
    }else{
        console.log('TRUE')
        const token = jwt.sign(JSON.stringify(password), "root");
        res.send({token: token});
    }
};

module.exports = {getAll, create, update, del, login};