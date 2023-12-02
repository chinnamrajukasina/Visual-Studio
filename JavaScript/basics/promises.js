// Function that returns a promise
function fetchData() {
    return new Promise((resolve, reject) => {
      // Simulate an asynchronous operation (e.g., fetching data from an API)
      setTimeout(() => {
        const data = { message: 'Data fetched successfully!' };
        // Simulate success
        resolve(data);
        // Simulate an error
        // reject(new Error('Failed to fetch data!'));
      }, 2000); // Simulating a 2-second delay
    });
  }
  
  // Using the promise
  fetchData()
    .then((result) => {
      console.log(result.message);
    })
    .catch((error) => {
      console.error(error.message);
    })
    .finally(() => {
      console.log('Promise settled');
    });

    console.log("data fetch")
  