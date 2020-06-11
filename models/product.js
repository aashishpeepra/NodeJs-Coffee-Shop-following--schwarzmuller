const fs=require("fs");
const base=require("../util/path");
const path=require("path");
const p=path.join(base,"data","products.json");

const readProductsFromFile=cb=>{
        return fs.readFile(p,(err,fileData)=>{
            if(!err)
            {
                return cb(JSON.parse(fileData));
            }
            return cb([]);
        })
}
module.exports=class Product{
    constructor(title){
        this.title=title;
    }
    save(){
        readProductsFromFile(products=>{
            products.push(this);
            fs.writeFile(p,JSON.stringify(products),err=>{
                console.log("Error in writing to file",err);
            })
        })
    }
    static fetchAll(cb){
        readProductsFromFile(cb);
    }
}