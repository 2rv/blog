module.exports = (app)=> {
  app.post("/api/posts", function(req, res){
    const collection = req.app.locals.posts;

    const filter = req.body.filter;
    console.log(filter);
    const query = filter === "all" ? {} : {"categories.tag": filter};


    collection.find(query).toArray(function(err, users){

      if(err) return console.log(err);
      res.send({filter, data: users})
    });

  });

  app.get("/api/categories", function(req, res){

    const collection = req.app.locals.categories;
    collection.find({}).toArray(function(err, categories){

      if(err) return console.log(err);

      res.send({data: categories})
    });

  });

  app.post("/api/article", function(req, res){
    const collection = req.app.locals.articles;

    const id = Number(req.body.id);
    console.log(id);

    collection.find({"id": id}).toArray(function(err, article){

      if(err) return console.log(err);
      res.send({id, data: article[0]})
    });

  });

  app.post("/api/search", function(req, res){
    const collection = req.app.locals.posts;

    const value = req.body.value;
    console.log(value);

    collection.createIndex({title: "text", info: "text"});
    collection.find({ $text: {$search: value} }).toArray(function(err, posts){

      if(err) return console.log(err);
      res.send({value, data: posts})
    });

  });


};
