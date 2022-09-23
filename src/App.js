import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <LoadPosts></LoadPosts>
      <District name="Bhola" special="Doi"></District>
      <District name="B.baria" special="Fighter"></District>
      <District name="Barisal" special="Monu"></District>
    </div>
  );
}

function LoadPosts(){
  const [posts, setPosts] = useState([])
  useEffect( () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
    .then(res => res.json())
    .then(data => setPosts(data))
  }, [])
  return(
    <div>
      <h1>Posts: {posts.length}</h1>
      {
        posts.map(post => <Post title={post.title} body={post.body}></Post>)
      }
    </div>
  )
}

const componentName = {
  backgroundColor : 'lightblue',
  margin: '20px',
  padding: '20px',
  border: '2px solid purple',
  borderRadius: '20px'
}
function Post(props) {
  return(
    <div style={componentName}>
      <h2>Title: {props.title}</h2>
      <p>Body: {props.body}</p>
    </div>
  )
}

function District(props){
  // Declaring State
  const [power, setPower] = useState(1)
  const boostPower = () =>{
    const newPower = power * 2
    setPower(newPower);
  }
  return(
    <div className='district'>
      <h2>Name: {props.name}</h2>
      <p>Specialty: {props.special}</p>
      <h4>Power: {power}</h4>
      <button onClick={boostPower}>Boost The Power</button>
    </div>
  )
}

export default App;
