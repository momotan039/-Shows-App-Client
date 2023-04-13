import React from "react";
import { useDispatch } from "react-redux";
import { removeShowFromUserShows } from "../../api/shows";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import ShowCard from "../show card/ShowCard";
import "./Shows.css"; 

const Shows = ({title,shows,apiRoute,enableDelete}) => {
  const dispatch=useDispatch()
  const deleteShow=async (id)=>{
    debugger
      dispatch(showLoader())
      try {
        const data= await removeShowFromUserShows(id,apiRoute)
        console.log(data)
      } catch (error) {
        console.log(error.response.data.message)
      }
      dispatch(hideLoader())
  }

  if(!shows)
  return <ShowCard isSkelton={true}/>

   if(shows.length>0)
  return (
    <div className="shows-container">
      <h2 className="shows-title">{title}</h2>
      <div className="shows-grid">
        {shows.map((show) => (
          <ShowCard
           deleteMe={enableDelete?()=>deleteShow(show._id):null}
            key={show._id||show.id}
            name={show.title||show.name}
            vote={show.vote_average}
            show={show}
            poster={`https://image.tmdb.org/t/p/w500/${show.poster_path}`}
          />
        ))}
      </div>
    </div>
  );

};

export default Shows;
