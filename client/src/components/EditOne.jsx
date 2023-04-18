import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Hero from './Hero';
// import heroImg from '../assets/hero.png';

const EditOne = () => {
    // * states
    const [post, setPost] = useState({});

    const [errors, setErrors] = useState({
        title: "",
        date: "",
        content: "",
    });

    // * navigate
    const navigate = useNavigate();

    // * param for url to single product edit page
    const { id } = useParams();

    // * getting the data for the item
    useEffect(() => {
        axios.get(`http://localhost:8000/api/post/${id}`)
            .then(res => {
                setPost(res.data)
            })
            .catch(err => console.log(err))
    }, []);

    // * format date to YEAR-MONTH-DAY to use as input's value
    const rawDate = post ? post.date : "";
    const formattedDate = rawDate ? rawDate.slice(0, 10) : "";

    // * form event handlers & functions
    const onChangeHandler = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    const formValidator = () => {
        let isValid = true
        const newErrors = {}
        if (post.title.length < 5) {
            isValid = false;
            newErrors.title = "Hey there, title must be at least 5 characters";
        } else {
            newErrors.title = "";
        }
        if (!post.date) {
            isValid = false;
            newErrors.date = "Hey there, date must be entered";
        } else {
            newErrors.date = "";
        }
        if (post.content.length < 5) {
            isValid = false;
            newErrors.content = "Hey there, content must be at least 5 characters";
        } else {
            newErrors.content = "";
        }
        setErrors(newErrors);
        return isValid;
    }

    const onSubmitHandler = (e) => {
        e.preventDefault();
        if (formValidator()) {
            axios.patch(`http://localhost:8000/api/post/${id}`, post)
            .then(res => {
                const id = res.data._id
                navigate(`/post/${id}`);
            })
            .catch(err => console.log(err))
        } 
    }

    const cancelBtn = (e) => {
        navigate(`/post/${post._id}`);
    }

    return (
        <>
            <Hero 
                image={"/assets/general-bg.png"}
                h1Header={"Edit post"}
                height={"30vh"}
            />
            <div className='container mt-4 mb-4'>
                <div className='card w-50 mx-auto m-4 p-4 rounded'>
                    <form action="" onSubmit={onSubmitHandler}>
                        <div className="mb-3">
                            {errors.title ? <p className='text-danger'>{errors.title}</p> : ""}
                            <label htmlFor="title" className="form-label">Title</label>
                            <input value={post.title} type="text" className="form-control" id="title" name="title" onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            {errors.date ? <p className='text-danger'>{errors.date}</p> : ""}
                            <label htmlFor="date" className="form-label">Date</label>
                            <input type="date" value={formattedDate} className="form-control" id="date" name="date" onChange={onChangeHandler} />
                        </div>
                        <div className="mb-3">
                            {errors.content ? <p className='text-danger'>{errors.content}</p> : ""}
                            <label htmlFor="content">Content</label>
                            <textarea className="form-control" rows="10" name='content' id="content" value={post.content} onChange={onChangeHandler}></textarea>
                        </div>
                        <button type="cancel" onClick={cancelBtn} className="btn btn-secondary me-2">Cancel</button>
                        <button type="submit" className="btn btn-primary">Edit Post</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default EditOne;