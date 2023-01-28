import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import activityAction from './redux/actions/activityAction'
import { useEffect } from 'react'

export default function Card(props) {
    const activity = useSelector(store => store.activityReducer)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activityAction.getActivity())
    }, [])
    
    return (
        <div class="radius">
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            {props.made ? (<button value={props.id}>To Do</button>) : (<button value={props.id} >Achieved</button>)}
        </div>
    )
}
