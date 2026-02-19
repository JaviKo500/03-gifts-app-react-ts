import { useState } from "react";

interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
  onQuery: ( query: string ) => void
}

export const SearchBar = ({ placeholder = 'Search gifs', buttonText = 'Search', onQuery }: SearchBarProps ) => {
  const [query, setQuery] = useState('');
  const handleSearch = () => {
    if ( !query ) return;
    onQuery(query);
    setQuery('');
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if ( event.key !== 'Enter' ) return;
    handleSearch();
  }
  return (
    <>
      <div className="search-container">
        <input 
          type="text" 
          placeholder={placeholder} 
          value={query}
          onChange={ (event) => setQuery(event?.target?.value ?? '')}
          onKeyDown={ handleKeyDown}
        />
        <button onClick={handleSearch} >{buttonText}</button>
      </div>
    </>
  )
}
