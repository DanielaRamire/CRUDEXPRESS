require('dotenv').config()

const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const app = express();

const client = new MongoClient(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err) => {
    if (err) {
        console.log('Error connecting to MongoDB:', err);
    } else {
        console.log('Connected to MongoDB');
        const db = client.db('<database>');
        const collection = db.collection('<collection>');

        // Aquí puedes realizar operaciones en la colección
        client.close();
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});