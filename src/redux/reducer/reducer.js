const initState ={
    Diary : {
        D_id :"",
        D_auther : "",
        D_name :" ",
        D_object : []
    },
    user : {
        U_name : "",
        U_pass : "",
        U_email: ""
    }
}

const reducer = (state=initState , action)=>{
    
    switch(action.type){
        case 'update_state':
            const newState = {
                ...state,
                ...action.payload
            };
            console.log(newState);
            return newState;
        default :
            break;
    }
    return state;
}

export default reducer;