import {
  applyMiddleware,
  legacy_createStore as createStore,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { favoriteReducer as rootReducer } from "./reducer";

const initialState = {
  myFavorites: [],
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
