import Booking from "../Models/BookingSchema.js";
import Doctor from "../Models/DoctorSchema.js";

// Get available time slots
export const getAvailableSlots = async (req, res) => {
    try {
        const { doctorId, date } = req.query;
        // Implement logic to fetch available slots based on doctorId and date
        res.status(200).json({ message: 'Available slots fetched successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new booking
export const createBooking = async (req, res) => {
    try {
        const booking = new Booking(req.body);
        await booking.save();
        res.status(201).json(booking);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get all doctors
export const getAllDoctors = async (req, res) => {
    try {
        const doctors = await Doctor.find();
        res.status(200).json(doctors);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get doctor details
export const getDoctorDetails = async (req, res) => {
    try {
        const doctor = await Doctor.findById(req.params.doctorId);
        res.status(200).json(doctor);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
