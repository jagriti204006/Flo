
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/quiz', { useNewUrlParser: true, useUnifiedTopology: true });

const quizResultSchema = new mongoose.Schema({
  userId: String,
  answers: Object,
});

const QuizResult = mongoose.model('QuizResult', quizResultSchema);

app.post('/api/saveQuizResults', async (req, res) => {
  const { userId, answers } = req.body;

  try {
    const existingResult = await QuizResult.findOne({ userId });
    if (existingResult) {
      return res.status(400).json({ message: 'Quiz already completed' });
    }

    const newResult = new QuizResult({ userId, answers });
    await newResult.save();

    res.status(200).json({ message: 'Quiz results saved successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving quiz results', error });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});