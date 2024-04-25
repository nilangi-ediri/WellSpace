import mongoose from 'mongoose';

const informationSchema = new mongoose.Schema({
  title: String,
  content: String
});

const Information = mongoose.model('Information', informationSchema);

export default Information;
