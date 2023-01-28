import React from 'react'
import { useEffect, useState } from 'react'
import Card from './Card'
import { useSelector, useDispatch } from 'react-redux'
import activityAction from './redux/actions/activityAction'

export default function Home() {
    const activity = useSelector(store => store.activityReducer.response)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(activityAction.getActivity())
    }, [])
    return (
        <div>
            <h1 className='flex justify-center'>Juanito To Do</h1>
            <div className='flex row justify-around'>
                <div>
                    <h3>To Do List</h3>
                    <form className='radius'>

                        <p>Name: <input type="text" name="usuario" /></p>

                        <p>Description: <input type="password" name="pass"/></p>

                        <p><input type="submit" value="Create" /></p>
                    </form>
                    {activity.map(e => e.made ? ("") : (<Card name={e.name} description={e.description} id={e._id} made={e.made} />))}
                </div>
                <div>
                    <h3>Achieved</h3>
                    {activity.map(e => e.made ? (<Card name={e.name} description={e.description} id={e._id} made={e.made} />) : (""))}
                </div>
            </div>
        </div>
    )
}
