const express = require("express");
const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(cors());

// Put all API routes here (before the catch-all)
app.use("/api/validate", (req, res, next) => {
  const { assetType, assetName } = req.body;
  res.json({
    assetType,
    assetName,
    validate: "ok",
  });
});


app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
