

function Dozentpage() {
    let datazucours= {name: "inalg"}
    let nextdate = new Date();

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 justify-content-center">
                    <h3>Wilkommen Marcel Davice</h3>

                    </div>
                </div>
                <div className="row pb-3" >
                    <div className="col-3">
                        logoplatz
                    </div>
                    <div className="col-9 d-flex justify-content-start">
                    <a className="btn btn-secondary" href="doz/newCourse">add new Course</a>
                </div>

                </div>
                
                <div className="row">
                    <div className="card">
                        <div className="card-header">My Courses </div>
                        <div className="card-body">
                            <div className="card p-3">
                                <div className="card-body">
                                    <div className="row" >
                                        <div className="col-8 d-flex justify-content-start" >
                                            Course: {datazucours.name}
                                        </div>
                                        <div className="col-4 d-flex justify-content-end">
                                            next lecture: {nextdate.toLocaleDateString()} {nextdate.toLocaleTimeString()}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3 d-flex justify-content-start">
                                        <button className="btn btn-secondary">View Dashboard</button>
                                    </div>
                                    <div className="col-3 d-flex justify-content-start">
                                        <button className="btn btn-secondary">edit</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );

}

export default Dozentpage