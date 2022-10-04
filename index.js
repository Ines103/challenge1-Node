const express = require ('express');
const cors = require('cors');
const morgan = require('morgan')

//setup express app
const app = express();

// CORS is enabled for all origins
app.use(cors());

morgan('tiny');

app.get('/api', function (req, res) {
  res.send('Hello World  ');
})

//listen to requests:
app.listen(process.env.port || 5000, function(){
    console.log('now listening for requests on port 5000');
});