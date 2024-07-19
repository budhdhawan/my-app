import fetch from 'node-fetch';
import { Router } from 'express';

const router = Router();

router.get('/', async (req, res) => {
  const { amount, difficulty } = req.query;
  try {
    const response = await fetch(`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching quiz questions' });
  }
});

export default router;
