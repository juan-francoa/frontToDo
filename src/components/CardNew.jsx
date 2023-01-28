import React from 'react'

export default function CardNew(props) {
  return (
    <div>
        <h2>name:</h2>
        <p>{props.name} </p>
        <h2>description</h2>
        <p>{props.description} </p>
    </div>
  )
}
