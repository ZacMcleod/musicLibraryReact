import React from "react";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
//import "./SearchBar.css";
const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="search-container">
      <Typography variant="h4" gutterbottom="true">
        Search Your Cars
      </Typography>
      <TextField
        variant="outlined"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        label="Make"
        color="secondary"
        gutterbottom="true"
      />
    </div>
  );
};

export default SearchBar;