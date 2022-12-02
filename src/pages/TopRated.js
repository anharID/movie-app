import "../App.css";

import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieItem from "../components/MovieItem";

const BASE_API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4c9648599d1ab76925b2526a4cb21186";

const TopRated = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies();
  }, []);

  const getMovies = async () => {
    const {
      data: { results },
    } = await axios.get(`${BASE_API_URL}/movie/top_rated`, {
      params: {
        api_key: API_KEY,
      },
    });
    setMovies(results);
    console.log(results);
  };

  return (
    <div className="container">
      {movies.map((d) => (
        <MovieItem key={d.id} movie={d} />
      ))}
    </div>
  );
};

export default TopRated;
