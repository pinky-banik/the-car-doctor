import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useService from '../../Hooks/useService';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [services,setServices] = useService();
    
    return (
        <div>
           {
            services?.filter(item=>item.id==serviceId)?.map((service)=>(
                <div key={service.id}>
                    <h1>{service.price}</h1>
                </div>
            ))
           }
           //ghurbar gelam
        </div>
    );
};

export default ServiceDetails;