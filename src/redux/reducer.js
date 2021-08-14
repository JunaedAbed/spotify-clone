export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  token:
    "BQAC4C5bk74bHKSFG1CifWrdDE2HU7ExlUpbg93XyeA2UEs1flOK_UaVOtz2GL-UhMakKp-_fHkgSg0msWBVcTfPxehpmGlGR1wN11vWjp3h_IMAdR5-38XtPnJAJvmX4Hx67vifCXpEnRBT_k9C4dpDnUWETGBKZH-TCgW-IjqLA0lK",
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

    default:
      return state;
  }
};

export default reducer;
