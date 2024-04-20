var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { name: 'Keyber Mendoza', ocupation: 'Desarrollador Web Front-End', description: 'Soy estudiante de la universidad Romulo Gallegos y soy autodidacta en Desarrollo Web enfocado en programación Frontend.\nAspiro conseguir empleo en el mundo del Desarrollo Web, adquirir experiencia, nuevos conocimientos y fortalecer mi vida profesional.\n\nSoy una persona empática y entusiasta, con competencias enfocadas en el trabajo en equipo, comunicación asertiva, resolución de problemas, responsable y proactiva, me gusta aprender de los demás y superarme continuamente.' });
});


module.exports = router;
