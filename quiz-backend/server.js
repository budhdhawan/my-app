import express from 'express';
import cors from 'cors'; 
import quizRoutes from './routes/quiz.js';

const app = express();
const port = 5000;


app.use(cors());

app.use(express.json());
app.use('/api/quiz', quizRoutes);

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
