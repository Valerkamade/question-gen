import React from "react";
import Header from "./Header/Header";
import NavBar from "./NavBar/NavBar";
import "./App.css";
import Main from "./Sections/Main/Main";

const App = () => {
  return (
    <div className="main-app">
      <NavBar />
      <Header />
      <Main title="Базовые вопросы" />
    </div>
  );
};

export default App;
