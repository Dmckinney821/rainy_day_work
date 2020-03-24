
const express = require('express');

const app = express();

app.get('', (req, res) => {
    res.send('Hello expressing')
})

app.listen(3000, () => {
    console.log('it started')
})