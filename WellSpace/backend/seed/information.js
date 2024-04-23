import mongoose from 'mongoose';
import dotenv from 'dotenv';
import Information from '../Models/InformationSchema.js'; // Adjust the path as necessary

dotenv.config();

const seedInformation = [
  { title: "About Us", content: "This is the about us page content." },
  { title: "Contact", content: "Contact us at info@example.com." }
];

const insertInformationEntries = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    await Information.deleteMany(); // Warning: This will delete all existing entries!
    await Information.insertMany(seedInformation);
    console.log('Information entries have been seeded');
  } catch (error) {
    console.error('An error occurred while seeding information entries:', error);
  } finally {
    mongoose.disconnect();
  }
};

insertInformationEntries();
