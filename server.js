const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  database: 'wallswap'
});
var crypto = require("crypto");

// DropBox
const config = {
  clientId: process.env.DROPBOX_CLIENT_ID,
  secret  : process.env.DROPBOX_CLIENT_SECRET
};
const dropbox = new (require('dropbox'))(config);
const redirectUri = 'http://localhost:8080/oauth2callback';
require('dropbox-client-oauth2');

app.set('port', (process.env.PORT || 8081));

// Express only serves static assets in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

app.get('/api/wallpapers', (req, res) => {
  connection.query('select thumb_url, url from wallpaper', function (error, results) {
    if (error) throw error;
    res.json(results);
  });
});

// Handle fetch from React and authenticate user by DropBox
app.get('/auth', (req, res) => {
  let code = req.query.code;
  var options = Object.assign({code, redirectUri}, config);

  dropbox.fetchAccessTokenFromCode(options, (err, token) => {
    if (err) {
      res.json(err);
    } else {
      dropbox.setAccessToken(token);

      dropbox.usersGetCurrentAccount().then(user=> {
        connection.query('SELECT dropbox_id,access_token from user WHERE dropbox_id=?', [user.account_id], function (error, results) {
          if (error) throw error;

          if (results[0].count == 0) {
            connection.query('INSERT user SET email=?,access_token=?,auth_key=?,dropbox_id=?', [user.email, token, crypto.randomBytes(32).toString('hex'), user.account_id], function (error, results) {
              if (error) throw error;
            });
          } else {
            connection.query('UPDATE user SET access_token=? WHERE dropbox_id=?', [token, user.account_id], function (error) {
              if (error) throw error;
            });
          }

        });
      });
      res.json(true);
    }
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
