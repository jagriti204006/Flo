// import React from 'react';
// import './Introduction.css';

// const Introduction = () => {
//   return (
//     <div className="introduction p-5">
//       <h1 className="text-2xl font-bold">Introduction</h1>
//       <section>
//         <h2 className="text-xl font-semibold">What is Periods/Menstruation?</h2>
//         <p>
//           Menstruation, also known as a period, is a natural biological process experienced by women and girls. It involves the shedding of the uterine lining, which occurs in a cycle of about 28 days. This process is part of the female reproductive system and signifies that a woman's body is preparing for a potential pregnancy.
//         </p>
//       </section>
//       <section>
//         <h2 className="text-xl font-semibold">Signs and Symptoms</h2>
//         <ul>
//           <li>Abdominal cramps</li>
//           <li>Bloating</li>
//           <li>Breast tenderness</li>
//           <li>Fatigue</li>
//           <li>Mood swings</li>
//           <li>Headaches</li>
//           <li>Back pain</li>
//         </ul>
//       </section>
//       <section>
//         <h2 className="text-xl font-semibold">Why are tweens getting periods early?</h2>
//         <p>
//           In recent years, there has been an observed trend of girls starting their periods at a younger age. Several factors contribute to this phenomenon, including:
//         </p>
//         <ul>
//           <li><strong>Changing Lifestyle:</strong> Increased body mass index (BMI) due to diet and reduced physical activity.</li>
//           <li><strong>Eating Habits:</strong> Consumption of processed foods high in fats and sugars.</li>
//           <li><strong>Genetics:</strong> Family history of early menstruation.</li>
//           <li><strong>Environmental Exposure:</strong> Chemicals in plastics and personal care products affecting hormonal balance.</li>
//           <li><strong>Stress and Psychological Factors:</strong> Higher stress levels can influence hormonal changes and early puberty.</li>
//         </ul>
//       </section>
//       <section>
//         <h2 className="text-xl font-semibold">Breaking the Taboos</h2>
//         <p>
//           Menstruation is a normal and natural part of life, yet many cultures still view it as a taboo subject. It's important to break these taboos and foster open, positive conversations about periods. Here are a few reasons why:
//         </p>
//         <ul>
//           <li>Menstruation is a sign of health and fertility.</li>
//           <li>Talking openly can help reduce the stigma and shame associated with periods.</li>
//           <li>Sharing stories and experiences can provide support and education for young girls and women.</li>
//         </ul>
//         <p>
//           For example, in some cultures, girls are celebrated when they get their first period, recognizing this as a rite of passage into womanhood. Sharing positive stories like these can help change the narrative around menstruation.
//         </p>
//       </section>
//     </div>
//   );
// };

// export default Introduction;






// 









// IntroductionPage.tsx

import React from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <div className="introduction-page">
      <div className="intro1">
      <div className="hero-section">
        {/* <h1>What is Periods?</h1> */}
      </div>
      </div>

      <section className="content-section">
        <h2>What is Periods/Menstruation?</h2>
        <p>
          Menstruation, also known as a period, is a natural biological process experienced by women and girls. It involves the shedding of the uterine lining, which occurs in a cycle of about 28 days. This process is part of the female reproductive system and signifies that a woman's body is preparing for a potential pregnancy.
        </p>
      </section>

      <section className="placard-section">
        <h2>Signs and Symptoms</h2>
        <div className="placard-container">
          {['Abdominal cramps', 'Bloating', 'Breast tenderness', 'Fatigue', 'Mood swings', 'Headaches', 'Back pain'].map((symptom, index) => (
            <div key={index} className="placard">
              {symptom}
            </div>
          ))}
        </div>
      </section>

   


      <section className="content-section">
        <h2>Why are tweens getting periods early?</h2>
        <p>
          In recent years, there has been an observed trend of girls starting their periods at a younger age. Several factors contribute to this phenomenon, including:
        </p>
        <ul>
          <li>Changing Lifestyle: Increased body mass index (BMI) due to diet and reduced physical activity.</li>
          <li>Eating Habits: Consumption of processed foods high in fats and sugars.</li>
          <li>Genetics: Family history of early menstruation.</li>
          <li>Environmental Exposure: Chemicals in plastics and personal care products affecting hormonal balance.</li>
          <li>Stress and Psychological Factors: Higher stress levels can influence hormonal changes and early puberty.</li>
        </ul>
      </section>

      <section className="carousel-section">
        <h2>Breaking the Taboos</h2>
        <div className="carousel">
          <div className="carousel-item">
            <p>Menstruation is a normal and natural part of life, yet many cultures still view it as a taboo subject.</p>
          </div>
          <div className="carousel-item">
            <p>It's important to break these taboos and foster open, positive conversations about periods.</p>
          </div>
          <div className="carousel-item">
            <p>Menstruation is a sign of health and fertility.</p>
          </div>
          <div className="carousel-item">
            <p>Talking openly can help reduce the stigma and shame associated with periods.</p>
          </div>
          <div className="carousel-item">
            <p>Sharing stories and experiences can provide support and education for young girls and women.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Introduction;