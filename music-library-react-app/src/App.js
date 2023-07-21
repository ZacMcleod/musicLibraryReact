import axios from "axios";
import "./App.css";
import { useState, useEffect } from "react";
import DisplaySongs from "./components/DisplaySongs/DisplaySongs";
import AddSongsForm from "./components/AddSongsForm/AddSongsForm";
import SearchBar from "./components/SearchBar/SearchBar";
import Typography from "@mui/material/Typography";

function App() {
  
  const [allSongs, setAllSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setAllSongs();
  }, []);

  async function getAllSongs() {
    try {
      setIsLoading(true);
      let response = await axios.get("http://127.0.0.1:5000/api/songs/");
      console.log(response);
      setAllSongs(response.data);
      setIsLoading(false);
    } catch (error) {
      console.log("Error in getAllSongs!", error);
    }
  }

  async function addNewSong(newSong) {
    let response = await axios.post("http://127.0.0.1:5000/api/songs/", newSong);
    if (response.status === 201) {
      getAllSongs();
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <AddSongsForm addNewSong={addNewSong} />
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <DisplaySongs allSongs={allSongs} searchTerm={searchTerm} />
        {isLoading ? (
          <Typography variant="h2">Loading...</Typography>
        ) : (
          <DisplaySongs allSongs={allSongs} searchTerm={searchTerm} />
        )}
      </header>
    </div>
  );
}

export default App;
