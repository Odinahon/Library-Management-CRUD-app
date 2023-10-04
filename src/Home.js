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

  const [lookupValue, setLookupValue] = useState('');
  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      
      {books && <BookList books = {books} title="List of Books"></BookList>}
      {books && <Search books = {books} lookupValue ={lookupValue} setLookupValue={setLookupValue}></Search>}
      {/* {books && <SearchBar books={books}></SearchBar>} */}
    </div>
  );
};

export default Home;
