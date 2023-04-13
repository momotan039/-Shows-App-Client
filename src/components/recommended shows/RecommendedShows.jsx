import React, { useEffect, useRef, useState } from "react";
import { getRecommendedShows } from "../../api/shows";
import { useDispatch } from "react-redux";
import Shows from "../shows/Shows";
import Pagination from "../pagination/Pagination";

function RecommendedShows() {
  const [shows, setShows] = useState(null);
  const dispatch = useDispatch();
  const [pages, setPages] = useState(null);
  const lastElementRef=useRef()
  const _getRecommendedShows = async (page) => {
      setShows([])
   return new Promise(async (res,rej)=>{
    try {
        setTimeout(async () => {
        const data = await getRecommendedShows("movie", page);
        setPages({ current: data.page, total: data.total_pages });
        setShows(data.results);
        res()
        }, 2000);
      } catch (error) {
        alert(error.response.data.message);
        rej()
      }
   })
  };
  useEffect(() => {
    _getRecommendedShows();
  }, []);

  return (
    <div className="recommended">
      <Shows title="Recommended Shows" shows={shows} />
      {pages && (
        <Pagination
          _currentPage={pages.current}
          totalPages={pages.total}
          onPageChange={(page) => {
            _getRecommendedShows(page)
          }}
          scrollTo='.recommended'
        />
      )}
    </div>
  );
}

export default RecommendedShows;
