const express = require("express");

const app = express();

// Middleware
app.use(express.json());
app.set('view engine', 'ejs');
const checkWorkingHours = require("./middleware");

// Routes
app.get('/', checkWorkingHours, (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

// Start server
const PORT = 4444;
app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
