// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';

// const questions = [
  
//   {
//     question: 'Do you get cramps during your periods?',
//     options: ['Yes, every time', 'Sometimes', 'Rarely', 'Never'],
//   },
//   {
//     question: 'Where do you feel the most pain during your period?',
//     options: ['Lower abdomen', 'Lower back', 'Legs', 'Head'],
//   },
//   {
//     question: 'Do your legs feel sore during your period?',
//     options: ['Yes, they feel very sore', 'Sometimes they feel sore', 'Rarely', 'Never'],
//   },
//   {
//     question: 'How would you describe the pain in your abdomen during your period?',
//     options: ['Sharp and intense', 'Dull and aching', 'Mild discomfort', 'No pain at all'],
//   },
//   {
//     question: 'If you feel cramps at school, what do you usually do?',
//     options: ['Tell a teacher or school nurse', 'Take a pain reliever', 'Rest or lie down', 'Try to ignore it and continue with classes'],
//   },
//   {
//     question: 'What would you do if you started your period unexpectedly while at a friend’s house?',
//     options: ['Ask your friend or their parent for a pad or tampon', 'Call your parent or guardian to bring supplies', 'Use toilet paper as a temporary solution', 'Go home immediately'],
//   },
//   {
//     question: 'How do you manage period pain during physical activities like sports?',
//     options: ['Avoid physical activities during periods', 'Do light exercises or stretches', 'Take pain relievers', 'Continue with regular activities despite the pain'],
//   },
//   {
//     question: 'If you experience mood swings during your period, how do you handle it?',
//     options: ['Talk to a friend or family member', 'Spend time doing something you enjoy', 'Practice relaxation techniques like deep breathing', 'Try to ignore the mood swings'],
//   },
//   {
//     question: 'What is a common way to track your menstrual cycle?',
//     options: ['Using a calendar or period tracking app', 'Guessing the date each month', 'Relying on physical symptoms alone', 'Asking a friend when they think it will happen'],
//   },
//   {
//     question: 'Which of the following is a healthy practice during your period?',
//     options: ['Eating a balanced diet with plenty of fruits and vegetables', 'Skipping meals to avoid cramps', 'Avoiding all physical activity', 'Drinking less water to reduce bloating'],
//   },
//   {
//     question: 'Why is it important to maintain good hygiene during your period?',
//     options: ['To prevent infections', 'To reduce cramps', 'To stop the period from lasting too long', 'To make periods less painful'],
//   },
//   {
//     question: 'Which product do you prefer to use during your period?',
//     options: ['Pads', 'Tampons', 'Menstrual cups', 'Other'],
//   },
//   {
//     question: 'How often do you change your pad or tampon?',
//     options: ['Every 2-4 hours', 'Every 4-6 hours', 'Every 6-8 hours', 'Only when it feels full'],
//   },
// ];

// const Quiz = ({ userId }: { userId: string }) => {
//   const [answers, setAnswers] = useState<{ [key: string]: string }>({});
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const completed = localStorage.getItem(`quizCompleted-${userId}`);
//     if (completed) {
//       navigate('/quiz/summary');
//     }
//   }, [userId, navigate]);

//   const handleAnswerChange = (answer: string) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questions[currentQuestion].question]: answer,
//     }));
//   };

//   const handleNext = () => {
//     if (currentQuestion < questions.length - 1) {
//       setCurrentQuestion(currentQuestion + 1);
//     } else {
//       localStorage.setItem(`quizCompleted-${userId}`, 'true');
//       // Uncomment and implement the following line to save the answers to the database
//       // saveQuizResultsToDatabase(userId, answers);
//       navigate('/quiz/summary');
//     }
//   };

//   const handleSkip = () => {
//     handleNext();
//   };

//   return (
//     <div className="quiz-container p-5">
//       <h1 className="text-2xl font-bold mb-4">Period Awareness Quiz</h1>
//       <div className="question mb-4">
//         <p className="font-semibold">{questions[currentQuestion].question}</p>
//         {questions[currentQuestion].options.map((option, idx) => (
//           <label key={idx} className="block">
//             <input
//               type="radio"
//               name={`question-${currentQuestion}`}
//               value={option}
//               checked={answers[questions[currentQuestion].question] === option}
//               onChange={() => handleAnswerChange(option)}
//               className="mr-2"
//             />
//             {option}
//           </label>
//         ))}
//       </div>
//       <div className="flex justify-between mt-4">
//         <button
//           onClick={handleSkip}
//           className="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-700"
//         >
//           Skip
//         </button>
//         <button
//           onClick={handleNext}
//           className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
//         >
//           Next
//         </button>
//       </div>
//     </div>
//   );
// };








