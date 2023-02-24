require('dotenv').config()

const mongoose = require('mongoose');
const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });
const port = process.env.Port || 9000;

// client.connect((err) => {
//     if (err) {
//         console.log('Error connecting to MongoDB:', err);
//     } else {
//         console.log('Connected to MongoDB');
//         const db = client.db('<database>');
//         const collection = db.collection('<collection>');

//         Aquí puedes realizar operaciones en la colección
//         client.close();
//     }
// });

mongoose
    .connect(process.env.MONGODB_URI)
    .then(() =>  console.log("Connected to MongoDB Atlas"))
    .catch((error) => console.error(error))

app.listen(port, () => console.log('server listening on port', port));

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.use(express.json());
app.use(require('../routes'));

module.exports = app;