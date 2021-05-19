const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/', staticMiddleware);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})