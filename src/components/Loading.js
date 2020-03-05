import React from 'react'


function Loading(props) {
    return <div>
        <h2>{props.message || "Loading Data..."}</h2>
    </div>
}

export default Loading