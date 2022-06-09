const Venda = require('../models/venda-model');
const User = require('../models/user-model');

//BUSCAR POR UM UTILIZADOR
async function getUser(apiKey){
    const user = await User.findOne({ where: {apiKey: `${apiKey}`}});
    return user;
}

//CRIAR UMA VENDA NOVA
async function post(type, quantity, price, contact, apiKey){
    const user = await getUser(apiKey);
    const userID = user.id;
    const venda = await Venda.create({
        type: `${type}`,
        quantity: `${quantity}`,
        price: `${price}`,
        contact: `${contact}`,
        userId: `${userID}`
    })
    return venda;
};

//GET PARA PEGAR TODAS AS VENDAS CRIADAS
async function get(){
    const vendas = await Venda.findAll();
    if(vendas.length === 0){
        return false;
    }else{
        return vendas
    }
};

//GET TODAS VENDAS DE UM USER
async function allVendas(userID){
    const vendas = await Venda.findAll({ where: {userId: `${userID}`}});
    if(vendas.length === 0){
        return false;
    }else{
        return vendas;
    }
};

//VERICADOR DE DONO DA VENDA
async function userValidation(publiId, apiKey){
    const user = await User.findOne({ where: {apiKey: `${apiKey}`}});
    const vendaOwner = await Venda.findOne({ where: {id: `${publiId}`,userId: `${user.id}`}});
    if(vendaOwner != null){
        return user;
    }else{
        return false;
    }
};

//EDITAR UMA VENDA
async function put(apiKey, vendaId, vendaType, vendaQuantity, vendaPrice, vendaContact){

    if(await userValidation(vendaId, apiKey)){
        Venda.update(
            { 
                type: `${vendaType}`,
                quantity: `${vendaQuantity}`,
                price: `${vendaPrice}`,
                contact: `${vendaContact}`,
            },
            { where: {id: `${vendaId}`}}
        )
        return true;
    }else{
        return false;
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

//DELETAR UMA VENDA
async function deleteOne(vendaiId, apiKey){
    if(await adm(apiKey) === true){
        Venda.destroy({ where: { id: `${vendaiId}`}});
        return true;
    }else{
        if(await userValidation(vendaiId, apiKey)){
            Venda.destroy({ where: { id: `${vendaiId}`}});
            return true;
        }else{
            return false;
        }
    }
};

module.exports = {get, post, allVendas, put, deleteOne};