const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Server Is Runing His Own Way");
});

app.listen(port, () => {
  console.log(`Server is runing from port ${port}`);
});
