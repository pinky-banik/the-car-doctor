import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useService from './../../Hooks/useService';

const Service = ({service}) => {
    
    const {id,name,price,description,img} = service;
    const navigate = useNavigate();
    const handleServiceDetails =()=>{
        navigate(`/service/${id}`)
    }
    return (
        <div className='p-5 border shadow-xl m-10'>
            <h1>{id}</h1>
            <h1>{name}</h1>
            <h1>{price}</h1>
            <h1>{description}</h1>
            <img src={img} alt="service" />
            <button className='bg-green-500 p-5 rounded-xl' onClick={handleServiceDetails}>go to somewhere</button>
        </div>
    );
};

export default Service;