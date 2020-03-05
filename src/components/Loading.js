import React from 'react'
import { Spinner } from 'react-bootstrap';

function Loading(props) {
    return <div>
        {/* <h2>{props.message || { */}
<h1 id="spinner">Loading..</h1>
        <Spinner id="spin" animation="border" role="status" size="lg">
  <span id="spin" className="sr-only sr-lg">Loading...</span>
</Spinner>
          
        
    </div>
}

export default Loading