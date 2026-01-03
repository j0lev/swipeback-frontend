import { useState, useEffect } from 'react'
//temporar stuff
import { useNavigate } from 'react-router-dom';

import '../App.css'
import { useLobbyController } from './useLobbyController';
//import { useParams } from 'react-router-dom'

function Feedback() {
    

    const [text, setText] = useState('');
    const navigate = useNavigate();
    const {
      sliderValues,
      setSliderValue,
      sliderEmojis
    } = useLobbyController();

    //shortut to go to swipes //read more about **How** it works in  SwipePage.jsx
    const handleKeyDown = (e) => {
      if (e.key === 'Enter'){
        navigate('/swipe');
      }  
    };
    useEffect(() => {
      window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <div className="page-center-container">
      <h3>Live feedback: v2</h3>
      <h5>press "Enter" to test the swipes</h5>
      {/**container to hold all of our user interactions */}
      <div style={{display: 'flex', gap: '60px', justifyContent:'center', alignItems: 'flex-start', marginTop: '40px'}}>
      {/**container for the text feedback */}
      <div style={{ border: '5px solid #00357b', padding: '20px', borderRadius: '10px', backgroundColor: '#a7a6a6', color: 'white' }}>
        <label>
          <input
            type = "text"
            value = {text}
            onChange={(e) => setText (e.target.value)}
            placeholder='Ask a question'
            style = {{marginLeft: '10px', padding: '5px'}}
          />
        </label>
        <button
            className='btn-universal'
            onClick={() => console.log('Sent:', text)}
        >
        🗨️
        </button>
      </div>
      {/* Sliders */}
        <div style={{ border: '5px solid #00357b', padding: '20px', borderRadius: '10px', backgroundColor: '#a7a6a6', display: 'flex', gap: '40px', color: 'white' }}>
          {sliderValues.map((val, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', height: '300px' }}>
              <p>{sliderEmojis[i]}: {val}</p>
              <input
                type="range"
                min="0"
                max="9"
                value={val}
                onChange={(e) => setSliderValue(i, Number(e.target.value))}
                className="base-Slider"
              />
            </div>
          ))}
        </div>
    </div>
  </div>
  )
}

export default Feedback
