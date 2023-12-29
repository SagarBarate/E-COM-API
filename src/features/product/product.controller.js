import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        console.log(req.body);
        console.log("this is the post request ");
        res.status(200).send("Post request recieved");

    }

    rateProduct(req,res){}

    getOneProduct(req,res){}

}