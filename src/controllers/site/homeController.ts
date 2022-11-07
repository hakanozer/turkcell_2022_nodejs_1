import express from 'express'
import { fncInfo } from '../../services/site/homeService'
export const homeController = express.Router()

homeController.get('/', (req, res) => {
    res.render('site/home', fncInfo() )
})