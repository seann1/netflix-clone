import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const hidePreviews = (movie) => {
    console.log(movie);
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        hidePreviews={hidePreviews}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        hidePreviews={hidePreviews}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        hidePreviews={hidePreviews}
      />
    </div>
  );
}

export default App;
