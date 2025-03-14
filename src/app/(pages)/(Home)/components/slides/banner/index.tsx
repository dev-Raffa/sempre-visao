'use client'

import React, { useState, useEffect } from 'react';
import image1 from "../../../../../../../public/images/Banner-Site-Sempre-Visão_01Prancheta-1.png"
import image2 from "../../../../../../../public/images/Banner-Site-Sempre-Visão_02Prancheta-1.png"
import Image from 'next/image';
import './styles.scss'


export const CarouselBanner = () => {
 const images = [image1, image2]
 const [currentIndex, setCurrentIndex] = useState(0);
const [nextIndex, setNextIndex] = useState(1);
  const [transition, setTransition] = useState(false);
 

  useEffect(() => {
    const interval = setInterval(() => {
      setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransition(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        setTransition(false);
      }, 500); // Duração da transição (500ms)
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  const goToPrevious = () => {
    setNextIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
      setTransition(false);
    }, 500);
  };

  const goToNext = () => {
    setNextIndex((prevIndex) => (prevIndex + 1) % images.length);
    setTransition(true);
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      setTransition(false);
    }, 500);
  };

  return (
    <div className="carousel">
      <figure>
        <Image  className={`current ${transition ? 'fade-out' : ''}`} src={images[currentIndex]} alt={`Imagem ${currentIndex + 1}`} fill />
      </figure>
    </div>
  );
};
