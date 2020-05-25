const express = require("express");
const app = express();
const db = require("./db/database");
const cors = require("cors");
require("dotenv").config();
const ProblemRouter = require("./routes/problems");

app.use(cors());
app.use(express.json());

// db connection
db.authenticate()
  .then(() => console.log("Database connected..."))
  .catch((err) => console.log(`Unable to connect to database ${err}`));

app.get("/", async (req, res) => {
  res.send("hello");
});

app.use("/api/problems", ProblemRouter);


const port = process.env.PORT || 3900;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
