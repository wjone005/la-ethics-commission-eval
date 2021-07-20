import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import logo from "./img/ethics logo.gif";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <img src={logo} alt="Ethics Commission logo" />
      <h2>Search Candidate Contributions</h2>
      <SearchForm />
      <br />
      <SearchResults />
    </div>
  );
}
