const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routes = require('./routes/routes.js');

const app = express();
app.use(
  cors({
    origin: 'http://localhost:3001',
  }),
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

routes(app);

app.listen(3001, () => console.log('Express server is running on localhost:3001'));
