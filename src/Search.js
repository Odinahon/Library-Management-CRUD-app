
import { useState } from "react";


const Search = ({ books}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [compareValue, setCompareValue] = useState(selectedOption);
    
    console.log(books);
    let newBooks = books;

    const handleChange = (option) =>{
        setSelectedOption(option);
    }
    const onSubmit =(e)=>{
        e.preventDefault();
        console.log('Submit button is hitted');
        if(selectedOption==='author'){
            newBooks = books.filter((book) => book.author=== compareValue);
        } else {
            newBooks = books.filter((book) => book.title=== compareValue);
        }
    }
    return ( 
        <div>
            <h2>Start Searching </h2>
            <form onSubmit={onSubmit}>
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
            </form>
            
            <div>
        <h2>Search Results</h2>

       {newBooks.map((book) => (
            <div key={book.id}>
             <p>{book.title}</p>
            </div>
          ))}
        
        </div>
            
    </div>
     );
}
 
export default Search;
