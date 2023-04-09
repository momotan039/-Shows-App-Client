import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllGeneres } from "../../api/shows";
import "./setupProfile.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();
const SetupProfile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigator = useNavigate();
  useEffect(() => {
    if (user.preferences) navigator("/");
    else {
      getAllGeneres()
        .then((data) => {
          setAllGenres(data)
        })
        .catch((err) => alert(err.response.data.message));
    }
  }, []);

  const [lang, setLang] = useState("");
  const [showLang, setShowLang] = useState("");
  const [allGenres, setAllGenres] = useState([]);
  const [genres, setGenres] = useState([]);


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(genres);
    // Handle form submission
  };

  return (
    <div className="setupAccountContainer">
      <div className="content">
        <h1 className="title">Setup Profile</h1>
        <form className="form" onSubmit={handleSubmit}>
          <select
            className="input"
            value={lang}
            onChange={(e) => setLang(e.target.value)}
          >
            <option value="">Select Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          <select
            className="input"
            value={showLang}
            onChange={(e) => setShowLang(e.target.value)}
          >
            <option value="">Select Show Language</option>
            <option value="en">English</option>
            <option value="es">Spanish</option>
          </select>
          <div className="genres">
            <Select
              placeholder='Select your genres'
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={(obj)=>setGenres(genres)}
              isMulti
              getOptionLabel={(o)=>o.name}
              getOptionValue={(o)=>o.id}
              options={allGenres}
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SetupProfile;
