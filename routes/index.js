const route = require("express").Router()
const allControllers = require("../controllers/allControllers")

// const userRoutes = require("./userRoutes")

route.get("/register", allControllers.renderRegister)
route.get("/login", allControllers.renderLogin)
route.get("/create-room", allControllers.renderProtected)
route.get("/fight", allControllers.renderMain)
route.get("/home", allControllers.handleLogin)

route.post("/register", allControllers.handleRegister)

module.exports = route