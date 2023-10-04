import useFetch from "./useFetch";
import BookList from "./BookList";
// import SearchBar from "./SearchBar";
import Search from "./Search";
import { useState } from "react";

const Home = () => {
  const {
    data: books,
    isPending,
    error,
  } = useFetch("http://localhost:8000/books");
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      
      {books && <BookList books = {books} title="List of Books"></BookList>}
      {books && <Search books = {books}></Search>}
      {/* {books && <SearchBar books={books}></SearchBar>} */}

    </div>
  );
};

export default Home;
