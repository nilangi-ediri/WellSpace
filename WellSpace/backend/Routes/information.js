import express from 'express';
const router = express.Router();

// Mock data
const information = [
  { id: 1, title: "About Us", content: "This is the about us page content." },
  { id: 2, title: "Contact", content: "Contact us at info@example.com." }
];

// GET all information entries
router.get('/', (req, res) => {
  res.json(information);
});

// GET a specific information entry by ID
router.get('/:id', (req, res) => {
  const info = information.find(i => i.id.toString() === req.params.id);
  if (info) {
    res.json(info);
  } else {
    res.status(404).send('Information not found');
  }
});

export default router;
