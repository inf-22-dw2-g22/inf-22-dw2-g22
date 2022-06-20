const {authenticateToken} = require('../service/auth-service');


const userAuth = async (req, res, next) => {
    const authHeader = req.headers.authorization;
    
    if(await authenticateToken(authHeader) == false){
        console.log('Não passou');
        return res.json({ message: 'You are not authorized'});

    }else{
        //Resposta de autenticação do token vindo do auth-service
        return res.json({
            authenticated: true,
            message: 'User is authenticated'
        });
    }

}

module.exports = {userAuth};