import React, {useState, useEffect} from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Update = () => {

    const navigate = useNavigate();
    const {id} = useParams();

    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect( () => {
        axios.get("http://localhost:8000/api/title/" + id)
            .then(res => {
                console.log(res.data);
                setTitle(res.data.title);
                setPrice(res.data.price);
                setDescription(res.data.description);
            })
            .catch(err => console.log(err))
    }, [id])

    const editHandler = (e) => {
        console.log('clicked');
        e.preventDefault();
        axios.put('http://localhost:8000/api/title/' + id, {
            title, 
            price,
            description
        })
            .then(res => {
                console.log(res);
                console.log("SUCCESS")
                navigate('/title'); 
            })
            .catch(err => {
                console.log("UH-OH")
                console.log(err);
            })
    }


    return(
        <div>
        <h1>Edit Movie Information</h1>
        <div>
            <form onSubmit={editHandler}>
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
                <button>Update</button>
            </form>
        </div>
    </div>
    )
}

export default Update;