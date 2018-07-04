const Koa = require('koa');
//创建应用对象
const app = new Koa();

//中间件
app.use(async ctx => {
  ctx.body = 'hello koa';
})

//监听服务
app.listen(3000);