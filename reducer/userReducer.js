import {setUser} from "../action/actionType";

const initial_state={
    user:null
};
const userReducer=(state=initial_state,action)=>{
    switch(action.type){
       
        case setUser:
            
            return {
                ...state, user:action.user
            };
        default:
        return state;
    }
}
export  default userReducer;
