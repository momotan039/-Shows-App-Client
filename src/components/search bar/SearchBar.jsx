import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";
import { getSearchedShows } from "../../api/shows";
import Shows from "../shows/Shows";
import SkeltonShows from "../skelton shows/SkeltonShows";
import { useDispatch } from "react-redux";
import { hideScrollerApp, scrollToTop, showScrollerApp } from "../../redux/actions/appAction";
import Pagination from "../pagination/Pagination";
import usePagination from "../../hooks/usePagination";

const SearchBar = ({mediaType}) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState(null);
  const [showModal, setShowModal] = useState(false); // Add state to control modal visibility
  const [selectedOption, setSelectedOption] = useState(mediaType); // Add state for selected option
  const [pages,setPages,loading,setLoading]=usePagination()

  const dispatch=useDispatch()

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };
const clearClassAnimation=()=>{
      let elem=document.querySelector('.slide-right')
      if(elem)
      elem.classList=''
      elem=document.querySelector('.slide-left')
      if(elem)
      elem.classList=''
}
  const handleSubmit = async (page) => {
    event.preventDefault();
    if (!searchTerm || !selectedOption) return;
    try {
      setResults(null)
      dispatch(scrollToTop('.modal-content'))
      //hide body scroller
      dispatch(hideScrollerApp())
      setShowModal(true);
      //remove animation class
      clearClassAnimation()
      const data = await getSearchedShows(selectedOption, searchTerm,page);
      setResults(data.results);
      setPages({ current: data.page, total: data.total_pages });
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
    setResults(null)
    //show body scroller
    dispatch(showScrollerApp())
  };
  return (
    <div className="container">
        <form onSubmit={()=>handleSubmit(1)} className="search-bar">
          <div className="search-input-container">
            <select  className="input" defaultValue={mediaType} onChange={handleSelectChange}>
              <option value="">Select Media Type</option>
              <option value="movie">movies</option>
              <option value="tv">tv</option>
            </select>

            <input
              type="text"
              placeholder="Search..."
              value={searchTerm}
              onChange={handleChange}
              className="search-input"
              style={{ borderColor: "#ffbd4d", color: "#ffbd4d" }}
            />
          </div>
          <button
            type="submit"
            className="search-button"
            style={{ color: "#ffbd4d" }}
          >
            <FiSearch />
          </button>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <button onClick={handleCloseModal} className="close-button">
                X
              </button>
              <div className="results">
                {results ? (
                  <Shows showNotFound={true} shows={results} title={`searching for : ${searchTerm}`}/>
                ) : (
                  <SkeltonShows num={20} />
                )}
              </div>
            </div>
            {pages && (
        <div className="container pagination">
          <Pagination
          _currentPage={pages.current}
          isLoading={loading}
          totalPages={pages.total}
          onPageChange={(page) => {
            handleSubmit(page)
          }}
        />
        </div>
      )}
          </div>
        )}
    </div>
  );
};

export default SearchBar;
