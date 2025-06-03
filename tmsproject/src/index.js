
import express from 'express';
import { getTrainInfo } from './db/postgres.js';

const app = express();
const port = 3000;

app.get('/trains', (req, res) => {
  getTrainInfo()
    .then(train_info => {
      res.send(train_info); 
    })
    .catch(err => {
      console.error("Error fetching train info:", err);
      res.send("Internal Server Error");
    });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


