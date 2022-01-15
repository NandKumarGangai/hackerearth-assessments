const path = require('path');
const cors = require('cors');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const helmet = require('helmet');
const compression = require('compression');
const routes = require('./routes');
// Load env vars
dotenv.config({ path: './config/config.env' });

const app = express();

// Body parser
app.use(express.json());

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}
// Set security headers
app.use(helmet());

// Enable CORS
app.use(cors());
app.use(compression())

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', routes);

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
  if (process.env.NODE_ENV === 'development') {
    console.log(`Error: ${err.message}`);
  }

  console.log(`unhandledRejection error: ${err.name}`);
});
