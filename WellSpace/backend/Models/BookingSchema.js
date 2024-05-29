import mongoose from 'mongoose';

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    preferredDate: {
        type: String,
        required: true
    },
    preferredTime: {
        type: String,
        required: true
    },
    doctorId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doctor',
        required: true
    },
    service: {
        type: String,
        required: true
    },
    notes: {
        type: String,
        required: false
    }
});

export default mongoose.model('Booking', BookingSchema);
