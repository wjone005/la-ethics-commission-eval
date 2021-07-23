import React from "react";
import SearchForm from "./components/SearchForm";
import SearchResults from "./components/SearchResults";
import "./styles.css";
import Navigation from "./components/Navigation";

export default function App() {
  return (
    <div className="App">
      <Navigation />
      <h2 style={{marginTop:50}}>Search Candidate Contributions</h2>
      <br />
      <SearchResults />
    </div>
  );
}
