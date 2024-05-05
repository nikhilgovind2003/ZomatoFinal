import React from "react";
import "../../src/App.css";
import Navbar from "../Components/Navbar/Navbar";
import HomePage from "../Pages/HomePage";
const DefaultLayout = (props) => {
  return (
    <>
    <Navbar />
    <HomePage />
      {props.children}
    </>
  );
};

export default DefaultLayout;
