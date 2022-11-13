const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
const users=[
  {
  "id": 9,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
},{
  "id": 19,
  "name": "Glenna Reichert",
  "username": "Delphine",
  "email": "Chaim_McDermott@dana.io",
}
]

app.get("/", (req, res)=>{
    res.send("hi")
})
app.get("/users", (req, res)=>{
  res.send(users)
})

app.post("/users", (req, res)=>{
  console.log("Post method called")
  const user= req.body;
  user.id=users.length+1;
  users.push(user);
  res.send(users);
  console.log(user);
})
app.listen(port, () => {
  console.log("Example app listening on port ");
});
