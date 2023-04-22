import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import { useSelector } from "react-redux";

function Root() {
  const {user}=useSelector(s=>s.account)
  const nav=useNavigate()
  useEffect(()=>{
    if(user&&!user.preferences)
    nav('/setup-profile')
  },[user])

  return (
  <div className="root">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Loader />
    </div>
  );
}

export default Root;
