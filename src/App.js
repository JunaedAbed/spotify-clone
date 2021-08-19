import { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./utils/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateProviderValue } from "./redux/StateProvider";

const spotify = new SpotifyWebApi();
console.log(spotify);

function App() {
  const [{ user, token }, dispatch] = useStateProviderValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      spotify.setAccessToken(_token);

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user,
        });
      });

      spotify.getUserPlaylists().then((playlists) => {
        console.log("user playlists", playlists);
        dispatch({
          type: "SET_PLAYLISTS",
          playlists,
        });
      });

      spotify.getPlaylist("5RP8XY50zU09vBYRGb0jUy").then((response) => {
        console.log("specific playlist", response);
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response,
        });
      });

      // spotify.getMySavedAlbums().then((album) => {
      //   console.log("album", album);
      // });

      // spotify.getMySavedTracks(_token).then((track) => {
      //   console.log("My saved track", track);
      // });

      spotify.getMyTopArtists(_token).then((artist) => {
        console.log("My top artists", artist);
        dispatch({
          type: "SET_MY_TOP_ARTISTS",
          my_top_artists: artist,
        });
      });
    }
  }, [token, dispatch]);

  return (
    <div className="App">
      {!token && <Login />}
      {token && <Player spotify={spotify} />}
    </div>
  );
}

export default App;
