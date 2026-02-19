interface PreviousSearchesProps {
  searches: string[];
  onLabelClick: ( term: string ) => void;
}

export const PreviousSearches = ( { searches, onLabelClick }: PreviousSearchesProps ) => {
  return (
    <>
      <div className="previous-searches">
        <h2>Previous searches</h2>
        <ul className="previous-searches-list">
          {
            searches.map( search => (
              <li key={search} onClick={() => onLabelClick(search)}>{search}</li>
            ))
          }
        </ul>
      </div>
    </>
  )
}
