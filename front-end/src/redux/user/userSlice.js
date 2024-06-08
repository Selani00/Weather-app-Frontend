import {createSlice} from '@reduxjs/toolkit';

const initialState ={
    currentUser:null,
    error:null,
    loading:false
}

const userSlice = createSlice({
    name:'user',
    initialState,
    
    reducers:{
        signInStart:(state)=>{
            state.loading=true; 
            state.error=null; 
        },
        signInScuccess:(state,action)=>{
            state.currentUser= action.payload;
            state.loading=false;
            state.error=null;
        },
        signInFailure:(state,action)=>{
            state.error=action.payload;
            state.loading=false;
        },
        signInStop:(state,action)=>{
            state.error=null;
            state.loading=false;
        },
        signoutSuccess: (state) => {
            state.currentUser = null;
            state.loading = false;
            state.error = null;
        }

    }});


export const {signInStart,signInScuccess,signInFailure ,signoutSuccess,signInStop }= userSlice.actions;

   
export default userSlice.reducer;