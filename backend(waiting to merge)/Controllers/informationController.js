import Information from '../Models/InformationSchema.js';

export const getInformationEntries = async (req, res) => {
  try {
    const information = await Information.find();
    res.json(information);
  } catch (error) {
    res.status(500).send(error);
  }
};

export const getInformationById = async (req, res) => {
  try {
    const info = await Information.findById(req.params.id);
    if (info) {
      res.json(info);
    } else {
      res.status(404).send('Information not found');
    }
  } catch (error) {
    res.status(500).send(error);
  }
};
