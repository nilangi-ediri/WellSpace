import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const DigitalDetox = () => {
    const challenges = [
        { day: "Day 1", title: "No Social Media", description: "Avoid all social media platforms for the entire day." },
        { day: "Day 2", title: "Phone-Free Meal", description: "Have all your meals today without using your phone or any other digital device." },
        { day: "Day 3", title: "Unplug for an Hour", description: "Choose an hour of the day to completely unplug from all digital devices." },
        { day: "Day 4", title: "Read a Book", description: "Spend at least 30 minutes reading a physical book or a magazine." },
        { day: "Day 5", title: "Tech-Free Walk", description: "Take a walk outside without bringing any digital devices." },
        { day: "Day 6", title: "No Screens Before Bed", description: "Avoid all screens at least one hour before going to bed." },
        { day: "Day 7", title: "Digital-Free Morning", description: "Start your day without using any digital devices for the first two hours after waking up." }
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
                    <h1 className='challenge-h1'>Digital Detox Challenge</h1>
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
                            <h2>Congratulations! You've completed the Digital Detox Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default DigitalDetox;
