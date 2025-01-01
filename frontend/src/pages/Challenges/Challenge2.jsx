import React, { useState } from 'react';
import '../../css/challenge1.css'; // use the same css file as challenge1
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const Challenge2 = () => {
    const [answers, setAnswers] = useState({ q1: '', q2: '', q3: '' });
    const [result, setResult] = useState('');
    const [completed, setCompleted] = useState(false);
    const [notes, setNotes] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setAnswers((prevAnswers) => ({ ...prevAnswers, [name]: value }));
    };

    const handleSubmit = () => {
        const { q1, q2, q3 } = answers;
        if (q1 && q2 && q3) {
            const totalScore = parseInt(q1) + parseInt(q2) + parseInt(q3);
            let resultText = "Your stress level is: ";
            if (totalScore > 9) {
                resultText += "High.";
            } else if (totalScore > 5) {
                resultText += "Moderate.";
            } else {
                resultText += "Low.";
            }
            setResult(resultText);
            setCompleted(true);
        }
    };

    return (
        <>
        <NavigationBar/>
        <div className="quiz-body">
            <div className="quiz-page">
                <div className="quiz-container">
                    <h1 className="quiz-h1">Stress Level Test</h1>
                    <form className="quiz-form" id="stressForm">
                        <p className="quiz-p">
                            <strong>Question 1: How often have you felt unable to control the important things in your life?</strong><br />
                            <input className="quiz-input-radio" type="radio" name="q1" value="4" onChange={handleChange} /> Almost Always<br />
                            <input className="quiz-input-radio" type="radio" name="q1" value="3" onChange={handleChange} /> Sometimes<br />
                            <input className="quiz-input-radio" type="radio" name="q1" value="2" onChange={handleChange} /> Rarely<br />
                            <input className="quiz-input-radio" type="radio" name="q1" value="1" onChange={handleChange} /> Never<br />
                        </p>
                        <p className="quiz-p">
                            <strong>Question 2: How often have you felt nervous and stressed?</strong><br />
                            <input className="quiz-input-radio" type="radio" name="q2" value="4" onChange={handleChange} /> Almost Always<br />
                            <input className="quiz-input-radio" type="radio" name="q2" value="3" onChange={handleChange} /> Sometimes<br />
                            <input className="quiz-input-radio" type="radio" name="q2" value="2" onChange={handleChange} /> Rarely<br />
                            <input className="quiz-input-radio" type="radio" name="q2" value="1" onChange={handleChange} /> Never<br />
                        </p>
                        <p className="quiz-p">
                            <strong>Question 3: How often have you found that you could not cope with all the things that you had to do?</strong><br />
                            <input className="quiz-input-radio" type="radio" name="q3" value="4" onChange={handleChange} /> Almost Always<br />
                            <input className="quiz-input-radio" type="radio" name="q3" value="3" onChange={handleChange} /> Sometimes<br />
                            <input className="quiz-input-radio" type="radio" name="q3" value="2" onChange={handleChange} /> Rarely<br />
                            <input className="quiz-input-radio" type="radio" name="q3" value="1" onChange={handleChange} /> Never<br />
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
        <Footer/>
        </>
    );
};

export default Challenge2;
