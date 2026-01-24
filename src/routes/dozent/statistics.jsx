import { useContext, useEffect, useState } from "react";
import QuestionCard from "../../components/student/QuestionCard";
import { RequestTextFeedback } from "../../requests/requestSession";
import { useParams } from "react-router-dom";
import { AuthenticationContext } from "../../context/authenticationContext";
import diagram from "../../assets/placeholderGraphikforSliderFeedback.png";
import LectureQuestion from "../../components/dozent/lectureQuestion";
import { RequestLoadQuestionResults } from "../../requests/requestFeedbackquestion";
import Questiontext from "../../components/student/questiontext";
function CourseFeedback() {
    let { fbnr, sessionId } = useParams();
    let [questions, setQuestion] = useState([

        ]);
    let [lquestions, setLQuestion] = useState([

    ]);
    /*
    {
            text:"Did you learn something new?",
            no_count:4,
            yes_count:4,
        },
{
    text:"Were the topics interesting?",
            no_count:0,
            yes_count:8,
},
{text:"Was the pacing rushed?",
            no_count:7,
            yes_count:1,

}
    */
    let scheight = screen.height * 0.70;
    scheight = scheight + "px";
    let { user } = useContext(AuthenticationContext);
    useEffect(() => {
        let questionsLoadet = (data) => {
            setQuestion([...data])
        }
        let onLectueQuestionLoadet= (data)=>{
            setLQuestion([...data])
        }
        RequestTextFeedback(sessionId, user, questionsLoadet);
        RequestLoadQuestionResults(user,sessionId,onLectueQuestionLoadet)

    },[])
    let onClickGraphBig=()=>{
        document.getElementById("graphik").style.display="none";
    }
    let onClickGraph=()=>{
        document.getElementById("graphik").style.display="flex";
    }
    return (<>
        <div id="graphik" className="w-100 h-100 position-absolut" style={{background: "gray",  display: "none", justifyContent: "center", alignItems: "center"}} onClick={onClickGraphBig}>
            <img alt="Here could should be a placeholder for a diagramm" style={{ width: "80%", height:"80%"}}  src={diagram} class="img-fluid" />
        </div>
        <div className="container mt-5">
            <div className="row " style={{ height: scheight }}>
                <div className="col-4 h-100">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Student Questions</h3>
                        </div>
                        <div className="card-body h-100">
                            <div id='questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">
                                {(questions.length > 0 ? questions.map((item) => {

                                    return <Questiontext time={item.timestamp} >{item.content}</Questiontext>
                                }) : <div class="spinner-border" role="status"><span class="sr-only"></span></div>)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-4 h-100">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Student Slider Feedback</h3>
                        </div>
                        <div className="card-body h-100">
                            <img alt="Here could should be a placeholder for a diagramm" onClick={onClickGraph} src={diagram} class="img-fluid" />
                        </div>
                    </div>
                </div>
                <div className="col-4 h-100">
                    <div className="card h-100">
                        <div className="card-header">
                            <h3>Lecture Questions</h3>
                        </div>
                        <div className="card-body">
                            <div id='Lecture-questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">
                                {(lquestions.length > 0 ? lquestions.map((item) => {

                                    return <LectureQuestion yes_count={item.yes_count} no_count={item.no_count} >{item.text}</LectureQuestion>
                                }) : <div class="spinner-border" role="status"><span class="sr-only"></span></div>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default CourseFeedback;