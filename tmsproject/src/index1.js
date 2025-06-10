import express from "express";
import { getTrainInfo, saveTrainInfo, updateTrainInfo } from "./db/mysql.js";

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
  console.log("saveTrainInfo:",saveTrainInfo); // Debugging
  saveTrainInfo(req.body)
    .then(result => {
      return res.json(result); 
    })
    .catch(err => {
      console.error("Error saving train info:", err);
      res.status(500).send("Internal Server Error");
    });
  });
app.put("/putdata/:id", (req, res) => {
  const train_id = parseInt(req.params.id);

  updateTrainInfo(train_id) 
    .then(result => {
      if (result.exists) {
        res.json({ message: "train_id exists" });
      } else {
        res.status(404).json({ message: "train_id does not exist" });
      }
    })
    .catch(err => {
      console.error("Error updating train info:", err);
      res.status(500).send("Server error");
    });
});


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
