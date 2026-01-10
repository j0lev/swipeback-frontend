import { useNavigate } from "react-router-dom";


function Dozentpage() {
    let datatocourses = [{
        name: "Linalg",
        nextdate: new Date(),
        id:124243
    }]

    let navigate = useNavigate();

    let onClickLogout =()=>{
        //hier muss die session beendet werden
        navigate("/");
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center">
                        <h3>Welcome Marcel D'Avis</h3>

                    </div>
                </div>
                <div className="row pb-3" >
                    <div className="col-3">
                        logoplatz
                    </div>
                    <div className="col-9 d-flex justify-content-start">
                        <a className="btn btn-secondary" href="doz/newCourse">add new Course</a>
                    </div>
                    <div className="col-2">
                        <a className="btn btn-secondary" onClick={onClickLogout}>Logout</a>
                    </div>

                </div>

                <div className="row">
                    <div className="card">
                        <div className="card-header">My Courses </div>
                        <div className="card-body">
                            {datatocourses.map(data => {
                                return (
                                    <>
                                        <div className="row">
                                            <div className="card p-3">
                                                <div className="card-body">
                                                    <div className="row" >
                                                        <div className="col-8 d-flex justify-content-start" >
                                                            Course: {data.name}
                                                        </div>
                                                        <div className="col-4 d-flex justify-content-end">
                                                            next lecture: {data.nextdate.toLocaleDateString()} {data.nextdate.toLocaleTimeString()}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="row">
                                                    <div className="col-3 d-flex justify-content-start">
                                                        <button className="btn btn-secondary">View Dashboard</button>
                                                    </div>
                                                    <div className="col-3 d-flex justify-content-start">
                                                        <a className="btn btn-secondary" href={"doz/editCourse/"+data.id}>edit</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Dozentpage