// const db=require("mysql2");

// let database=db.createPool({
//     host:"localhost",
//     user:"root",
//     password:"admin",
//     database:"node"
// });

// module.exports=database.promise();

const Sequelize=require("sequelize");

const sequel=new Sequelize("node","root","admin",{dialect:'mysql',host:"localhost"});

module.exports=sequel;