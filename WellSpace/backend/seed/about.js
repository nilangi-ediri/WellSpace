import mongoose from 'mongoose';
import dotenv from 'dotenv';
import About from '../Models/AboutSchema.js';

dotenv.config(); // Load environment variables

const aboutData = {
    content: 'Welcome to WellSpace! We provide a safe and supportive environment for your mental wellness journey.'
};

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    seedAbout();
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

// Seed about data
const seedAbout = async () => {
    try {
        await About.deleteMany({});
        await About.create(aboutData);
        console.log('About data seeded');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding about data:', error.message);
        mongoose.connection.close();
    }
};


