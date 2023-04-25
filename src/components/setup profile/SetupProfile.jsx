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
import { saveUserToStorage } from "../../utils/localStorage";
import { languages } from "../../utils/constance";
import { showExpiredSessionDialog } from "../../utils/dialogs";

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
    } catch (err) {
      showExpiredSessionDialog(err)
    }
    dispatch(hideLoader())
  }
  useEffect(() => {
    if(user.preferences)
    {
    setShowLang(user.preferences.show_lang)
    setGenres(user.preferences.genres)
    }
      _getAllGenres()
  }, []);
useEffect(()=>{
saveUserToStorage(user)
},[user])
  const [showLang, setShowLang] = useState("");
  const [allGenres, setAllGenres] = useState([]);
  const [genres, setGenres] = useState([]);
  const dispatch=useDispatch()
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    if(genres.length===0||!showLang)
    {
      setError('Please fill in all fields');
      return
    }
     dispatch(showLoader())
     try {
      const action=await editUserPreferences({
        "lang":'en',
        "show_lang":showLang,
        "genres":genres
    })
        dispatch(action)
     } catch (error) {
      showExpiredSessionDialog(error)
     }
      dispatch(hideLoader())
  };


  return (
    <div className="center">
      <div className="setupAccountContainer">
      <div className="content">
        <h1 className="title">Setup Profile</h1>
        <form className="form" onSubmit={handleSubmit}>
          <select
            className="input"
            value={showLang}
            onChange={(e) => setShowLang(e.target.value)}
          >
            <option value="">Select Show Language</option>
            {
              languages.map(v=>{
                return <option key={v.name}  value={v.subName}>{v.name}</option>
              })
            }
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
              value={genres}
            />
          </div>
          <button type="submit" className="button">
            Submit
          </button>
          {error && <div className="error">{error}</div>}
        </form>
      </div>
    </div>
    </div>
  );
};

export default SetupProfile;
