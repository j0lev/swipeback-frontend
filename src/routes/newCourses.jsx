import DayTimeSelector from "../components/daytimeselector";
import { useState } from "react"; 

function NewCourse() {
    let [daySelected, setDaySelected ] = useState([]);

    let onDaySelected = (evt)=>{
        if(daySelected.includes(evt.target.value)){
            let valuearray=[];
            daySelected.forEach(element => {
                if(element!=evt.target.value){
                    valuearray.push(element);
                }
            });
            setDaySelected(valuearray);
        }else{
            setDaySelected([
                ...daySelected,
                evt.target.value,
            ])
        }
        
    }


    return (
        <>
            <h3>Add New Course</h3>
            <div className="card">

                <div className="card-body">

                    <form action="/hiermus die anfrageseite stehen" method="post">

                        <div className="container">
                            <div className="row">
                                <div className="col-3">
                                    <h4 >Cours Name</h4>
                                </div>
                                <div className="col-9">
                                    <input type="text" id="cname" name="cname" className="form-control" placeholder="Enter Cours Name" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h4>Term</h4>
                                </div>
                                <div className="col-9">
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="row">
                                                <div className="col-2">
                                                    <label htmlFor="stdate" className="col-form-label">Start Date</label>
                                                </div>
                                                <div className="col-3">
                                                    <input type="date" id="stdate" name="stdate" className="form-control" />
                                                </div>
                                                <div className="col-2">

                                                </div>
                                                <div className="col-2">
                                                    <label htmlFor="enddate" className="col-form-label">End Date</label>
                                                </div>
                                                <div className="col-3">
                                                    <input type="date" id="enddate" name="enddate" className="form-control" />
                                                </div>
                                            </div>





                                        </div>

                                    </div>
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="container" id="day-select">
                                                <div className="row">
                                                    <div className="input-group d-flex w-100 justify-content-center">
                                                        <input type="checkbox" className="btn-check" id="wdmon" name="wdmon" value={"monday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdmon" className="btn btn-outline-primary border-radius-right">MON</label>
                                                        
                                                        <input type="checkbox" className="btn-check" id="wdtue" name="wdtue" value={"tuesday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdtue" className="btn btn-outline-primary">TUE</label>
                                                        <input type="checkbox" className="btn-check" id="wdwnd" name="wdwnd" value={"wendsday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdwnd" className="btn btn-outline-primary">WEN</label>
                                                        <input type="checkbox" className="btn-check" id="wdthr" name="wdthr" value={"thirsday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdthr" className="btn btn-outline-primary">THI</label>
                                                        <input type="checkbox" className="btn-check" id="wdfri" name="wdfri" value={"friday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdfri" className="btn btn-outline-primary">FRI</label>
                                                        <input type="checkbox" className="btn-check" id="wdsat" name="wdsat" value={"saturday"} onChange={onDaySelected} />
                                                        <label htmlFor="wdsat" className="btn btn-outline-primary">SAT</label>
                                                        <input type="checkbox" className="btn-check" id="wdsun" name="wdsun" value={"sunday"}  onChange={onDaySelected}/>
                                                        <label htmlFor="wdsun" className="btn btn-outline-primary">SUN</label>
                                                    </div>
                                                </div>
                                                {daySelected.map(dayname =>
                                                    <DayTimeSelector dayname={dayname}></DayTimeSelector>
                                                )}
                                                
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3"><h4>Frequence</h4></div>
                                <div className="col-9">
                                    <div className="card p-1">
                                        <div className="card-body">
                                            <div className="input-group d-flex w-100 justify-content-center">
                                                <input type="radio" className="btn-check" id="Onetime" name="Onetime" value={"Onetime"} />
                                                
                                                <label htmlFor="Onetime" className="btn btn-outline-primary">One Time</label>

                                                <input type="radio" className="btn-check" id="wkly" name="wkly" value={"wkly"} selected />
                                                <label htmlFor="wkly" className="btn btn-outline-primary">Weekly</label>

                                                <input type="radio" className="btn-check" id="bwklyodd" name="bwklyodd" value={"bwklyodd"} />
                                                <label htmlFor="bwklyodd" className="btn btn-outline-primary">biweekly (ood weeks)</label>
                                                <input type="radio" className="btn-check" id="bwklyeven" name="bwklyeven" value={"bwklyeven"} />
                                                <label htmlFor="bwklyeven" className="btn btn-outline-primary">biweekly (even Weeks)</label>
                                                <input type="radio" className="btn-check" id="mnthly" name="mnthly" value={"mnthly"} />
                                                <label htmlFor="mnthly" className="btn btn-outline-primary">monthly</label>
                                            </div></div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3"><h4>Feedback slider</h4></div>
                                <div className="col-9">
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <div className="row">
                                                            <div className="col-2">
                                                                <label htmlFor="slidername" className="col-form-label">Slidername</label>
                                                            </div>
                                                            <div className="col-5">
                                                                <input type="text" className="form-control" id="slidername" name="slidername" value={"slidername"} />
                                                            </div>
                                                            <div className="col-1">
                                                                <label htmlFor="symbol" className="col-form-label">Logo</label>
                                                            </div>
                                                            <div className="col-2" >
                                                                <select name="symbol" className="form-control" id="symbol">
                                                                    <option value={""}>Symbol</option>
                                                                    <option value={"bulb"}>bulb</option>
                                                                    <option value={"book"}>book</option>
                                                                    <option value={"lins"}>linse</option>
                                                                </select>
                                                            </div>
                                                            <div className="col-1">
                                                                <label htmlFor="color" className="col-form-label">Color</label>
                                                            </div>
                                                            <div className="col-1">
                                                                <input type="color" className="form-control form-control-color" id="color" name="color" value={"color"} />
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-3">

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                            <div className="row">
                                <div className="col-3"><h4>after lecutre swipe questions</h4></div>
                                <div className="col-9">
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-9">
                                                        <div className="row">
                                                            <div className="col-3">
                                                                <label htmlFor="slidername" className="col-form-label">Question Title</label>
                                                            </div>
                                                            <div className="col-6">
                                                                <input type="text" className="form-control" id="slidername" name="slidername" value={"slidername"} />
                                                            </div>
                                                            <div className="col-1">
                                                                <label htmlFor="symbol" className="col-form-label">Logo</label>
                                                            </div>
                                                            <div className="col-2" >
                                                                <select name="symbol" className="form-control" id="symbol">
                                                                    <option value={""}>Symbol</option>
                                                                    <option value={"bulb"}>bulb</option>
                                                                    <option value={"book"}>book</option>
                                                                    <option value={"lins"}>linse</option>
                                                                </select>
                                                            </div>
                                                        </div>

                                                    </div>
                                                    <div className="col-3">

                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>

    );

}

export default NewCourse