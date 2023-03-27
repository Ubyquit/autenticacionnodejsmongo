const express = require('express');
const bcrypt = require('bcrypt');
const User = require('../models/user');

const router = express.Router();

router.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    console.log(error);
    res.render('register', { errorMessage: 'Error creating user' });
  }
});

router.get('/register', (req, res) => {
  res.render('register', { errors: [] });
});


router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
      req.session.userId = user._id;
      return res.redirect('/');
    }
    res.render('login', { errorMessage: 'Invalid email or password' });
  } catch (error) {
    console.log(error);
    res.render('login', { errorMessage: 'Error logging in' });
  }
});

router.get('/login', (req, res) => {
  res.render('login', { errorMessage: 'Bienvenido' });
});

router.post('/logout', (req, res) => {
  req.session.destroy((error) => {
    if (error) {
      console.log(error);
    }
    res.redirect('/auth/login');
  });
});

module.exports = router;
