import React from "react";
import { Container, Paper } from "@material-ui/core/";

function SearchResults(props) {
  const searchResults = "Search Results go here.";
  return (
    <Container>
      <Paper>{searchResults}</Paper>
    </Container>
  );
}

export default SearchResults;
