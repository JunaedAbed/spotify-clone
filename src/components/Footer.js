import React from "react";
import "./Footer.css";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import SkipNextRoundedIcon from "@material-ui/icons/SkipNextRounded";
import SkipPreviousRoundedIcon from "@material-ui/icons/SkipPreviousRounded";
import ShuffleSharpIcon from "@material-ui/icons/ShuffleSharp";
import RepeatRoundedIcon from "@material-ui/icons/RepeatRounded";
import PlaylistPlayRoundedIcon from "@material-ui/icons/PlaylistPlayRounded";
import VolumeDownRoundedIcon from "@material-ui/icons/VolumeDownRounded";
import { Grid, Slider } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="footer__left">
        <img
          className="footer__albumLogo"
          src="https://upload.wikimedia.org/wikipedia/en/2/2e/Usher-yeah.jpg"
          alt="album logo"
        />
        <div className="footer__songInfo">
          <h4>Yeah</h4>
          <p>Usher</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleSharpIcon className="footer__green" />
        <SkipPreviousRoundedIcon className="footer__icon" />
        <PlayCircleFilledIcon fontSize="large" className="footer__iconPlay" />
        <SkipNextRoundedIcon className="footer__icon" />
        <RepeatRoundedIcon className="footer__green" />

        {/* <Slider aria-labelledby="continuous-slider" /> */}
        {/* <hr className="footer__down" /> */}
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayRoundedIcon />
          </Grid>
          <Grid item>
            <VolumeDownRoundedIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
