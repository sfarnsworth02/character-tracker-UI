const express = require('express');

const port = 8000;

const app = express();

// import the routes
const router = require('./routes/routes');

app.set('view engine', 'ejs');

// tell the app to use the routes
app.use('/', router);

app.listen(port, (err) =>
{
    console.log(`UI is up and running on port ${port}`);
})