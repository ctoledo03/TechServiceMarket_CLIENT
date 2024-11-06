// client/src/components/Services.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/api/services')
            .then((response) => {
                setServices(response.data);
            })
            .catch((error) => {
                console.error('There was an error fetching the services!', error);
            });
    }, []);

    return (
        <div>
            <h1>Tech Services</h1>
            <ul>
                {services.map(service => (
                    <li key={service.id}>
                        <h3>{service.name}</h3>
                        <p>{service.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Services;
