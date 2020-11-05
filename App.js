import React, { useEffect, useState } from 'react';

export default function App() {
    const STARTING_TIME = 0;
    const [text, setText] = useState("");
    const [wordCount, setWordCount] = useState(0);
    const [timeRemaining, setTimeRemaining] = useState(5);
    const [isTimeRunning, setIsTimeRunning] = useState(false)
    
    function calculateWordCount(text) {
        let wordsArr = text.trim().split(" ");
        setWordCount(wordsArr.filter(word => word !== "").length);
    }

    function startGame() {
        setIsTimeRunning(true)
        setText("") 
    }


    function endGame() {
        setIsTimeRunning(false)
        setTimeRemaining(STARTING_TIME)
        calculateWordCount(text);
    }

    useEffect(() => {
        if (isTimeRunning && timeRemaining > 0) {
             setTimeout(() => {
                    setTimeRemaining(time => time - 1)}, 1000);
        } else if (timeRemaining === 0) {
            endGame()
        }
    }, [timeRemaining, isTimeRunning])

   

    return (
        <div>
            <h1>How fast do you type?</h1>
            <textarea value={text} disabled={!isTimeRunning} onChange={(e) => setText(e.target.value)} />
            <h4>Time remaining: {timeRemaining}</h4>
            <button type="button" disabled={isTimeRunning} onClick={() => startGame(true)}>Start</button>
            <h4>Word count: {wordCount}</h4>
        </div>
    )
}
