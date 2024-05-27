import React, { useState, useEffect } from 'react';
import '../../css/sevenDayMindfulness.css'; // use the same css file as SevenDayMindfulness

const HydrationBoost = () => {
    const challenges = [
        { day: "Day 1", title: "8 Glasses of Water", description: "Drink at least 8 glasses of water today. Track your intake to stay hydrated." },
        { day: "Day 2", title: "Morning Hydration", description: "Start your day with a glass of water. Make it a habit to drink water first thing in the morning." },
        { day: "Day 3", title: "Fruity Hydration", description: "Add some slices of your favorite fruit to your water for a refreshing twist." },
        { day: "Day 4", title: "Hydration Reminder", description: "Set a timer to remind you to drink water every hour throughout the day." },
        { day: "Day 5", title: "Hydrating Foods", description: "Incorporate hydrating foods like cucumbers, watermelons, and oranges into your meals." },
        { day: "Day 6", title: "Herbal Tea", description: "Drink a cup of herbal tea in the evening to stay hydrated and relax." },
        { day: "Day 7", title: "Track Your Intake", description: "Keep a journal of your water intake for the day and reflect on how it makes you feel." }
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
        <div className="challenge-body">
            <div className="challenge-page">
                <div className="challenge-container">
                    <h1 className='challenge-h1'>Hydration Boost Challenge</h1>
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
                            <h2>Congratulations! You've completed the Hydration Boost Challenge!</h2>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default HydrationBoost;
