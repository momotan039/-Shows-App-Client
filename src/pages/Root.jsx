import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";
import Popup from "../components/popup/Popup";
import { useSelector } from "react-redux";

function Root() {
  return (
  <div className="root">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Loader />
      <Popup/>
    </div>
  );
}

export default Root;
