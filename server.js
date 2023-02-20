//Require express module
const express = require('express');
const app = express();
const PORT = 3060;

//Set the view engine to EJS
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

//routes
app.get('/', (req, res) =>{
    res.render('pad');
});

app.listen(PORT, () => console.log(`app running on: http://localhost:${PORT}`))