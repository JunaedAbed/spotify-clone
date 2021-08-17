import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar, withStyles } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import { useStateProviderValue } from "../redux/StateProvider";

const StyledBadge = withStyles((theme) => ({
  badge: {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "$ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: '""',
    },
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1,
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0,
    },
  },
}))(Badge);

function Header() {
  const [{ user }, dispatch] = useStateProviderValue();

  return (
    <div className="header">
      <div className="header__left">
        <SearchIcon />
        <input placeholder="Search for Artists, songs or Album" type="text" />
      </div>

      <div className="header__right">
        <StyledBadge
          overlap="circular"
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          variant="dot"
        >
          <Avatar
            style={{ height: "25px", width: "25px" }}
            src={user?.images[0]?.url}
            alt={user?.display_name}
          />
        </StyledBadge>
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
