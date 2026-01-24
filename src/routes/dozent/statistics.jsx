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
    let [questions, setQuestion] = useState([]);
    let [lquestions, setLQuestion] = useState([]);
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
    return (
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
                            <img alt="Here could should be a placeholder for a diagramm" src={diagram} class="img-fluid" />
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
    )
}

export default CourseFeedback;