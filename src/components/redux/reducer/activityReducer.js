import { createReducer } from "@reduxjs/toolkit";
import activityAction from "../actions/activityAction";

let initialState = {
    response: []
}

const activityReducer = createReducer(initialState, (builder) => {

    builder.addCase(activityAction.getActivity.fulfilled, (state, action) => {
        return { ...state, response: action.payload.response }
    })
})

export default activityReducer
