
const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config');
const locationRoutes = require('./routes/location-routes');

const app = express();

app.use(express.json());
app.use(bodyParser.json());

app.use('/api', locationRoutes.routes);



app.listen(config.port, () => console.log('App is listening on url http://localhost:' + config.port));
