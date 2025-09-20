
import { useState } from 'react';
import './App.css';

function App() {
  
  let [posts, setPosts] = useState([
    {
      id: 1,
      title: 'First Post',
    },
    {
      id: 2,
      title: 'Second Post',
    },
    {
      id: 3,
      title: 'Third Post',
    },
  ]);

  let deletePost = (id) => {
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  }
  return (
    <div className="App">
      <h1>Posts</h1>
      <ul>
        {!!posts.length && posts.map((post)=>(
          <li key={post.id}>{post.title} <button onClick={()=>deletePost(post.id)}>delete</button></li>
        ))}
        {!posts.length && <p>No posts available</p>}
      </ul>
    </div>
  );
}

export default App;
