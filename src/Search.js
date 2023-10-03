
import { useState } from "react";
import SearchResult from "./SearchResult";

const Search = ({ books}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [compareValue, setCompareValue] = useState(selectedOption);
    const [lookupValue, setLookupValue] = useState('');
    console.log(books);
    let newBooks = books;



    // const [bookDetails, setBookDetails] =useState({
    //     title:"",
    //     description:"",
    //     author:"",
    //   });



    const handleChange = (option) =>{
        setSelectedOption(option);
    }
    // const onSubmit =(e)=>{
    //     e.preventDefault();
    //     console.log('Submit button is hitted');

    //     if(selectedOption==='author'){
    //         newBooks = books.filter((book) => book.author=== compareValue);
    //     } else {
    //         newBooks = books.filter((book) => book.title=== compareValue);
    //     }
    // }
    const submitHandler = (event) =>{
        event.preventDefault();
        newBooks = books.filter((book) => book.author=== lookupValue);
        // setBookDetails({ ...bookDetails, newBooks});
        console.log(newBooks);
        // console.log(bookDetails);
    }
    return ( 
        <div>
            <h2>Start Searching </h2>
            <form onSubmit={submitHandler}>
                <label>
                    <input type="text" required value={lookupValue} onChange={(event) => {
                        setLookupValue(event.target.value);
                    }}></input>
                </label>
                <button> Go </button>
            </form>

            {/* <form onSubmit={onSubmit}>
                <input type="text" required value={compareValue} onChange={(e) => {
                    setCompareValue(e.target.value);
                }}></input>
                <button>Go</button>
            
            <div>
                <label><input type="checkbox" checked={selectedOption==='author'}   onChange={()=>{handleChange('author')}}></input> author</label>
                <p> Is "My Author" checked? {selectedOption.toString()}</p>
            </div>
            <div>
                <label><input type="checkbox" checked={selectedOption==='title'} onChange={()=>{handleChange('title')}}></input> title</label>
                <p> Is "My Title" checked? {selectedOption.toString()}</p>
            </div>
            </form> */}
            
            <div>
        <h2>Search Results</h2>

          <SearchResult books ={newBooks}></SearchResult>
        
        </div>
            
    </div>
     );
}
 
export default Search;
