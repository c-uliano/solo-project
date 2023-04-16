import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import Hero from './Hero';
import heroImg from '../assets/hero.png';

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
                image={heroImg}
                h1Header={"Latest Posts"}
                content={"Keep up-to-date on what I'm up to these days."}
                link={"/post/create"}
                btnName={"Create New Post"}
            />
            <div className='container mt-4 mb-4'>
                <div>
                    {list.map((post) => {
                        let formattedDate = new Date(post.date).toLocaleDateString('en-us', { weekday:"long", year:"numeric", month:"long", day:"numeric", timeZone: "UTC"});
                        return (
                            <div key={post._id}>
                                <h3><Link to={`/post/${post._id}`}>{post.title}</Link></h3>
                                <p><i>{formattedDate}</i></p>
                                <p><button className="btn btn-danger" onClick={(e) => deleteOneHandler(post._id)}>Delete</button><Link to={`/post/edit/${post._id}`} className='btn btn-primary'>Edit</Link></p>
                                {/* <p>{post.content}</p> */}
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}

export default DisplayAll;