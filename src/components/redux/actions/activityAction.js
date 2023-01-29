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
    catch (error) {
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
            response: res.data.id,
            message: res.data.message
        }

    }
    catch (error) {
        console.log(error)
        return {
            success: false,
            response: [],
            message: error.response.data
        }
    }
})
const made = createAsyncThunk("mades", async (data) => {
    try {

        const res = await axios.patch(`${url}activity/${data}`)
        return {
            success: true,
            response: res.data.id,
            message: res.data.message
        }

    }
    catch (error) {
        console.log(error)
        return {
            success: false,
            response: [],
            message: error.response.data
        }
    }
})

const create = createAsyncThunk("creates", async (data) => {
    try {
        const res = await axios.post(`${url}activity`, data)
        return {
            success: true,
            response: res.data.id,
            message: res.data.message
        }

    }
    catch (error) {
        console.log(error)
        return {
            success: false,
            response: [],
            message: error.response.data
        }
    }
})

const delet = createAsyncThunk("delets", async (data) => {
    try {

        const res = await axios.delete(`${url}activity/${data}`)
        return {
            success: true,
            response: res.data.activitys,
            message: res.data.message
        }

    }
    catch (error) {
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
    toDo,
    made,
    create,
    delet
}

export default activityAction;