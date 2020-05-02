const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const { mongoUrl } = require('./config/index');


// Morgan Logger
// app.use(morgan('combined')); // more details with window
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.Promise = Promise;
// mongoose.set('useUnifiedTopology:', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose
  .connect(mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

//routes
const authorRoutes = require('./api/routers/author');
const userRoutes = require('./api/routers/user');

app.use('/api/author', authorRoutes);
app.use('/api/user', userRoutes)
app.use((req, res, next) => {
  res.status(200).json({ message: "Hello World!!!" })
});


module.exports = app