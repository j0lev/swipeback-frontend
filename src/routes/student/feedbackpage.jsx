
import { useState } from "react";
import VerticalSlider from "../../components/student/verticalSlider"
import JsonData from "../../../testfiles/test-feedback.json"
import Headline from '../../components/headline';
import Questiontext from '../../components/student/questiontext';
import "../../styles/fb-page.css";


function Feedback() {

    let scheight = screen.height*0.60;
    scheight= scheight+"px";
    const [questions, setQuestions] = useState([]);
    let onKeyPressQuestion = (event)=>{
       if (event.key === 'Enter') {
          askQuestion();
 
        }
    }
    window.addEventListener("keydown", (evt)=>{
      if(evt.key=="AltGraph"){
        window.location.href= window.location.href + "/swipe";
      }
    })

    let askQuestion= ()=>{
      if(document.getElementById("question").value!=""){
        let txt = document.getElementById("question").value;
        document.getElementById("question").value="";
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

  return (
    <>
      
      <div className='container h-100'>
        <div className='row'><Headline>Feedback for: {JsonData.topic} taught by {JsonData.dozent.titel} {JsonData.dozent.vorname} {JsonData.dozent.name}</Headline></div>
        <div className='row' style={{height : scheight}} >
          <div className='col h-100'>
            <div className='card h-100'>
              <div className='card-body h-100'>
                
                <div id='questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">
                  
                  {questions.map( function(item) {
                     return <Questiontext time={item.time} >{item.text}</Questiontext>                    
                  } )}
        
                </div>
                <div class="input-group mt-1">
                  <input onKeyDown={onKeyPressQuestion} id='question' type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" onClick={askQuestion} type="button" id="button-addon2">Button</button>
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
}

export default Feedback;
