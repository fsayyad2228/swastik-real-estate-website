const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

let visitorCount = 0;

app.get("/api/count", (req, res) => {
  res.json({ count: visitorCount });
});

app.post("/api/count", (req, res) => {
  visitorCount++;
  res.json({ success: true });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
