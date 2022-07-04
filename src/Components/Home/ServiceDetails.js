import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services,setServices] = useState([]);

    useEffect(()=>{
        fetch('services.json')
        .then(result=>result.json())
        .then(data=>{
            setServices(data);
        })
    },[services])
    
    return (
        <div>
           {
            services?.filter(item=>item.id==serviceId)?.map((service)=>(
                <div key={service.id}>
                    <h1>{service.price}</h1>
                </div>
            ))
           }
        </div>
    );
};

export default ServiceDetails;