const swaggerJSDoc = require("swagger-jsdoc");
const config = require('../service/config-service');




const swaggerDefinition = {
    openapi: "3.0.0",
    info: { 
      title: "ApiKeyAuthentication_03-1",
      version: "1.0.0",
      description: "Example 03 for API KEY Authentication",
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