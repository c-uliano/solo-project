import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Hero from './Hero';

const DisplayOne = () => {
    // * state
    const [post, setPost] = useState({});

    // * param for url to single product
    const { id } = useParams();

    // * navigate
    const navigate = useNavigate();

    // * getting the data for the item
    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`)
            .then(res => {
                setPost(res.data)
                console.log(post)
            })
            .catch(err => console.log(err))
    }, []);

    // * delete functionality
    const deleteOneHandler = (id) => {
        axios.delete(`http://localhost:8000/api/post/${id}`)
            .then(res => {
                navigate("/post");
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <Hero 
                image={"/assets/general-bg.png"}
                h1Header={`${post.title}`}
                height={"30vh"}
            />
            <div className='container mt-4 mb-4'>
                <div className="w-50 mx-auto card rounded p-4">
                    <div className='mb-4'>
                        <p><i>{new Date(post.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", timeZone: "UTC"})}</i></p>
                        <p>{post.content}</p>
                    </div>
                    <p>
                        <Link to="/post" className='btn btn-secondary me-3'>View All Posts</Link>
                        <Link to={`/post/edit/${post._id}`} className='btn btn-primary me-3'>Edit</Link>
                        <button className='btn btn-danger' onClick={(e) => deleteOneHandler(post._id)}>Delete</button>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DisplayOne;