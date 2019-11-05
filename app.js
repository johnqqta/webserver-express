const express = require('express');
const app = express();
const hbs = require('hbs');
const port = process.env.PORT || 80; //asigna el puerto ya sea el proporcionado por heroku o el 80
require('./hbs/helpers'); //no necesita quedar en variable ya que son funciones que se ejecutan inmediatamente

///////////////////////CONTENIDO ESTATICO////////////////////
app.use(express.static(__dirname + '/public'));
///////////////////////REGISTRO DE PARCIALES/////////////////
hbs.registerPartials(__dirname + '/views/parcials');

///////////////////////EXPRESS HBS///////////////////////////
app.set('view engine', 'hbs');
///////////////////////SERVICIOS/////////////////////////////
app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'john ROjas'
    });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.listen(port, () => {
    console.log(`servidor web en el puerto ${{port}}`);
});