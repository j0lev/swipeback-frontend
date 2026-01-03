import '../App.css'
//my own imports
import {useNavigate} from "react-router-dom";

function Landingpage() {
    const navigate = useNavigate();

    const goToFeedback = () => {
      navigate("/fb/123"); 
    };
    const goProfPage = () => {
    navigate("/doz"); 
  };

  return (
    /* as im incredibly smart, ive decided to split centering and containers, so that both are reusable */
    /* +: both are reusable, but -: i need to wrap everything in both */
    /* follow for more questionable design choices */
    <div className="page-center-container">
      <div className="container-box" style={{ 
          display: 'flex', 
          flexDirection: 'column', // Stacks inputs and buttons vertically
          gap: '15px', 
          width: '320px',          // Fixed width looks better for login cards
          alignItems: 'center'
        }}>
        <h1 style={{ marginBottom: '10px' }}>Login</h1>

        {/* Username Input */}
        <input 
          type="text" 
          placeholder="Username" 
          className="input-field" 
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
        {/* Password Input */}
        <input 
          type="password" 
          placeholder="Password" 
          className="input-field" 
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
        {/* Login Buttons */}
        <button 
          onClick={goToFeedback}
          className='btn-universal'
          style={{ width: '100%', marginTop: '10px' }}
        >
          Log in as user
        </button>
        
        <button 
          onClick={goProfPage}
          className='btn-universal'
          style={{ width: '100%' }}
        >
          Log in as professor
        </button>
      </div>
    </div>
  );
}

export default Landingpage
