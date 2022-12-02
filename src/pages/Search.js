import React, { useState } from "react";
import MovieItem from "../components/MovieItem";
import axios from "axios";
import InputStyle from "../components/InputStyle";
import ButtonStyle from "../components/ButtonStyle";

const BASE_API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4c9648599d1ab76925b2526a4cb21186";

const Search = () => {
  const [movies, setMovies] = useState([]);
  const [searchKey, setSearchKey] = useState("");

  const getMovies = async (searchKey) => {
    const {
      data: { results },
    } = await axios.get(`${BASE_API_URL}/search/movie`, {
      params: {
        api_key: API_KEY,
        query: searchKey,
      },
    });
    setMovies(results);
    console.log(results);
  };

  const searchMovies = (e) => {
    e.preventDefault();
    getMovies(searchKey);
  };

  return (
    <div className="container-search">
      <form onSubmit={searchMovies} className="mb-5">
        <InputStyle type="text" border="#e88e27" background="white" onChange={(e) => setSearchKey(e.target.value)} />
        <ButtonStyle type="submit" background="#e88e27">
          Search
        </ButtonStyle>
      </form>
      <div className="container">{movies.length === 0 || searchKey === "" ? <h3>Masukan kata kunci dengan benar</h3> : movies.map((d) => <MovieItem key={d.id} movie={d} />)}</div>
    </div>
  );
};

export default Search;
