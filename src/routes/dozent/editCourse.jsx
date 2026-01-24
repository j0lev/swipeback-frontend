import DayTimeSelector from "../../components/dozent/daytimeselector";
import { useContext, useEffect, useState } from "react";
import SettingFeedbackSlider from "../../components/dozent/settingFeedbackslider";
import SettingSwipeQuestion from "../../components/dozent/settingSwipeQuestion";
import QRCode from "react-qr-code";
import { useNavigate, useParams } from "react-router-dom";
import { AuthenticationContext } from "../../context/authenticationContext";
import { RequestCreateModule, RequestDeleteModule, RequestModule, RequestUpdateModule } from "../../requests/requestModules";
import { RequestEndSession, RequestSesseionAddSwipeQuestion, RequestStartSession } from "../../requests/requestSession";
import "../../styles/editpage_minus_plus_circle.css";
import { RequestAddSlider, RequestGetSliderByModuleNR } from "../../requests/requestSlider";

function NewCourse() {
    let { fbnr } = useParams();
    let { user } = useContext(AuthenticationContext);
    let [daySelected, setDaySelected] = useState([]);
    let [feedbackslider, setFeedbackslider] = useState([]);
    let [swipequestion, setSwipequestion] = useState([]);
    let [data, setData] = useState({});
    let [session, setSession] = useState({});

    const navigate = useNavigate();


    useEffect(() => {
        let onDataLoad = (result) => {
            setData({ ...result })
        }
        RequestModule(user, fbnr, onDataLoad)
        let onLoadSession = (res) => {
            setSession(res);
        }
        let onSliderDataLoad = (result) => {
            let data = [];
            for(let i = 0;i<result.length&&i<3;i++){
                data.push({
                    id: i,
                    text: result[i].text,

                })
            }
            setFeedbackslider(data)
        }
        RequestGetSliderByModuleNR(fbnr,user,onSliderDataLoad)
        RequestStartSession(fbnr, user, onLoadSession)
    }, [])

    let onChaingTitle = (evt) => {
        let newData = { ...data };
        newData.title = evt.currentTarget.value;
        setData(newData);
    }



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
            label: "Biweekly (even weeks)"
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
            nameshort: "THU",
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
            { id:feedbackslider.length}
        ])
    }

    let onPlusClickedSwipe = () => {
        setSwipequestion([
            ...swipequestion,
            {
                alreadySaved: false,
                id: swipequestion.length
            }
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

    let onUpdateCours = (evt) => {
        evt.preventDefault();
        if (document.getElementById("cname").value != "" || document.getElementById("cname").value == data.title) {
            let onHandleData = (result) => {
                setData({ ...result });
            }
            RequestUpdateModule(document.getElementById("cname").value, fbnr, user, onHandleData)
            for (let i = 0; i < feedbackslider.length; i++) {
                if( document.getElementById(i+ "slidername")!=null){
                    RequestAddSlider(fbnr, user, document.getElementById(i+ "slidername").value)
                }
                }

        }
        if (session.id != null) {
            for (let i = 0; i < swipequestion.length; i++) {
                if (!swipequestion[i].alreadySaved) {
                    let onSwipquestionaddet = () => {
                        let data = [...swipequestion]
                        data[i].alreadySaved = true;

                    }
                    RequestSesseionAddSwipeQuestion(session.id, user, document.getElementById(i + "questionname").value, onSwipquestionaddet)
                }
            }
        }
        // hier muss definiert werrden wie die daten ans backend gegeben werden sollen (maybe weiterleitung zu der dazugehörenden edit page)
    }
    let onClickDeleteCourse = () => {
        let success = () => {
            document.querySelector("body>div.modal-backdrop").remove();
            navigate("/doz");
        }
        let successsessionend = () => {
            RequestDeleteModule(fbnr, user, success)
        }

        RequestEndSession(session.id, user, successsessionend);

    }

    let onClickMainmenu = () => {
        document.querySelector("body>div.modal-backdrop").remove();

        RequestEndSession(session.id, user);
        navigate("/doz")

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
                            <QRCode value={"https://swipeback.pages.dev/fb/" + session.join_code} />
                            <p>{"https://swipeback.pages.dev/fb/" + session.join_code}</p>
                            <p>Join Code: {session.join_code}</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="deletemodal" tabindex="-1" aria-labelledby="deletemodalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="deletemodalLabel">Link</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>Are You sure you want to delete this course</p>
                        </div>
                        <div class="modal-footer">

                            <button type="button" class="btn btn-danger" onClick={onClickDeleteCourse}>Delete Course</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="modal fade" id="backmainmanu" tabindex="-1" aria-labelledby="backmainmanuLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="backmainmanuLabel">Link</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <p>All unsaved chainges will be removed. If you want to proceed click "Back to main menu".</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" onClick={onClickMainmenu}>Back to main menu</button>
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mt-5">

                <div className="card-body">

                    <form action="/hiermus die anfrageseite stehen" onSubmit={onUpdateCours} method="post">

                        <div className="container">
                            <div className="row">
                                <div className="col-3"><h3>Add New Course</h3></div>
                                <div className="col-2">
                                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#qrmodal">
                                        Generate QR-code
                                    </button>
                                </div>
                                <div className="col">
                                    <button type="button" class="btn btn-primary" onClick={()=>{navigate("/doz/"+fbnr+"/"+session.id)}}>
                                        ViewStats
                                    </button>
                                </div>
                                <div className="col-2">
                                    <button type="button" class="btn btn-danger" data-bs-toggle="modal" data-bs-target="#deletemodal">
                                        Delete
                                    </button>
                                    
                                    

                                </div>
                                <div className="col-2">
                                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#backmainmanu">
                                            Cancel
                                        </button>
                                    </div>
                                    <div className="col">
                                        <button className="btn btn-primary" type="submit">Save</button>
                                    </div>
                            </div>
                            <div className="row">
                                <div className="col-3">
                                    <h4 >Course name</h4>
                                </div>
                                <div className="col-9">
                                    <input type="text" id="cname" name="cname" className="form-control" placeholder="Enter Cours Name" onChange={onChaingTitle} value={data.title} />
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
                                                                <label htmlFor={day.id} className="btn btn-outline-primary rounded-0">{day.nameshort}</label></>)
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
                                                            <label htmlFor={freq.value} className="btn btn-outline-primary rounded-0">{freq.label}</label>
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
                                                    return <SettingFeedbackSlider text={i.text} id={i.id} onclick={onMinusclickedSlider}></SettingFeedbackSlider>
                                                })}

                                                {(feedbackslider.length < 3 ? <div className="row">
                                                    <div className="col-12 p-4 justify-content-cneter">
                                                        <div>
                                                            <button type="button" class="btn btn-outline-primary circle rounded-circle fs-2" onClick={onPlusClickedSlider}>+</button>
                                                        </div>
                                                    </div>
                                                </div> : <></>)}
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
                                                    return <SettingSwipeQuestion id={i.id} onclick={onMinusclickedSwipe}></SettingSwipeQuestion>
                                                }
                                                )}
                                                <div className="row">
                                                    <div className="col-12 p-4 justify-content-cneter">
                                                        <div>
                                                            <button type="button" class="btn btn-outline-primary circle rounded-circle fs-2" onClick={onPlusClickedSwipe} >+</button>
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