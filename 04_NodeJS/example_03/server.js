const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const PORT = process.env.port || 3000;

const app = express();

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.render('form');
});

app.post('/greet', (req, res) => {
  const { name } = req.body;
  res.render('greet', { name });
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
