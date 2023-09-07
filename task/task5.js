// Constructor function for creating Book objects
function Book(title, author, publicationYear) {
    this.title = title;
    this.author = author;
    this.publicationYear = publicationYear;
  }
  
  // Adding a method to the Book prototype
  Book.prototype.getBookInfo = function () {
    return `${this.title} by ${this.author}, published in ${this.publicationYear}`;
  };
  
  // Create instances of the Book object
  const book1 = new Book('Maha Prasthanam', 'Srirangam Srinivasarao', 1950);
  const book2 = new Book('Amaravati Kathalu', 'Satyam Sankaramanch', 1975);
  
  // Accessing object properties and calling the prototype method
  console.log(book1.title); 
  console.log(book2.getBookInfo()); 
  