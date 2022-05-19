import React, {useState, useEffect}from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ViewOne = (props) => {
    const {id} = useParams();
    console.log(id);

    const[oneTitle, setOneTitle] = useState('');

    useEffect( () => {
        axios.get("http://localhost:8000/api/title/" + id)
            .then(res => {
                console.log(res.data);
                setOneTitle(res.data);
            })
            .catch(err => console.log(err))
    }, [id])

    return(
        <div>
            <h1>{oneTitle.title}</h1>
            <p>${oneTitle.price}</p>
            <p>{oneTitle.description}</p>
        </div>
    )
}

export default ViewOne;