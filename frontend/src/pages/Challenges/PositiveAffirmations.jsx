import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const PositiveAffirmations = () => {
    const challenges = [
        { day: "Day 1", title: "Affirmation for Confidence", description: "Repeat to yourself: 'I am confident and capable.'" },
        { day: "Day 2", title: "Affirmation for Gratitude", description: "Repeat to yourself: 'I am grateful for all the good things in my life.'" },
        { day: "Day 3", title: "Affirmation for Health", description: "Repeat to yourself: 'I am healthy, happy, and radiant.'" },
        { day: "Day 4", title: "Affirmation for Success", description: "Repeat to yourself: 'I am successful in everything I do.'" },
        { day: "Day 5", title: "Affirmation for Love", description: "Repeat to yourself: 'I am surrounded by love and positivity.'" },
        { day: "Day 6", title: "Affirmation for Peace", description: "Repeat to yourself: 'I am at peace with myself and the world around me.'" },
        { day: "Day 7", title: "Affirmation for Strength", description: "Repeat to yourself: 'I am strong and resilient.'" }
    ];

    const [completed, setCompleted] = useState(Array(challenges.length).fill(false));
    const [notes, setNotes] = useState(Array(challenges.length).fill(""));
    const [allCompleted, setAllCompleted] = useState(false);

    useEffect(() => {
        setAllCompleted(completed.every(status => status));
    }, [completed]);

    const handleCheckIn = (index) => {
        const newCompleted = [...completed];
        newCompleted[index] = !newCompleted[index];
        setCompleted(newCompleted);
    };

    const handleNoteChange = (index, value) => {
        const newNotes = [...notes];
        newNotes[index] = value;
        setNotes(newNotes);
    };

    return (
        <>
        <NavigationBar/>
        <div className="challenge-body">
            <div className="challenge-page">
                <div className="challenge-container">
                    <h1 className='challenge-h1'>Positive Affirmations Challenge</h1>
                    <ul className="challenge-list">
                        {challenges.map((challenge, index) => (
                            <li key={index} className="challenge-item">
                                <h2>{challenge.day}: {challenge.title}</h2>
                                <p>{challenge.description}</p>
                                <textarea
                                    placeholder="Write your notes here..."
                                    value={notes[index]}
                                    onChange={(e) => handleNoteChange(index, e.target.value)}
                                ></textarea>
                                <button
                                    className={`check-in-button ${completed[index] ? 'completed' : ''}`}
                                    onClick={() => handleCheckIn(index)}
                                >
                                    {completed[index] ? 'Checked In' : 'Check In'}
                                </button>
                            </li>
                        ))}
                    </ul>
                    {allCompleted && (
                        <div className="congratulations">
                            <h2>Congratulations! You've completed the Positive Affirmations Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default PositiveAffirmations;
