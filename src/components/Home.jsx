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

    const creat = (e) => {
        e.preventDefault()
        const obj = {
            name: e.target.form[0].value,
            description: e.target.form[1].value
        }
        dispatch(activityAction.create(obj))
        e.target.form[0].value = ""
        e.target.form[1].value = ""
    }
    const handlePadre = () => { 
        console.log(activity)
    }
    return (
        <div className='body'>
            <h1 className='flex justify-center title'>Juanito To Do</h1>
            <div className='flex row justify-around content1'>
                <div className='espace'>
                    <h3>To Do List</h3>
                    <form className='radius'>

                        <label>Name: <input type="text" name="name" /></label>

                        <label>Description: <input type="text" name="description" /></label>

                        <input className='button' onClick={creat} type="submit" value="Create" />
                    </form>
                    {activity.map(e => e.made ? ("") : (<Card handlePadre={handlePadre} name={e.name} description={e.description} id={e._id} made={e.made} />))}
                </div>
                <div className='espace'>
                    <h3>Achieved</h3>
                    {activity.map(e => e.made ? (<Card handlePadre={handlePadre} name={e.name} description={e.description} id={e._id} made={e.made} />) : (""))}
                </div>
            </div>
        </div>
    )
}
