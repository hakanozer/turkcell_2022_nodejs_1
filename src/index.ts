import express from "express";
import path from "path";
import bodyParser from "body-parser";

const app = express()
const port = 8080

// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// site import controller
import {homeController} from './controllers/site/homeController'
// site router
app.use('/', homeController)

// admin import controller
import {loginController} from './controllers/admin/loginController'
// admin router
app.use('/admin', loginController)


app.listen( port, () => {
    console.log('http://localhost:'+port)
})