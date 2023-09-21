import { useParams } from "react-router-dom";
import useFetch from "./useFetch";
import BookDetails from "./BookDetails";
import { useEffect, useState } from "react";
import BookDetails2 from "./BookDetails2";

const Edit = () => {
  //   const name = "mario";
  const [name, setName] = useState("mario");
  const [age, setAge] = useState(25);
  const handleClick = () => {
    setName("luigi");
    setAge(30);
    console.log(name);
  };
  const [books, setBooks] = useState(null);
  const handleDelete = (id) => {
    const newBooks = books.filter((book) => book.id !== id);
    setBooks(newBooks);
  };
  useEffect(() => {
    fetch("http://localhost:8000/books")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        setBooks(data);
      });
    console.log("use effect ran");
  }, []);
  return (
    <div className="book-edit">
      {/* <h1>Edit Book</h1>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button> */}
      {books && (
        <BookDetails2
          books={books}
          title="List of Books"
          handleDelete={handleDelete}
        ></BookDetails2>
      )}
      {/* <BookDetails2
        books={books.filter((book) => book.author === "mario")}
        title="Mario's book"
      ></BookDetails2> */}
    </div>
  );
};

export default Edit;
