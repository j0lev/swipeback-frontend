import { useState } from 'react'
import reactLogo from '../assets/react.svg'
import viteLogo from '../../public/vite.svg'
import '../App.css'
//my own imports
import {useNavigate} from "react-router-dom";

function Landingpage() {
    const navigate = useNavigate();

    const goToFeedback = () => {
      navigate("/fb/123"); 
    };
    const goProfPage = () => {
    navigate("/prof"); 
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={goToFeedback}>Go to Feedback</button>
      <button onClick={goProfPage}>Go to Prof view</button>
    </div>
  );
}



export default Landingpage
