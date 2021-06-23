import { POST_TEXT } from "./actionTypes";
import axios from 'axios'
export const postText=text=>dispatch=>{
        axios.post('https://sentim-api.herokuapp.com/api/v1/',{text})
        .then(res=>dispatch({type:POST_TEXT,payload:res.data}))
        .catch(err=>console.log({err}))
};