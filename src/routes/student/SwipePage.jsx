/*
as this code was vibe-coded at large (still good enough for this level of project), i do feel the need for extensive commenting.
This will make it easier for others, but mostly for me myself to understnad, whats going on 
As only in times of writing did i at least somewhat understood, what i was doing
*/

import { useEffect, useCallback } from 'react';
import QuestionCard from '../../components/student/QuestionCard';
import { useLobbyController } from '../../controller/useLobbyController';
//animation import
import { useAnimation, AnimatePresence, motion } from "motion/react";

import "../../styles/swipequestions.css"

function SwipePage(props) {
  const {
    currentQuestion,
    answerQuestion,
    isFinished,
    answers
  } = useLobbyController(props.qlist);
  const controls = useAnimation()


  //kind of an in-between the swipe/press and answer question
  const triggerSwipe = useCallback(async (dir) => {

    await controls.start({
      x: dir === "right" ? 500 : -500,
      opacity: 0,
      transition: { duration: 0.4 }
    });

    answerQuestion(dir);
    controls.set({ x: 0, opacity: 1 });
  }, [controls, answerQuestion]);
  //useEffect: do once rendered
  useEffect(() => {

    const handleKeyDown = (e) => { //function we would call, once key is pressed
      if (e.key === 'ArrowLeft') triggerSwipe('left');
      if (e.key === 'ArrowRight') triggerSwipe('right');
    };

    window.addEventListener('keydown', handleKeyDown); //listens for a key pressed, goes into handleKeyDown

    return () => window.removeEventListener('keydown', handleKeyDown); //turns off the listener
  }, [triggerSwipe]);

  return (
    <div
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column', //this is responsible for one-on-another stacking
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden' //prevents scrollbars during exit animations
      }}
    >

      <div style={{
        width: "60%",
        height: "80%"
      }}>
        <AnimatePresence mode="wait">
          {!isFinished ? (
            <QuestionCard
              key={currentQuestion}
              text={currentQuestion}
              onSwipe={triggerSwipe}
              animate={controls}
            />
          ) : (
            <motion.h2
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >All done!
            </motion.h2>
          )}
        </AnimatePresence>
      </div>
      <div>
        <h5>Drag or Swipe with arrows!</h5>
      </div>

    </div>
  );
}
export default SwipePage