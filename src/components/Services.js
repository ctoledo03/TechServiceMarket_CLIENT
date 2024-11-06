import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Services = () => {
  // State to hold the fetched data
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  const fetchServices = async () => {
    try {
      // Use the backend URL deployed on Render
      const response = await axios.get('https://techservicemarket-backend.onrender.com/api/services');
      setServices(response.data);  // Save the data to state
    } catch (error) {
      setError("Error fetching services: " + error.message);  // Set error message if there's an error
    }
  };

  useEffect(() => {
    fetchServices(); // Call the fetch function on component mount
  }, []);  // Empty dependency array means this runs once after the initial render

  return (
    <div>
      <h1>Services</h1>
      {error && <p>{error}</p>}  {/* Display error message if there's an error */}
      <ul>
        {services.length === 0 ? (
          <li>No services available</li>
        ) : (
          services.map(service => (
            <li key={service.id}>{service.name}</li>  // Replace with appropriate fields
          ))
        )}
      </ul>
    </div>
  );
};

export default Services;
