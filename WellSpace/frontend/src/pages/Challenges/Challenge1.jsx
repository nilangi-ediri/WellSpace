import React, { useState } from 'react';
import '../../css/challenge1.css';

const Challenge1 = () => {
    const [answers, setAnswers] = useState({ EI: '', SN: '', TF: '', JP: '' });
    const [result, setResult] = useState('');
    const [completed, setCompleted] = useState(false);
    const [notes, setNotes] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
    };

    const handleSubmit = () => {
        const { EI, SN, TF, JP } = answers;
        if (EI && SN && TF && JP) {
            const type = EI + SN + TF + JP;
            setResult(`Your MBTI type is likely to be: ${type}`);
            setCompleted(true);
        }
    };

    return (
        <div className="quiz-body">
            <div className="quiz-page">
                <div className="quiz-container">
                    <h1 className="quiz-h1">MBTI Personality Test</h1>
                    <form className="quiz-form" id="quizForm">
                        <p className="quiz-p">
                            <strong>Question 1: When attending social events:</strong><br />
                            <input className="quiz-input-radio" type="radio" name="EI" value="E" onChange={handleChange} /> I prefer to mingle with many, including strangers.<br />
                            <input className="quiz-input-radio" type="radio" name="EI" value="I" onChange={handleChange} /> I prefer to interact with a few, known to me.<br />
                        </p>
                        <p className="quiz-p">
                            <strong>Question 2: When learning a new skill:</strong><br />
                            <input className="quiz-input-radio" type="radio" name="SN" value="S" onChange={handleChange} /> I rely on what I can see and touch.<br />
                            <input className="quiz-input-radio" type="radio" name="SN" value="N" onChange={handleChange} /> I trust my intuition and impressions.<br />
                        </p>
                        <p className="quiz-p">
                            <strong>Question 3: When making decisions:</strong><br />
                            <input className="quiz-input-radio" type="radio" name="TF" value="T" onChange={handleChange} /> I look for logical explanations or solutions.<br />
                            <input className="quiz-input-radio" type="radio" name="TF" value="F" onChange={handleChange} /> I consider what others would find most helpful.<br />
                        </p>
                        <p className="quiz-p">
                            <strong>Question 4: When managing daily tasks:</strong><br />
                            <input className="quiz-input-radio" type="radio" name="JP" value="J" onChange={handleChange} /> I prefer to have a plan and stick to it.<br />
                            <input className="quiz-input-radio" type="radio" name="JP" value="P" onChange={handleChange} /> I like to keep my options open and be flexible.<br />
                        </p>
                        <button className="quiz-button" type="button" onClick={handleSubmit}>Submit</button>
                    </form>
                    <div className="quiz-result" id="result">{result}</div>
                    {completed && (
                        <div>
                            <textarea
                                placeholder="Write your notes here..."
                                value={notes}
                                onChange={(e) => setNotes(e.target.value)}
                            ></textarea>
                            <p>Notes saved.</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Challenge1;
