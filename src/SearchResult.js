

const SearchResult =({books}) => {
    
    return <div>
        <h2>Hello from Search Result Component</h2>
        {books.map((book) => (
        
            <div key={book.id}>
             <p>{book.title}</p>
            </div>
          ))}
    </div>
}
export default SearchResult;