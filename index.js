// entry point
const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT  || 5000;

app.use(cors());
const categories = require('./data/categories.json') // get categories from local folder






app.get('/', (req, res) => {
    res.send('Welcome to express server!')

});

app.get('/news-categories', (req, res) => {
    res.send(categories);  // Send categories  j
});

app.listen(port, () => {
    console.log('Dragon server running on port ', port);







})
