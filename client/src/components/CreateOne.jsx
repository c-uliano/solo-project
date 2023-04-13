import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const CreateOne = () => {
    // * states
    const [post, setPost] = useState({
        title: "",
        date: "",
        content: ""
    });

    const [errors, setErrors] = useState({
        title: "",
        date: "",
        content: "",
    });

    // * navigate
    const navigate = useNavigate();

    // * form event handlers & functions
    const onChangeHandler = (e) => {
        setPost({
            ...post,
            [e.target.name]: e.target.value
        });
    }

    return (
        <div>CreateOne</div>
    )
}

export default CreateOne