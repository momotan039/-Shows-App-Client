import React, { useState } from "react";
import axios from "axios";
import Select from "react-select";
import { FiSearch } from "react-icons/fi";
import "./SearchBar.css";
import { getSearchedShows } from "../../api/shows";
import Shows from "../shows/Shows";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [showModal, setShowModal] = useState(false); // Add state to control modal visibility
  const [selectedOption, setSelectedOption] = useState(null); // Add state for selected option

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSelectChange = (selectedOption) => {
    setSelectedOption(selectedOption);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if(!searchTerm)
        return
    try {
      const data=await getSearchedShows(selectedOption.value,searchTerm)
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
          <Select
            placeholder='Select Type Show'
            className="select-option"
            classNamePrefix="select-option"
            options={[
              { value:'movie',label: "movies" },
              { value:'tv',label: "tv" },
            ]}
            value={selectedOption}
            onChange={handleSelectChange}
          />
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
