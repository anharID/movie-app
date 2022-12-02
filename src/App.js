import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import axios from "axios";
import Discover from "./pages/Discover";
import Upcoming from "./pages/Upcoming";
import TopRated from "./pages/TopRated";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";

const BASE_API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4c9648599d1ab76925b2526a4cb21186";

function App() {
  // const [session, setSession] = useState("");

  useEffect(() => {
    getSession();
  }, []);

  const getSession = async () => {
    const {
      data: { guest_session_id },
    } = await axios.get(`${BASE_API_URL}/authentication/guest_session/new`, {
      params: {
        api_key: API_KEY,
      },
    });
    // setSession(guest_session_id);
    sessionStorage.setItem("session_id", `${guest_session_id}`);
    console.log(guest_session_id);
  };

  return (
    <Router>
      <div className="App-header">
        <nav className="NavBar">
          <Navbar />
        </nav>
        <Routes>
          <Route path="/" exact element={<Discover />} />
          <Route path="/upcoming" exact element={<Upcoming />} />
          <Route path="/top-rated" exact element={<TopRated />} />
          <Route path="/search" exact element={<Search />} />
          <Route path="/about" exact element={<About />} />
          {/* <Route path="/detail/:id" exact element={<Detail />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

// const SEARCH_API = BASE_API_URL + "search/movie";
// const DISCOVER_API = BASE_API_URL + "discover/movie";
// const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280";
// <div className="max-center">
//   <header className="header">
//     <div className="header-content">
//       <h1>Aplikasi film</h1>
//       <form onSubmit={searchMovies}>
//         <input type="text" onChange={(e) => setSearchKey(e.target.value)} />
//         <button type="submit">Cari</button>
//       </form>
//     </div>
//   </header>
// <div className="container">
//   {movies.map((d) => (
//     <MovieItem key={d.id} movie={d} />
//   ))}
// </div>
// </div>
