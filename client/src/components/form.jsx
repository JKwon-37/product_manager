import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Forms = (props) => {
    const navigate = useNavigate();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');
    
    function submitHandler (e) {
        console.log('clicked');
        e.preventDefault();
        axios.post('http://localhost:8000/api/title', {
            title, 
            price,
            description
        })
            .then(res => console.log(res))
            .catch(err => console.log(err))
            navigate('/title');
    }

    

    return (

        <div>
            <h1>Enter a Pokemon Movie into the database!</h1>
            <div>
                <form onSubmit={submitHandler}>
                    <div>
                        <label > Title: </label>
                        <input value={title} onChange={e => setTitle(e.target.value)}/>
                    </div>
                    <div>
                        <label > Price: </label>
                        <input value={price} onChange={e => setPrice(e.target.value)}/>
                    </div>
                    <div>
                        <label > Description: </label>
                        <textarea value={description} onChange={e => setDescription(e.target.value)}/>
                    </div>
                    <button>Create</button>
                </form>
            </div>
        </div>
    )
}

export default Forms;