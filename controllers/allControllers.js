class allControllers {
    //api get
    static renderRegister(req,res){
        res.render("register")
    }
    static renderLogin(req,res){
        res.render("login")
    }
    static renderProtected(req,res){
        res.render("protected")
    }
    static renderMain(req,res){
        res.render("main")
    }
}
module.exports = allControllers