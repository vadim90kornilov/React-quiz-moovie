const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const filmDb = await res.json();
  } catch (error) {
    console.error(error.message);
  }
};
const start = () => {
  fetchData();
};
const arr = start();
console.log(arr);
