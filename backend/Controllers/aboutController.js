import About from "../Models/AboutSchema.js";

// Get About Us information
export const getAboutInfo = async (req, res) => {
    try {
        const aboutInfo = await About.findOne();
        res.status(200).json(aboutInfo);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update About Us information
export const updateAboutInfo = async (req, res) => {
    try {
        const updatedAbout = await About.findOneAndUpdate({}, req.body, { new: true });
        res.status(200).json(updatedAbout);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
