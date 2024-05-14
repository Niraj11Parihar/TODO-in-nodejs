const express = require("express");

const app = express();

const port = 4186;

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

// app.use(expres)

let userData = [
  {
    empnm: "Niraj",
    task: "bartan dho",
    completed: false,
  },
  {
    empnm: "Sajjan",
    task: "pocha laga",
    completed: false,
  },
  {
    empnm: "Tushar",
    task: "sooja ab",
    completed: false,
  },
];

app.get("/", (req, res) => {
  console.log(req.body);
  res.render("form", { userData });
});

app.post("/insertData", (req, res) => {
  console.log(req.body);
  const newData = {
    empnm: req.body.empnm,
    task: req.body.task,
    completed: false,
  };

  userData.push(newData);
  res.redirect("/");
});

app.get("/deleteData/:id", (req, res) => {
  const id = req.params.id;
  userData.splice(id, 1);
  res.redirect("/");
});

app.get("/editData/:id", (req, res) => {
  const id = req.params.id;
  const user = userData[id];
  res.render("editForm", { user, id });
});

app.post("/editData/:id", (req, res) => {
  const id = req.params.id;
  console.log(req.body);
  userData[id].empnm = req.body.empnm;
  userData[id].task = req.body.task;
  res.redirect("/");
});

// app.get("/complete/:id",(req,res)=>{
//     const id = req.params.id;
//     userData[id].completed = true;
//     res.redirect("/");
// });

app.listen(port, (err) => {
  if (err) {
    console.log("server not started");
    return false;
  }
  console.log("server started at http://localhost:" + port);
});
