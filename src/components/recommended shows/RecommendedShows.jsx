import React, { useEffect, useRef, useState } from "react";
import { getRecommendedShows } from "../../api/shows";
import { useDispatch } from "react-redux";
import Shows from "../shows/Shows";
import Pagination from "../pagination/Pagination";

function RecommendedShows({mediaType}) {
  const [shows, setShows] = useState(null);
  const dispatch = useDispatch();
  const [pages, setPages] = useState(null);
  const [loading, setLoading] = useState(false);
  const _getRecommendedShows = (page) => {
      setShows(null)
      setLoading(true)
    try {
        setTimeout(async () => {
        const data = await getRecommendedShows(mediaType, page);
        setPages({ current: data.page, total: data.total_pages });
        setShows(data.results);
        }, 2000);
      } catch (error) {
        alert(error.response.data.message);
      }
      setLoading(false)
   }

  useEffect(() => {
    _getRecommendedShows();
  }, []);

  return (
    <div className="container">
      <div className="recommended">
      <Shows title="Recommended Shows" shows={shows} />
      {pages && (
        <Pagination
          _currentPage={pages.current}
          isLoading={loading}
          totalPages={pages.total}
          onPageChange={(page) => {
            _getRecommendedShows(page)
          }}
          scrollTo='.recommended'
        />
      )}
    </div>
    </div>
  );
}

export default RecommendedShows;
