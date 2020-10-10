  
var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var aylien = require('aylien_textapi');
const bodyParser = require('body-parser');

const dotenv = require('dotenv');
dotenv.config();

var textapi = new aylien({
    
    application_key: "57af5f902436a09a50cc10a2516a2ad8"
  });




app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


const app = express()

app.use(express.static('dist'))

console.log(__dirname)

app.get('https://api.aylien.com/api/v1/summarize', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8080, function () {
    console.log('Example app listening on port 8080!')
})

app.post('https://api.aylien.com/api/v1/summarize', async (req, res, next) => {
    //console.log(req.body);
    try {
      var data = textapi.sentiment({
        //'text': 'John is a very good football player!'
        'text': req.body.theText
      }, function(error, response) {
        if (error === null) {
          console.log(response);
          res.send(response);
        }
      });
      //res.send(mockAPIResponse)
    } catch(error) {
      // Passes errors into the handler
      return next(error)
    }
    //res.send(returnVal);
  })

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

console.log(`Your API key is ${process.env.API_KEY}`);
