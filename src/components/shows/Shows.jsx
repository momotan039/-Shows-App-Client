import React from "react";
import ShowCard from "../show card/ShowCard";
import "./Shows.css"; 

const Shows = ({title,shows}) => {
    
  return (
    <div className="shows-container">
      <h2 className="shows-title">{title}</h2>
      <div className="shows-grid">
        {shows.map((show) => (
          <ShowCard
            key={show.id}
            name={show.title}
            vote={show.vote_average}
            poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Shows;
