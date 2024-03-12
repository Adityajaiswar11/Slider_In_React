
import { useState } from 'react';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const getData = async (query) => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${query}`);
    const data = await response.json();

    setSearchResults(data.products);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === '') {
      setSearchResults([]);
    } else {
      getData(e.target.value);
    }
  };

  return (
    <div className="mt-[4rem] py-4 px-10">
      <form>
        <input
          type="text"
          placeholder="Search Products"
          value={searchTerm}
          onChange={handleSearch}
        />
      </form>
      {searchResults.length > 0 && (
        <div>
          {searchResults.map((product) => (
            <div key={product.id}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>{product.price}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;