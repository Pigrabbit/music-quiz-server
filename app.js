const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const ProblemRouter = require("./routes/problems");

app.use(cors());
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hello");
});

app.use("/api/problems", ProblemRouter);

const port = process.env.PORT || 3900;
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
