const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const app = express();
const swaggerSpec = require('./controllers/swagger-controller');
const config = require('./service/config-service');

//Routes
const userRoute = require('./routes/user-route');
const publiRoute = require('./routes/publicacao-route');

//Estou chamando os modelos para ir ja criando a table na DB enquanto nao chamo os modelos no service. Apos criar o service posso apagar do index
const Venda = require('./models/venda-model');

app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/users', userRoute);
app.use('/publicacao', publiRoute);

//Start server
app.listen(config.PORT, function () {
    console.log(`app running on localhost:${config.PORT}`);
});