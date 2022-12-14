import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useNavigate} from 'react-router-dom'
import TextareaAutosize from 'react-textarea-autosize';

const NoteForm = () => {

    const [text,setText] = useState('')
    const [errors,setErrors] = useState({})
    const navigate = useNavigate()

    const submitHandler = (e) => {
        axios.post('http://localhost:8000/api/addNote',{ text: text }, {withCredentials: true, credentials: 'include'})
        .then((res) => {
            console.log("The following has been imported to the DB", res)
            console.log("This is a test"
            )
        }).catch((err) => {
            console.log(err)
            setErrors(err.response.data.errors)
        })
    }

    //Previous issue summary: The data being entered in the axios post request needs to immediately follow the address. (Address, request body, credentials)

    return (
        <form className='container mt-3' onSubmit={submitHandler}>
            <input id="trix" type="hidden" name="content"></input>
            <div className="form-floating">
                <TextareaAutosize className="form-control" id="note-text" style={{'min-height': "400px"}} onChange={(e) => setText(e.target.value)} value={text}/>
            </div>
            <button type='submit' className='btn btn-success mt-2 py-1'>Save Note</button>
        </form>
    )
}

export default NoteForm

