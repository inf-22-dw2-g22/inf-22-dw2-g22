const User = require('../models/user-model');


//CRIAR UM USUARIO NOVO
async function post(username, password, firstName, lastName){
    const user = await User.create({
        username: `${username}`,
        password: `${password}`,
        firstName: `${firstName}`,
        lastName: `${lastName}`
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



//EDITAR UM USER
async function put(userId, username, password, firstName, lastName){


    User.update(
        {
            username: `${username}` ,
            password: `${password}`,
            firstName: `${firstName}`,
            lastName: `${lastName}`,
        },
        { where: {id: `${userId}`}}
    )
    return true;

};

//DELETAR UM USER
async function deleteOne(userId){
    
        User.destroy({ where: { id: `${userId}`}});
        return true;
    
}

//SIG-IN
async function sigIn(username, password){

    const user = await User.findOne({ where: {username: `${username}`,
    password: `${password}`}});

    if(user != null){
        return true;
    }else{
        return false;
    }

}
module.exports = {get, post, put, deleteOne, sigIn};