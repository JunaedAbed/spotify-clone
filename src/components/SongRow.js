import React from "react";
import { msToTime } from "../utils/utils";
import "./SongRow.css";

function SongRow({ track, serial, playSong }) {
  console.log(track);
  return (
    <div className="songRow" onClick={() => playSong(track.id)}>
      <div className="songRow__serial">{serial + 1}</div>
      <img className="songRow__album" src={track.album.images[0].url} alt="" />
      <div className="songRow__info">
        <h1>{track.name}</h1>
        <p>
          {track.artists.map((artist) => artist.name).join(", ")} -{" "}
          {track.album.name} - {msToTime(track.duration_ms)}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
