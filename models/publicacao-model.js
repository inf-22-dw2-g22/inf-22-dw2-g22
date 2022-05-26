const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')

const Publicacao = database.define('publicacao', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name:{
        type: Sequelize.STRING,
        allowNull: false
    },
    description:{
        type: Sequelize.STRING,
        allowNull: false
    }
})
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
Publicacao.sync();


module.exports = Publicacao;