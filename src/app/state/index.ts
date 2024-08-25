import { createSlice,PayloadAction } from "@reduxjs/toolkit";
export interface InitialStateTypes{
    isSideBarCollapsed:boolean,
    isDarkMode:boolean
}

const initialState : InitialStateTypes = {
    isSideBarCollapsed: false,
    isDarkMode: false

}

export const globalSlice = createSlice({
    name: 'global',
    initialState,
    reducers:{
        setIsSidebarCollapsed:(state:any,action:PayloadAction<boolean>)=>{
            state.isSideBarCollapsed = action.payload
        },
        setIsdarkMode:(state:any,action:PayloadAction<boolean>)=>{
            state.isDarkMode = action.payload

        }
    }
    
})
export const {setIsSidebarCollapsed,setIsdarkMode} = globalSlice.actions
export default globalSlice.reducer