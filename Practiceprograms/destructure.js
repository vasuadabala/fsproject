// write a function to destructure an object and return the values of its properties
// books json
function destructureObject(obj) {


  const {
    title,
    author,
    year,
    genre,
    publisher
  } = obj;
  
  // let bookDetails = {
  //   "title": title,
  //   "author": author,
  //   "year": year,
  //   "genre": genre,
  //   "publisher": publisher
  // };
  
  
  let bookDetails = {
    title,
    author,
    year,
    genre,
    publisher
  };
  return bookDetails;
}

const book = {
  title: "To Kill a Mockingbird", "author": "Harper Lee",
  year: 1960,
  genre: "Fiction",
  publisher: "J.B. Lippincott & Co."
};
const bookDetails = destructureObject(book);
console.log(bookDetails);
