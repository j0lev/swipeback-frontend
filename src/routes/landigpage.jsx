import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'
//my own imports
import {useNavigate} from "react-router-dom";
/*
function Landingpage() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Das ist swipeback!</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}*/
function Landingpage() {
  const navigate = useNavigate();

  const goToFeedback = () => {
    navigate("/fb/123"); // replace 123 with a test feedback number
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={goToFeedback}>Go to Feedback</button>
      <button onClick={() => {navigate("/doz")}}>Go to Dozentpage</button>
    </div>
  );
}



export default Landingpage
