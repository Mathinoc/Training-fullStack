const mongoose = require('mongoose');
const uri = "mongodb+srv://mathinoc:mongodb@cluster0.i2gsc.mongodb.net/dbmessage?retryWrites=true&w=majority";

mongoose.connect(uri, ()=>console.log('Connected to db 🏆'));

module.exports = mongoose;
