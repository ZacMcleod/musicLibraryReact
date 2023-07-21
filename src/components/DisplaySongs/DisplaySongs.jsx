import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
const DisplaySongs = ({ allSongs, searchTerm }) => {
  let filteredSongs = allSongs.filter((song) =>
    song.make.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        gap: "4rem",
        flexWrap: "wrap",
        padding: "2rem",
      }}
    >
      {filteredSongs.map((song, index) => (
        <Card
          key={index}
          variant="outlined"
          sx={{
            height: "12rem",
            width: "12rem",
            justifyContent: "center",
            display: "flex",
            alignItems: "center",
          }}
        >
          <CardContent>
            <Typography variant="h4" color="primary">
              {song.title}
            </Typography>
            <Typography variant="h5" color="secondary">
              {song.album}
            </Typography>
            <Typography variant="h6" color="error">
              {song.artist}
            </Typography>
            <Typography variant="h6" color="error">
              {song.releaseDate}
            </Typography>
            <Typography variant="h6" color="error">
              {song.runningTime}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default DisplaySongs;
