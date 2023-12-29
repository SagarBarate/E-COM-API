import ProductModel from "./product.model.js";

export default class ProductController{

    getAllProducts(req,res){
        const products = ProductModel.GetAll();
        res.status(200).send(products);
    }

    addProduct(req, res){
        const {name, price,sizes} = req.body;
        const newProduct = {
            name,
            prices:parseFloat(price),
            sizes:sizes.split(','),
            imageUrl:req.file.filename,

        };

       const createdrecord=  ProductModel.add(newProduct);

       res.status(201).send(createdrecord);

    }


    rateProduct(req,res){}

    getOneProduct(req,res){}

}