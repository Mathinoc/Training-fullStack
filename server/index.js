const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const cors = require('@koa/cors');
const port = 3000;
const router = require('./router.js');
const mongoose = require('./models/index_model.js');

const app = new Koa();

// app.use(serve(__dirname + './../app'));
app.use(cors());
app.use(bodyParser());
app.use(router.routes());

mongoose.connection.on('connected', ()=>{
  app.listen(port, () => console.log(`Server listening on http://localhost:${port} 🪁`));
})
