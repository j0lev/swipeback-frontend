/*
Lobby Controller
1. Fetches info from backend
2. Stores it
3. Answers ui calls
4. Stores ui answers
5. Sends changes to backend

*/

import { useState, useCallback, useMemo } from 'react';

export function useLobbyController(swipequestionList) {
    //1. fetch info from backend  
    const questions = useMemo(() => swipequestionList, []);
    const sliderEmojis = ['🎄','🎉','🎆'] //simulates already fetched values from backend
    const [index, setIndex] = useState(0);
    const [answers, setAnswers] = useState([]); 
    const [sliderValues, setSliderValues] = useState([5, 5, 5]); //this is where i control the number of sliders
    // 2. Store state locally
    console.log(questions);

    // 3. Answer to UI
    const currentQuestion = questions[index];
    const isFinished = index >= questions.length;

    // 4. Collect answers
    const answerQuestion = useCallback((answer) => { //collects the answers to the final questions in readable form
        setAnswers(prev => [...prev, { question: questions[index], answer }]);
        setIndex(prev => prev + 1);
    }, [index, questions]);

    const setSliderValue = (i, value) => { //collects the slider changes
    setSliderValues(prev => 
        prev.map((v, idx) => idx === i ? value : v)
    );
    };

    // 5. preview of sending the results
    if (isFinished){
        console.log(answers);
    }

    return {
        currentQuestion,
        index,
        isFinished,
        answers,
        answerQuestion,
        sliderValues,
        setSliderValue,
        sliderEmojis
    };
}