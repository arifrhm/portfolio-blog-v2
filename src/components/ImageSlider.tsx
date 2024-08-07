import React, { useState } from 'react';
import Image from 'next/image';
import './ImageSlider.css'; // Import CSS file for styling

const images = [
  { src: '/main/1.jpeg', alt: 'Portfolio 1' },
  { src: '/main/2.jpeg', alt: 'Portfolio 2' },
  { src: '/main/3.jpeg', alt: 'Portfolio 3' },
  { src: '/main/4.jpeg', alt: 'Portfolio 4' },
  { src: '/main/5.jpeg', alt: 'Portfolio 5' },
];

const ImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="slider mb-20">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="image-container">
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          layout="fill"
          objectFit="cover"
        />
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ImageSlider;
