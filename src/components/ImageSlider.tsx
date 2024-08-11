import React, { useState } from 'react';
import Image from 'next/image';
import './ImageSlider.css';

const images = [
  { src: '/main/1.jpg', alt: 'Portfolio 1' },
  { src: '/main/2.jpg', alt: 'Portfolio 2' },
  { src: '/main/3.jpg', alt: 'Portfolio 3' },
  { src: '/main/4.jpg', alt: 'Portfolio 4' },
  { src: '/main/5.jpg', alt: 'Portfolio 5' },
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
    <div className="slider">
      <button className="prev" onClick={prevSlide}>‹</button>
      <div className="image-container">
        <Image 
          src={images[currentIndex].src} 
          alt={images[currentIndex].alt} 
          layout="fill"  /* This allows the image to fill the container */
          objectFit="contain"  /* Choose between "cover", "contain", etc. */
        />
      </div>
      <button className="next" onClick={nextSlide}>›</button>
    </div>
  );
};

export default ImageSlider;
