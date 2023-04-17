import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";

function Root() {
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
