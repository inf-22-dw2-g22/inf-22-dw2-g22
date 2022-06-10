const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const app = express();
const swaggerSpec = require('./controllers/swagger-controller');
const config = require('./service/config-service');

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

//Routes
const userRoute = require('./routes/user-route');
const publiRoute = require('./routes/publicacao-route');
const vendaRoute = require('./routes/venda-route');
const registerRoute = require('./routes/register-route');
app.use('/users', userRoute);
app.use('/publicacao', publiRoute);
app.use('/venda', vendaRoute);
app.use('/register', registerRoute);

//Start server
app.listen(config.PORT, function () {
    console.log(`app running on localhost:${config.PORT}`);
});