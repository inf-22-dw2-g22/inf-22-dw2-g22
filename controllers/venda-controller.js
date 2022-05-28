const config = require('../service/config-service');
const {get, post, getone, put, deleteOne} = require('../service/venda-service');

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

//GET PARA PEGAR APENAS UMA VENDA
const getOne = async (req, res, next) => {
    const vendaId = await req.params.id;

    if(await getone(vendaId) == false){
        res.json('Não foi possível encontrar a venda')
    }else{
        const venda = await getone(vendaId);
        res.json(venda);
    }
};


module.exports = {getAll, create, getOne};