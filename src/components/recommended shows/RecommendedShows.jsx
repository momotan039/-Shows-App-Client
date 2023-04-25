import React, { useEffect, useRef, useState } from "react";
import { getRecommendedShows } from "../../api/shows";
import { useDispatch } from "react-redux";
import Shows from "../shows/Shows";
import Pagination from "../pagination/Pagination";
import usePagination from "../../hooks/usePagination";
import { scrollToTop, showPopUp } from "../../redux/actions/appAction";
import { showExpiredSessionDialog } from "../../utils/dialogs";
import { useNavigate } from "react-router-dom";

function RecommendedShows({mediaType}) {
  const [shows, setShows] = useState(null);
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [pages,setPages,loading,setLoading]=usePagination()
  const _getRecommendedShows = async (page) => {
      setShows(null)
      setLoading(true)
      if(pages)
      dispatch(scrollToTop('.recommended'))
    try {
        const data = await getRecommendedShows(mediaType, page);
        setPages({ current: data.page, total: data.total_pages });
        setShows(data.results);
      } catch (error) {
        dispatch(showPopUp(error.response.data.message,'sgin in again..','/'))
        showExpiredSessionDialog(error)
      }
      setLoading(false)
   }

  useEffect(() => {
    _getRecommendedShows();
  }, []);

  return (
    <div className="container">
      <div className="recommended">
      <Shows showNotFound={true} title="Recommended Shows" shows={shows} />
      {pages && (
        <Pagination
          _currentPage={pages.current}
          isLoading={loading}
          totalPages={pages.total}
          onPageChange={(page) => {
            _getRecommendedShows(page)
          }}
        />
      )}
    </div>
    </div>
  );
}

export default RecommendedShows;
