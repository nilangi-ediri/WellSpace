import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness
import Footer from '../../components/Footer';
import NavigationBar from '../../components/Navbar';

const DailySteps = () => {
    const challenges = [
        { day: "Day 1", title: "Mindful Breathing", description: "Spend 5 minutes practicing mindful breathing. Focus on your breath and try to clear your mind." },
        { day: "Day 2", title: "Gratitude List", description: "Write down three things you are grateful for today. Reflect on why you are grateful for them." },
        { day: "Day 3", title: "Connect with a Friend", description: "Reach out to a friend or family member and have a meaningful conversation with them." },
        { day: "Day 4", title: "Mindful Eating", description: "Eat a meal or snack mindfully, focusing on the taste, texture, and aroma of the food." },
        { day: "Day 5", title: "Digital Detox", description: "Spend at least one hour without any digital devices. Use this time to relax or engage in a hobby." },
        { day: "Day 6", title: "Positive Affirmations", description: "Write down three positive affirmations and repeat them to yourself throughout the day." },
        { day: "Day 7", title: "Reflection", description: "Reflect on your week. Write down any positive changes you've noticed in your mood or mindset." }
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
                    <h1 className='challenge-h1'>Daily Steps Challenge</h1>
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
                            <h2>Congratulations! You've completed the Daily Steps Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default DailySteps;
