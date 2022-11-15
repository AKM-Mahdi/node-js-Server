const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri =
  "mongodb+srv://userDB:W9mckJidO93lGD8Q@cluster0.geh2cqx.mongodb.net/?retryWrites=true&w=majority";

const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userCollection = client.db("simpledb").collection("users");

    app.get("/users", async (req, res) => {
      const cursor = userCollection.find({});
      const users = await cursor.toArray();
      res.send(users);
    });

    app.post("/users", async (req, res) => {
      console.log("Post method called");
      const user = req.body;
      const result = await userCollection.insertOne(user);
      user.id = result.insertedId;
      res.send(user);
    });
  } finally {
  }
}

run().catch((err) => console.log(err));
// client.connect((err) => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log("db connected")
//   client.close();
// });

app.get("/", (req, res) => {
  res.send("hi");
});
app.get("/users", (req, res) => {
  res.send(users);
});

// app.post("/users", (req, res) => {
//   console.log("Post method called");
//   const user = req.body;
//   user.id = users.length + 1;
//   users.push(user);
//   res.send(users);
//   console.log(user);
// });
app.listen(port, () => {
  console.log("Example app listening on port ");
});

// mongo db access
// UsersDB
// W9mckJidO93lGD8Q
