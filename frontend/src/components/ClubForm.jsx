import { useState } from "react"
import { useDispatch } from "react-redux"
import {createClub} from '../features/clubs/clubSlice'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



function ClubForm() {
    const [name, setText] = useState('')
    const [description, setDescription] = useState('')

    const dispatch = useDispatch()

    const onSubmit = (e) => {
        e.preventDefault()

        dispatch(createClub({name, description}))
        setText('')
        setDescription('')
        toast.info("Club created")
    }


  return (
  <section className="form"> 
    <form onSubmit={onSubmit} >  
        <div className="form-group">
            <label htmlFor='name'>Club name</label>
            <input 
            type='name'
            name='name'
            id='name'
            value={name}
            onChange = {(e) => setText(e.target.value)}
            />
        </div>
        <div className="form-group">
            <label htmlFor='description'>Club description</label>
            <input 
            type='description'
            name='description'
            id='description'
            value={description}
            onChange = {(e) => setDescription(e.target.value)}
            />
        </div>
        <div className="form-group">    
            <button className="btn btn-block" 
            type="submit" >
                Add Club
            </button>
        </div>
        </form>
  </section>
  )
}

export default ClubForm
