import useFetch from "./useFetch";
import BookList from "./BookList";
import SearchBar from "./SearchBar";

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
      {books && <SearchBar books={books}></SearchBar>}
      {books && <BookList books={books} title="List of Books"></BookList>}
    </div>
  );
};

export default Home;
