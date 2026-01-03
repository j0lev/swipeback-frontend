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
    /* as im incredibly smart, ive decided to split centering and containers, so that both are reusable */
    /* +: both are reusable, but -: i need to wrap everything in both */
    /* follow for more questionable design choices */
    <div className="page-center-container">
      <div className="container-box" style={{ display: 'flex', gap: '10px',}}>
        <h1>Landing Page</h1>
        <button 
          onClick={goToFeedback}
          className='btn-universal'
        >Go to Feedback</button>
        <button 
          onClick={goProfPage}
          className='btn-universal'
          >Go to Prof view</button>
      </div>
    </div>
  );
}

export default Landingpage
