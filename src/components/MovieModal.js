import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

const BASE_API_URL = "https://api.themoviedb.org/3";
const API_KEY = "4c9648599d1ab76925b2526a4cb21186";
const BACKDROP_PATH = "https://image.tmdb.org/t/p/w1280/";

const Detail = ({ movie, show, close }) => {
  const [value, setValue] = useState("");
  const [msg, setMsg] = useState("");

  const rateSelected = (e) => {
    e.preventDefault();
    rateMovie(value);
    console.log(value);
  };

  const rateMovie = async (value) => {
    try {
      const response = await axios.post(
        `${BASE_API_URL}/movie/${movie.id}/rating`,
        {
          value: value,
        },
        {
          params: {
            api_key: API_KEY,
            guest_session_id: sessionStorage.getItem("session_id"),
          },
        }
      );
      console.log(response.data.status_message);
      setMsg(response.data.status_message);
      // setStatus(response.data.success);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Modal show={show} onHide={close}>
      <Modal.Header closeButton>
        <Modal.Title>{movie.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img className="card-img-top mb-4" style={{ width: "100%" }} src={`${BACKDROP_PATH}${movie.backdrop_path}`} alt="" />
        <h4>Rating: {movie.vote_average}</h4>
        <h5>Release Date: {movie.release_date}</h5>
        <br></br>
        <h6>Overview</h6>
        <p>{movie.overview}</p>
        <Form.Group className="mb-3">
          <Form.Label>Give rating: {value}</Form.Label>
          <Form.Control type="range" min="0" max="10" step="1" value={value} onChange={(event) => setValue(event.target.value)} />
        </Form.Group>
        <strong className="text-success">{msg}</strong>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={rateSelected}>
          Rate
        </Button>
        <Button variant="secondary" onClick={close}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default Detail;
