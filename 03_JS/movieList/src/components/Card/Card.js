import React from "react";
import PropTypes from "prop-types";

const Card = ({ movie }) => {
  return (
    <div className="col mb-2">
        <div className="card">
          <img src={movie.img.src} alt={movie.img.alt} className="card-img-top" width="200"/>
          <div className="card-body">
            <h2>{`#${movie.ranking} - ${movie.title} (${movie.year})`}</h2>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item"> {`Distributor: ${movie.distributor}`}</li>
            <li className="list-group-item"> {`Amount: ${movie.amount}`}</li>
          </ul>
        </div>
    </div>
  );
};

Card.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    distributor: PropTypes.string,
    year: PropTypes.number,
    amount: PropTypes.string,
    img: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string
    }),
    ranking: PropTypes.number
  }).isRequired
}

export default Card;
