import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Quiz from './Quiz';
import QuizSummary from './QuizSummary';
import './styles.css';

const Information = ({ userId }: { userId: string }) => {
  const [answers, setAnswers] = React.useState<{ [key: string]: string }>({});

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Information</h1>
      <p className="mb-4">FAQs</p>
      <p className="mb-4">Talk to expert/Anonymous talk with</p>
      <Routes>
        <Route path="quiz" element={<Quiz userId={userId} />} />
        <Route path="quiz/summary" element={<QuizSummary answers={answers} />} />
      </Routes>
    </div>
  );
};

export default Information;