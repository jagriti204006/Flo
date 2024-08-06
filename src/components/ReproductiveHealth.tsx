import React from 'react';
import './ReproductiveHealth.css';

const ReproductiveHealth = () => {
  return (
    <div className="reproductive-health">
      <h1 className="text-2xl font-bold">Reproductive Health</h1>

      <section>
        <div className="section-content">
          <h2 className="text-xl font-semibold">Cleanliness</h2>
          <p>
            Maintaining cleanliness is crucial for reproductive health. This includes:
          </p>
          <ul>
            <li className="fancy-bullet">Regular washing of the genital area with mild soap and water.</li>
            <li className="fancy-bullet">Changing sanitary products frequently during menstruation.</li>
            <li className="fancy-bullet">Wearing clean, breathable underwear to prevent infections.</li>
            <li className="fancy-bullet">Avoiding the use of harsh chemicals or douches that can disrupt the natural balance.</li>
          </ul>
        </div>
        <div className="section-image">Image Placeholder</div>
      </section>

      <section>
        <div className="section-content">
          <h2 className="text-xl font-semibold">Hygiene</h2>
          <p>
            Proper hygiene practices are essential to prevent infections and maintain overall reproductive health. Key practices include:
          </p>
          <div className="carousel">
            <div className="carousel-item">Wash hands</div>
            <div className="carousel-item">Keep area dry</div>
            <div className="carousel-item">Practice safe sex</div>
            <div className="carousel-item">Regular check-ups</div>
          </div>
        </div>
        <div className="section-image">Image Placeholder</div>
      </section>

      <section>
        <div className="section-content">
          <h2 className="text-xl font-semibold">Nutrition</h2>
          <p>
            A balanced diet plays a significant role in maintaining reproductive health. Important nutrients include:
          </p>
          <div className="playcard">
            <h3>Iron</h3>
            <p>To compensate for blood loss during menstruation.</p>
          </div>
          <div className="playcard">
            <h3>Calcium and Vitamin D</h3>
            <p>For bone health.</p>
          </div>
          <div className="playcard">
            <h3>Folic Acid</h3>
            <p>Essential for reproductive health and pregnancy.</p>
          </div>
          <div className="playcard">
            <h3>Healthy fats</h3>
            <p>Such as omega-3 fatty acids for hormone regulation.</p>
          </div>
        </div>
        <div className="section-image">Image Placeholder</div>
      </section>

      <section>
        <div className="section-content">
          <h2 className="text-xl font-semibold">Exercise</h2>
          <p>
            Regular physical activity is beneficial for reproductive health. Benefits include:
          </p>
          <ul>
            <li className="fancy-bullet">Improving blood circulation and reducing menstrual cramps.</li>
            <li className="fancy-bullet">Helping to maintain a healthy weight, which is crucial for hormone balance.</li>
            <li className="fancy-bullet">Reducing stress levels and improving mood.</li>
          </ul>
        </div>
        <div className="section-image">Image Placeholder</div>
      </section>

      <section>
        <div className="section-content">
          <h2 className="text-xl font-semibold">Mental Health</h2>
          <p>
            Mental health is closely linked to reproductive health. Tips for maintaining good mental health include:
          </p>
          <ul>
            <li className="fancy-bullet">Managing stress through relaxation techniques like meditation and yoga.</li>
            <li className="fancy-bullet">Seeking support from friends, family, or mental health professionals when needed.</li>
            <li className="fancy-bullet">Maintaining a positive body image and self-esteem.</li>
          </ul>
        </div>
        <div className="section-image">Image Placeholder</div>
      </section>
    </div>
  );
};

export default ReproductiveHealth;