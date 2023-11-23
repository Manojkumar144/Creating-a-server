const express = require('express');

const router = express.Router();

const successPageControllers=require('../controllers/successPage');

router.get('/',successPageControllers.successPage);

module.exports=router;
