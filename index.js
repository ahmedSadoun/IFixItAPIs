import express from "express";
import cors from "cors";
import {
  print,
  getCategoryWikisChildrenData,
  getCategoryData,
  getDeviceCategoryData,
  getGuideByID,
  searchService,
  createPosts,
  getPosts,
  createComments,
} from "./iFixItAPI.js";
const app = express();
app.use(express.json());
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
    res.status(500).send("Internal Server Error!");
  }
});
app.get("/api/2.0/guides/:guideID", async (req, res) => {
  try {
    const tempParam = req.params.guideID;
    const result = await getGuideByID(tempParam);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal Server Error!");
  }
});

app.get(
  "/api/2.0/wikis/categories/:category/deviceTroubleshooting",
  async (req, res) => {
    try {
      const tempParam = req.params.category;
      const result = await getDeviceCategoryData(tempParam);
      res.send(result);
    } catch (error) {
      res.status(500).send("Internal Server Error!");
    }
  }
);
app.get(
  "/api/2.0/suggest/:query", // ?doctypes=guides,device
  async (req, res) => {
    try {
      const tempParam = req.params.query;
      const query = req.query.doctypes;
      console.log(query);
      const result = await searchService(tempParam, query);
      res.send(result);
    } catch (error) {
      console.log(error);
      res.status(500).send("Internal Server Error!");
    }
  }
);
app.post("/ords/saadoun_task/ifixit/posts", async (req, res) => {
  try {
    const postContent = req.body;
    console.log(postContent);
    const result = await createPosts(postContent);
    res.send(result);
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});
app.get("/ords/saadoun_task/ifixit/posts", async (req, res) => {
  try {
    const result = await getPosts();
    res.status(200).send(result);
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

app.post("/ords/saadoun_task/ifixit/comments", async (req, res) => {
  try {
    const commentContent = req.body;
    const result = await createComments(commentContent);
    res.send(result);
  } catch (error) {
    res.status(500).send("Internal Server Error!");
  }
});

app.get("/", (req, res) => {
  //   print();
  res.send("<h1>Up And Running</h1>");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
