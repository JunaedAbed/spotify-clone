import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import AddIcon from "@material-ui/icons/Add";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { useStateProviderValue } from "../redux/StateProvider";

function Sidebar() {
  const [{ playlists }, dispatch] = useStateProviderValue();

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://logos-download.com/wp-content/uploads/2016/08/Spotify_logo-700x210.png"
        alt="logo"
      />

      <SidebarOption title="Home" Icon={HomeIcon} />
      <SidebarOption title="Search" Icon={SearchIcon} />
      <SidebarOption title="Your Library" Icon={LibraryMusicIcon} />
      <br />
      <SidebarOption title="Create Playlist" Icon={AddIcon} />
      <SidebarOption title="Liked Songs" Icon={FavoriteBorderIcon} />

      <hr />

      {playlists?.items?.map((playlist) => (
        <SidebarOption title={playlist.name} />
      ))}
    </div>
  );
}

export default Sidebar;
