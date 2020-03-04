import React, {useState} from 'react'


function EditAddress(props) {

          const [editToggleState, setEditToggleState] = useState(false)
          const [addressInputState, setAddressInputState] = useState("")
          
          const createEditJSX = <div>
                <input value={addressInputState} name={addressInputState} onChange={(e) => setAddressInputState(e.target.value) } />
                <button onClick={() => props.updateAddress(addressInputState)}>Save Changes</button>
          </div>

     return <div>
         <button onClick={() => setEditToggleState(!editToggleState) }>Edit Address</button>
         <h5>Address: {props.address} </h5>                 
         {editToggleState && createEditJSX}

     </div>

}

export default EditAddress