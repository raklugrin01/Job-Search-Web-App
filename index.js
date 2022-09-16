const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

dotenv.config({ path: "./config.env" });

const port = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: false }));
//app.use(express.json());

// SETTING VIEW ENGINE
app.set("view engine", "ejs")
//SETTING PUBLIC FOR STATIC FILES ...SO WE NEED PATH MODULE
app.use(express.static(path.join(__dirname, "public")));

//ROUTES
app.use("/", require("./routes/main"));

// PORT
app.listen(port, () => {
  console.log(`connected to port http://localhost:${port}`);
});