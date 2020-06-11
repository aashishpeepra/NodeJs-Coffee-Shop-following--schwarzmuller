const express=require("express");
const path=require("path");
const router=express.Router();
const coffeeControllers=require("../controllers/products");

const products=[];

router.get("/add",coffeeControllers.addCoffeeGet)
router.post("/add",coffeeControllers.addCoffeePost);

module.exports=router;
