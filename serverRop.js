

const express = require('express');
var path = require('path');
const app = express();

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));

var ropstenContract;

var timeOut;
var runningPi = ''


app.get('/start', (req, res) => {
    runningPi = 'B';
    //TODO: validate fund sufficiency and time limit

    //TODO: start function 

    //TODO: take deposit to rinkeby 
    //TODO: call rinkeby node
})

app.get('/stop', (req, res) => {
    //TODO: stop running pi

    //TODO: reclaim remaining funds
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))
