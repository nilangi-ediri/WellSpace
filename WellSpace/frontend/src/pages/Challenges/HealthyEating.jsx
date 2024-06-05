import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness
import NavigationBar from '../../components/Navbar';
import Footer from '../../components/Footer';

const HealthyEating = () => {
    const challenges = [
        { day: "Day 1", title: "Eat a Balanced Breakfast", description: "Start your day with a balanced breakfast that includes protein, healthy fats, and fiber." },
        { day: "Day 2", title: "Incorporate Vegetables", description: "Add at least two servings of vegetables to your meals today." },
        { day: "Day 3", title: "Hydrate", description: "Drink at least 8 cups of water today. Keep a water bottle with you as a reminder." },
        { day: "Day 4", title: "Healthy Snack", description: "Choose a healthy snack like fruits, nuts, or yogurt instead of processed snacks." },
        { day: "Day 5", title: "Limit Sugar", description: "Avoid sugary drinks and snacks today. Opt for natural sugars from fruits instead." },
        { day: "Day 6", title: "Portion Control", description: "Be mindful of portion sizes. Use smaller plates and avoid second helpings." },
        { day: "Day 7", title: "Cook at Home", description: "Prepare a healthy meal at home using fresh ingredients. Try a new healthy recipe." }
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
                    <h1 className='challenge-h1'>Healthy Eating Challenge</h1>
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
                            <h2>Congratulations! You've completed the Healthy Eating Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
        <Footer/>
        </>
        
    );
};

export default HealthyEating;
