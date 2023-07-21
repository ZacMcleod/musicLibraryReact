import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Typography from "@mui/material/Typography";
const AddSongsForm = ({ addNewSong }) => {

  const [title, setTitle] = useState(0);
  const [album, setAlbum] = useState("");
  const [artist, setArtist] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [runningTime, setRunningTime] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    let newSong = {
      title: parseInt(title),
      album: album,
      artist: artist,
      releaseDate: releaseDate,
      runningTime: runningTime,
    };
    addNewSong(newSong);
  }

  return (
    <FormControl
      onSubmit={handleSubmit}
      sx={{ backgroundColor: "#454754", padding: "2rem", borderRadius: "25px" }}
    >
      {}
      <Typography variant="h4" gutterbottom="true">
        Add a New Song
      </Typography>
      <TextField
        type="number"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        label="Title: "
        color="primary"
      />
      <TextField
        value={album}
        onChange={(e) => setAlbum(e.target.value)}
        label="Album: "
        color="secondary"
      />
      <TextField
        value={artist}
        onChange={(e) => setArtist(e.target.value)}
        label="Artist: "
        color="warning"
      />
      <TextField
        value={releaseDate}
        onChange={(e) => setReleaseDate(e.target.value)}
        label="Date of Release: "
        color="warning"
      />
      <TextField
        value={runningTime}
        onChange={(e) => setRunningTime(e.target.value)}
        label="Model"
        color="Song Length: "
      />
      <Button
        type="submit"
        variant="contained"
        size="large"
        color="success"
        // Example of overriding style using sx property
        sx={{ color: "white" }}
      >
        Submit
      </Button>
    </FormControl>
  );
};

export default AddSongsForm;
