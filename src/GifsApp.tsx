import { PreviousSearches } from "./gifs/components/PreviousSearches";
import { CustomHeader } from './shared/components/CustomHeader';
import { SearchBar } from "./shared/components/SearchBar";
import { GifList } from "./gifs/components/GifList";

import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <CustomHeader title="Gifs search" description="Discover and share the perfect gif" />
      {/* search container */}
      <SearchBar placeholder="Search anything"/>
      {/* previous searches */}
      <PreviousSearches searches={['Goku', 'Test', 'Dev']}/>
      {/* gifs container */}
      <GifList gifs={mockGifs} />
    </>
  );
}
