// json books list
let books = [
  {
    id: 1,
    author: "R. Bunrath",
    title: "Coding Life",
    isbn: "978-0451524935",
  },
  {
    id: 2,
    author: "Harper Lee",
    title: "To Kill a Mockingbird",
    isbn: "978-0060935467",
  },
  {
    id: 3,
    author: "J.K. Rowling",
    title: "Harry Potter and the Sorcerer's Stone",
    isbn: "978-0590353427",
  },
  {
    id: 4,
    author: "F. Scott Fitzgerald",
    title: "The Great Gatsby",
    isbn: "978-0743273565",
  },
  {
    id: 5,
    author: "Jane Austen",
    title: "Pride and Prejudice",
    isbn: "978-1503290563",
  },
  {
    id: 6,
    author: "Mary Shelley",
    title: "Frankenstein",
    isbn: "978-0486282114",
  },
  {
    id: 7,
    author: "Markus Zusak",
    title: "The Book Thief",
    isbn: "978-0375842207",
  },
  {
    id: 8,
    author: "Ernest Hemingway",
    title: "The Old Man and the Sea",
    isbn: "978-0684801223",
  },
  {
    id: 9,
    author: "Khaled Hosseini",
    title: "The Kite Runner",
    isbn: "978-1594631931",
  },
  {
    id: 10,
    author: "Herman Melville",
    title: "Moby Dick",
    isbn: "978-1503280786",
  },
  {
    id: 11,
    author: "Leo Tolstoy",
    title: "War and Peace",
    isbn: "978-1400079988",
  },
  {
    id: 12,
    author: "Charles Dickens",
    title: "Great Expectations",
    isbn: "978-0141439563",
  },
  {
    id: 13,
    author: "J.R.R. Tolkien",
    title: "The Hobbit",
    isbn: "978-0547928227",
  },
  {
    id: 14,
    author: "Gabriel Garcia Marquez",
    title: "One Hundred Years of Solitude",
    isbn: "978-0060883287",
  },
  {
    id: 15,
    author: "George R.R. Martin",
    title: "A Game of Thrones",
    isbn: "978-0553593716",
  },
  {
    id: 16,
    author: "Emily Bronte",
    title: "Wuthering Heights",
    isbn: "978-0141439556",
  },
  {
    id: 17,
    author: "Antoine de Saint-Exupéry",
    title: "The Little Prince",
    isbn: "978-0156012195",
  },
  {
    id: 18,
    author: "Douglas Adams",
    title: "The Hitchhiker's Guide to the Galaxy",
    isbn: "978-0345391803",
  },
  {
    id: 19,
    author: "Orson Scott Card",
    title: "Ender's Game",
    isbn: "978-0812550702",
  },
  {
    id: 20,
    author: "Agatha Christie",
    title: "Murder on the Orient Express",
    isbn: "978-0062073501",
  },
  {
    id: 21,
    author: "Dan Brown",
    title: "The Da Vinci Code",
    isbn: "978-0307474278",
  },
  {
    id: 22,
    author: "Paulo Coelho",
    title: "The Alchemist",
    isbn: "978-0062315007",
  },
  {
    id: 23,
    author: "Charlotte Brontë",
    title: "Jane Eyre",
    isbn: "978-0141441146",
  },
  {
    id: 24,
    author: "Virginia Woolf",
    title: "To the Lighthouse",
    isbn: "978-0156907392",
  },
  {
    id: 25,
    author: "William Golding",
    title: "Lord of the Flies",
    isbn: "978-0399501487",
  },
  {
    id: 26,
    author: "Margaret Atwood",
    title: "The Handmaid's Tale",
    isbn: "978-0385490818",
  },
  {
    id: 27,
    author: "Oscar Wilde",
    title: "The Picture of Dorian Gray",
    isbn: "978-0141439570",
  },
  {
    id: 28,
    author: "Aldous Huxley",
    title: "Brave New World",
    isbn: "978-0060850524",
  },
  {
    id: 29,
    author: "Sylvia Plath",
    title: "The Bell Jar",
    isbn: "978-0060837020",
  },
  {
    id: 30,
    author: "Cormac McCarthy",
    title: "The Road",
    isbn: "978-0307387899",
  }
];
// search book
function searchBooks(event) {
  // Prevent form from submitting which causes the page to reload
  if (event) event.preventDefault();

  const input = document.getElementById("searchInput").value.toLowerCase();
  const tbody = document.getElementById("resultsTable").getElementsByTagName("tbody")[0];
  tbody.innerHTML = ""; // Clear previous results

  // Filter books by checking if any book property matches the input
  const filteredBooks = books.filter(
    (book) =>
      book.id.toString() === input ||
      book.title.toLowerCase().includes(input) ||
      book.author.toLowerCase().includes(input) ||
      book.isbn.includes(input)
  );

  if (filteredBooks.length) {
    filteredBooks.forEach((book) => {
      let row = tbody.insertRow();
      row.insertCell(0).textContent = book.id;
      row.insertCell(1).textContent = book.title;
      row.insertCell(2).textContent = book.author;
      row.insertCell(3).textContent = book.isbn;
    });
  } else {
    let row = tbody.insertRow();
    let cell = row.insertCell(0);
    cell.textContent = "No books found.";
    cell.colSpan = 4;
    cell.style.textAlign = "center";
  }
}
  //add or update
  function addOrUpdateBook() {
    const id = parseInt(document.getElementById("bookId").value.trim());
    const author = document.getElementById("authorName").value.trim();
    const title = document.getElementById("bookTitle").value.trim();
    const isbn = document.getElementById("bookISBN").value.trim();
  
    if (!id || !author || !title || !isbn) {
      alert("Please fill in all fields.");
      return;
    }
  
    const existingBookIndex = books.findIndex((book) => book.id === id);
  
    if (existingBookIndex > -1) {
      books[existingBookIndex] = { id, author, title, isbn };
      alert("Book updated successfully!");
    } else {
      books.push({ id, author, title, isbn });
      alert("Book added successfully!");
    }
    console.log(books);
    searchBooks(); // Refresh the list after adding/updating
  }
  
  function deleteBook() {
    const id = parseInt(document.getElementById("deleteId").value.trim());
    const initialLength = books.length;
    books = books.filter((book) => book.id !== id);
  
    if (books.length < initialLength) {
      alert("Book deleted successfully!");
    } else {
      alert("No book found with that ID.");
    }
    console.log(books);
    searchBooks(); // Refresh the list after deleting
  }
  


  document.getElementById("searchInput").form.addEventListener('submit', searchBooks);


  document.addEventListener("DOMContentLoaded", searchBooks);
  document.getElementById("searchInput").addEventListener("submit", searchBooks);