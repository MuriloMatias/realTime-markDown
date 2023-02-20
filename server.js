//Require express module
var express = require('express');
var app = express();

//Set the view engine to EJS
app.set('view engine', 'ejs');

app.use(express.static(__diarname + '/public'));

//routes
app.get('/', (req, res) =>{
    res.render('pad');
});

app.listen(PORT, () => console.log(`app running on: http://localhost:${PORT}`))