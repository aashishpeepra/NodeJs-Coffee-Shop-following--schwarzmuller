const path=require("path");
const express=require("express");
const bodyParser=require("body-parser");
const adminRoutes=require("./routes/admin");
const shopRoutes=require("./routes/shop");
const expressHbs=require("express-handlebars");
const errorController=require("./controllers/error");
const app=express();


app.set("view engine","ejs");

// app.engine("handlebars",expressHbs({layoutsDir: path.join(__dirname, 'views')}));
// app.set("view engine","handlebars")

// app.set("view engine","pug");
app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))

app.use("/admin",adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);
app.listen(3000);