require('dotenv').config();
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors');

const app = express();
const PORT = 8080;

app.set('port', PORT)

app.use(bodyParser.json());
app.use(cors());

app.listen(app.get('port'), () => console.log(`Listening on PORT: ${app.get('port')}`))