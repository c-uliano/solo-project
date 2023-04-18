import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Hero from './Hero';

const DisplayAll = () => {
    // * state
    const [list, setList] = useState([]);

    // * get all items from database
    useEffect(() => {
        axios.get('http://localhost:8000/api/post')
            .then(res => {
                setList(res.data)
                console.log(list)
            })
            .catch(err => console.log(err))
    }, []);

    // * delete functionality
    const deleteOneHandler = (id) => {
        axios.delete(`http://localhost:8000/api/post/${id}`)
            .then(res => {
                const filteredList = list.filter(item => item._id !== id)
                setList(filteredList)
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Hero 
                image={"/assets/post-hero.png"}
                h1Header={"The Latest News"}
                content={"Keep up-to-date on what I'm up to these days"}
                link={"/post/create"}
                btnName={"Create New Post"}
                bgPosition={"center 44%"}
            />
            <div className='container mt-4 mb-4'>
                <div className="w-50 mx-auto">
                    {list.map((post) => {
                        let formattedDate = new Date(post.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", timeZone: "UTC"});
                        return (
                            <div className="row align-items-center border-bottom mb-4" key={post._id}>
                                <div className="col-md">
                                    <h3><Link className="hover_underline" to={`/post/${post._id}`}>{post.title}</Link></h3>
                                    <p><i>{formattedDate}</i></p>
                                </div>
                                <div className="col-md-auto">
                                    <p><Link to={`/post/edit/${post._id}`} className='btn btn-primary me-3'>Edit</Link><button className="btn btn-danger" onClick={(e) => deleteOneHandler(post._id)}>Delete</button></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DisplayAll;