import React from 'react';
import { Link } from 'react-router-dom';

const DisplayAll = () => {
    return (
        <div className='container mt-4 mb-4'>
            <h1>Latest Posts</h1>
            <Link to="/post/create" className='btn btn-primary'>Create New Post</Link>
        </div>
    )
}

export default DisplayAll;