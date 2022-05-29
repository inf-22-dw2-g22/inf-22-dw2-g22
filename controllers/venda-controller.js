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

//EDITAR UMA VENDA
const update = async (req, res, next) => {
    const apiKey = await req.get(config.API_KEY_HEADER);
    const vendaId = await req.params.id;
    const vendaType = await req.body.type;
    const vendaQuantity = await req.body.quantity;
    const vendaPrice = await req.body.price;
    const vendaContact = await req.body.contact;

    if(await put(apiKey, vendaId, vendaType, vendaQuantity, vendaPrice, vendaContact)){
        res.status(200).json({ message: 'Venda atualizada com sucesso!'});
    }else{
        res.status(401).json({ message: 'Venda não encontrada ou não tem permissão para editar.'})
    } 
};

//DELETAR UMA VENDA
const del = async (req, res, next) => {
    const apiKey = await req.get(config.API_KEY_HEADER);
    const vendaiId = await req.params.id;


    if(await deleteOne(vendaiId, apiKey)){
        res.status(200).json({ message: 'Venda deletada com sucesso!'});
    }else{
        res.status(401).json({ message: 'Venda não encontrada ou não tem permissão para deletar.'});
    }

};


module.exports = {getAll, create, getAllVendas, update, del};