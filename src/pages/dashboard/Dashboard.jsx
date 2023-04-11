import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFavortieShows, getViewedShows, getWatchLaterShows } from "../../api/shows";
import ShowCard from "../../components/show card/ShowCard";
import Shows from "../../components/shows/Shows";
import UserInfoCard from "../../components/user info card/UserInfoCard";
import { hideLoader, showLoader } from "../../redux/actions/loaderActions";

const Dashboard = () => {
  const { user } = useSelector((state) => state.account);
  const { email, name } = user;
  const { lang, show_lang, genres } = user.preferences;
  const [favorite,setFavorite]=useState([])
  const [viewed,setViewed]=useState([])
  const [watchedLater,setWatchedLater]=useState([])
  const dispatch=useDispatch()
  const getShowsSections=async()=>{
    // dispatch(showLoader())
    const data1=await getFavortieShows()
    const data2=await getViewedShows()
    const data3=await getWatchLaterShows()
      setTimeout(() => {
        setFavorite(data1)
      setViewed(data2)
      setWatchedLater(data3)
      // dispatch(hideLoader())
      }, 2000);
  }
  useEffect(()=>{
    getShowsSections()
  },[])
  return (
    <div className='dashboard'>
    <UserInfoCard/>
    {
      favorite.length!==0?<>
      <Shows shows={favorite} title='Favorite Shows'/>
    <Shows shows={viewed} title='Viewed Shows'/>
    <Shows shows={watchedLater} title='Watched later Shows'/>
      </>:<ShowCard isSkelton={true}/>
    }
    </div>
  );
};

export default Dashboard;
