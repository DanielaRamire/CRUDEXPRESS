const express = require('express');

const app = express();


//configuracion Express

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/',(req, res) => {
    res.send('OK');
});

module.exports = app;