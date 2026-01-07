

function DayTimeSelector(props) {
    let startid = props.dayname + "sttime";
    let endtime = props.dayname + "endtime";

    return (<>
        <div id={props.dayname+"timeselection"} className="row">
            <div className="col-2">
                <h5>{props.dayname}</h5>
            </div>
            <div className="col-2">
                <label htmlFor={startid} className="col-form-label">Start time</label>
            </div>
            <div className="col-3">
                <input type="time" id={startid} name={startid} className="form-control" />
            </div>

            <div className="col-2">
                <label htmlFor={endtime} className="col-form-label">End time</label>
            </div>
            <div className="col-3">
                <input type="time" id={endtime} name={endtime} className="form-control" />
            </div>

        </div>
    </>);
}

export default DayTimeSelector;