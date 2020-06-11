exports.get404=(req,res,next)=>{
    console.log("Its here , Its here")
    res.status(404).render("404",{title:"Error Page"});
}
