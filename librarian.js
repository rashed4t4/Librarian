var library = [
  { title: "Norse Mythology", year: "2017", author: "Neil Gaiman", publisher: "W. W. Norton & Company" },
  { title: "The Old Man and the Sea", year: "1952", author: "Ernest Hemingway", publisher: "Charles Scribner's Sons" },
  { title: "Mythos: A Retelling of the Myths of Ancient Greece", year: "1981", author: "Stephen Fry", publisher: "Penguin" },
  { title: "The Mythical Man-Month", year: "1975", author: "Fred Brooks", publisher: "Addison-Wesley" },
  { title: "The Pragmatic Programmer", year: "1999", author: "Andy Hunt and Dave Thomas", publisher: "The Pragmatic Bookshelf	" },
  /* Task 2 */
  { title: "The Grapes of Wrath", year: "1939", author: "John Steinbeck", publisher: "Penguin Books" }
];

/* Task 1 */
function getBookTitle( index ){
  return library[index].title;
}

console.log(getBookTitle(3));

/* Task 3 */
function addBook( book ){
  library[library.length] = book;
  return library;
}

var newBook = {title: "To Kill a Mockingbird ", year: "1960", author: "Harper Lee", publisher: "Perennial Modern Classics"};
console.log(addBook(newBook));

/* Task 4 */
function bookByAuthor(){
  library.sort(function(a, b) {
    var nameA = a.author.toUpperCase(); // ignore upper and lowercase
    var nameB = b.author.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
  return library;
}

console.log(bookByAuthor());

/* Task 5 */
function findByTitle( title ){
  var result = [];
  for(var i=0; i<library.length; i++){
    if(library[i].title.toUpperCase().indexOf(title.toUpperCase()) >= 0){
      result[result.length] = library[i];
    }
  }
  return result;
}

console.log(findByTitle("man"));
console.log(findByTitle("myth"));
