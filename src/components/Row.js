import { useState, useEffect } from "react";
import axios from "../axios";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import "./Row.css";

const base_url = "https://image.tmdb.org/t/p/original/";
function Row({ title, fetchUrl, isLargeRow, hidePreviews, previewId }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [playingId, setPlayingId] = useState(null);
  const [trailerError, setTrailerError] = useState(false);
  const [activeMovie, setActiveMovie] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    setActiveMovie(movie.id);
    hidePreviews(movie);
    setTrailerError(false);

    if (trailerUrl) {
      setTrailerUrl("");
      setPlayingId(null);
    } else {
      movieTrailer(movie.title || movie.name || "")
        .then((url) => {
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get("v"));
          setPlayingId(movie.id);
        })
        .catch(() => {
          setTrailerError(true);
        });
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row__poster ${isLargeRow && "row__posterLarge"} ${
              trailerUrl && playingId === movie.id ? "x" : ""
            }`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>

      {trailerUrl && previewId === activeMovie ? (
        <YouTube videoId={trailerUrl} opts={opts} />
      ) : null}
      {trailerError && previewId === activeMovie ? (
        <div className="unavailable">
          <h1>Trailer Not Available</h1>
        </div>
      ) : null}
    </div>
  );
}

export default Row;
