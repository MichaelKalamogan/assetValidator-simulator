const express = require("express");

const app = express();

app.use(express.json());

// Put all API routes here (before the catch-all)
app.use("/api/validate", (req, res, next) => {
  const { assetType, assetName } = req.body;
  res.json({
    assetType,
    assetName,
    validate: "ok",
  });
});

const port = process.env.PORT || 3001;

app.listen(port, function () {
  console.log(`Express app running on port ${port}`);
});
