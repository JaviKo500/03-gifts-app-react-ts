import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";

import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setPreviousTerms] = useState<string[]>([]);
  const handleTermClick = (term: string) => {
    console.log('<--------------- JK GifsApp --------------->');
    console.log(term);
  };

  const handleAddPreviousTerm = (query: string) => {
    query = query.toLowerCase().replaceAll(' ', '-');
    if ( previousTerms.includes(query) ) return;
    if ( previousTerms.length === 8 ) previousTerms.pop();
    setPreviousTerms([  query, ...previousTerms ]);
  }

  const handleSearch = (query: string = '') => {
    query = query.trim().toLowerCase();
    if ( !query ) return;
    handleAddPreviousTerm(query);
    console.log('<--------------- JK GifsApp --------------->');
    console.log(query);
  }
  return (
    <>
      {/* header */}
      <CustomHeader title="Gifs search" description="Discover and share the perfect gif" />
      {/* search container */}
      <SearchBar placeholder="Search anything" onQuery={handleSearch}/>
      {/* previous searches */}
      <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick}/>
      {/* gifs container */}
      <GifList gifs={mockGifs} />
    </>
  );
}
