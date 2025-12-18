import axios from 'axios';


export async function fetchData() {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  try {
    const response = await axios.get(url);
    const data = response.data;
    for (let i=0; i<data.length; i++) {
      console.log(`${i+1}. ${data[i].title}`);
    }
  } catch (error) {
    console.log(error);
  }
}

fetchData();