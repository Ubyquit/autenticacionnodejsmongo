const express = require('express');
const router = express.Router();
const passport = require('passport');

// Ruta para mostrar la página de inicio
router.get('/', function(req, res) {
  res.render('index', { user: req.user, message: 'Bienvenido!' });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/', // redirigir a la página principal
  failureRedirect : '/login', // redirigir al mismo inicio de sesión si falla
  failureFlash : true // permitir mensajes flash en el caso de un error
}), function(req, res) {
  res.render('login', { message: req.flash('loginMessage') });
});

module.exports = router;
