import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {
  return (
    <>
      {/* header */}
      <div className="content-center">
        <h1>Gifs search</h1>
        <p>Discover and share the perfect gif</p>
      </div>
      {/* search container */}
      <div className="search-container">
        <input type="text" placeholder="Search gifs" />
        <button>Search</button>
      </div>
      {/* previous searches */}
      <div className="previous-searches">
        <h2>Previous searches</h2>
        <ul className="previous-searches-list">
          <li>Goku</li>
          <li>sitama</li>
          <li>Gravity</li>
          <li>gifs</li>
        </ul>
      </div>
      {/* gifs container */}
      <div className="gifs-container">
        {
          mockGifs.map((gif) => (
            <div className="gif-card" key={gif.id}>
              <img src={gif.url} alt={gif.title} />
              <h3>{gif.title}</h3>
              <p>{gif.width}x{gif.height} (1.5mb)</p>
            </div>
          ))
        }
      </div>
    </>
  );
}
