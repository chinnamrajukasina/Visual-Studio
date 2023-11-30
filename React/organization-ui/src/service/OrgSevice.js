import axios from 'axios';

const apiUrl = 'http://localhost:8080/api/organisations'; // Replace with your Spring Boot backend URL

export const fetchData = async () => {
  try {
    const response = await axios.get(`${apiUrl}`);
    console.log(response.data)
    return response.data;
  } catch (error) {
    throw error;
  }
};
