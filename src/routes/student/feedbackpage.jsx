
import { useState } from "react";
import VerticalSlider from "../../components/student/verticalSlider"
import JsonData from "../../../testfiles/test-feedback.json"
import Headline from '../../components/headline';
import Questiontext from '../../components/student/questiontext';
import "../../styles/fb-page.css";
import { useNavigate, useParams } from "react-router-dom";
import { RequestCreateTextFeedback } from "../../requests/requestTextFeedback";


function Feedback() {
  let { fbnr } = useParams();
  let navigat = useNavigate();
  let scheight = screen.height * 0.60;
  scheight = scheight + "px";
  const [questions, setQuestions] = useState([]);
  let onKeyPressQuestion = (event) => {
    if (event.key === 'Enter') {
      askQuestion();

    }
  }
  window.addEventListener("keydown", (evt) => {
    if (evt.key == "AltGraph") {
      navigat("/fb/" + fbnr + "/swipe")
    }
  })

  let askQuestion = () => {
    if (document.getElementById("question").value != "") {
      let txt = document.getElementById("question").value;
      document.getElementById("question").value = "";
      let onLoadedTextFeedbackCreated = (result) => {
        console.log(result);
      }
      RequestCreateTextFeedback(txt, fbnr, onLoadedTextFeedbackCreated)
      let time = Date.now();
      setQuestions([
        ...questions,
        {
          text: txt,
          time: time
        }
      ])
    }
  }
  const { innerWidth: width, innerHeight: height } = window;
  if (width >= 960) {

    return (
      <>

        <div className='container h-100'>
          <div className='row'><Headline>Feedback for: {JsonData.topic} taught by {JsonData.dozent.titel} {JsonData.dozent.vorname} {JsonData.dozent.name}</Headline></div>
          <div className='row' style={{ height: scheight }} >
            <div className='col h-100'>
              <div className='card h-100'>
                <div className='card-body h-100'>

                  <div id='questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">

                    {questions.map(function (item) {
                      return <Questiontext time={item.time} >{item.text}</Questiontext>
                    })}

                  </div>
                  <div class="input-group mt-1">
                    <input onKeyDown={onKeyPressQuestion} id='question' type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary" onClick={askQuestion} type="button" id="button-addon2">Send</button>
                  </div>

                </div>
              </div>
            </div>
            <div className='col h-100'>
              <div className='card h-100' >
                <div className="card-body">
                  <div className='container h-100'>
                    <div className='row h-100'>
                      <VerticalSlider iconnum={0} color="yellow" info="Understandability"></VerticalSlider>

                      <VerticalSlider iconnum={1} color="red" info="Keep track"></VerticalSlider>

                      <VerticalSlider iconnum={2} color="green" info="Lecture speed"></VerticalSlider>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    )
  } else {
    console.log("test")
    return (
      <>


        <div class="modal fade" id="questionModal" tabindex="-1" aria-labelledby="questionModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="questionModalLabel">Questions</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body" style={{ height: scheight }}>
                <div className='col h-100'>


                  <div id='questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">

                    {questions.map(function (item) {
                      return <Questiontext time={item.time} >{item.text}</Questiontext>
                    })}

                  </div>
                  <div class="input-group mt-1">
                    <input onKeyDown={onKeyPressQuestion} id='question' type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="button-addon2" />
                    <button className="btn btn-outline-primary" onClick={askQuestion} type="button" id="button-addon2">Send</button>
                  </div>

                </div>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>

        <div className='container h-100'>
          <div className='row'><h4 className="headline fs-3">Feedback for: {JsonData.topic} taught by {JsonData.dozent.titel} {JsonData.dozent.vorname} {JsonData.dozent.name}</h4></div>
          <div className='row' style={{ height: scheight }} >

            <div className='col h-100'>

              <div className='container h-100'>
                <div className='row h-100'>
                  <VerticalSlider iconnum={0} color="yellow" info="Understandability"></VerticalSlider>

                  <VerticalSlider iconnum={1} color="red" info="Keep track"></VerticalSlider>

                  <VerticalSlider iconnum={2} color="green" info="Lecture speed"></VerticalSlider>
                </div>
              </div>

            </div>
          </div>
        </div>
        <button style={{
          position: "absolute",
          left: "0",
          bottom: "0",
          background: "none !important",
          border: "0",
        }} type="button" class="w-100" data-bs-toggle="modal" onDrag={(evt) => { evt.target.click() }} data-bs-target="#questionModal">
          <i class="bi bi-chevron-up"></i><br />
          Pull up to ask question
        </button>

      </>
    )
  }
}

export default Feedback;
