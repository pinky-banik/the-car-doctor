import React, { useEffect, useState } from 'react';
import Service from './Service';
import useService from './../../Hooks/useService';

const Services = () => {
    const {services,setServices} = useService();
    return (
        
        <div>
            {
                services.map((service)=><Service
                key={service.id}
                service={service}
                >
                </Service>)
            }
        </div>
    );
};

export default Services;