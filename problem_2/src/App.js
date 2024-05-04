import logo from './logo.svg';
import './App.css';
import { useFetch } from './custom hook/hook';
function App() {
  const {data,error}=useFetch("https://jsonplaceholder.typicode.com/posts")
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="App">
       <h1>Posts</h1>
      <ul>
        {data.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
