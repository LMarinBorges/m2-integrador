export function favoriteReducer(state, action) {
  switch (action.type) {
    case "ADD_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.concat(action.payload),
      };
    case "REMOVE_FAVORITE":
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (value) => value !== action.payload
        ),
      };
    default:
      return state;
  }
}
