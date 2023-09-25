import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { useState } from "react";

const EditBook = () => {
  // grab the id of the book, so I need to use useParams hook
  // second part now I can use my custom hook useFetch to fetch the data from db.json file

  const { id } = useParams();
  const {
    data: book,
    error,
    isPending,
  } = useFetch("http://localhost:8000/books/" + id);
  {
    isPending && <div>Loading...</div>;
  }
  {
    error && <div>Error</div>;
  }

  const [description, setDescription] = useState("");
  
  const [title, setTitle] = useState("");
  
  const [author, setAuthor] = useState("");
  
  //   const [isPending, setIsPending] = useState(false);
  // {book && <div>
  //   setDescription(book.description);
  //   setTitle(book.title);
  //   setAuthor(book.author);
  //   console.log(book);

  // </div>}
  
  const [isEdited, setIsEdited] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBook = { title, description, author };
    if (title === null) {
      setTitle(title);
    }
    console.log(newBook);
    fetch("http://localhost:8000/books/" + book.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBook),
    }).then(() => {
      console.log("book edited");
    });
  };
  return (
    <div className="edit">
      <h2>Edit Book - {id}</h2>
      {book && (
        <form onSubmit={handleSubmit}>
          <label>Book title</label>

          <input
            type="text"
            required
            // value={book.title}
             defaultValue={book.title}
            readOnly={false}
            // isEdited={false}
            onChange={(e) => {
              setTitle(e.target.value);
              setIsEdited(true);
            }}
          ></input>
          <label>Book description:</label>
          <textarea
            required
            defaultValue={book.description}
            readOnly={false}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
          <label>Book author:</label>
          <input
            type="text"
            required
            defaultValue={book.author}
            readOnly={false}
            onChange={(e) => setAuthor(e.target.value)}
          ></input>
          <button>Edit Book</button>
          <p>{title}</p>
        </form>
      )}
    </div>
  );
};

export default EditBook;
