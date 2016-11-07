const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  database: 'wallswap'
});

app.set('port', (process.env.PORT || 3001));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/wallpapers', (req, res) => {
  connection.query('select thumb_url, url from wallpaper', function (err, rows) {
    if (err) throw err;
    res.json(rows);
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
