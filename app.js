import express from "express";

const app = express();
const port = 4000;
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/formulaires", (req, res) => {
  res.send("Bonjour Coach YANN Steeve");
});

app.post("/information", (req, res) => {
  const { nom, prenom, email } = req.body;
  console.log(req.body);

  res.send(
    `Votre nom est ${nom}, votre prénom est ${prenom}, et votre email est ${email}`
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
