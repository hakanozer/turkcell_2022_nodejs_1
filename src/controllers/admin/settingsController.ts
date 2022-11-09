import express from 'express'
export const settingsController = express.Router()


settingsController.get('/settings', (req, res) => {
    res.render('admin/settings')
})