import express from 'express'; 
import { getTrainInfo, saveTrainInfo, putTrainInfo} from './db/postgres.js';

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

// Endpoint to save train information
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

 
app.put('/updateTrainInfo/:id', (req, res) => {
  const data = { ...req.body, train_id: parseInt(req.params.id) };
  
  putTrainInfo(data)
    .then(result => {
      return res.json(result);
    })
    .catch(err => {
      console.error("Error updating train info:", err);
      res.status(500).send("the train_id not exist in the database");
    });


});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


