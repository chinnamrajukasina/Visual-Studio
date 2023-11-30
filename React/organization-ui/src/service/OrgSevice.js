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

export const updateOrg = async (updatedOrg)=>{
  try {
    // Make a REST call to update the organization on the backend
    const response = await fetch(`http://localhost:8080/api/organisations/${updatedOrg.id}`, {
      method: 'PUT', // or 'PATCH' depending on your API design
      headers: {
        'Content-Type': 'application/json',
        // Include any additional headers required by your API
      },
      body: JSON.stringify(updatedOrg),
    });

    if (!response.ok) {
      throw new Error(`Failed to update organization. Status: ${response.status}`);
    }

    console.log('Organization updated on the backend successfully');
    return response.data;
  } catch (error) {
    console.error('Error updating organization on the backend:', error.message);
    // Optionally handle errors, e.g., show a notification to the user
  }
}
