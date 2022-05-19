import React, {useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function List () {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/title')
            .then(res => {
                console.log(res.data)
               setProduct(res.data)
            })
            .catch(err => console.log(err))
    }, [])

    const deleteTitle = (deleteId) => {
        console.log(deleteId);
        axios.delete("http://localhost:8000/api/title/" + deleteId)
            .then(res => {
                console.log(res.data);
                console.log("SUCCESS");

                setProduct(product.filter((movie) => movie._id !== deleteId))
            })
            .catch(err => console.log(err))
    }
    return(
        <div>
            <h1>List of all Pokemon Movies</h1>
            <hr/>
            {/* {JSON.stringify(product)} */}
            {
                product.map((title) => {
                    return (
                        <div key={title._id}>
                            <h3>
                                <Link to={"/title/" + title._id}>{title.title}</Link>
                            </h3>
                            <button><Link to={`/title/${title._id}/edit`}>Edit</Link></button>
                            <button onClick={() => deleteTitle(title._id)}>Delete</button>
                        </div>
                    )
                })
            }
        </div>
    )
}