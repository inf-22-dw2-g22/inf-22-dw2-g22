const Sequelize = require('sequelize');
const database = require('../database/db');
const config = require('../service/config-service')

const User = database.define('user', {
    id:{
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    username:{
        type: Sequelize.STRING,
        allowNull: false
    },
    password:{
        type: Sequelize.STRING,
        allowNull: false
    },
    firstName:{
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName:{
        type: Sequelize.STRING,
        allowNull: false
    },
})

/*
//Verificar se DEV
if(config.ENV === 'dev'){
    User.sync({force:true}).then(()=>{
        User.create({
            username:'Rubens',
            password:'senha',
            firstName:'R',
            lastName:'R',
            admin: true,
            apiKey:'999999999'
        });
        User.create({
            username:'Ricardo',
            password:'senha',
            firstName:'R',
            lastName:'R',
            admin: false,
            apiKey:'123456789'
        });
        User.create({
            username:'Rozana',
            password:'senha',
            firstName:'R',
            lastName:'R',
            admin: false,
            apiKey:'987654321'
        });      
    });
}else{
    User.sync();
}
*/
//User.sync();

module.exports = User;