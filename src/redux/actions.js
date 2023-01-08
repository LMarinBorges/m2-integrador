export function addFavorite(id) {
  return { type: "ADD_FAVORITE", payload: id };
}

export function removeFavorite(id) {
  return { type: "REMOVE_FAVORITE", payload: id };
}
