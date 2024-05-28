import mongoose from 'mongoose';

const AboutSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true
    }
});

export default mongoose.model('About', AboutSchema);
