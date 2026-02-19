interface SearchBarProps {
  placeholder?: string;
  buttonText?: string;
}

export const SearchBar = ({ placeholder = 'Search gifs', buttonText = 'Search' }: SearchBarProps ) => {
  return (
    <>
      <div className="search-container">
        <input type="text" placeholder={placeholder} />
        <button>{buttonText}</button>
      </div>
    </>
  )
}
