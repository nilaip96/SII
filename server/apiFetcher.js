const axios = require('axios');
const url = 'http://localhost:4000/procedures';


module.exports = {
  post: (callback) => {
    axios.post(url)
    .then(callback)
  },
  get: (callback, substring) => {
    console.log(substring)
    axios.get(url + substring + '.*')
    .then(callback)
  },
  put: (callback) => {
    axios.put(url)
    .then(callback)
  } 
}

