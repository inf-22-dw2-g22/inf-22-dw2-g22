const User = require('../models/user-model');


//CRIAR UM USUARIO NOVO
async function post(username, password, firstName, lastName, admin, apiKey){
    const user = await User.create({
        username: `${username}`,
        password: `${password}`,
        firstName: `${firstName}`,
        lastName: `${lastName}`,
        admin: `${admin}`,
        apiKey: `${apiKey}`,
    })
    return user;
};

//GET PARA PEGAR TODOS USERS CRIADOS
async function get(){
    const users = await User.findAll();
    if(users.length === 0){
        return false;
    }else{
        return users
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

//VERIFICADOR DE USUARIO VALIDO
async function userValidation(userId, apiKey){
    const user = await User.findOne({ where: {id: `${userId}`,apiKey: `${apiKey}`}});
    console.log(user);
    if(user != null){
        return user;
    }else{
        return false;
    }
};

//GET PARA APENAS UM USER
async function getone(userId, apiKey){
    if(await adm(apiKey) === true){
        const user = await User.findOne({ where: {id: `${userId}`}});
        if(user != null){
            return user;
        }else{
            return false;
        }
    }else{
        return userValidation(userId, apiKey);
    }
};

//EDITAR UM USER
async function put(apiKey, userId, password, firstName, lastName){

    if(await userValidation(userId, apiKey)){
        User.update(
            { 
                password: `${password}`,
                firstName: `${firstName}`,
                lastName: `${lastName}`,
            },
            { where: {id: `${userId}`}}
        )
        return true;
    }else{
        return false;
    }
};

//DELETAR UM USER
async function deleteOne(userId, apiKey){
    if(await adm(apiKey) === true){
        User.destroy({ where: { id: `${userId}`}});
        return true;
    }else{
        if(await userValidation(userId, apiKey)){
            User.destroy({ where: { id: `${userId}`}});
            return true;
        }else{
            return false;
        }
    }
}
module.exports = {get, post, getone, put, deleteOne};