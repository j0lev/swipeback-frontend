/*
as this code was vibe-coded at large (still good enough for this level of project), i do feel the need for extensive commenting.
This will make it easier for others, but mostly for me myself to understnad, whats going on 
As only in times of writing did i at least somewhat understood, what i was doing
*/

import { useState, useEffect } from 'react';
import QuestionCard from '../../components/student/QuestionCard';
import { useLobbyController } from '../../controller/useLobbyController';
import { RequestLoadQuestionsByJoincode } from '../../requests/requestFeedbackquestion';
import { useParams } from 'react-router-dom';

function SwipePage() {
  let [qlist, setQlist] = useState([]);
  let {fbnr} = useParams();
  useEffect(() => {
    let onQuestionsLoad = (results) => {
      setQlist([...results]);
    }
    RequestLoadQuestionsByJoincode(fbnr, onQuestionsLoad )
  }, [])
  if(qlist.length>0){
  const {
    currentQuestion,
    answerQuestion,
    isFinished,
    answers
  } = useLobbyController(qlist);

  //useEffect: do once rendered
  useEffect(() => {

    const handleKeyDown = (e) => { //function we would call, once key is pressed
      if (e.key === 'ArrowLeft') answerQuestion('left');
      if (e.key === 'ArrowRight') answerQuestion('right');
    };

    window.addEventListener('keydown', handleKeyDown); //listens for a key pressed, goes into handleKeyDown

    return () => window.removeEventListener('keydown', handleKeyDown); //turns off the listener
  }, [answerQuestion]);
  }
  if (qlist.length > 0) {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          flexDirection: 'column', //this is responsible for one-on-another stacking
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <div>
          <h4>Right now, u can swipe using the arrows ('ArrowLeft'/'ArrowRight' )</h4>
          <h5>No visual effect yet, but the cards change and u are prompted with "all done!" in the end</h5>
        </div>
        <div>
          {!isFinished ? (
            <QuestionCard text={currentQuestion} />
          ) : (
            <h2>All done!</h2>
          )}
        </div>

      </div>
    );
  } else {
    return <>
      <div class="spinner-border" role="status">
        <span class="sr-only"></span>
      </div>
    </>
  }
}
export default SwipePage