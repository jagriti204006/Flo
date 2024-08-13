// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const quizInfo = {
//   title: "Period Awareness Information",
//   content: `
//     Thank you for completing the quiz! Here's some important information about menstrual health:

//     1. Menstrual cramps are common but shouldn't be debilitating. If you experience severe pain, consult a doctor.
//     2. Regular exercise can help alleviate menstrual symptoms.
//     3. A balanced diet rich in fruits, vegetables, and whole grains can help manage period symptoms.
//     4. Tracking your cycle can help you prepare for your period and understand your body better.
//     5. Change pads or tampons every 4-6 hours to maintain hygiene and prevent infections.
//     6. Stay hydrated during your period to help with bloating and other symptoms.
//     7. If you experience persistent, severe symptoms, always consult with a healthcare professional.
//     8. Remember, every person's experience with menstruation is unique. What's normal for you may be different for others.
//   `
// };

// const QuizSummary = ({ answers }: { answers: { [key: string]: string } }) => {
//   const navigate = useNavigate();
//   const [showInfo, setShowInfo] = useState(false);

//   const handleSubmit = async () => {
//     try {
//       await saveQuizResultsToDatabase(answers);
//       setShowInfo(true);
//     } catch (error) {
//       console.error('Error saving quiz results:', error);
//       alert('There was an error submitting your quiz. Please try again.');
//     }
//   };

//   const saveQuizResultsToDatabase = async (answers: { [key: string]: string }) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       throw new Error('No authentication token found');
//     }

//     const response = await fetch('/api/saveQuizResults', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({ answers }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to save quiz results');
//     }

//     console.log('Quiz results saved successfully');
//   };

//   if (showInfo) {
//     return (
//       <div className="quiz-container info-container">
//         <h2>{quizInfo.title}</h2>
//         <p>{quizInfo.content}</p>
//         <button onClick={() => navigate('/')} className="home-button">
//           Return to Home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-container">
//       <h1 className="quiz-title">Quiz Summary</h1>
//       <div className="summary-container">
//         {Object.entries(answers).map(([question, answer], index) => (
//           <div key={index} className="summary-item">
//             <p className="summary-question">{question}</p>
//             <p className="summary-answer">{answer}</p>
//           </div>
//         ))}
//       </div>
//       <button
//         onClick={handleSubmit}
//         className="submit-button"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default QuizSummary;

// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// interface EducationalInfo {
//   [key: string]: string;
// }

// const educationalInfo: EducationalInfo = {
//   'Do you get cramps during your periods?': 'Menstrual cramps are common, but severe pain should be discussed with a doctor. Regular exercise and a balanced diet can help alleviate cramps.',
//   'Where do you feel the most pain during your period?': 'Pain in the lower abdomen and lower back is common during periods. If you experience severe pain, consult a healthcare professional.',
//   'How would you describe the pain in your abdomen during your period?': 'Pain can vary from mild discomfort to sharp intensity. If pain interferes with daily life, consider talking to a doctor.',
//   'How do you manage period pain during physical activities like sports?': 'Light exercises and stretches can help alleviate period pain. However, listen to your body and rest if needed.',
//   'What is a common way to track your menstrual cycle?': 'Using a calendar or period tracking app is an effective way to monitor your cycle. This can help you predict your next period and understand your body better.',
//   'Which of the following is a healthy practice during your period?': 'Eating a balanced diet with plenty of fruits and vegetables is important during your period. Stay hydrated and consider iron-rich foods to replenish lost iron.',
//   'Why is it important to maintain good hygiene during your period?': 'Good hygiene during your period is crucial to prevent infections. Change your sanitary products regularly and wash your hands before and after.',
//   'How often do you change your pad or tampon?': 'It\'s recommended to change pads or tampons every 4-6 hours, or more frequently if needed. This helps prevent leaks and reduces the risk of infections.'
// };

// const QuizSummary = ({ answers }: { answers: { [key: string]: string } }) => {
//   const navigate = useNavigate();
//   const [showInfo, setShowInfo] = useState(false);
//   const [errorMessage, setErrorMessage] = useState('');

//   const handleSubmit = async () => {
//     try {
//       await saveQuizResultsToDatabase(answers);
//       setShowInfo(true);
//     } catch (error) {
//       console.error('Error saving quiz results:', error);
//       setErrorMessage('There was an error submitting your quiz. Please try again.');
//     }
//   };

