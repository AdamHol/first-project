import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Header from "./components/Header.js";
import MainContent from "./components/Main.js";
import Footer from "./components/Footer.js";

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <MainContent />
    <Footer />
  </React.StrictMode>,
  document.getElementById("root")
);
