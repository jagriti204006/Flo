import React from 'react';
import './Introduction.css';

const Introduction: React.FC = () => {
  return (
    <div className="entire-body">
    <div className="first-screen">

      </div>
    <div className="introduction-page">

      <div className="hero-section">
        <h1>WHAT ARE PERIODS ?</h1>
      </div>

      <section className="content-section">
        <div className="content-text">
          {/* <h2></h2> */}
          <p>
            Menstruation, also known as a period, is a natural biological process experienced by women and girls. It involves the shedding of the uterine lining, which occurs in a cycle of about 28 days. This process is part of the female reproductive system and signifies that a woman's body is preparing for a potential pregnancy.
          </p>
        </div>
        <div className="content-image1"></div>
      </section>

      <section className="placard-section">
        <h2 className="rounded-heading">Signs & <br></br> Symptoms</h2>
        <div className="placard-container">
          {['Cramps', 'Bloating', 'Tenderness', 'Fatigue', 'Mood', 'Headaches', 'Nausea', 'Vomiting', 'Constipation', 'Cramps'].map((symptom, index) => (
            <div key={index} className="placard">
              {symptom}
            </div>
          ))}
        </div>
      </section>

      <section className="content-section">
        <div className="content-image2"></div>
        <div className="content-text">
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
        </div>
      </section>




      <h2 className='myH2'>Breaking the Taboos</h2>
      <div className="image-break"></div>
      <section className="carousel-section">
      
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
    </div></div>
  );
};

export default Introduction;