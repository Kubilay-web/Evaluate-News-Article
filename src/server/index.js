const dotenv = require('dotenv');
dotenv.config();
const fetch = require("node-fetch");
var path = require('path')


const express = require('express')

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');




app.use(express.static('dist'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
console.log(__dirname)


//display of UI
app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
    //res.sendFile(path.resolve('src/client/views/index.html'))
})
// designates what port the app will listen to for incoming requests
app.listen(8888, function () {
    console.log('Example app listening on port 8888!')
})
    

projectData = {};

app.get('/all', function (req, res) {
    console.log("Get request OK.");
    res.send(projectData);
    console.log(projectData);
})


//POST Route



app.post('/addText', addData)

function addData(request, response) {

    projectData.Text = request.body.userResponse;
    projectData.inip = request.body.Inıp;
    projectData.endp = request.body.Endp;
    projectData.bop = request.body.Bop;
    projectData.score_tag = request.body.ScoreTag;
    projectData.agreement = request.body.Agreement;

    
    
    
    response.end(projectData);
    console.log(projectData);
}