import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const questions = [
  
  {
    question: 'Do you get cramps during your periods?',
    options: ['Yes, every time', 'Sometimes', 'Rarely', 'Never'],
  },
  {
    question: 'Where do you feel the most pain during your period?',
    options: ['Lower abdomen', 'Lower back', 'Legs', 'Head'],
  },
  {
    question: 'Do your legs feel sore during your period?',
    options: ['Yes, they feel very sore', 'Sometimes they feel sore', 'Rarely', 'Never'],
  },
  {
    question: 'How would you describe the pain in your abdomen during your period?',
    options: ['Sharp and intense', 'Dull and aching', 'Mild discomfort', 'No pain at all'],
  },
  {
    question: 'If you feel cramps at school, what do you usually do?',
    options: ['Tell a teacher or school nurse', 'Take a pain reliever', 'Rest or lie down', 'Try to ignore it and continue with classes'],
  },
  {
    question: 'What would you do if you started your period unexpectedly while at a friend’s house?',
    options: ['Ask your friend or their parent for a pad or tampon', 'Call your parent or guardian to bring supplies', 'Use toilet paper as a temporary solution', 'Go home immediately'],
  },
  {
    question: 'How do you manage period pain during physical activities like sports?',
    options: ['Avoid physical activities during periods', 'Do light exercises or stretches', 'Take pain relievers', 'Continue with regular activities despite the pain'],
  },
  {
    question: 'If you experience mood swings during your period, how do you handle it?',
    options: ['Talk to a friend or family member', 'Spend time doing something you enjoy', 'Practice relaxation techniques like deep breathing', 'Try to ignore the mood swings'],
  },
  {
    question: 'What is a common way to track your menstrual cycle?',
    options: ['Using a calendar or period tracking app', 'Guessing the date each month', 'Relying on physical symptoms alone', 'Asking a friend when they think it will happen'],
  },
  {
    question: 'Which of the following is a healthy practice during your period?',
    options: ['Eating a balanced diet with plenty of fruits and vegetables', 'Skipping meals to avoid cramps', 'Avoiding all physical activity', 'Drinking less water to reduce bloating'],
  },
  {
    question: 'Why is it important to maintain good hygiene during your period?',
    options: ['To prevent infections', 'To reduce cramps', 'To stop the period from lasting too long', 'To make periods less painful'],
  },
  {
    question: 'Which product do you prefer to use during your period?',
    options: ['Pads', 'Tampons', 'Menstrual cups', 'Other'],
  },
  {
    question: 'How often do you change your pad or tampon?',
    options: ['Every 2-4 hours', 'Every 4-6 hours', 'Every 6-8 hours', 'Only when it feels full'],
  },
];

const Quiz = ({ userId }: { userId: string }) => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const navigate = useNavigate();

  const handleStart = () => {
    setStarted(true);
  };

  const handleAnswerChange = (answer: string) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questions[currentQuestion].question]: answer,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      localStorage.setItem(`quizCompleted-${userId}`, 'true');
      // Uncomment and implement the following line to save the answers to the database
      // saveQuizResultsToDatabase(userId, answers);
      navigate('/quiz/summary');
    }
  };

  if (!started) {
    return (
      <div className="quiz-container">
        <button onClick={handleStart} className="start-button">
          Start Quiz
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Period Awareness Quiz</h1>
      <div className="question-container">
        <p className="question">{questions[currentQuestion].question}</p>
        <div className="options-container">
          {questions[currentQuestion].options.map((option, idx) => (
            <label key={idx} className="option">
              <input
                type="radio"
                name={`question-${currentQuestion}`}
                value={option}
                checked={answers[questions[currentQuestion].question] === option}
                onChange={() => handleAnswerChange(option)}
              />
              <span className="option-text">{option}</span>
            </label>
          ))}
        </div>
      </div>
      <button onClick={handleNext} className="next-button">
        Next Question
      </button>
    </div>
  );
};

// export default Quiz;

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

export default Quiz;