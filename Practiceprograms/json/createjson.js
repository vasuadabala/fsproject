// javascript function to create a json object with name and age properties
function createJson(name, age) {
    // Create a JSON object with the provided name and age
    // this is called object literal notation
    const jsonObject = {
        name: name,
        age: age
    };
    let name1 = jsonObject.name
    let age1 = jsonObject.age;
    console.log("JSON Object name value:", name1);
    console.log("JSON Object age value:", age1);
    // Convert the JSON object to a string
    const jsonString = JSON.stringify(jsonObject);
    console.log("JSON String:", jsonString);
    // Return the JSON string
    return jsonString;
}

// books json object
const books = [
    { title: "Book 1", author: "Author 1", year: 2020 },
    { title: "Book 2", author: "Author 2", year: 2021 },
    { title: "Book 3", author: "Author 3", year: 2022 }
];
const numbers = [1, 2, 3, 4, 5];

// arrow functions.
numbers.forEach((number) => {
    console.log(`Number `, number);
});
// we use foreach on iterable objects like arrays
// Iterate through the books array and log each book's title, author, and year
books.forEach((book) => {
    //console.log(`Book Title: ${book.title}, Author: ${book.author}, Year: ${book.year}`);
    let title = book.title;
    let author = book.author;
    let year = book.year;
    console.log(`Book Title: ${title}, Author: ${author}, Year: ${year}`);
});

// array of ratings
const ratings = [ {
  "overallRating": 4.5,  
  "storyRating": 4,
  "actingRating": 5,
  "directionRating": 4,  
  "musicRating": 4.5
}
,
{
  "overallRating": 3.8,
  "storyRating": 3.5,
  "actingRating": 4,
  "directionRating": 3,
  "musicRating": 4
}
];
// Iterate through the ratings array and log each rating
ratings.forEach((rating) => {
    let overallRating = rating.overallRating;
    let storyRating = rating.storyRating;
    let actingRating = rating.actingRating;
    let directionRating = rating.directionRating;
    let musicRating = rating.musicRating;
    console.log(`Overall Rating: ${overallRating}, Story Rating: ${storyRating}, 
      Acting Rating: ${actingRating}, Direction Rating: ${directionRating},
      Music Rating: ${musicRating}`);
      console.log('overallRating:', overallRating);
      console.log('storyRating:', storyRating);
      console.log('actingRating:', actingRating);
      console.log('directionRating:', directionRating);
      console.log('musicRating:', musicRating);
});
    






// function iterate second book author  
function iterateBooks(books) {
    // Iterate through the books array and log each book's author
    books.forEach(book => {
        console.log("Book Author:", book.author);
    });
}

// sample handler

async function iterateBooks(books) {
    for (const book of books) {
        await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate delay
        console.log("Book Author:", book.author);
    }
}

// iterateBooks(books);
// iterateBooks(books);
// createJson("Sandeep", 45);
// iterateBooks(books);