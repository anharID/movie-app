import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import React, { useEffect } from "react";
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
