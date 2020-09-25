import { TextField } from '@material-ui/core'
import React, { useEffect, useState } from 'react'


const ProfileStatusHook = (props) => {
  const [status, setStatus] = useState(props.status);
  const [editMode, setEditMode] = useState(false);

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }
   
  useEffect( () => {
    setStatus(props.status)
  } , [props.status])

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status)
  }

    return (
      <div>
        { editMode ?  <TextField onChange={onStatusChange} 
                                 label='Status' autoFocus value={status} onBlur={deactivateEditMode} /> : null}
        { !editMode ?  
        <div>
          <span onDoubleClick={() => setEditMode(true)}>{props.status || '------'}</span>
        </div> 
        : null}
      </div>
    )
}
export default ProfileStatusHook;