const config = require('../service/config-service');
const {get, post, allVendas, put, deleteOne} = require('../service/venda-service');

//CRIAR UMA VENDA NOVA
const create = async (req, res, next) => {
    const type = await req.body.type; 
    const quantity = await req.body.quantity;
    const price = await req.body.price;
    const contact = await req.body.contact;
    const apiKey = await req.get(config.API_KEY_HEADER);
    
    const newVenda = await post(type, quantity, price, contact, apiKey);
    res.json(newVenda);
};

//GET PARA PEGAR TODAS AS VENDAS CRIADAS
const getAll = async (req, res, next) => {
    if(await get()){
        const vendas = await get();
        res.json(vendas);
    }else{
        res.json('Não tem vendas criada');
    }
};

//GET TODAS VENDAS DE UM USER
const getAllVendas = async (req, res, next) => {
    const userID = await req.params.id;

    if(await allVendas(userID) == false){
        res.json('Não foi possível encontrar a venda')
    }else{
        const vendas = await allVendas(userID);
        res.json(vendas);
    }
};


module.exports = {getAll, create, getAllVendas};