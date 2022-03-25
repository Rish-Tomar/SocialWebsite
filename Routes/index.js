const express = require('express')

const router = express.Router();
const homeController= require('../Controllers/homeController')
console.log('loaded');

router.get('/', homeController.home)


module.exports=router;