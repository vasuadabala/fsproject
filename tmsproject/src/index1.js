import express from "express";
import { getTrainInfo, postTrainInfo } from "./db/mysql.js";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/traindata", (req, res) => {
  getTrainInfo()
    .then((train_info) => res.send(train_info))
    .catch((err) => {
      console.log("Error fetching train info:", err);
      res.send("Internal Server Error");
    });
});

app.post("/savedata", (req, res) => {
  postTrainInfo(req.body)
    .then((result) => res.send(result))
    .catch((err) => {
      console.log("Error saving train info:", err);
      res.send("Internal Server Error");
      console.log("Received train data:", req.body);

    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
