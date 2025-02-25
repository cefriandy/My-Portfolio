import React from 'react';
import './Experiences.css';

const experiences = [
    {
      year: '2022',
      title: 'Software Engineer',
      company: 'Tech Solutions Inc.',
      description: [
        'Developed and maintained web applications using React and Node.js.',
        'Collaborated with cross-functional teams to deliver high-quality software solutions.',
        'Implemented new features based on user feedback and requirements.'
      ],
    },
    {
      year: '2021',
      title: 'Frontend Developer',
      company: 'Creative Minds',
      description: [
        'Designed and implemented user interfaces for various web projects.',
        'Worked closely with designers to create responsive and visually appealing websites.',
        'Optimized web applications for maximum speed and scalability.'
      ],
    }
  ];
  
  const Experiences = () => {
    return (
      <div className="experiences">
        <div className="h2">Experience</div>
        {experiences.map((exp, index) => (
          <div key={index} className="experience">
            <div className="details">
              <h3 className="title">{exp.title}</h3>
              <h4 className="company">{exp.company}</h4>
              <ul className="description">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="year">{exp.year}</div>
          </div>
        ))}
      </div>
    );
  }
  
  export default Experiences;