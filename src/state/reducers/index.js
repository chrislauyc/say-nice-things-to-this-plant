import { POST_TEXT } from "../actions/actionTypes";
const initialState={
    polarity:0,
    type:'neutral',
    apiCount:0,
}
export const reducer=(state=initialState,action)=>{
    switch(action.type){
        case POST_TEXT:
            console.log('reducer called')
            return{
                ...state,
                polarity:action.payload.result.polarity,
                type:action.payload.result.type,
                apiCount:state.apiCount+1
            };
        default:
            return state;
    }
};