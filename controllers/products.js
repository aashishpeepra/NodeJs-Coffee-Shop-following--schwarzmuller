const Product = require("../models/product");

const addCoffeeGet = (req, res, next) => {
    res.render("add-product", { title: "Add New Coffee", path: "/admin/add" })
}

const addCoffeePost = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect("/");
}

const allCoffee = (req, res, next) => {
    Product.fetchAll((products)=>{
        res.render("shop", { prods:products , title: "My Coffee Shop", path: "/" })
    })
    
}

exports.addCoffeeGet = addCoffeeGet;
exports.addCoffeePost = addCoffeePost;
exports.allCoffee = allCoffee;