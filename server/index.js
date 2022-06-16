const express = require("express");
const cors = require("cors"); /* serve para poder fazer ligaçao com outras portas */
const swaggerUi = require("swagger-ui-express");
const app = express(); /* construtor do express  */
const swaggerSpec = require('./controllers/swagger-controller');
const config = require('./service/config-service');

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Routes
const userRoute = require('./routes/user-route');
const registerRoute = require('./routes/register-route');
const authRoute = require('./routes/auth-route');
app.use('/users', userRoute);
app.use('/register', registerRoute);
app.use('/auth', authRoute);

//Start server
app.listen(config.PORT, function () {
    console.log(`app running on localhost:${config.PORT}`);
});