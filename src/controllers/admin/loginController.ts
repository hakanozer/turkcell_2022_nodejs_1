import express from 'express'
import { IUserLogin } from '../../models/IUserLogin'
import { userLoginControl } from '../../services/admin/userService'
import { eventEmitter, eventEnum } from '../../utils/events'
import { encrypt } from '../../utils/util'
export const loginController = express.Router()


// get login
let errorMessage = ''
loginController.get('/', (req,res) => {
    if ( req.session.item && req.session.item.id !== '' ) {
        res.redirect('../admin/dashboard')
    }else {
        res.render('admin/login', {errorMessage: errorMessage})
        errorMessage = ''
    }
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
                // cookie control
                if (user.remember !== undefined && user.remember === 'on') {
                    res.cookie('admin', encrypt(userItem.id), { maxAge: (1000 * 60 * 60 * 24), secure: true})
                }
                eventEmitter.emit(eventEnum.fncOne, userItem.name!)
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


// logout
loginController.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(!err) {
            res.cookie('admin', '', {maxAge: 0})
            res.redirect('../admin')
        }
    })
})