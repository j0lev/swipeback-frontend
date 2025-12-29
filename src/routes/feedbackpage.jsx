import { useParams } from 'react-router-dom'
import JsonData from "../../testfiles/test-feedback.json"
import Headline from '../components/headline';
import Questiontext from '../components/questiontext';
import "../styles/fb-page.css";

function Feedback() {
    let { fbnr } = useParams();
    console.log(JsonData.dozent);
    let scheight = screen.height*0.60;
    scheight= scheight+"px";
    let time = Date.now();

  return (
    <>
      
      <div className='container h-100'>
        <div className='row'><Headline>Feedback for: {JsonData.topic} taught by {JsonData.dozent.titel} {JsonData.dozent.vorname} {JsonData.dozent.name}</Headline></div>
        <div className='row' style={{height : scheight}} >
          <div className='col h-100'>
            <div className='card h-100'>
              <div className='card-body h-100'>
                
                <div id='questions' data-bs-spy="scroll" data-bs-offset="0" className="h-90 overflow-auto mb-3" tabindex="0">
                  <Questiontext time={time}>Hier könnte ihre werbung stehen</Questiontext>
        
                </div>
                <div class="input-group mt-1">
                  <input id='question' type="text" className="form-control" placeholder="Question" aria-label="Question" aria-describedby="button-addon2"/>
                  <button className="btn btn-outline-secondary" type="button" id="button-addon2">Button</button>
                </div>
              
              </div>
            </div>
          </div>
          <div className='col h-100'>
            <div className='card h-100' ></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Feedback
