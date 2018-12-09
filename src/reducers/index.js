import randomGifReducer from "./randomGifReducer";
import selectedGifReducer from "./selectedGifReducer";
import { combineReducers } from "redux";

export default combineReducers({
  randomGif: randomGifReducer,
  selectedGif: selectedGifReducer
});
