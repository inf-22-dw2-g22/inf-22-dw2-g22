const express = require("express");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const app = express();
const swaggerSpec = require('./controllers/swagger-controller');
const config = require('./service/config-service');


app.use(cors());
app.use(express.json());
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));


// start server
app.listen(config.PORT, function () {
    console.log(`app running on localhost:${config.PORT}`);
});