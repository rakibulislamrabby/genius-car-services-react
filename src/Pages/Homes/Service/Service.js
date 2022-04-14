import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./Service.css"

const Service = (props) => {
    const { id, name, price, description, img } = props.service;
    const navigate = useNavigate();
    const navigatetoDisplayDetails = id => {
        navigate(`/service/${id}`);
    }
    return (
        <div className='col-lg-4 p-2 g-5'>

            <img className='w-100' src={img} alt="" />
            <h2> {name}</h2>
            <p>{price}</p>
            <p><small>{description}</small></p>
            <button onClick={() => navigatetoDisplayDetails(id)} className='btn btn-primary'>Book:{name}</button>
        </div>



        //using css
        // <div className='service'>

        //     <img src={img} alt="" />
        //     <h2> {name}</h2>
        //     <p>{price}</p>
        //     <p><small>{description}</small></p>
        //     <button>Book:{name}</button>
        // </div>
    );
};

export default Service;