import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllGeneres } from "../../api/shows";
import "./setupProfile.css";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";
import { setupAccount } from "../../api/account";
import { editUserPreferences } from "../../redux/actions/accountActions";

const animatedComponents = makeAnimated();
const SetupProfile = () => {
  const { user } = useSelector((state) => state.account);
  const navigator = useNavigate();
  const [error, setError] = useState('');
  const _getAllGenres=async ()=>{
    dispatch(showLoader())
    try {
      const data=await getAllGeneres()
      setAllGenres(data)
    } catch (error) {
      alert(err.response.data.message)
    }
    dispatch(hideLoader())
  }
  useEffect(() => {
    // if (user.preferences) navigator("/");
    // else {
      _getAllGenres()
    // }
  }, []);

  const [lang, setLang] = useState("");
  const [showLang, setShowLang] = useState("");
  const [allGenres, setAllGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    if(genres.length===0||!lang||!showLang)
    {
      setError('Please fill in all fields');
      return
    }
     dispatch(showLoader)
     const action=await editUserPreferences({
      "lang":lang,
      "show_lang":showLang,
      "genres":genres
  })
     dispatch(action)
     dispatch(hideLoader())
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
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
          </select>
          <select
            className="input"
            value={showLang}
            onChange={(e) => setShowLang(e.target.value)}
          >
            <option value="">Select Show Language</option>
            <option value="en">English</option>
            <option value="ar">Arabic</option>
            <option value="he">Hebrew</option>
          </select>
          <div className="genres">
            <Select
              placeholder='Select your genres'
              closeMenuOnSelect={false}
              components={animatedComponents}
              onChange={(gns)=>{setGenres(gns)}}
              isMulti
              getOptionLabel={(o)=>o.name}
              getOptionValue={(o)=>o.id}
              options={allGenres}
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
  );
};

export default SetupProfile;
