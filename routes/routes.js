const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

// main homepage route
router.get('/', (req, res, next) =>
{
    res.render('pages/index', {});
})

// add character page
router.get('/add-character', async (req, res, next) =>
{
    // ability to use fetch in the ui because of node-fetch install
    // these fetches are calling the backend api and NOT the server
    // this feeds into the Classes dropdown feed
    // classes is now the result of the fetch and returns a json object
    const classes = await fetch('http://localhost:3333/api/classes')
        .then((response) => { return response.json(); });

    // this feeds into the Races dropdown feed
    // races is now the result of the fetch and returns a json object
    const races = await fetch('http://localhost:3333/api/races')
        .then((response) => { return response.json(); });

    res.render('pages/add-character', {
        classes,
        races,
    });
})

module.exports = router;