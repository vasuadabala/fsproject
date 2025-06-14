import express from 'express'; 
import { getTrainInfo, saveTrainInfo} from './db/postgres.js';

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
        res.status(500).send("Internal Server Error" + err);
      });
  });

<<<<<<< HEAD
app.put('/putdata/:id', (req, res) => {
=======
 
app.put('/updateTrainInfo/:id', (req, res) => {
>>>>>>> 22039d74ace1ccf4c448b0d24949cbc4d778040a
  const data = { ...req.body, train_id: parseInt(req.params.id) };

  updateTrainInfo(data)
    .then(result => {
      res.json({ 
        message: "Train updated successfully",
        train: result.train 
      });
    })
    .catch(err => {
      if (err.message === "Train ID does not exist") {
        res.status(404).json({ message: err.message });
      } else {
        console.error("Error updating train info:", err);
        res.status(500).send("Server error");
      }
    });
});



app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


