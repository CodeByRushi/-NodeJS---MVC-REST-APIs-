const express = require('express');
const app = express();
const path = require('path');
const userRouter = require('./routes/userRoutes');

app.use(express.static(path.join(__dirname,'public')));
app.use('/', userRouter);

app.listen(3000);