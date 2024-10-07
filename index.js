import express from "express";
import cors from "cors";
import {
  print,
  getCategoryWikisChildrenData,
  getCategoryData,
  getDeviceCategoryData,
  getGuideByID,
} from "./iFixItAPI.js";
const app = express();
const port = 3000;
app.use(cors());
app.get("/api/2.0/wikis/CATEGORY/:category/children", async (req, res) => {
  const tempParam = req.params.category;
  const result = await getCategoryWikisChildrenData(tempParam);
  res.send(result);
});
app.get("/api/2.0/categories/:category", async (req, res) => {
  try {
    const tempParam = req.params.category;
    const result = await getCategoryData(tempParam);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
});
app.get("/api/2.0/guides/:guideID", async (req, res) => {
  try {
    const tempParam = req.params.guideID;
    const result = await getGuideByID(tempParam);
    res.send(result);
  } catch (error) {
    console.log(error);
  }
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
