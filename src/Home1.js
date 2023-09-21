import { useState } from "react";
import BookList from "./BookList";
const Home1 = () => {
  //   const [name, setName] = useState("mario");
  //   const handleClick = () => {
  //     setName("luigi");
  //   };
  //state
  const [books, setBooks] = useState([
    {
      title: "Book1",
      description: "This is the first book",
      author: "mario",
      id: 1,
    },
    {
      title: "Book2",
      description: "This is the second book",
      author: "mario",
      id: 2,
    },
    {
      title: "Book3",
      description: "This is the third book",
      author: "mario",
      id: 3,
    },
  ]);
  // updating the state to show data without deleted ones
  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  return (
    <div className="home">
      {/* <h2>Homepage</h2>
      <p>{name}</p>
      <button onClick={handleClick}>Click Me!</button> */}
      {/* {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <h2>{book.title}</h2>
          <p>Written by {book.author}</p>
        </div>
      ))} */}
      <BookList
        books={books.filter((book) => book.author === "mario")}
        title="Mario's books"
        handleDelete={handleDelete}
      ></BookList>
    </div>
  );
};

export default Home1;
