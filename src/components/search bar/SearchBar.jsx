import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";
import { getSearchedShows } from "../../api/shows";
import Shows from "../shows/Shows";
import makeAnimated from "react-select/animated";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false); // Add state to control modal visibility
  const [selectedOption, setSelectedOption] = useState(null); // Add state for selected option

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!searchTerm || !selectedOption)
        return
    try {
      const data=await getSearchedShows(selectedOption,searchTerm)
      setResults(data.results)
        setShowModal(true); // Show modal on form submit
    } catch (error) {
      console.error(error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false); // Close modal
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="search-bar">
        <div className="search-input-container">
          <select
            className="input"
            onChange={handleSelectChange}
          >
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
      {/* Render modal overlay with search results */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <button onClick={handleCloseModal} className="close-button">
              X
            </button>
            <div className="results">
              {results&&<Shows shows={results} title={selectedOption.label}/>}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
