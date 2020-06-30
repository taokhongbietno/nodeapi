let express = require('express');
let app = express();
const bodyParser = require('body-parser');
require('dotenv').load

const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

let port = process.env.PORT || 8080;


const swaggerOptions = {
    swaggerDefinition: {
        info: {
            version: "1.0.1",
            title: "Danh Sách API",
            description: "Danh sách các api ứng dụng",
            contact: {
                name: "Amazing Developer"
            },
            servers: ["http://localhost:3000"]
        }
    },
    // ['.routes/*.js']
    apis: ["server.js"]
};

// Routes
/**
 * @swagger
 * route:
 *  get:
 *    description: Use to request all customers
 *    responses:
 *      '200':
 *        description: A successful response
 */

 /**
 * @swagger
 * customers:
 *    put:
 *      description: Use to return all customers
 *    parameters:
 *      - name: customer
 *        in: query
 *        description: Name of our customer
 *        required: false
 *        schema:
 *          type: string
 *          format: string
 *    responses:
 *      '201':
 *        description: Successfully created user
 */


const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

let routes = require('./api/routes') //importing route
routes(app)



app.use(function (req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})



app.listen(port);

console.log('RESTful API server started on: hjhj  ' + port);