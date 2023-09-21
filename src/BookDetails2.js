const BookDetails2 = ({ books, title, handleDelete }) => {
  return (
    <div>
      <h1>Props Practice, reuse Edit Component List</h1>
      <p>{title}</p>
      <div>
        {books.map((book) => (
          <div className="book-preview" key={book.id}>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
            <button
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              delete book
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookDetails2;
