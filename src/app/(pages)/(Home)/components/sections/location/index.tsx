'use client';

import { useEffect, useState } from 'react';
import './styles.scss';

export const LocationSection = () => {
  const [selectedClinic, setSelectedClinic] = useState(0);

  const clinics = [
    {
      name: 'Ribeirão Preto',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3720.3889835110617!2d-47.81197022462438!3d-21.176701178339215!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9befbeac0a8d9%3A0x8d14b439914bd93a!2sR.%20S%C3%A3o%20Sebasti%C3%A3o%2C%20614%20-%20Centro%2C%20Ribeir%C3%A3o%20Preto%20-%20SP%2C%2014015-040!5e0!3m2!1spt-BR!2sbr!4v1741891813471!5m2!1spt-BR!2sbr"
    },
    {
      name: 'Franca',
      map: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3736.2463573572704!2d-47.40599312445423!3d-20.53709868099205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a631beb40a59%3A0xf12b89598f2c7167!2sR.%20Gen.%20Telles%2C%201259%20-%20Centro%2C%20Franca%20-%20SP%2C%2014405-090!5e0!3m2!1spt-BR!2sbr!4v1760361899763!5m2!1spt-BR!2sbr"
    }
  ]
  
  return (
    <section id="Location">
      <div>
        <h2>Nossas Clinícas</h2>
      </div>
      <section >
        <ul>
          {clinics.map((clinic, index) => (
            <li 
              key={index}
              className={selectedClinic === index ? 'active' : ''}
              onClick={() => setSelectedClinic(index)}
            >
              {clinic.name}
            </li>
          ))}
        </ul>
        <iframe
          src={clinics[selectedClinic].map}
          width={'100%'}
          height="450"
          style={{ border: 0, borderRadius: 10 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </section>
  );
};
