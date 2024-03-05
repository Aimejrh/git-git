const URL = 'http://localhost:3000/tasks';

const getAsyncData = async () => {
  try {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log("Error:", error);
  } finally {
    console.log("Request sent");
  }
}

getAsyncData();
