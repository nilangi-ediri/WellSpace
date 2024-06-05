import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; 
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const SevenDayMindfulness = () => {
    const challenges = [
        { day: "Day 1", title: "Breathe and Relax", description: "Spend 10 minutes focusing on your breath. Inhale deeply and exhale slowly, allowing your body to relax." },
        { day: "Day 2", title: "Mindful Eating", description: "Choose a meal or snack and eat it slowly, savoring each bite. Pay attention to the taste, texture, and aroma." },
        { day: "Day 3", title: "Body Scan", description: "Lie down in a comfortable position and perform a body scan. Notice any tension or relaxation in each part of your body." },
        { day: "Day 4", title: "Mindful Walking", description: "Take a 10-minute walk outside. Pay attention to the sensation of your feet touching the ground and the sights and sounds around you." },
        { day: "Day 5", title: "Gratitude Journaling", description: "Write down three things you are grateful for today. Reflect on why you are grateful for them." },
        { day: "Day 6", title: "Mindful Listening", description: "Spend 10 minutes listening to music or sounds around you. Focus on the different layers of sound and how they make you feel." },
        { day: "Day 7", title: "Mindful Reflection", description: "Reflect on your week of mindfulness practices. Write down any changes you noticed in your mood or mindset." }
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
                    <h1 className='challenge-h1'>7-Day Mindfulness Challenge</h1>
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
                            <h2>Congratulations! You've completed the 7-Day Mindfulness Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default SevenDayMindfulness;
