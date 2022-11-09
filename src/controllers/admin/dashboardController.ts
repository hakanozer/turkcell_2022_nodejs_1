import express from 'express'
import { customerAdd } from '../../services/admin/customerService'
export const dashboardController = express.Router()


dashboardController.get('/dashboard', (req, res) => {
    res.render('admin/dashboard')
})

// customer add
dashboardController.post('/customerAdd', async (req, res, next) => {
    const name = req.body.name
    const phone = req.body.phone
    const color = req.body.color
    await customerAdd(name, phone, color).then(item => {
        console.log("Insert Success");
    })
    res.redirect('../admin/dashboard')
})