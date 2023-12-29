// 1. Import express
import express from 'express';
import productRouter from './src/features/product/product.routes.js';
import bodyParser from 'body-parser';


// 2. Create Server
const server = express();

server.use(bodyParser);

// for all requests related to product, redirect to product routes.
// localhost:3200/api/products
server.use("/api/products", productRouter);

// 3. Default request handler
server.get('/', (req, res)=>{
    res.send("Welcome to Ecommerce APIs");
});

// 4. Specify port.
server.listen(3200,()=>{
    console.log("Server is running at 3200");
});

