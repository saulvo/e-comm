import { combineReducers } from "redux";
import langReducer from "../components/Header/languageSlice";


const rootReducer = combineReducers({
  language: langReducer
})

export default rootReducer;