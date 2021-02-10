import { combineReducers } from "redux";
import langReducer from "../components/Header/languageSlice";
import cartReducer from "../features/Cart/cartSlice";


const rootReducer = combineReducers({
  language: langReducer,
  cart: cartReducer
})

export default rootReducer;