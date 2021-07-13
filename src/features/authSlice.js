import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name:'',
    email:'',
    photo:''
}

const authSlice = createSlice({
    name:"auth",
    initialState,
    reducers:{
        setSignInState:(state,action)=> {
            state.name = action.payload.name;
            state.email= action.payload.email;
            state.photo = action.payload.photo;   
       },
       setSignOutState:(state)=>{
        state.name = null;
        state.email = null;
        state.photo = null;
       }

    }
});


//actions
export const {setSignInState,setSignOutState} = authSlice.actions;
//state.
export const SelectUserName = (state) => state.auth.name;
export const SelectUserEmail = (state) => state.auth.email;
export const SelectUserPhoto = (state) => state.auth.photo;
//reducer.

export default authSlice.reducer;