import DayTimeSelector from "../components/daytimeselector";
import { useState } from "react";
import SettingFeedbackSlider from "../components/settingFeedbackslider";
import SettingSwipeQuestion from "../components/settingSwipeQuestion";
import QRCode from "react-qr-code";

function NewCourse() {
    let [daySelected, setDaySelected] = useState([]);
    let [feedbackslider, setFeedbackslider] = useState([]);
    let [swipequestion, setSwipequestion] = useState([]);
    console.log(feedbackslider);
    let frequence = [
        {
            value: "onetime",
            label: "One Time"
        },
        {
            value: "wkly",
            label: "Weekly"
        },
        {
            value: "bwklyodd",
            label: "Biweekly (ood weeks)"
        },
        {
            value: "bwklyeven",
            label: "Biweekly (even Weeks)"
        },
        {
            value: "monthly",
            label: "Monthly"
        },
    ]

    let weekdays = [
        {
            name: "Monday",
            nameshort: "MON",
            id: "wdmon",
        },
        {
            name: "Tuesday",
            nameshort: "TUE",
            id: "wdtue",
        },
        {
            name: "Wednesday",
            nameshort: "WED",
            id: "wdwed",
        },
        {
            name: "Thirsday",
            nameshort: "THR",
            id: "wdthr",
        },
        {
            name: "Friday",
            nameshort: "FRI",
            id: "wdfri",
        },
        {
            name: "Saturday",
            nameshort: "SAT",
            id: "wdsat",
        },
        {
            name: "Sunday",
            nameshort: "SUN",
            id: "wdsun",
        },
    ]

    let onDaySelected = (evt) => {
        let isInArray = false
        daySelected.forEach(element => {
            if (element.name == evt.target.value) {
                isInArray = true;
            }
        })
        if (isInArray) {
            let valuearray = [];
            daySelected.forEach(element => {
                if (element.name != evt.target.value) {
                    valuearray.push(element);
                }
            });
            setDaySelected(valuearray);
        } else {
            let number = 0;
            let children = evt.target.parentNode.childNodes;
            for (let i = 0; i < children.length; i++) {
                if (children[i].value == evt.target.value) {
                    number = i;
                }
            }

            let array = [
                ...daySelected,
                {
                    name: evt.target.value,
                    id: number,
                },
            ];

            array.sort((a, b) => {
                return a.id - b.id;
            });

            setDaySelected(array)
        }

    }

    let onPlusClickedSlider = () => {
        setFeedbackslider([
            ...feedbackslider,
            feedbackslider.length
        ])
    }

    let onPlusClickedSwipe = () => {
        setSwipequestion([
            ...swipequestion,
            swipequestion.length
        ])
    }

    let onMinusclickedSlider = () => {
        let array = [...feedbackslider];
        array.pop();
        setFeedbackslider(array)
    }
    let onMinusclickedSwipe = () => {
        let array = [...swipequestion];
        array.pop();
        setSwipequestion(array)
    }

    let onSubmitNewCours = (evt) => {
        evt.preventDefault();
        // hier muss definiert werrden wie die daten ans backend gegeben werden sollen (maybe weiterleitung zu der dazugehörenden edit page)
    }

    return (
        <>

            <div class="modal fade" id="qrmodal" tabindex="-1" aria-labelledby="qrmodalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="qrmodalLabel">QR Code</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <QRCode value="hier könnte ihre link stehen" />
                            <p>hier könnte ihre link stehen</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="linkmodal" tabindex="-1" aria-labelledby="linkmodalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="linkmodalLabel">Link</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>hier könnte ihre link stehen</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">

                <div className="card-body">

                    <form action="/hiermus die anfrageseite stehen" onSubmit={onSubmitNewCours} method="post">

                        <div className="container">
                            <div className="row">
                                <div className="col-4"><h3>Add New Course</h3></div>
                                <div className="col-2">
                                    <button className="btn btn-secondary" type="submit">Save</button>
                                </div>
                                <div className="col-2">
                                    <button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#qrmodal">
                                        Generate QR-code
                                    </button>

                                </div>
                                <div className="col-2"><button type="button" class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#linkmodal">
                                        Generate link
                                    </button>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h4 >Course name</h4>
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
                                                        {weekdays.map(day => {
                                                            return (<><input type="checkbox" className="btn-check" id={day.id} name={day.id} value={day.name} onChange={onDaySelected} />
                                                                <label htmlFor={day.id} className="btn btn-outline-primary border-radius-right">{day.nameshort}</label></>)
                                                        }
                                                        )}

                                                    </div>
                                                </div>
                                                {daySelected.map(dayname =>
                                                    <DayTimeSelector dayname={dayname.name}></DayTimeSelector>
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
                                                {
                                                    frequence.map(freq => {
                                                        return (<>
                                                            <input type="radio" className="btn-check" id={freq.value} name="freq" value={freq.value} />
                                                            <label htmlFor={freq.value} className="btn btn-outline-primary">{freq.label}</label>
                                                        </>);
                                                    }

                                                    )
                                                }

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-3"><h4>Feedback slider</h4></div>
                                <div className="col-9">
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="container">
                                                {feedbackslider.map(i => {
                                                    return <SettingFeedbackSlider id={i} onclick={onMinusclickedSlider}></SettingFeedbackSlider>
                                                })}

                                                <div className="row">
                                                    <div className="col-12 p-4 justify-content-cneter">
                                                        <div>
                                                            <button type="button" class="btn btn-outline-secondary rounded-circle fs-2" onClick={onPlusClickedSlider}>+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>


                            </div>
                            <div className="row">
                                <div className="col-3"><h4>After lecutre swipe questions</h4></div>
                                <div className="col-9">
                                    <div className="card p-0">
                                        <div className="card-body">
                                            <div className="container">
                                                {swipequestion.map(i => {
                                                    return <SettingSwipeQuestion id={i} onclick={onMinusclickedSwipe}></SettingSwipeQuestion>
                                                }
                                                )}
                                                <div className="row">
                                                    <div className="col-12 p-4 justify-content-cneter">
                                                        <div>
                                                            <button type="button" class="btn btn-outline-secondary rounded-circle fs-2" onClick={onPlusClickedSwipe} >+</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </form >
                </div >
            </div >
        </>

    );

}

export default NewCourse