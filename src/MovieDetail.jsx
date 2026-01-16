import { useState } from "react";
import movieDetailData from "./movieDetailData.json";
import "./MovieDetail.css";

export default function MovieDetail() {
  const [movie] = useState(movieDetailData);

  return (
    <div className="movie-detail-container">
      <img
        className="movie-poster"
        src={"https://image.tmdb.org/t/p/w500" + movie.poster_path}
        alt={movie.title}
      />
      <div className="movie-info">
        <div className="movie-info-top">
          <h1>{movie.title}</h1>
          <p>{movie.vote_average}</p>
        </div>
        <div className="movie-info-bottom">
          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id}>{genre.name}</span>
            ))}
          </div>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  );
}
