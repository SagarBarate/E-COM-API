//1. import express 
import express from "express";

//2. create server
const server = express();

//3. default request handler
server.get("/", (req, res) => {
    res.send("Welcome to Ecommerce api");
});

//4. specify the port 
server.listen(3200);
console.log("Server is listening to 3200");



