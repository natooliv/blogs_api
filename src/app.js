const express = require('express');

// ...

const app = express();
const routerLogin = require('./routes/login.routes');
const userRouter = require('./routes/user.routes');
const categoryRouter = require('./routes/category.routes');
const postRouter = require('./routes/post.routes');

// não remova ou mova esse endpoint
app.get('/', (_request, response) => {
  response.send();
});

app.use(express.json());

app.use('/login', routerLogin);
app.use('/user', userRouter.userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
