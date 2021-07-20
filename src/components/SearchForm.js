import React from "react";
import { Button, TextField } from "@material-ui/core/";

function SearchForm(props) {
  return (
    <form>
      <TextField id="standard-basic" label="Enter Contributor Name" />
      <br />
      <Button variant="contained">Search</Button>
    </form>
  );
}

export default SearchForm;
