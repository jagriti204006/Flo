import React from 'react';
import { useNavigate } from 'react-router-dom';

const QuizSummary = ({ answers }: { answers: { [key: string]: string } }) => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // Uncomment and implement the following line to save the answers to the database
    // saveQuizResultsToDatabase(userId, answers);
    alert('Thank you for completing the quiz!');
    navigate('/');
  };

  return (
    <div className="quiz-container p-5">
      <h1 className="text-2xl font-bold mb-4">Quiz Summary</h1>
      <div className="mb-4">
        {Object.keys(answers).map((question, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">{question}</p>
            <p>{answers[question]}</p>
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Submit
      </button>
    </div>
  );
};

// Uncomment and implement this function to save the quiz results to the database
/*
const saveQuizResultsToDatabase = async (userId: string, answers: { [key: string]: string }) => {
  try {
    const response = await fetch('/api/saveQuizResults', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userId, answers }),
    });
    if (!response.ok) {
      throw new Error('Failed to save quiz results');
    }
    console.log('Quiz results saved successfully');
  } catch (error) {
    console.error('Error saving quiz results:', error);
  }
};
*/

export default QuizSummary;