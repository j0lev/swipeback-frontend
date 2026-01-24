import '../../App.css'
//my own imports
import { useNavigate } from "react-router-dom";

function FeedbackCode() {
    const navigate = useNavigate();


    const onClickSubmit = () => {
        navigate("/fb/" + document.getElementById("code").value);
    };

    const onClickBack = () =>{
        navigate("/");
    }


    return (
    <div className="container d-flex justify-content-center mt-5">
      <div className='card w-50'>
        <div className='card-body justify-content-start'>
          <div class="mb-3 text-start">
            <label for="code" class="form-label">Course Code</label>
            <input type="text" class="form-control" id="code" placeholder="Enter code" />
          </div>
          <div className='mb-3'>
            <button
              onClick={onClickSubmit}
              className='btn btn-primary'
            >Submit</button>
          </div>

          <div className='mb-3'>
            <button
              onClick={onClickBack}
              className='btn btn-secondary border-dark'
            >Back</button>
          </div>
        </div>
      </div>
    </div>

  );

}

export default FeedbackCode