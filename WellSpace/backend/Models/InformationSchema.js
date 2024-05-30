import mongoose from 'mongoose';

const informationSchema = new mongoose.Schema({
  title: String,
  content: String
});

export default mongoose.model('Information', informationSchema);

 
