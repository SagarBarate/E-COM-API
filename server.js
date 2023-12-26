//1. import express 
import express from "express";
import * as ProductRouter  from "./src/features/product/product.routes";

//2. create server
const server = express();

// for all request related to product will redirect to product routes
//localhost:3200/api/product
server.use("/api/products")

//3. default request handler
server.get("/", (req, res) => {
    res.send("Welcome to Ecommerce api");
});

//4. specify the port 
server.listen(3200);
console.log("Server is listening to 3200");



