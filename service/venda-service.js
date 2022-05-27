const Venda = require('../models/venda-model');

//CRIAR UMA VENDA NOVA
async function post(type, quantity, price, contact){
    const venda = await Venda.create({
        type: `${type}`,
        quantity: `${quantity}`,
        price: `${price}`,
        contact: `${contact}`
    })
    return venda;
};

//GET PARA PEGAR TODAS AS VENDAS CRIADAS
async function get(){
    const vendas = await Venda.findAll();
    return vendas
};

//GET PARA PEGAR APENAS UMA VENDA
async function getone(vendaId){
    const venda = await Venda.findOne({ where: {id: `${vendaId}`}});
    if(venda != null){
        return venda;
    }else{
        return false;
    }
};


module.exports = {get, post, getone};