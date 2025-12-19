import axios from "axios";

export async function fetchPosts() {
  const url = "https://jsonplaceholder.typicode.com/posts";
  try {
    const resolveData = await axios.get(url);
    return resolveData.data;
  } catch (error) {
    console.log(error);
  }
}