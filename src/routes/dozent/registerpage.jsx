
//my own imports
import { useNavigate } from "react-router-dom";
import RequestRegister from "../../requests/requestRegister";
import RequestLogin from "../../requests/requestLogin";


function RegisterPage() {
    const navigate = useNavigate();

    const goToLandingPage = () => {
        navigate("/");
    }

    const goProfPage = () => {


        navigate("/doz");
    };
    let onComputeResluts = (result) => {

        if ("access_token" in result) {
            goProfPage();
        } else {
            if ("detail" in result) {
                document.getElementById("errMessage").innerText ="The repeated Password dosn't equal the entered Password";
                document.getElementById("errMessage").style.display = "block";
            }
        }
    }

    let onComputeRegisterResluts = (result) => {

        if ("username" in result) {
            RequestLogin(document.getElementById("username").value,document.getElementById("pwd").value,onComputeResluts);
        } else {
            if ("detail" in result) {
                document.getElementById("errMessage").innerText = result.detail;
                document.getElementById("errMessage").style.display = "block";
            } else {
                document.getElementById("errMessage").innerText = "an unknown error accured";
                document.getElementById("errMessage").style.display = "block";
            }
        }
    }

    let onClickLogin = () => {
        if (document.getElementById("pwd").value == document.getElementById("repeatpwd").value) {
            RequestRegister(
                document.getElementById("username").value,
                document.getElementById("pwd").value,
                document.getElementById("fullname").value,
                document.getElementById("mail").value,
                onComputeRegisterResluts);
        } else {
            document.getElementById("errMessage").innerText = "The repeated Password dosn't equal the entered Password";
            document.getElementById("errMessage").style.display = "block";
        }
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
                    placeholder="Enter username"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
                <input
                    type="text"
                    id='fullname'
                    placeholder="Enter name"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
                <input
                    type="email"
                    id='mail'
                    placeholder="Enter E-mail"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
                {/* Password Input */}
                <input
                    type="password"
                    id='pwd'
                    placeholder="Enter password"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />
                <input
                    type="password"
                    id='repeatpwd'
                    placeholder="Repeat password"
                    className="input-field"
                    style={{ width: '100%', boxSizing: 'border-box' }}
                />

                {/* Login Buttons */}
                <div id='errMessage' class="alert alert-danger" style={{ display: "none" }} role="alert">

                </div>
                <button
                    onClick={onClickLogin}
                    className='btn-universal'
                    style={{ width: '100%' }}
                >
                    Register
                </button>
                <button
                    onClick={goToLandingPage}
                    className='btn-universal'
                    style={{ width: '100%', marginTop: '10px' }}
                >
                    Login instead
                </button>


            </div>
        </div>
    );
}

export default RegisterPage