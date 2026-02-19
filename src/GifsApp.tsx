import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";

import { mockGifs } from "./mock-data/gifs.mock";
import { useState } from "react";

export const GifsApp = () => {
  const [previousTerms, setpreviousTerms] = useState(['dragon ball z']);
  const handleTermClick = (term: string) => {
    console.log('<--------------- JK GifsApp --------------->');
    console.log(term);
  };
  return (
    <>
      {/* header */}
      <CustomHeader title="Gifs search" description="Discover and share the perfect gif" />
      {/* search container */}
      <SearchBar placeholder="Search anything"/>
      {/* previous searches */}
      <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick}/>
      {/* gifs container */}
      <GifList gifs={mockGifs} />
    </>
  );
}
