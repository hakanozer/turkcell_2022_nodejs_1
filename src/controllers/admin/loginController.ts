import express from 'express'
import { IUserLogin } from '../../models/IUserLogin'
export const loginController = express.Router()


// get login
loginController.get('/', (req,res) => {
    res.render('admin/login')
})

// post login
loginController.post('/login', (req, res) => {

    try {
        const user: IUserLogin = req.body
        if ( user.email === undefined || user.password === undefined ) {
            throw new Error("email or password null");
        }
        
        
        if ( user.email === 'ali@mail.com' && user.password === '12345' ) {
            console.log('Login Success');
        }else {
            console.log("Login Fail");
        }
    } catch (error:any) {
        console.log("Login Error :", error.message);
    }

    res.redirect('../admin')
})