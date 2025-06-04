import express from 'express'; 
import { getTrainInfo, postTrainInfo } from './db/postgres.js';

const app = express();
const port = 3000;

app.use(express.json()); 


app.get('/trains', (req, res) => {
  getTrainInfo()
    .then(trainInfo => res.send(trainInfo))
    .catch(err => {
      console.error("Error fetching train info:", err);
      res.send("Internal Server Error");
    });
});


app.post('/save', (req, res) => {
res.send("data saved successfully");
    
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
