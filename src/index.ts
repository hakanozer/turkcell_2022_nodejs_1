import express from "express";
import path from "path";
import bodyParser from "body-parser";
import session from 'express-session'

const app = express()
const port = 8080


// session data type
declare module 'express-session' {
    interface SessionData {
        item: IUserSchema
    }
}
// session config
const sessionKey = 'key123'
const sesionConfig = session({
    secret: sessionKey,
    resave: false,
    saveUninitialized: true,
})
app.use(sesionConfig)

/*
import { userEmailControl, userSave } from "./services/admin/userService";
userEmailControl("ali@mail.com").then(emailItem => {
    if (!emailItem) {
        userSave("Ali Bilirler", "ali@mail.com", "12345").then(item => {
            console.log(item);
        })
    }
})
*/


// EJS config
app.set( "views", path.join( __dirname, "views" ) );
app.set('view engine', 'ejs');

// body-parser config
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// global filter
app.use(( req, res, next ) => {
    const url = req.url    
    // admin Control
    if ( url === '/admin' || url === '/admin/login'  ) {
        next()
    }else {
        if ( !req.session.item ) {
            res.redirect('../admin')
        }else {
            res.locals.user = req.session.item
            next()
        }
    }
})

// site import controller
import {homeController} from './controllers/site/homeController'
// site router
app.use('/', homeController)

// admin import controller
import {loginController} from './controllers/admin/loginController'
import {dashboardController} from './controllers/admin/dashboardController'
import { IUserSchema } from "./models/UserModel";
// admin router
app.use('/admin', [
    loginController, 
    dashboardController
])


app.listen( port, () => {
    console.log('http://localhost:'+port)
})