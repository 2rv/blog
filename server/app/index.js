const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const routing = require("./routing.js");

const MongoClient = require("mongodb").MongoClient;
const objectId = require("mongodb").ObjectID;
const mongoClient = new MongoClient("mongodb://localhost:27017/", { useNewUrlParser: true });

let dbClient;
const app = express();

module.exports = (PORT, isDev)=> {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type");
    next();
  });
  app.use(bodyParser());
  app.use(express.static(path.resolve(__dirname, '../../react-ui/build')));

  routing(app);

  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../../react-ui/build', 'index.html'));
  });


  mongoClient.connect(function(err, client){
    if(err) return console.log(err);
    dbClient = client;

    app.locals.posts = client.db("blog").collection("posts");
    app.locals.categories = client.db("blog").collection("categories");
    app.locals.articles = client.db("blog").collection("articles");

    app.listen(PORT, function () {
      console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
    });
  });
};
