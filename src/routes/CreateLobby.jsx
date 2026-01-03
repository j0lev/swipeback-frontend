import { useState } from 'react';

function CreateLobby() {
    // each slider has an emoji (string for now)
    const [sliders, setSliders] = useState(['🎄', '🎉', '🎆']);

    const addSlider = () => {
        setSliders(prev => [...prev, '🙂']);
    };

    const removeSlider = (index) => {
        setSliders(prev => prev.filter((_, i) => i !== index));
    };

    const updateEmoji = (index, value) => {
        setSliders(prev =>
        prev.map((e, i) => (i === index ? value : e))
        );
    };
    const [questions, setQuestions] = useState(['Have u understood the topic?']);

    const addQuestion = () => {
        setQuestions(prev => [...prev, '']); // Adds a new empty question
    };

    const removeQuestion = (index) => {
        setQuestions(prev => prev.filter((_, i) => i !== index));
    };

    const updateQuestion = (index, value) => {
        setQuestions(prev =>
            prev.map((q, i) => (i === index ? value : q))
        );
    };

    return (
        <div style={{ 
            padding: '40px',
            
            }}>
        <h2>Create Lobby</h2>

        {/**here is the container that alligns sliders and questions vertically */}
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            gap: '40px'
        }}>
            <h4>Sliders</h4>

            {/** so here is the container containing all sliders */}
            <div
                style = {{
                    border: '4px solid #00357b',
                    borderRadius: '12px',
                    padding: '20px',
                    display: 'inline-flex', // Fits the width to the content
                    flexDirection: 'row', // the sliders fit horizontaly
                }}
            >
                {sliders.map((emoji, i) => (
                    <div
                        key={i}
                        style={{
                            display: 'flex',
                            flexDirection: 'column', // VERTICAL: Emoji above button
                            alignItems: 'center',
                            gap: '10px',
                            marginBottom: '10px',
                    }}
                    >
                    <input
                        type="text"
                        value={emoji}
                        onChange={(e) => updateEmoji(i, e.target.value)}
                        style={{ width: '60px', textAlign: 'center' }}
                    />

                    <button
                        onClick={() => removeSlider(i)}
                        disabled={sliders.length === 1}
                    >
                        −
                    </button>
                    </div>
                ))}

                <button onClick={addSlider}>+</button>
                
            </div>
            <h4>Questions</h4>
            <div style={{
                border: '4px solid #00357b',
                borderRadius: '12px',
                padding: '20px',
                display: 'flex', 
                flexDirection: 'column', // Questions stack on top of each other
                gap: '15px',
                maxWidth: '600px' // Keeps the inputs from stretching too far
            }}>
                {questions.map((q, i) => (
                    <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <input
                            type="text"
                            placeholder="Enter question here..."
                            value={q}
                            onChange={(e) => updateQuestion(i, e.target.value)}
                            style={{ 
                                flex: 1, // Makes the input take up available space
                                padding: '8px',
                                borderRadius: '4px',
                                border: '1px solid #ccc'
                            }}
                        />
                        <button
                            onClick={() => removeQuestion(i)}
                            disabled={questions.length === 1}
                            style={{ cursor: 'pointer', padding: '5px 10px' }}
                        >
                            −
                        </button>
                    </div>
                ))}

                <button 
                    onClick={addQuestion}
                    style={{
                        alignSelf: 'flex-start', // Keeps the plus button on the left
                        padding: '5px 15px',
                        cursor: 'pointer'
                    }}
                >
                    + Add Question
                </button>
                
            </div>

            
            
        </div>
        </div>
    );
    }

    export default CreateLobby;