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


module.exports = {get, post, allVendas};