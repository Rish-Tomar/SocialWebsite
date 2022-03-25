const express=require('express')

const router =express.Router()

const usersPost = require('../Controllers/User_post_controller')

console.log("User Post loaded")

router.get('/post',usersPost.posts)


module.exports = router ;