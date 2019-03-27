const express = require('express'),
    bodyParser = require('body-parser');

const sqlProject = require('./mySQLapp');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/sql', sqlProject);

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`)
})