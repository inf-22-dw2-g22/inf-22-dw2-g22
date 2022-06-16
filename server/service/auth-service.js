const jwt = require("jsonwebtoken"); /* permite me a utilizacao dos tokens*/

async function authenticateToken(authHeader){
    if(authHeader){
        const token = authHeader.split(" ")[1];

        //verificador do token se tem a palavra root
        await jwt.verify(token, "root", (err) => {
            if (err){
                console.log('Parou err');
                return false;
            }
            console.log('Parou true');
            return true;
        });
    }
    else{
        console.log('Parou else');
        return false;
    }
}

module.exports = {authenticateToken};