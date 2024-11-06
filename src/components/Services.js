import axios from 'axios';

const fetchServices = async () => {
  try {
    // Use the backend URL deployed on Render
    const response = await axios.get('https://techservicemarket-backend.onrender.com/api/services');
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching services:", error);
  }
};

useEffect(() => {
  fetchServices();
}, []);