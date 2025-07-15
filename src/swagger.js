const swaggerJSDoc = require('swagger-jsdoc');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Kitten Dating API',
            version: '1.0.0',
            description: 'API для сайта знакомств для котиков 🐱',
        },
    },
    apis: ['./src/routes/*.js'],
};

module.exports = swaggerJSDoc(options);
