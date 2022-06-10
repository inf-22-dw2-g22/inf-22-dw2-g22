const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')
const User = require('../models/user-model')

const Venda = database.define('venda', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    type:{
        type: Sequelize.STRING,
        allowNull: false
    },
    quantity:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    price:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    contact:{
        type: Sequelize.STRING,
        allowNull: false
    }

})

User.hasMany(Venda);
/*
//Verificar se DEV
if(config.ENV === 'dev'){
    Publicacao.sync({force:true}).then(()=>{
        Publicacao.create({
            name:'Hellow World',
            description:'Salve Mundo'
        });     
    });
}else{
    Publicacao.sync();
}
*/
Venda.sync();


module.exports = Venda;