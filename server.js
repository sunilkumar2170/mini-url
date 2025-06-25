const express = require('express');
const fs = require('fs');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

let urls = {};

// JSON फाइल से पहले से मौजूद URLs पढ़ो
if (fs.existsSync('urls.json')) {
  urls = JSON.parse(fs.readFileSync('urls.json'));
}

// 🏠 Home Route
app.get('/', (req, res) => {
  res.render('index', { urls });
});

// 🔗 URL Shorten POST Route
app.post('/shorten', (req, res) => {
  const longUrl = req.body.longUrl;
  const shortCode = Math.random().toString(36).substring(2, 8);
  urls[shortCode] = longUrl;

  fs.writeFileSync('urls.json', JSON.stringify(urls));
  res.redirect('/');
});

// 🔁 Redirect Route
app.get('/:shortCode', (req, res) => {
  const longUrl = urls[req.params.shortCode];
  if (longUrl) {
    res.redirect(longUrl);
  } else {
    res.status(404).send('Short URL not found!');
  }
});

// 🚀 Start Server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
