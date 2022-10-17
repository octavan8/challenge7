const express = require ("express")
const app = express()
const port = 6060
const router = require("./routes")

app.use(express.urlencoded({extended:false}))

app.set('view engine', 'ejs')
app.use('/css', express.static(__dirname+'/css'))
app.use('/js', express.static(__dirname+'/js'))
app.use('/assets', express.static(__dirname+'/assets'))

app.use(router)


app.listen(port, () => {
    console.log("App is running on port" +port);
})