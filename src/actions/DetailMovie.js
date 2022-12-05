import axios from "axios";
import {movieDetailURL} from "../API"
export const loadDetail=(id)=> async (dispatch)=>{
  const detailData=await axios.get(movieDetailURL(id));
  dispatch({
    type:"GET_DETAIL",
    payload:{
      movie:detailData.data,
    }
  })
}
