const mongoose = require('./index_model.js');
const Schema = mongoose.Schema;

const contactSchema = new Schema({
  firstName: String,
  lastName: String,
  email: String,
});

const Contacts = mongoose.model('contactList', contactSchema);
//let contact =  new Contacts({firstName:"Mahtieu", lastName:"Tinoco", email:"mahtieu@gmail.com"})
//contact.save();

module.exports = Contacts;
