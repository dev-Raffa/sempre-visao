'use client';

import { TeamCard, TeamCardArgs } from '../../cards/team';
import './styles.scss';
import Camila from '../../../../../../../public/images/WhatsApp Image 2025-03-13 at 14.50.26.jpeg';
import Breno from '../../../../../../../public/images/WhatsApp Image 2025-03-13 at 17.42.56.jpg';
import Gabriel from '../../../../../../../public/images/WhatsApp Image 2025-03-16 at 08.41.12_d5476c23.jpg';
import { useRef, useState } from 'react';

const team: TeamCardArgs[] = [
  {
    name: 'Dr. Breno Reis Almeida ',
    crm: '180.109',
    imageUrl: Breno.src
  },
  {
    name: 'Dra. Camila Cardoso S. B. Alcântara ',
    crm: '174.084',
    imageUrl: Camila.src
  },
  {
    name: 'Dr. Gabriel Ricci Pupo',
    crm: '223.337',
    imageUrl: Gabriel.src
  }
  /*
    {
        name:'Dra. Ana Carolina Hatsuia Ferreira',
        crm: '242.930',
        imageUrl: ''
    },
    {
        name:'Dr. Gabriel Ricci Pupo',
        crm: '223.337',
        imageUrl: ''
    },
    {
        name:'Dr. Emanuel Ferreira Goulart',
        crm: '254.478',
        imageUrl: ''
    }
    */
];

export const TeamSection = () => {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (carouselRef.current?.offsetLeft || 0));
    setScrollLeft(carouselRef.current?.scrollLeft || 0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; // velocidade de arraste
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleMouseUp = () => setIsDragging(false);
  const handleMouseLeave = () => setIsDragging(false);

  return (
    <section id="Team">
      <div>
        <h2>Conheça o nosso corpo clínico</h2>
      </div>
      <ul
        ref={carouselRef}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
      >
        {team.map((member, index) => {
          return (
            <TeamCard
              key={`team-member-${index}`}
              name={member.name}
              crm={member.crm}
              imageUrl={member.imageUrl}
            />
          );
        })}
      </ul>
    </section>
  );
};
