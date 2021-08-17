import React from "react";
import { useStateProviderValue } from "../redux/StateProvider";
import "./Body.css";
import Header from "./Header";

function Body({ spotify }) {
  const [{ discover_weekly }, dispatch] = useStateProviderValue();

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0]?.url} alt="Discover Weekly" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>
    </div>
  );
}

export default Body;
