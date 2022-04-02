const contact = require ('../models/contact-model.js');

async function post (ctx) {
  try {
    console.log("logging", ctx.request.body)
    await contact.create(ctx.request.body);

    ctx.status = 201;

  } catch (e) {
    ctx.status = 500;
    console.log(e)
    ctx.body = e;
  }
}

module.exports = { post }