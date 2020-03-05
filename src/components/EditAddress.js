import React, {useState} from 'react'


function EditAddress(props) {

          const [editToggleState, setEditToggleState] = useState(false)
          const [addressInputState, setAddressInputState] = useState("")
          
          const createEditJSX = <div>
                <input id="edit-address-input" value={addressInputState} name={addressInputState} onChange={(e) => setAddressInputState(e.target.value) } />
                <button id="edit-address-save" onClick={() => props.updateAddress(addressInputState)} class="btn btn-primary">Save Changes</button>
          </div>

     return <div>
         <button id="edit-address-edit" class="btn btn-outline-primary" onClick={() => setEditToggleState(!editToggleState) }>Edit Address</button>
         <h5 className="edit-address"><strong>Address:</strong> {props.address} </h5>                 
         {editToggleState && createEditJSX}

     </div>

}

export default EditAddress