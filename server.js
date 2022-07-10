let express = require("express");
let bodyParser = require('body-parser');
var path = require('path');
let app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const mysql = require('mysql');
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'root',
  database: 'tailwind-project',
  port: 3306
});

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html'))
});

connection.connect();

app.get('/node_modules/tw-elements/dist/js/index.min.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/node_modules/tw-elements/dist/js/index.min.js'));
});

app.get('/public/dist/js/script.js', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/dist/js/script.js'));
});

app.post('/send-email', function (req, res) {
    connection.query(
        'INSERT INTO messages (`name`, `email`, `message`) VALUES (?,?,?)', 
        [req.body.name, req.body.email, req.body.message], 
        (err, rows, fields) => {
            if (err) throw err;
        }
    )
    res.redirect('/');
});


let server = app.listen(5500, function(){
    let port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});