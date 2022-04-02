const Router = require('koa-router');
const { post } = require('./controllers/index-controller.js');

const router = new Router();

//router.get('/message', message.getAll);
router.post('/newcontact', post);
//router.delete('/delete', message.delMessage);

module.exports = router;
