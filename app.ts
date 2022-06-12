import * as Koa from 'koa';
import index from './routes/index';
import users from './routes/users';
import * as bodyParser from 'koa-bodyparser';
import './mongodb/db';
import { PORT } from './cofing';

const app = new Koa();

app.use(bodyParser());

// logger
app.use(async (ctx, next) => {
  const start = +new Date;
  await next();
  const ms = +new Date - start;
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`);
})

// routes
app.use(index.routes());
app.use(users.routes());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});
app.listen(PORT);
