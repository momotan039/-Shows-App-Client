import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Loader from "../components/loader/Loader";

function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <Loader />
    </>
  );
}

export default Root;
