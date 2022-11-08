import express from 'express'
import { IUserLogin } from '../../models/IUserLogin'
export const loginController = express.Router()


// get login
let errorMessage = ''
loginController.get('/', (req,res) => {
    res.render('admin/login', {errorMessage: errorMessage})
    errorMessage = ''
})

// post login
loginController.post('/login', (req, res) => {

    try {
        const user: IUserLogin = req.body
        if ( user.email === undefined || user.password === undefined || user.email === '' || user. password === '' ) {
            throw new Error("email or password null or empty");
        }
        
        if ( user.email === 'ali@mail.com' && user.password === '12345' ) {
            console.log('Login Success');
        }else {
            errorMessage = 'Username or Password Fail'
        }
    } catch (error:any) {
        console.log("Login Error :", error.message);
        errorMessage = error.message
    }

    res.redirect('../admin')
})