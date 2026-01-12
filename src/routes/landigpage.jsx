import '../App.css'
//my own imports
import { useNavigate } from "react-router-dom";
import RequestLogin from '../requests/requestLogin';
import { useContext } from 'react';
import { AuthenticationContext } from '../context/authenticationContext';

function Landingpage() {
  const navigate = useNavigate();

  let {setUser} = useContext(AuthenticationContext)

  const goToFeedback = () => {
    navigate("/fb");
  };
  const goToRegister = () => {
    navigate("/register");
  };
  const goProfPage = () => {


    navigate("/doz");
  };

  let onComputeResluts = (result) => {

    if ("access_token" in result) {
      setUser({
        access_token: result.access_token,
        token_type: result.token_type
      })
      
      goProfPage();
    } else {
      if("detail" in result){
        document.getElementById("errMessage").innerText=result.detail;
        document.getElementById("errMessage").style.display ="block";
      }
    }
  }

  let onClickLogin = () => {
    RequestLogin(document.getElementById("username").value, document.getElementById("pwd").value,onComputeResluts);
  }




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
          id='username'
          placeholder="Username"
          className="input-field"
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
        {/* Password Input */}
        <input
          type="password"
          id='pwd'
          placeholder="Password"
          className="input-field"
          style={{ width: '100%', boxSizing: 'border-box' }}
        />
        {/* Login Buttons */}
        <div id='errMessage' class="alert alert-danger" style={{display: "none"}} role="alert">
          A simple danger alert—check it out!
        </div>
        <button
          onClick={onClickLogin}
          className='btn-universal'
          style={{ width: '100%' }}
        >
          Log in as professor
        </button>
        <button
          onClick={goToRegister}
          className='btn-universal'
          style={{ width: '100%', marginTop: '10px' }}
        >
          Create account
        </button>
        <button
          onClick={goToFeedback}
          className='btn-universal'
          style={{ width: '100%', marginTop: '10px' }}
        >
          Enter Code
        </button>

        
      </div>
    </div>
  );
}

export default Landingpage
