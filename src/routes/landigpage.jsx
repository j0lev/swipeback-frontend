import '../App.css'
//my own imports
import {useNavigate} from "react-router-dom";

function Landingpage() {
  const navigate = useNavigate();

  const goToFeedback = () => {
    navigate("/fb/123"); // replace 123 with a test feedback number
  };

  return (
    <div>
      <h1>Landing Page</h1>
      <button onClick={goToFeedback}>Go to Feedback</button>
    </div>
  );
}

export default Landingpage;
