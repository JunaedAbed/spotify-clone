import React from "react";
import { useStateProviderValue } from "../redux/StateProvider";
import "./Body.css";
import Header from "./Header";
import PlayCircleFilledRoundedIcon from "@material-ui/icons/PlayCircleFilledRounded";
import FavoriteBorderRoundedIcon from "@material-ui/icons/FavoriteBorderRounded";
import MoreHorizRoundedIcon from "@material-ui/icons/MoreHorizRounded";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();
  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="Discover Weekly" />
        <div className="body__infoText">
          <strong>{discover_weekly?.type}</strong>
          <h2>{discover_weekly?.name}</h2>
          <p>{discover_weekly?.description}</p>
          <p className="body__infoDetails">
            {discover_weekly?.owner.display_name},{" "}
            {discover_weekly?.followers?.total} Likes,{" "}
            {discover_weekly?.tracks?.total} songs
          </p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledRoundedIcon className="body__shuffle" />
          <FavoriteBorderRoundedIcon className="body__like" fontSize="large" />
          <MoreHorizRoundedIcon className="body__option" />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow track={item.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
