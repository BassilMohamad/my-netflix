import { combineReducers } from "redux";
import MovieReduser from "./MovieReduser";
import DetailReduser from "./DetailReduser";
const  rootReduser=combineReducers({
  movies:MovieReduser,
  detail:DetailReduser
})
export default rootReduser