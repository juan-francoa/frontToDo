import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import activityAction from './redux/actions/activityAction'
import { useEffect } from 'react'

export default function Card({id,name, description, made}) {
    const activity = useSelector(store => store.activityReducer.response)
    const dispatch = useDispatch() 
    let archi = (e)=>{
        dispatch(activityAction.made(e.target.value))
    }
    let toDo = (e)=>{
        dispatch(activityAction.toDo(e.target.value))
    }
    let dele = (e)=>{
        dispatch(activityAction.delet(e.target.value))
    }
    return (
        <div class="radius">
            <button onClick={dele} value={id}>X</button>
            <h3>{name}</h3>
            <p>{description}</p>
            {made ? (<button value={id} onClick={toDo} >To Do</button>) : (<button value={id} onClick={archi} >Achieved</button>)}
        </div>
    )
}
