const express = require("express");
const app = express();
const cors  = require("cors");
require("dotenv").config({path: "./.env"});
require("./db/connectDb");
const port = process.env.PORT || 5000;
const cookieParser = require("cookie-parser");

app.use(cors());
app.use(cookieParser());
app.use(express.json());
app.use(require("./routes/record"));
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Erreur Serveur!');
    
});
app.listen(port, () => {
  console.log(`Serveur ecoute sur le port: ${port}`);
});
