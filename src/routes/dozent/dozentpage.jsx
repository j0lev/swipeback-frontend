import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../context/authenticationContext";
import RequestUserInformation from "../../requests/requestUserIformation";
import { RequestModuleList } from "../../requests/requestModules";
import logo from '../../assets/HCILogo.png';


function Dozentpage() {
    let { user, setUser } = useContext(AuthenticationContext);
    let navigate = useNavigate();
    let [modules, setModules] = useState({ notLoaded: true });
    console.log(user)
    useEffect(() => {
        if (user.access_token == null) {
            navigate("/");

        } else {
            if (user.username == null) {
                RequestUserInformation(user, setUser);
            }
            if (modules.notLoaded) {
                RequestModuleList(setModules, user);
            }
        }

    }, [user])



    let onClickCreateNewModule = () => {
        navigate("/doz/newCourse");
    }


    let onClickLogout = () => {
        setUser({ access_token: null });
        //hier muss die session beendet werden
        //navigate("/");
    }
    console.log(modules);
    if (user.full_name != null) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <div className="col-12 justify-content-center">
                            <h3>Welcome {user.full_name}</h3>

                        </div>
                    </div>
                    <div className="row pb-3" >
                        <div className="col-3">
                            <img alt="logo von swipeback" src={logo} style={{
                                position: "absolute",
                                top: "5rem",
                                left: "7%",
                                width: "7rem",
                                height: "auto",
                            }} />
                        </div>
                        <div className="col-9 d-flex justify-content-start">
                            <a className="btn btn-primary" onClick={onClickCreateNewModule}>add new Course</a>
                        </div>
                        <div className="col-2">
                            <a className="btn btn-danger" onClick={onClickLogout}>Logout</a>
                        </div>

                    </div>

                    <div className="row">
                        <div className="card">
                            <div className="card-header">My Courses </div>
                            <div className="card-body">
                                {


                                    (modules.notLoaded ?
                                        <div class="d-flex justify-content-center">
                                            <div class="spinner-border" role="status">
                                                <span class="sr-only"></span>
                                            </div>
                                        </div>
                                        :
                                        modules.moduleList.map(data => {
                                            return (<>
                                                <div className="row">
                                                    <div className="card p-3">
                                                        <div className="card-body">
                                                            <div className="row" >
                                                                <div className="col-8 d-flex justify-content-start" >
                                                                    Course: {data.title}
                                                                </div>
                                                                <div className="col-4 d-flex justify-content-end">
                                                                    Created At: {data.created_at}
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-3 d-flex justify-content-start">
                                                                <button className="btn btn-primary">View Dashboard</button>
                                                            </div>
                                                            <div className="col-3 d-flex justify-content-start">
                                                                <a className="btn btn-primary" onClick={() => { navigate("/doz/edit/" + data.id) }}>edit</a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>)
                                        }))


                                }


                            </div>
                        </div>
                    </div>
                </div>
            </>

        );
    }

}

export default Dozentpage