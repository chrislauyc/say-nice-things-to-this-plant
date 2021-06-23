import { POST_TEXT } from "../actions/actionTypes";
const initialState={
    polarity:0,
    type:'neutral'
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case POST_TEXT:
            console.log('reducer called')
            return{
                ...state,
                polarity:action.payload.result.polarity,
                type:action.payload.result.type
            };
        default:
            return state;
    }
};