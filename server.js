const express = require('express');
const logger = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const expressSanitizer = require('express-sanitizer');
const methodOverride = require('method-override');
const { testDBConn } = require('./config/db');

// Load env vars
dotenv.config();

// Test DB connection
testDBConn();

const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(expressSanitizer());
app.use(methodOverride('_method'));

app.get('/', (req, res) => {
  res.redirect('/blogs');
});

// Blogs Routes
app.use('/blogs', require('./routes/blogs'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT} in ${process.env.NODE_ENV} mode`);
});
