# Wallswap-React

The project is just for fun and test programming skills. It consists of two parts - the server and crawler.

### Server:
1. Runs on 8080 port;
2. Gets the list of wallpapers from database;
3. Render the html page with the list of wallpaper;
4. Allows you to authenticate the user through OAuth2 Dropbox, gets access_token and stores the user in a database;

### Crawler:
1. Parses website [https://wallhaven.cc](https://wallhaven.cc) and collects direct URL's at the wallpaper;
2. Saves list of wallpapers in the database;

## Installation
1. Create MySQL database `wallswap` and import `wallswap.sql`
2. Create [Dropbox App](https://www.dropbox.com/developers/apps/create) and set environment variables:
```bash
export DROPBOX_CLIENT_ID="APP_KEY_HERE" && export DROPBOX_CLIENT_SECRET="APP_SECRET_HERE" 
```
3. Redirect URL for Dropbox callback:
```
http://localhost:8080/oauth2callback
```
4. Install node.js dependencies:
```bash
cd wallswap-react
npm i && cd client && npm i && cd ..
```
5. Run server:
```bash
npm start
```
6. Run crawl once a week:
```bash
cd crawl
npm start
```

## Made with
1. [Create-React-App](https://github.com/facebookincubator/create-react-app)
2. MySQL
3. [Express.js](http://expressjs.com/)
4. [Foreman](https://github.com/strongloop/node-foreman)
5. [React.js](https://facebook.github.io/react)
5. [React-router](https://github.com/ReactTraining/react-router)
5. [React-dom](https://www.npmjs.com/package/react-dom)
