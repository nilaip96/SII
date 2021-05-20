const express = require('express');
const path = require('path');
const {post, get, put} = require('./apiFetcher.js');
const app = express();
const port = 3000;

const staticMiddleware = express.static(path.join(__dirname, '../client/dist'));

app.use(express.json());

app.use('/', staticMiddleware);

app.get('/temp/:p', (req, res) => {
  get(({data})=>{res.send(data)}, req.params.p)  
});

app.post('/temp/:p', (req, res) => {
  post(({data})=>{res.send(data)})
  
});

app.put('/temp/:p', (req, res) => {
  // put(({data})=>{res.send(data)})
  res.send('hello')
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})