//   const saveQuizResultsToDatabase = async (answers: { [key: string]: string }) => {
//     const token = localStorage.getItem('token');
//     if (!token) {
//       throw new Error('No authentication token found');
//     }

//     const response = await fetch('/api/saveQuizResults', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': `Bearer ${token}`
//       },
//       body: JSON.stringify({ answers }),
//     });

//     if (!response.ok) {
//       const errorData = await response.json();
//       throw new Error(errorData.error || 'Failed to save quiz results');
//     }

//     console.log('Quiz results saved successfully');
//   };

//   if (showInfo) {
//     return (
//       <div className="quiz-container info-container">
//         <h2>Educational Information</h2>
//         {Object.entries(answers).map(([question, answer], index) => (
//           <div key={index} className="info-item">
//             <h3>{question}</h3>
//             <p><strong>Your answer:</strong> {answer}</p>
//             <p><strong>Information:</strong> {educationalInfo[question]}</p>
//           </div>
//         ))}
//         <button onClick={() => navigate('/')} className="home-button">
//           Return to Home
//         </button>
//       </div>
//     );
//   }

//   return (
//     <div className="quiz-container">
//       <h1 className="quiz-title">Quiz Summary</h1>
//       <div className="summary-container">
//         {Object.entries(answers).map(([question, answer], index) => (
//           <div key={index} className="summary-item">
//             <p className="summary-question">{question}</p>
//             <p className="summary-answer">{answer}</p>
//           </div>
//         ))}
//       </div>
//       {errorMessage && <p className="error-message">{errorMessage}</p>}
//       <button
//         onClick={handleSubmit}
//         className="submit-button"
//       >
//         Submit
//       </button>
//     </div>
//   );
// };

// export default QuizSummary;


import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface EducationalInfo {
  [key: string]: string;
}

const educationalInfo: EducationalInfo = {
  'Do you get cramps during your periods?': 'Menstrual cramps are common, but severe pain should be discussed with a doctor. Regular exercise and a balanced diet can help alleviate cramps.',
  'Where do you feel the most pain during your period?': 'Pain in the lower abdomen and lower back is common during periods. If you experience severe pain, consult a healthcare professional.',
  'How would you describe the pain in your abdomen during your period?': 'Pain can vary from mild discomfort to sharp intensity. If pain interferes with daily life, consider talking to a doctor.',
  'How do you manage period pain during physical activities like sports?': 'Light exercises and stretches can help alleviate period pain. However, listen to your body and rest if needed.',
  'What is a common way to track your menstrual cycle?': 'Using a calendar or period tracking app is an effective way to monitor your cycle. This can help you predict your next period and understand your body better.',
  'Which of the following is a healthy practice during your period?': 'Eating a balanced diet with plenty of fruits and vegetables is important during your period. Stay hydrated and consider iron-rich foods to replenish lost iron.',
  'Why is it important to maintain good hygiene during your period?': 'Good hygiene during your period is crucial to prevent infections. Change your sanitary products regularly and wash your hands before and after.',
  'How often do you change your pad or tampon?': 'It\'s recommended to change pads or tampons every 4-6 hours, or more frequently if needed. This helps prevent leaks and reduces the risk of infections.'
};

const QuizSummary = ({ answers }: { answers: { [key: string]: string } }) => {
  const navigate = useNavigate();
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = () => {
    setShowInfo(true);
  };

  if (showInfo) {
    return (
      <div className="quiz-container info-container">
        <h2>Educational Information</h2>
        {Object.entries(answers).map(([question, answer], index) => (
          <div key={index} className="info-item">
            <h3>{question}</h3>
            <p><strong>Your answer:</strong> {answer}</p>
            <p><strong>Information:</strong> {educationalInfo[question]}</p>
          </div>
        ))}
        <button onClick={() => navigate('/')} className="home-button">
          Return to Home
        </button>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h1 className="quiz-title">Quiz Summary</h1>
      <div className="summary-container">
        {Object.entries(answers).map(([question, answer], index) => (
          <div key={index} className="summary-item">
            <p className="summary-question">{question}</p>
            <p className="summary-answer">{answer}</p>
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} className="submit-button">
        Submit
      </button>
    </div>
  );
};

export default QuizSummary;
