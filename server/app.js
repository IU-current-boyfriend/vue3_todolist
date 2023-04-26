const express = require('express');
const router = require('./router');
const app = express();

/**
 * 
 * 解决跨域
 */

app.all('*', (req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'POST,GET');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.use(router);

app.listen(3000, () => {
  console.log('listing port 3000');
});