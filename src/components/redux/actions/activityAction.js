import { createAsyncThunk } from "@reduxjs/toolkit";
import url from "../../../url";
import axios from "axios";

const getActivity = createAsyncThunk("getActivitys", async () => {
    try {
        
        const res = await axios.get(`${url}activity`)
        return {
            success: true,
            response: res.data.activitys,
            message: res.data.message
        }
    
    }
    catch(error){
        console.log(error)
        return { 
            success: false,
            response: [],
            message: error.response.data
        }
    }
})
const toDo = createAsyncThunk("toDos", async (data) => {
    try {
        
        const res = await axios.put(`${url}activity/${data}`)
        return {
            success: true,
            response: res.data.activitys,
            message: res.data.message
        }
    
    }
    catch(error){
        console.log(error)
        return { 
            success: false,
            response: [],
            message: error.response.data
        }
    }
})
const activityAction = {
    getActivity, 
    toDo
}

export default activityAction;