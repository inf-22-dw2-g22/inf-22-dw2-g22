const swaggerJSDoc = require("swagger-jsdoc");
const config = require('../service/config-service');




const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "Social",
      version: "1.0.0",
      description: "Connect with everyone",
      contact: { name: "Your name" },
    },
    servers: [ {url: "http://localhost:" + config.PORT,},],
    components: {
      securitySchemes: {
        ApiKeyAuth: { type: "apiKey", in: "header", name: config.API_KEY_HEADER},
      },
    },
    security: [{ ApiKeyAuth: [] }],
};

const options = {
    swaggerDefinition,
    apis: ["./docs/**/*.yaml"],
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;