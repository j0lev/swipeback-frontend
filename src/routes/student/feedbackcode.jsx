import '../../App.css'
//my own imports
import { useNavigate } from "react-router-dom";

function FeedbackCode() {
    const navigate = useNavigate();


    const onClickSubmit = () => {
        navigate("/fb/" + document.getElementById("code").value);
    };

    return (



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
                    type="number"
                    id="code"
                    placeholder="Enter Code"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
                <button
                    onClick={onClickSubmit}
                    className='btn-universal'
                    style={{ width: '100%' }}
                >
                    submit
                </button>
            </div>
        </div>
    );
}

export default FeedbackCode