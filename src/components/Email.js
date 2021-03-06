import React from "react";
import { Link } from "react-router-dom";
import '../App.css';

const ButtonMailto = ({ mailto, label }) => {
    return (
        <Link  
            className='contact-us-email'
            to='#'
            onClick={(e) => {
                window.location = mailto;
                e.preventDefault();
            }}
        >
            {label}
        </Link>
    );
};

export default ButtonMailto;