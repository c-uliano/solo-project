import React from 'react';
import { Link } from 'react-router-dom';

const Hero = (props) => {
    // TODO: a lot of these can be put in a class, only need the props ones to be here
    const bgHero = {
        position: "relative",
        backgroundColor: "#000000",
        mixBlendMode: "multiply",
        // height: "50vh",
        height: `${props.height}`,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    };

    // TODO: a lot of these can be put in a class, only need the props ones to be here
    const bgHeroBefore = {
        content: "",
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: `url(${props.image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: `${props.bgPosition}`,
        opacity: 0.4,
        zIndex: -1
    }

    return (
        <div className="px-4 py-5 text-center" style={bgHero}>
            <div style={bgHeroBefore}></div>
            <div className="py-5 w-100">
                <h1 className="display-5 fw-bold text-white mt-2">{props.h1Header}</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="fs-5 mt- text-white">{props.content}</p>
                    {props.link && (
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <Link to={`${props.link}`} className='btn btn-primary'>{props.btnName}</Link>
                    </div>
                    )}
                </div>
            </div>
        </div>
    )
}

Hero.defaultProps = {
    height: '50vh'
};

export default Hero;