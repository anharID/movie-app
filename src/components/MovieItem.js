import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Detail from "./MovieModal";

const MovieItem = ({ movie }) => {
  const POSTER_PATH = "https://image.tmdb.org/t/p/w500/";

  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="movie">
      <Card>
        <Card.Img variant="top" src={`${POSTER_PATH}${movie.poster_path}`} className="poster" />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>Rating: {movie.vote_average}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="outline-primary" onClick={handleShow}>
            See Detail
          </Button>
        </Card.Footer>
      </Card>
      <Detail movie={movie} close={handleClose} show={show} />
    </div>
  );
};

export default MovieItem;
