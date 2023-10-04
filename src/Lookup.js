import {useState} from "react";
import SearchResult from "./SearchResult";
import useFetch from "./useFetch";

const Lookup =({lookupValue, setLookupValue}) =>{

    const {
        data: books,
        isPending,
        error,
      } = useFetch("http://localhost:8000/books");
    const[newBooks, setNewBooks] = useState([]);
    const submitHandler = (event) =>{
        event.preventDefault();
        const newArr = books.filter((book) => book.author=== lookupValue);
        setNewBooks([...newArr])
    }
    return (
        <div className="search"> 
            <h2>Start Searching </h2>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="search"  placeholder="Type Here" required value={lookupValue} onChange={(event) => {
                        setLookupValue(event.target.value);
                    }}></input>
                </label>
                <button> Go </button>
            </form>
            <div>
          <SearchResult books = {newBooks} author ={lookupValue}></SearchResult>
        
        </div>

        </div>
           
            

         
        
       
     );
}
export default Lookup