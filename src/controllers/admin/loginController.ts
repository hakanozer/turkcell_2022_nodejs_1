import express from 'express'
import { IUserLogin } from '../../models/IUserLogin'
import { userLoginControl } from '../../services/admin/userService'
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
        userLoginControl(user.email, user.password).then(userItem => {
            if (userItem) {
                // sessinon create
                req.session.item = {
                    id: userItem.id,
                    name: userItem.name!,
                    email: userItem.email!,
                    password: userItem.password!
                }
                res.redirect('../admin/dashboard')
            }else {
                errorMessage = 'Username or Password Fail'
                res.redirect('../admin')
            }
        })
        
    } catch (error:any) {
        console.log("Login Error :", error.message);
        errorMessage = error.message
        res.redirect('../admin')
    }

    
})