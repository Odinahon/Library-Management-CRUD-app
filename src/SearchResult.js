

const SearchResult =({books}) => {
    
    return <div>
        {/* <h2>Hello from Search Result Component</h2> */}
        {books.map((book) => (
            <div key={book.id}>
                <ul>
                    <li>
                        {book.title}
                    </li>
                </ul>
            </div>
          ))}
    </div>
}
export default SearchResult;