import express from 'express'
import { allProduct } from '../../utils/api'
export const settingsController = express.Router()


settingsController.get('/settings', (req, res) => {
    allProduct().then(item => {
        console.log(JSON.stringify(item.data));
    })
    res.render('admin/settings')
})