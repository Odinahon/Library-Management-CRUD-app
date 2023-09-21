import { useState } from "react";
import Home1 from "./Home1";
const SearchBar = ({ books }) => {
  const [author, setAuthor] = useState("");

  function filterBooks(books) {
    console.log("filterBooks function is listening");
    let newBooks = books.filter((book) => book.author === author);
    console.log(newBooks);
    return (
      <div>
        {newBooks.map((book) => {
          <div>
            <h2>{book.title}</h2>
            <p>{book.author}</p>
          </div>;
        })}
      </div>
    );
  }
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search component is listening");
    console.log(author);
    console.log(books);
    return filterBooks(books);
  };
  return (
    <div className="search-bar">
      <form id="form" onSubmit={handleSearch}>
        <input
          type="search"
          id="query"
          name="q"
          placeholder="Search"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        ></input>
        <button>Search</button>
        {/* <svg viewBox="0 0 1024 1024">
            <path
              className="path1"
              d="M848.471 928l-263.059-263.059c-48.941 36.706-110.118 55.059-177.412 55.059-171.294 0-312-140.706-312-312s140.706-312 312-312c171.294 0 312 140.706 312 312 0 67.294-24.471 128.471-55.059 177.412l263.059 263.059-79.529 79.529zM189.623 408.078c0 121.364 97.091 218.455 218.455 218.455s218.455-97.091 218.455-218.455c0-121.364-103.159-218.455-218.455-218.455-121.364 0-218.455 97.091-218.455 218.455z"
            ></path>
          </svg> */}
        {/* </button> */}
      </form>
    </div>
  );
};

export default SearchBar;
