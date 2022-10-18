const { User, Room, History } = require("../models");

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
    static async handleLogin(req,res){
        // const { username, password } = req.params;
        const data = await User.findOne({
            where: {
                username: req.params.username,
                password: req.params.password
            }
            
        })
        if(data != null){
            res.send("Data Ditemukan")
        }else{
            res.send('Data Tidak Ditemukan')
        }
    }

    //api post
    static async handleRegister(req,res){
        try {
           const { fullname, username, password, role } = req.body;
           const data = await User.create({
           fullname,
           username,
           password,
           role
       })
       if (data){
           res.send("Anda Berhasil Register")
       }
        } catch (error) {
            res.send("Anda Gagal Register, Mohon Periksa kembali")
        }
       
    }
}

module.exports = allControllers