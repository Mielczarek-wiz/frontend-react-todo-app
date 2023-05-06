// set up ======================================================================
import express from 'express'
import http from 'http';
import mongoose from "mongoose"; // mongoose for mongodb
import cors from "cors";
import methodOverride from "method-override";
import bodyParser from "body-parser";
import path from "path";
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

var app = express(); // create our app w/ express
var port = 4000;

// configuration ===============================================================
mongoose.connect("mongodb+srv://mielczarekdamian:BtBoHYcuEGmWN9KI@frontendmongo.auio0hx.mongodb.net/test", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  retryWrites: true,
  useFindAndModify: false
}); // connect to mongoDB database on modulus.iox 

app.set("port", process.env.PORT || port);
app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public"))); // set the static files location /public/img will be /img for users

// define model ================================================================
var Todo = mongoose.model("Todo", {
  text: String,
  done: Boolean
});

// routes ======================================================================
app.use(cors());

// api ---------------------------------------------------------------------
// get all todos
app.get("/api/todos", (req, res) => {
  // use mongoose to get all todos in the database
  Todo.find()
  .then((todos) => {
    res.json(todos); // return all todos in JSON format
  })
  .catch((err) => {
    // if there is an error retrieving, send the error. nothing after res.send(err) will execute
    res.send(err);
  });
});

app.get("/api/todos/:todo_id", (req, res) => {
  // use mongoose to get todos in the database with given id
  Todo.find(
    {
      _id: req.params.todo_id,
    })
    .then((todos) => {
      res.json(todos); // return all todos in JSON format
    })
    .catch((err) => {
      // if there is an error retrieving, send the error. nothing after res.send(err) will execute
      res.send(err);
    });
});

// create todo and send back all todos after creation
app.post("/api/todos", (req, res) => {
  // create a todo, information comes from AXIOS request from Svelte
  Todo.create({
    text: req.body.text,
    done: false
  })
  .then(() => {
    // get and return all the todos after you create another
    Todo.find()
    .then((todos) => {
      res.json(todos);
    })
    .catch((err) => {
      res.send(err);
    });
  })
  .catch((err) => {
    res.send(err);
  });
});

// app.put("/api/todos", function (req, res) {});
app.patch("/api/todos/:todo_id", (req, res) => {
  // use mongoose to find and update special todo and after retrive all todos in the database
  Todo.findOneAndUpdate(
    { _id: req.params.todo_id },
    { $set:{done: req.body.done} },
    { new: true })
    .then(() => {
      Todo.find()
      .then((todos) => {
          res.json(todos);
      })
      .catch((err) => {
        res.send(err);
      });
    }
  )
  .catch((err) => {
    res.send(err);
  });

});

// delete a todo
app.delete("/api/todos/:todo_id", (req, res) => {
  // use mongoose to delete todo from the database
  Todo.deleteOne(
    {
      _id: req.params.todo_id,
    })
    .then(() => {
      // get and return all the todos after you create another
      Todo.find()
      .then((todos) => {
        res.json(todos);
      })
      .catch((err) => {
        res.send(err);
      });
    })
    .catch((err) => {
      res.send(err);
    });
});


// listen (start app with node server.js) ======================================
var server = http.createServer(app);
server.listen(app.get("port"), () => {
  console.log("Express server listening on: http://localhost:" + app.get("port"));
});
