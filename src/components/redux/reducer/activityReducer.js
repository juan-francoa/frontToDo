import { createReducer } from "@reduxjs/toolkit";
import activityAction from "../actions/activityAction";

let initialState = {
    response: []
}

const activityReducer = createReducer(initialState, (builder) => {

    builder.addCase(activityAction.getActivity.fulfilled, (state, action) => {
        return { ...state, response: action.payload.response }
    })
    builder.addCase(activityAction.made.fulfilled, (state, action) => {
        return { ...state,response: state.response.map(e => {
            if (e._id === action.payload.response._id) {
              return action.payload.response
            }
            else{
              return e
            }
          }), }
    })
    builder.addCase(activityAction.toDo.fulfilled, (state, action) => {
        return { ...state,response: state.response.map(e => {
            if (e._id === action.payload.response._id) {
              return action.payload.response
            }
            else{
              return e
            }
          }), }
    })
    builder.addCase(activityAction.delet.fulfilled, (state, action) => {
        return { ...state,response: state.response.filter(e =>
            e._id != action.payload.response._id) }
    })
    builder.addCase(activityAction.create.fulfilled, (state, action) => {
        return { ...state,response: [action.payload.response].concat(...state.response) }
    })
})

export default activityReducer
