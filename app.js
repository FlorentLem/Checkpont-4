const express = require("express");
const app = express();
const cors = require("cors");
const passport = require("passport");
const { passportJwt } = require("./src/middlewares/passport");

const api = require("./src/routes/index");

//pre-route middlewares
app.use(cors());
app.use(passport.initialize());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/images", express.static("public/images"));

//Passport config
passportJwt(passport);

//DB connection
require("./src/database/db");

// Routes
app.use("/api", api);

//Listen app
const PORT = process.env.PORT;

app.listen(PORT || 8000, () => {
  console.log(`Server is running on port: ${PORT}`);
});
