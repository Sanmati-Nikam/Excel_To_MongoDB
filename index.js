var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var path = require('path');
// required db
const db = require('./config/mongoose')
// selecting the port
const port = 8000
const app = express()
// set up view engine as ejs
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use(express.urlencoded())
app.use(express.static('./assets'))
app.use(bodyParser.urlencoded({
    extended: false
}));
// used express routes
app.use('/', require('./controllers/index'))


// app listening on port
app.listen(port, function (err) {
    // if error in running the server
    if (err) {
        console.log('Error Running the Server !')
        return
    }
    console.log('Server is up and running on port : ', port)
})
