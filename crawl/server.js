var request = require('request');
var cheerio = require('cheerio');
const mysql = require('mysql');
const connection = mysql.createConnection({
  host    : 'localhost',
  user    : 'root',
  password: 'root',
  database: 'wallswap'
});

var url = 'https://alpha.wallhaven.cc/search?categories=101&purity=100&sorting=random&order=desc';

request(url, function (error, response, html) {
  if (error) throw error;

  // Clear DB
  connection.query('truncate wallpaper', function (error) {
    if (error) throw error;
  });

  var $ = cheerio.load(html);
  var id, thumb_url, url;

  $('figure').filter(function () {
    id = $(this).attr('data-wallpaper-id');
    thumb_url = "https://alpha.wallhaven.cc/wallpapers/thumb/small/th-" + id + ".jpg";
    url = "https://wallpapers.wallhaven.cc/wallpapers/full/wallhaven-" + id + ".jpg";

    connection.query('INSERT wallpaper SET thumb_url=?,url=?', [thumb_url, url], function (error) {
      if (error) throw error;
    });
  });

  connection.end(function (err) {
    process.exit();
  });
});
