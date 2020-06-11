

const express=require("express");
const router=express.Router();

const coffeeControllers=require("../controllers/products");


router.get("/",coffeeControllers.allCoffee);

module.exports=router;