const express=require('express')

const router =express.Router()

const usersController = require('../Controllers/user_controller')

console.log("User controller loaded")

router.get('/profile',usersController.profile)


module.exports = router ;