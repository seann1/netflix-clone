import { useState } from "react";

import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";
import Nav from "./components/Nav";
import "./App.css";

function App() {
  const [rowIsActive, setRowIsActive] = useState("");
  const hidePreviews = (movie) => {
    setRowIsActive(movie.id);
  };

  return (
    <div className="App">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
        isLargeRow
      />
      <Row
        title="Trending Now"
        fetchUrl={requests.fetchTrending}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Top Rated"
        fetchUrl={requests.fetchTopRated}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Action Movies"
        fetchUrl={requests.fetchActionMovies}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Comedy Movies"
        fetchUrl={requests.fetchComedyMovies}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Horror Movies"
        fetchUrl={requests.fetchHorrorMovies}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Romance Movies"
        fetchUrl={requests.fetchRomanceMovies}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
      <Row
        title="Documentaries"
        fetchUrl={requests.fetchDocumentaries}
        hidePreviews={hidePreviews}
        previewId={rowIsActive}
      />
    </div>
  );
}

export default App;
