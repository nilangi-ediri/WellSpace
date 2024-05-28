import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booking from '../Models/BookingSchema.js';

dotenv.config(); // Load environment variables

const bookings = [
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        preferredDate: '2024-06-01',
        preferredTime: '10:00',
        doctorId: '660247adb56a95c2c97fa68b', // Replace with actual doctor ID from your database
        service: 'Counseling',
        notes: 'Looking forward to the session.'
    },
    {
        name: 'Bob Smith',
        email: 'bob@example.com',
        preferredDate: '2024-06-02',
        preferredTime: '11:00',
        doctorId: '660247adb56a95c2c97fa68c', // Replace with actual doctor ID from your database
        service: 'Therapy',
        notes: 'Need some guidance and support.'
    }
];

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('MongoDB connected');
    seedBookings();
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
});

// Seed bookings data
const seedBookings = async () => {
    try {
        await Booking.deleteMany({});
        await Booking.insertMany(bookings);
        console.log('Bookings data seeded');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error seeding bookings data:', error.message);
        mongoose.connection.close();
    }
};


