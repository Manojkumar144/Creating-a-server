const express = require('express');

const router = express.Router();

const contactControllers=require('../controllers/contactUs');
router.get('/',contactControllers.contactUs);

module.exports=router;
