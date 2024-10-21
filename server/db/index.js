

const mongoose = require('mongoose');

mongoose.set('strictQuery', false);

mongoose.connect('mongodb+srv://shashank:shashank123@cluster0.nurdl.mongodb.net/').then(() => console.log('connected mongo db')).catch((e) => console.log(e));
