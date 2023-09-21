import { Link } from "react-router-dom";
const BookList = ({ books, title }) => {
  return (
    <div className="book-list">
      <h1>{title}</h1>
      {books.map((book) => (
        <div className="book-preview" key={book.id}>
          <Link to={`/books/${book.id}`}>
            <h2>{book.title}</h2>
            <p>Written by {book.author}</p>
          </Link>

          {/* <button onClick={() => handleDelete(book.id)}>Delete Book</button> */}
        </div>
      ))}
    </div>
  );
};

export default BookList;
