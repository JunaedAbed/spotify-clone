export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  discover_weekly: null,
  // token:
  //   "BQAC4C5bk74bHKSFG1CifWrdDE2HU7ExlUpbg93XyeA2UEs1flOK_UaVOtz2GL-UhMakKp-_fHkgSg0msWBVcTfPxehpmGlGR1wN11vWjp3h_IMAdR5-38XtPnJAJvmX4Hx67vifCXpEnRBT_k9C4dpDnUWETGBKZH-TCgW-IjqLA0lK",
  token: null,
};

const reducer = (state, action) => {
  //   console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    default:
      return state;
  }
};

export default reducer;
