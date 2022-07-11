import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const useService = () => {
    const [services,setServices] = useState([]);
    useEffect(()=>{
        fetch('services.json')
        .then(result=>result.json())
        .then(data=>{
            setServices(data);
            console.log(data);
        })
    },[])

    return {services,setServices}
};

export default useService;