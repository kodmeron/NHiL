// index.js
const axios = require('axios');

async function getLat() {
  const response = await axios.get('http://localhost:8080/api/locations');
  return response.data[1].lat;
}

module.exports = getLat;