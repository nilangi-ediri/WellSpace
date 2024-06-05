import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const RestfulSleep = () => {
    const challenges = [
        { day: "Day 1", title: "Establish a Bedtime Routine", description: "Create a consistent bedtime routine to signal your body that it's time to sleep." },
        { day: "Day 2", title: "Limit Screen Time", description: "Avoid screens at least one hour before bedtime to help your mind relax." },
        { day: "Day 3", title: "Create a Sleep-Friendly Environment", description: "Make your bedroom cool, dark, and quiet to enhance sleep quality." },
        { day: "Day 4", title: "Mindful Relaxation", description: "Practice a relaxation technique, such as deep breathing or meditation, before bed." },
        { day: "Day 5", title: "Consistent Sleep Schedule", description: "Go to bed and wake up at the same time every day, even on weekends." },
        { day: "Day 6", title: "Limit Caffeine and Sugar", description: "Avoid caffeine and sugary foods in the late afternoon and evening." },
        { day: "Day 7", title: "Reflect on Your Sleep", description: "Keep a sleep journal and reflect on what helped you sleep better throughout the week." }
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
                    <h1 className='challenge-h1'>Restful Sleep Challenge</h1>
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
                            <h2>Congratulations! You've completed the Restful Sleep Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default RestfulSleep;
