import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  //we need to create states for the title, description, author input fields
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [isPending, setIsPending] = useState(false);
  const history = useHistory();

  
  const handleSubmit = (e) => {
    e.preventDefault(); //prevent from refreshing the page when we click the button add book
    const book = { title, description, author };
    setIsPending(true);
    fetch("http://localhost:8000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    }).then(() => {
      console.log("new book added");
      setIsPending(false);
      history.push("/");
    });
  };
  return (
    <div className="create">
      <h2>Add a New Book</h2>
      <form onSubmit={handleSubmit}>
        <label>Book title:</label>
        <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Book description:</label>
        <textarea
          required
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <label>Book author:</label>
        <input
          type="text"
          required
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        {!isPending && <button>Add Book</button>}
        {isPending && <button disabled>Ading book...</button>}

        <p>{title}</p>
        <p>{description}</p>
        <p>{author}</p>
      </form>
    </div>
  );
};

export default Create;
