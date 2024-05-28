import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Booking from '../Models/BookingSchema.js';

dotenv.config();

// Sample booking data
const bookings = [
    {
        name: 'Alice Johnson',
        email: 'alice@example.com',
        preferredDate: '2024-06-01',
        preferredTime: '10:00',
        doctorId: 'put_doctor_id_here', // Replace with actual doctor ID from your database
        service: 'Counseling',
        notes: 'Looking forward to the session.'
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
    console.error(err);
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
        console.error(error);
        mongoose.connection.close();
    }
};

