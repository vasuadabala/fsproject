import express from 'express'; 
import { getTrainInfo, saveTrainInfo } from './db/postgres.js';

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


app.post('/traininfo', (req, res) => {
  // send the request body to the database
  
console.log("saveTrainInfo:", saveTrainInfo); // Debugging
    saveTrainInfo(req)
      .then(result => {
        return res.json(result);
      })
      .catch(err => {
        console.error("Error saving train info:", err);
        res.status(500).send("Internal Server Error");
      });
  });

    



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


