const express = require('express')

const router = express.Router();
const homeController= require('../Controllers/homeController')
console.log('loaded');

router.get('/', homeController.home);
router.use('/users',require('./users'));
router.use('/users',require('./user_post'))


module.exports=router;