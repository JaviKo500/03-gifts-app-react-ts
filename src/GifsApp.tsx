import { PreviousSearches } from './gifs/components/PreviousSearches';
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from './shared/components/SearchBar';
import { GifList } from './gifs/components/GifList';

import { useGifs } from './gifs/hooks/useGifs';

export const GifsApp = () => {
  const { gifts, previousTerms, handleSearch, handleTermClick } = useGifs();
  return (
    <>
      {/* header */}
      <CustomHeader title="Gifs search" description="Discover and share the perfect gif" />
      {/* search container */}
      <SearchBar placeholder="Search anything" onQuery={handleSearch}/>
      {/* previous searches */}
      <PreviousSearches searches={previousTerms} onLabelClick={handleTermClick}/>
      {/* gifs container */}
      <GifList gifs={gifts} />
    </>
  );
}
