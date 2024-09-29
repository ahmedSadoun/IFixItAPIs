import express from "express";
import {
  print,
  getCategoryWikisChildrenData,
  getCategoryData,
  getDeviceCategoryData,
} from "./iFixItAPI.js";
const app = express();
const port = 3000;

app.get("/api/2.0/wikis/CATEGORY/:category/children", async (req, res) => {
  const tempParam = req.params.category;
  const result = await getCategoryWikisChildrenData(tempParam);
  res.send(result);
});
app.get("/api/2.0/categories/:category", async (req, res) => {
  const tempParam = req.params.category;
  const result = await getCategoryData(tempParam);
  res.send(result);
});

app.get(
  "/api/2.0/wikis/categories/:category/deviceTroubleshooting",
  async (req, res) => {
    const tempParam = req.params.category;
    const result = await getDeviceCategoryData(tempParam);
    res.send(result);
  }
);

app.get("/", (req, res) => {
  //   print();
  res.send("<h1>Up And Running</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
