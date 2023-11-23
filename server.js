const express = require('express');
const bodyParser = require('body-parser');
const path= require('path');
const app = express();

const adminRoutes= require('./routes/admin');
const shopRoutes= require('./routes/shop');
const contactRoutes= require('./routes/contact');
const successRoutes= require('./routes/success');

const errorControllers= require('./controllers/error');

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use('/shop',shopRoutes);
app.use('/contact',contactRoutes);
app.use('/success',successRoutes);

app.use(errorControllers.get404);

app.listen(4000);
