const route = require("express").Router()
const allControllers = require("../controllers/allControllers")

// const userRoutes = require("./userRoutes")

route.get("/register", allControllers.renderRegister)
route.get("/login", allControllers.renderLogin)
route.get("/protected", allControllers.renderProtected)
route.get("/main", allControllers.renderMain)

module.exports = route