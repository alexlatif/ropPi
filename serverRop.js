

const express = require('express');
var path = require('path');
const app = express();

// Serve up content from public directory
app.use(express.static(__dirname + '/public'));

var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://test.mosquitto.org')

var ropstenContract;

var timeOut;
var runningPi = ''

client.on('connect', () => {
    client.subscribe('flow')
})

client.on('flow', (start, message) => {
    // message is Buffer
    client.publish('test', 'ok')
    console.log(message.toString())
    client.end()
})


app.listen(3000, () => console.log('Example app listening on port 3000!'))
