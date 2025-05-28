//javascript function to create a json object to rating of an movie properties are overallRating,storyRating,actingRating,directionRating,musicRating
function createMovieRatingJson(overallRating, storyRating, actingRating, directionRating, musicRating) {
    const jsonObject = {
        overallRating: overallRating,
        storyRating: storyRating,
        actingRating: actingRating,
        directionRating: directionRating,
        musicRating: musicRating
    };

    let overallRatingvalue = jsonObject.overallRating;
    let storyRatingvalue = jsonObject.storyRating;
    let actingRatingvalue = jsonObject.actingRating;
    let directionRatingvalue = jsonObject.directionRating;
    let musicRatingvalue = jsonObject.musicRating;

    console.log("JSON Object Overall Rating value:", overallRatingvalue);   
    console.log("JSON Object Story Rating value:", storyRatingvalue);
    console.log("JSON Object Acting Rating value:", actingRatingvalue);
    console.log("JSON Objtec Direction Rating value:", directionRatingvalue);
    console.log("JSON Object Music Rating value:", musicRatingvalue);

    const jsonString = JSON.stringify(jsonObject);
    console.log("JSON String:", jsonString);
    return jsonString;
}

//createMovieRatingJson(4.5, 4.0, 4.8, 4.2, 4.6);

// Iterate through the ratings array and log each diagnosis


const medication=[ {
    "identifier": "RX67890",   
    "drug": "Amoxicillin",
    "brandName": "Amoxil", 
    "dosage": "250mg",
    "administered": "Oral"
  },
  {
    "identifier": "RX13579",
    "drug": "Lisinopril",
    "brand Name": "Zestril",
    "dosage": "10mg",
    "administered": "Oral"
  }
] ;
medication.forEach((medication) => {
    let identifier = medication.identifier;
    let drug = medication.drug;
    let brandName = medication.brandName;
    let dosage =medication.dosage;
    let administered = medication.administered;

    console.log(`Identifier: ${identifier}, Drug: ${drug}, Brand Name: ${brandName}, 
      Dosage: ${dosage}, Administered: ${administered}`);
}
);


// Iterate through the ratings array and log each patient
const patients = [
     {
    "name": "Priya ",  
     "time": 10,
    "gender": "female",
    "problem": "blood infection",  
    "phno": 9876543210
  },
  {
    "name": "Rahul",
    "time": 12,
    "gender": "male",
    "problem": "cancer",
    "phno": 8765432109
  }
 ];
patients.forEach((patient) => {
    let name = patient.name;
    let time = patient.time;    
    let gender = patient.gender;
    let problem = patient.problem;
    let phNo = patient.phno;    
    console.log(`name: ${name}, Time: ${time}, Gender: ${gender},
      Problem: ${problem}, Phone Number: ${phNo}`);
}
);

// Iterate through the ratings array and log each diagnosis
const diagnosis = [
  {
    "name": "Influenza",  
    "identifier": "FLU",
    "diseasesCode": "J10",
    "description": "An acute viral infection of the respiratory tract characterized by fever, cough, sore throat, and muscle aches."
  },
  {
    "name": "Type 2 Diabetes Mellitus",
    "identifier": "T2DM",
    "diseasesCode": "E11",
    "description": "A chronic metabolic disorder characterized by high blood sugar, insulin resistance, and relative insulin deficiency."
  }
];
diagnosis.forEach((diagnosis) => {
    let name = diagnosis.name;
    let identifier = diagnosis.identifier;
    let diseasesCode = diagnosis.diseasesCode;
    let description = diagnosis.description;

    console.log(`Name: ${name}, Identifier: ${identifier}, Diseases Code: ${diseasesCode}, Description: ${description}`);
});

