const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongodb-session')(session);

const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost:27017/auth', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const store = new MongoStore({
  uri: 'mongodb://localhost:27017/auth',
  collection: 'sessions'
});

store.on('error', function (error) {
  console.log(error);
});

app.use(session({
  secret: 'mi-secreto',
  resave: false,
  saveUninitialized: false,
  store: store
}));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

const indexRoutes = require('./routes/index');
const authRoutes = require('./routes/auth');

app.use('/', indexRoutes);
app.use('/auth', authRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
