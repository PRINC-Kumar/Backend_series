const path = require('path');

const express=require('express');
const homeRouter = require('./routes/homerouter');
const contactRouter = require('./routes/contectrouter');
const rootDir = require('./utils/pathutil');

const app=express();
app.use(express.urlencoded());
app.use(express.static(path.join(rootDir,'public')));


app.use(homeRouter);
app.use(contactRouter);

const port=3001;
app.listen(port,() => {
  console.log(`server running on address http://localhost:${port}`);
});

